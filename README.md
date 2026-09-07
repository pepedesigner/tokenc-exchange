# Aether DEX (https://aetherdex.io/)

Aether 是去中心化 AI 算力与推理积分现货交易平台（包含买家端与卖家/质押端），支持一站式 API 接入、实时订单簿流动性、闲置 Key 变现质押与 $AETHER 持币分红体系。

---

## 🚀 快速启动

你可以通过以下任一方式启动本地服务器：

```bash
# 方式 1: 直接使用 Python 运行（推荐，支持干净路由与 Next.js Image 本地解码）
python3 serve.py 3001

# 方式 2: 使用 npm / pnpm
pnpm start
# 或
npm start
```

启动后在浏览器打开：**http://localhost:3001**

---

## 🌐 包含的页面与路由

| 路由路径 | 页面描述 |
| :--- | :--- |
| **`/`** | **买家端主页**（AI 模型折扣价格表、实时订单薄 Liquidity Book、最近购买记录、两行代码接入指南、常见问题 FAQ） |
| **`/account`** | **买家账户中心**（API Key 管理、充值与用量统计） |
| **`/sell`** | **卖家端主页**（闲置算力/Key 质押变现介绍、四行接入指南） |
| **`/supply`** | **供钥入口**（质押 API Key、设置保底底价、提取算力收益） |
| **`/dashboard`** | **卖家/持币数据看板**（实时成交率、收益统计、在押 Key 状态） |
| **`/holders`** | **持币者分红说明**（$AETHER Token 收益分配体系） |
| **`/points`** | **积分与奖励系统**（流动性提供与交易量积分细则） |
| **`/jobs`** | **任务队列**（验证与计算节点任务执行队列） |
| **`/leaderboard`** | **全网积分排行榜**（Top 供钥者、成交量排行） |
| **`/mcp`** | **MCP 协议集成**（Model Context Protocol 服务端配置与调用标准） |

---

## 📁 目录结构

```
Token DEX/
├── pages/                   # 全部 10 个独立页面的 HTML 文件
│   ├── index.html           # 买家主页
│   ├── account.html         # 买家账户中心
│   ├── sell.html            # 卖家主页
│   ├── supply.html          # 供钥与质押
│   ├── dashboard.html       # 卖家看板
│   ├── holders.html         # 持币分配
│   ├── points.html          # 积分系统
│   ├── jobs.html            # 任务队列
│   ├── leaderboard.html     # 排行榜
│   └── mcp.html             # MCP 文档
├── _next/                   # Next.js 静态文件
│   └── static/immutable/
│       ├── chunks/          # 200 个 JS 模块及完整的 Tailwind CSS 样式表 (2-mt4w2b6mmst.css)
│       └── media/           # 18 款字体（Geist、DM Sans、Newsreader）与高精度 3D 柱体
├── public/                  # 公共资源（钱包 SVG、徽标、favicon、OG 图等）
├── wallets/                 # Web3 钱包图标 (MetaMask, Coinbase, Rabby, WalletConnect)
├── serve.py                 # 本地多路由与 Next.js Image 仿真服务
├── package.json             # 项目元数据与快捷脚本
└── README.md                # 项目文档
```

---

## 🛠 技术细节说明

1. **单域统一架构**：包含买家端与卖家端完整子系统，所有跳转统一聚合于本地单域路由（例如 `/dashboard`、`/sell`、`/supply`），无需跨域跳转即可无缝体验全部功能。
2. **Next.js Image 解码**：`serve.py` 内置了对 `/_next/image?url=...` 路由的处理，自动将 URL 参数解析并返回本地高分辨率 PNG/SVG 资源。
3. **完全离线可用**：所有客户端 JS 模块、CSS、字体、Web3 钱包图标和 3D 资产均保存在本地，离线状态下亦可正常体验。
