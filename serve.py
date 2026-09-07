import http.server
import socketserver
import os
import sys
import json
import urllib.parse
import mimetypes

DEFAULT_PORT = 3001
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Register essential MIME types
mimetypes.add_type('font/woff2', '.woff2')
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/png', '.png')
mimetypes.add_type('image/x-icon', '.ico')

ROUTE_MAP = {
    "/": "pages/index.html",
    "/index": "pages/index.html",
    "/account": "pages/account.html",
    "/sell": "pages/sell.html",
    "/dashboard": "pages/dashboard.html",
    "/supply": "pages/supply.html",
    "/holders": "pages/holders.html",
    "/points": "pages/points.html",
    "/jobs": "pages/jobs.html",
    "/leaderboard": "pages/leaderboard.html",
    "/mcp": "pages/mcp.html",
}

# Complete Mock User for all Aether DEX sub-systems
MOCK_USER = {
    "account": {
        "balanceMicroUsd": "150000000",   # $150.00
        "spentMicroUsd": "35000000",      # $35.00
        "purchasedMicroUsd": "250000000", # $250.00
        "accruedMicroUsd": "45000000",    # $45.00
        "listedMicroUsd": "50000000",     # $50.00
        "soldMicroUsd": "35000000",       # $35.00
        "claimedMicroUsd": "10000000",    # $10.00
        "listableMicroUsd": "150000000",
        "wallets": ["0x71C8360d8C8b8b3294829374028C54bA2d87eA01"]
    },
    "gatewayKey": "ae_live_7f8a9b1c2d3e4f5a6b7c8d9e01234567",
    "key": {
        "prefix": "sk-or-v1-883a4f...",
        "status": "active"
    },
    "claims": [
        {
            "id": "claim_01",
            "kind": "moved",
            "at": "2026-08-20T10:00:00Z",
            "microUsd": "10000000"
        }
    ],
    "admin": False,
    "supply": {
        "keys": [
            {
                "id": "key_or_test_1",
                "prefix": "sk-or-v1-883a4f...",
                "provider": "openrouter",
                "status": "active",
                "listingStatus": "open",
                "floorBps": 2000,
                "fillRate": 98.4,
                "totalEarnedMicroUsd": "45000000",
                "balanceMicroUsd": "25000000",
                "createdAt": "2026-08-15T10:00:00Z"
            }
        ]
    },
    "user": {
        "id": "did:privy:aether_test_user_001",
        "email": "tester@aetherdex.io",
        "address": "0x71C8360d8C8b8b3294829374028C54bA2d87eA01"
    }
}

MOCK_USAGE = {
    "days": 30,
    "totals": {
        "requests": 1420,
        "costMicroUsd": "45000000",
        "promptTokens": 2698000,
        "completionTokens": 596400,
        "avgOverheadMs": 31,
        "p95OverheadMs": 47
    },
    "daily": [
        {"day": f"2026-08-{i:02d}", "costMicroUsd": str(1200000 + i * 25000), "requests": 35 + (i % 15)}
        for i in range(10, 32)
    ] + [
        {"day": f"2026-09-{i:02d}", "costMicroUsd": str(1500000 + i * 40000), "requests": 45 + (i % 10)}
        for i in range(1, 8)
    ],
    "models": [
        {"model": "anthropic/claude-sonnet-5", "requests": 653, "costMicroUsd": "20700000", "tokens": 1501900},
        {"model": "openai/gpt-6-astra", "requests": 383, "costMicroUsd": "12150000", "tokens": 880900},
        {"model": "google/gemini-3.8-flash", "requests": 199, "costMicroUsd": "6300000", "tokens": 457700},
        {"model": "x-ai/grok-4.6", "requests": 114, "costMicroUsd": "3600000", "tokens": 262200},
        {"model": "deepseek/deepseek-v4-flash-0731", "requests": 71, "costMicroUsd": "2250000", "tokens": 163300}
    ]
}

class AetherDexHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT")
        self.send_header("Access-Control-Allow-Headers", "Authorization, Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_api(self, path, method="GET"):
        clean_path = path.split("?")[0]

        if clean_path == "/api/me":
            return self.send_json(MOCK_USER)

        if clean_path == "/api/gateway/keys":
            return self.send_json({"key": MOCK_USER["gatewayKey"], "enabled": True})

        if clean_path == "/api/gateway/usage":
            return self.send_json(MOCK_USAGE)

        if clean_path == "/api/market/purchases":
            return self.send_json({
                "purchases": [
                    {
                        "id": "pur_01",
                        "creditMicroUsd": "100000000",
                        "priceMicroUsd": "47500000",
                        "discountBps": 5250,
                        "status": "completed",
                        "fromBid": False,
                        "settledAt": "2026-09-02T14:30:00Z",
                        "createdAt": "2026-09-02T14:28:00Z"
                    },
                    {
                        "id": "pur_02",
                        "creditMicroUsd": "150000000",
                        "priceMicroUsd": "71250000",
                        "discountBps": 5250,
                        "status": "completed",
                        "fromBid": True,
                        "settledAt": "2026-08-25T10:15:00Z",
                        "createdAt": "2026-08-25T10:00:00Z"
                    }
                ]
            })

        if clean_path == "/api/market/bids":
            return self.send_json({
                "bids": [
                    {
                        "id": "bid_01",
                        "status": "open",
                        "remainingMicroUsd": "50000000",
                        "creditMicroUsd": "100000000",
                        "priceMicroUsd": "47500000",
                        "discountBps": 5250,
                        "minDiscountBps": 5250,
                        "createdAt": "2026-09-05T09:00:00Z"
                    }
                ]
            })

        if clean_path == "/api/market/book":
            return self.send_json({
                "rows": [
                    {"discountBps": 5250, "availableMicroUsd": "2500000000"},
                    {"discountBps": 4800, "availableMicroUsd": "5000000000"},
                    {"discountBps": 4500, "availableMicroUsd": "8500000000"}
                ]
            })

        if clean_path == "/api/market/listings":
            return self.send_json({
                "listings": [
                    {
                        "id": "list_01",
                        "provider": "openrouter",
                        "model": "all",
                        "discountPercent": 52.5,
                        "capUsd": 500,
                        "status": "active",
                        "filledUsd": 320.5
                    }
                ]
            })

        if clean_path == "/api/market/sales":
            return self.send_json({
                "sales": [
                    {
                        "id": "sale_01",
                        "microUsd": "320500000",
                        "payMicroUsd": "304470000",
                        "discountBps": 5250,
                        "at": "2026-09-05T08:30:00Z",
                        "payout": {
                            "status": "paid",
                            "paidAt": "2026-09-05T08:30:00Z",
                            "settledAt": "2026-09-05T08:30:00Z"
                        },
                        "createdAt": "2026-09-05T08:25:00Z"
                    }
                ],
                "totals": {
                    "count": 1,
                    "volumeMicroUsd": "320500000"
                },
                "seenAt": "2026-09-06T12:00:00Z"
            })

        if clean_path == "/api/market/recent":
            return self.send_json({
                "recent": [
                    {"model": "anthropic/claude-sonnet-5", "amountUsd": 25, "discount": 52.5, "time": "2m ago"},
                    {"model": "openai/gpt-6-astra", "amountUsd": 50, "discount": 52.5, "time": "5m ago"},
                    {"model": "google/gemini-3.8-flash", "amountUsd": 15, "discount": 52.5, "time": "12m ago"}
                ]
            })

        if clean_path == "/api/market/quote":
            return self.send_json({
                "effectiveDiscountBps": 5250,
                "amountUsd": 20,
                "savingsUsd": 10.5
            })

        if clean_path == "/api/supply/keys":
            return self.send_json({
                "keys": [
                    {
                        "id": "key_or_test_1",
                        "prefix": "sk-or-v1-9988...",
                        "provider": "openrouter",
                        "status": "active",
                        "listingStatus": "open",
                        "discountBps": 2000,
                        "capMicroUsd": "500000000",
                        "remainingMicroUsd": "250000000",
                        "reservedMicroUsd": "0",
                        "limitRemainingMicroUsd": "450000000",
                        "requests": 142,
                        "servedMicroUsd": "250000000",
                        "owedMicroUsd": "45000000",
                        "settledMicroUsd": "25000000",
                        "lastServedAt": "2026-09-07T12:00:00Z",
                        "createdAt": "2026-08-15T10:00:00Z"
                    }
                ],
                "requests": 142,
                "claimableMicroUsd": "45000000",
                "clearingMicroUsd": "0",
                "paidMicroUsd": "25000000",
                "payoutsEnabled": True,
                "terms": {
                    "minClaimUsd": 10,
                    "holdDays": 7,
                    "claimLinkHours": 48
                },
                "settlements": [
                    {
                        "id": "settle_01",
                        "status": "completed",
                        "method": "claim_link",
                        "microUsd": "25000000",
                        "createdAt": "2026-08-20T10:00:00Z"
                    }
                ]
            })

        if clean_path == "/api/supply/settlements":
            return self.send_json({
                "claimableMicroUsd": "45000000",
                "clearingMicroUsd": "0",
                "paidMicroUsd": "25000000",
                "payoutsEnabled": True,
                "terms": {
                    "minClaimUsd": 10,
                    "holdDays": 7,
                    "claimLinkHours": 48
                },
                "settlements": [
                    {
                        "id": "settle_01",
                        "status": "completed",
                        "method": "claim_link",
                        "microUsd": "25000000",
                        "createdAt": "2026-08-20T10:00:00Z"
                    }
                ]
            })

        if clean_path == "/api/supply/drafts":
            return self.send_json({"draft": None})

        if clean_path == "/api/points/me":
            return self.send_json({
                "snapshot": {
                    "season": 1,
                    "phase": "live",
                    "me": {
                        "points": 14520,
                        "rank": 3,
                        "earning": True,
                        "totalParticipants": 240
                    }
                }
            })

        if clean_path == "/api/points/leaderboard":
            return self.send_json({
                "leaders": [
                    {"rank": 1, "address": "0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", "points": 88400, "keys": 8},
                    {"rank": 2, "address": "0x1548d7a8b39f1b1665ef047b7aa135901fe146e7", "points": 42100, "keys": 4},
                    {"rank": 3, "address": "0x71C8360d8C8b8b3294829374028C54bA2d87eA01", "points": 14520, "keys": 1}
                ],
                "leaderboard": [
                    {"rank": 1, "address": "0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", "points": 88400, "keys": 8},
                    {"rank": 2, "address": "0x1548d7a8b39f1b1665ef047b7aa135901fe146e7", "points": 42100, "keys": 4},
                    {"rank": 3, "address": "0x71C8360d8C8b8b3294829374028C54bA2d87eA01", "points": 14520, "keys": 1}
                ]
            })

        if clean_path == "/api/key":
            return self.send_json({"ok": True, "refundedUsd": 0})

        # Generic success for other api actions (POST/DELETE)
        return self.send_json({"ok": True})

    def handle_request(self, is_head=False):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = parsed.query

        # Handle API routes
        if path.startswith("/api/"):
            if is_head:
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                return
            return self.handle_api(path, method="GET")

        # Handle Next.js Image Optimization route
        if path == "/_next/image":
            params = urllib.parse.parse_qs(query)
            target_url = params.get("url", [""])[0]
            if target_url:
                target_url = urllib.parse.unquote(target_url).lstrip("/")
                file_path = os.path.join(BASE_DIR, target_url)
                if not (os.path.exists(file_path) and os.path.isfile(file_path)):
                    file_path = os.path.join(BASE_DIR, "public", os.path.basename(target_url))
                
                if os.path.exists(file_path) and os.path.isfile(file_path):
                    content_type, _ = mimetypes.guess_type(file_path)
                    self.send_response(200)
                    if content_type:
                        self.send_header("Content-Type", content_type)
                    self.send_header("Content-Length", str(os.path.getsize(file_path)))
                    self.end_headers()
                    if not is_head:
                        with open(file_path, "rb") as f:
                            self.wfile.write(f.read())
                    return

        # Handle mapped routes
        clean_path = path.rstrip("/") if path != "/" else "/"
        if clean_path in ROUTE_MAP:
            target_file = os.path.join(BASE_DIR, ROUTE_MAP[clean_path])
            if os.path.exists(target_file):
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(os.path.getsize(target_file)))
                self.end_headers()
                if not is_head:
                    with open(target_file, "rb") as f:
                        self.wfile.write(f.read())
                return

        # Fallback to default static file handling
        if is_head:
            return super().do_HEAD()
        return super().do_GET()

    def do_GET(self):
        return self.handle_request(is_head=False)

    def do_HEAD(self):
        return self.handle_request(is_head=True)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/api/"):
            return self.handle_api(parsed.path, method="POST")
        self.send_response(200)
        self.end_headers()

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/api/"):
            return self.handle_api(parsed.path, method="DELETE")
        self.send_response(200)
        self.end_headers()

def get_port():
    if len(sys.argv) > 1:
        try:
            return int(sys.argv[1])
        except ValueError:
            pass
    return int(os.environ.get("PORT", DEFAULT_PORT))

def run():
    port = get_port()
    socketserver.TCPServer.allow_reuse_address = True
    for p in range(port, port + 20):
        try:
            httpd = http.server.ThreadingHTTPServer(("", p), AetherDexHandler)
            port = p
            break
        except OSError:
            continue
    else:
        print("No available port found.")
        sys.exit(1)

    print(f"==================================================")
    print(f" Aether DEX is running at http://localhost:{port}")
    print(f" Available routes:")
    for r in ROUTE_MAP:
        print(f"   http://localhost:{port}{r}")
    print(f"==================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    run()
