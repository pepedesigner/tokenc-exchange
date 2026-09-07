(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,643430,516725,e=>{"use strict";var r=e.i(1340),t=e.i(702826);t.styled.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;let n=t.styled.div`
  display: inline-block;
  vertical-align: middle;
`,i=t.styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,s=t.styled.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,a=t.styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${s}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${i} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`;e.s(["C",0,({className:e,checked:t,color:o="var(--privy-color-accent)",...l})=>(0,r.jsx)("label",{children:(0,r.jsxs)(n,{className:e,children:[(0,r.jsx)(s,{checked:t,...l}),(0,r.jsx)(a,{color:o,checked:t,children:(0,r.jsx)(i,{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})})],643430);var o=e.i(481240);let l=o.forwardRef(function({title:e,titleId:r,...t},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},t),e?o.createElement("title",{id:r},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"}))});e.s(["default",0,l],516725)},876e3,e=>{"use strict";var r=e.i(1340),t=e.i(458940);let n=(0,e.i(333980).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var i=e.i(503554),s=e.i(702826),a=e.i(492618),o=e.i(717669),l=e.i(328688),d=e.i(863979),c=e.i(982078),h=e.i(978093),x=e.i(444928);e.i(481240),e.i(252494),e.i(329723),e.i(291190),e.i(151358);let u=({error:e,allowlistConfig:s,onRetry:a,onCaptchaReset:d,onBack:u})=>{let p=((e,s)=>{if(e instanceof c.R)return{title:"Transaction failed",detail:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e.message}),(0,r.jsxs)("span",{children:[" ","Check the"," ",(0,r.jsx)(m,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:t.AlertTriangle};if(e instanceof l.P)switch(e.privyErrorCode){case l.a.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:t.AlertTriangle};case l.a.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:t.AlertTriangle};case l.a.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:t.AlertTriangle};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t.AlertTriangle}}if(e instanceof o.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:n};if(!(e instanceof l.b))return e instanceof l.c&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:t.AlertTriangle}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t.AlertTriangle};switch(e.privyErrorCode){case l.a.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:t.AlertTriangle};case l.a.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:t.AlertTriangle};case l.a.ALLOWLIST_REJECTED:return{title:s.errorTitle||"You don't have access to this app",detail:s.errorDetail||"Have you been invited?",ctaText:s.errorCtaText||"Try another account",icon:i.Lock};case l.a.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case l.a.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case l.a.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:t.AlertTriangle};case l.a.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:t.AlertTriangle};case l.a.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:t.AlertTriangle};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t.AlertTriangle}}})(e,s);return(0,r.jsx)(x.S,{title:p.title,subtitle:p.detail,icon:p.icon,onBack:u,iconVariant:"error",primaryCta:{label:p.ctaText,onClick:()=>{if(e instanceof l.b&&(e.privyErrorCode===l.a.INVALID_CAPTCHA&&d?.(),e.privyErrorCode===l.a.ALLOWLIST_REJECTED)){let e=(0,h.t)(s.errorCtaLink);if(e)return void window.open(e,"_blank","noopener,noreferrer")}a?.()},variant:"error"},watermark:!0})},p={component:()=>{let{navigate:e,data:t,lastScreen:n,currentScreen:i}=(0,d.u)(),s=(0,a.u)(),{reset:l}=(0,o.a)(),c=t?.errorModalData?.previousScreen||(n===i?void 0:n);return(0,r.jsx)(u,{error:t?.errorModalData?.error||Error(),allowlistConfig:s.allowlistConfig,onRetry:()=>{e(c||"LandingScreen",!1)},onCaptchaReset:l})}},m=s.styled.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;e.s(["ErrorScreen",0,p,"ErrorScreenView",0,u,"default",0,p],876e3)},373381,e=>{"use strict";var r=e.i(702826);let t=r.styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,n=r.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,i=r.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,s=(0,r.styled)(n)`
  padding: 20px 0;
`,a=(0,r.styled)(n)`
  gap: 16px;
`,o=r.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=r.styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;r.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let d=r.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,c=r.styled.div`
  height: 16px;
`,h=r.styled.div`
  height: 12px;
`;r.styled.div`
  position: relative;
`;let x=r.styled.div`
  height: ${e=>e.height??"12"}px;
`;r.styled.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,e.s(["B",0,t,"C",0,s,"F",0,o,"H",0,i,"R",0,h,"S",0,d,"a",0,l,"b",0,c,"c",0,a,"d",0,x,"e",0,n])},786776,e=>{"use strict";var r=e.i(702826);let t=r.keyframes`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,n=r.css`
  ${e=>e.$isLoading?r.css`
          width: 35%;
          animation: ${t} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",0,n])},578719,e=>{"use strict";var r=e.i(702826);let t=r.styled.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`;e.s(["S",0,t])},256489,e=>{"use strict";var r=e.i(702826);let t=r.styled.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`;e.s(["T",0,t])},783729,e=>{"use strict";var r=e.i(1340),t=e.i(481240);let n=t.forwardRef(function({title:e,titleId:r,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"}))}),i=t.forwardRef(function({title:e,titleId:r,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))});var s=e.i(852852),s=s,a=e.i(702826),o=e.i(289775),l=e.i(244772),d=e.i(368425);let c=(0,a.styled)(d.L)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;var h=e.i(68671),x=e.i(450266),u=e.i(578719),p=e.i(256489),m=e.i(974773),j=e.i(255975),g=e.i(492618),f=e.i(705647),y=e.i(786776),v=e.i(674706),w=e.i(607623),T=e.i(643430),k=e.i(292790),b=e.i(772665),A=e.i(516725);let L=t.forwardRef(function({title:e,titleId:r,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"}))});var R=e.i(971371),S=e.i(361513),C=e.i(368998),I=({iconUrl:e,value:t,symbol:n,usdValue:i,nftName:s,nftCount:a,decimals:o,$isLoading:l})=>{if(l)return(0,r.jsx)(E,{$isLoading:l});let d=t&&i&&o?function(e,r,t){let n=parseFloat(e),i=parseFloat(t);if(0===n||0===i||Number.isNaN(n)||Number.isNaN(i))return e;let s=Math.ceil(-Math.log10(.01/(i/n))),a=Math.pow(10,s=Math.max(s=Math.min(s,r),1)),o=+(Math.floor(n*a)/a).toFixed(s).replace(/\.?0+$/,"");return Intl.NumberFormat(void 0,{maximumFractionDigits:r}).format(o)}(t,o,i):t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(E,{$isLoading:l,children:[e&&(0,r.jsx)(M,{src:e,alt:"Token icon"}),a&&a>1?a+"x":void 0," ",s,d," ",n]}),i&&(0,r.jsxs)(V,{$isLoading:l,children:["$",i]})]})};let E=a.styled.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  /**
   * @NOTE This is a code smell anti-pattern for styling components.
   * We are mixing JSX definitions with styled-components CSS definitions.
   * This is not ideal and should be refactored in the future to separate concerns.
   * This is also hard to read, as it makes it difficult to understand the structure
   * of the component and its styles by viewing the JSX.
   */

  ${y.L}
`,V=a.styled.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${y.L}
`,M=a.styled.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`,O=e=>{let{chain:t,transactionDetails:n,isTokenContractInfoLoading:i,symbol:s}=e,{action:a,functionName:o}=n;return(0,r.jsx)(w.B,{children:(0,r.jsxs)(d.a,{children:["transaction"!==a&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Action"}),(0,r.jsx)(d.V,{children:o})]}),"mint"===o&&"args"in n&&n.args.filter(e=>e).map((e,n)=>(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:`Param ${n}`}),(0,r.jsx)(d.V,{children:"string"==typeof e&&(0,v.isAddress)(e)?(0,r.jsx)(m.A,{address:e,url:t?.blockExplorers?.default?.url,showCopyIcon:!1}):e?.toString()})]},n)),"setApprovalForAll"===o&&n.operator&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Operator"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:n.operator,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),"setApprovalForAll"===o&&void 0!==n.approved&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Set approval to"}),(0,r.jsx)(d.V,{children:n.approved?"true":"false"})]}),"transfer"===o||"transferWithMemo"===o||"transferFrom"===o||"safeTransferFrom"===o||"approve"===o?(0,r.jsxs)(r.Fragment,{children:["formattedAmount"in n&&n.formattedAmount&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount"}),(0,r.jsxs)(d.V,{$isLoading:i,children:[n.formattedAmount," ",s]})]}),"tokenId"in n&&n.tokenId&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token ID"}),(0,r.jsx)(d.V,{children:n.tokenId.toString()})]})]}):null,"safeBatchTransferFrom"===o&&(0,r.jsxs)(r.Fragment,{children:["amounts"in n&&n.amounts&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amounts"}),(0,r.jsx)(d.V,{children:n.amounts.join(", ")})]}),"tokenIds"in n&&n.tokenIds&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token IDs"}),(0,r.jsx)(d.V,{children:n.tokenIds.join(", ")})]})]}),"approve"===o&&n.spender&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Spender"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:n.spender,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),("transferFrom"===o||"safeTransferFrom"===o||"safeBatchTransferFrom"===o)&&n.transferFrom&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Transferring from"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:n.transferFrom,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),("transferFrom"===o||"safeTransferFrom"===o||"safeBatchTransferFrom"===o)&&n.transferTo&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Transferring to"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:n.transferTo,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]})]})})},N=({variant:e,setPreventMaliciousTransaction:t,colorScheme:n="light",preventMaliciousTransaction:i})=>"warn"===e?(0,r.jsx)($,{children:(0,r.jsxs)(b.W,{theme:n,children:[(0,r.jsx)("span",{style:{fontWeight:"500"},children:"Warning: Suspicious transaction"}),(0,r.jsx)("br",{}),"This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."]})}):"error"===e?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)($,{children:[(0,r.jsx)(k.E,{theme:n,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"This is a malicious transaction"}),(0,r.jsx)("br",{}),"This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."]})}),(0,r.jsxs)(F,{children:[(0,r.jsx)(T.C,{color:"var(--privy-color-error)",checked:!i,readOnly:!0,onClick:()=>t(!i)}),(0,r.jsx)("span",{children:"I understand and want to proceed anyways."})]})]})}):null,$=a.styled.div`
  margin-top: 1.5rem;
`,F=a.styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,D=({transactionIndex:e,maxIndex:r})=>"number"!=typeof e||0===r?"":` (${e+1} / ${r+1})`,P=(0,a.styled)(j.W)`
  ${e=>e.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,_=(0,a.styled)(d.a)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,H="There was an error preparing your transaction. Your transaction request will likely fail.",U=a.styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,B=a.styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,W=a.styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,q=e=>e?.code===S.PrivyErrorCode.COMPLIANCE_BLOCKED,z=()=>(0,r.jsxs)(Q,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(Y,{})]}),J=a.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,G=a.styled.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,K=a.styled.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,Q=a.styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Y=(0,a.styled)(R.default)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,X=a.styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,Z=(0,a.styled)(l.P)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,ee=a.styled.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,er=a.styled.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,et=a.styled.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,en=a.styled.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.$clickable&&"cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }"}
`,ei=(0,a.styled)(L)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,es=(0,a.styled)(A.default)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ea=({clicked:e})=>(0,r.jsx)(e?es:ei,{});e.s(["S",0,({img:e,submitError:a,prepareError:o,onClose:x,action:j,title:y,subtitle:v,to:w,tokenAddress:T,network:k,missingFunds:b,fee:A,from:L,cta:R,disabled:S,chain:C,isSubmitting:E,isPreparing:V,isTokenPriceLoading:M,isTokenContractInfoLoading:$,isSponsored:F,symbol:_,balance:q,onClick:z,transactionDetails:J,transactionIndex:G,maxIndex:K,onBack:Q,chainName:Y,validation:X,hasScanDetails:Z,setIsScanDetailsOpen:ee,preventMaliciousTransaction:er,setPreventMaliciousTransaction:et,tokensSent:en,tokensReceived:ei,isScanning:es,isCancellable:ea,functionName:eo})=>{let{showTransactionDetails:el,setShowTransactionDetails:ed,hasMoreDetails:ec,isErc20Ish:eh}=(e=>{let[r,n]=(0,t.useState)(!1),i=!0,s=!1;return(!e||e.isErc20Ish||"transaction"===e.action)&&(i=!1),i&&(s=Object.entries(e||{}).some(([e,r])=>r&&!["action","isErc20Ish","isNFTIsh"].includes(e))),{showTransactionDetails:r,setShowTransactionDetails:n,hasMoreDetails:i&&s,isErc20Ish:e?.isErc20Ish}})(J),ex=(0,g.u)(),eu=eh&&$||V||M||es;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.M,{onClose:x,backFn:Q}),e&&(0,r.jsx)(U,{children:e}),(0,r.jsxs)(p.T,{style:{marginTop:e?"1.5rem":0},children:[y,(0,r.jsx)(D,{maxIndex:K,transactionIndex:G})]}),(0,r.jsx)(u.S,{children:v}),(0,r.jsxs)(d.a,{style:{marginTop:"2rem"},children:[(!!en[0]||eu)&&(0,r.jsxs)(d.R,{children:[ei.length>0?(0,r.jsx)(d.L,{children:"Send"}):(0,r.jsx)(d.L,{children:"approve"===j?"Approval amount":"Amount"}),(0,r.jsx)("div",{className:"flex flex-col",children:en.map((e,t)=>(0,r.jsx)(I,{iconUrl:e.iconUrl,value:"setApprovalForAll"===eo?"All":e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t))})]}),ei.length>0&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Receive"}),(0,r.jsx)("div",{className:"flex flex-col",children:ei.map((e,t)=>(0,r.jsx)(I,{iconUrl:e.iconUrl,value:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t))})]}),J&&"spender"in J&&J?.spender?(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Spender"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:J.spender,url:C?.blockExplorers?.default?.url})})]}):null,w&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"To"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:w,url:C?.blockExplorers?.default?.url,showCopyIcon:!0})})]}),T&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token address"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:T,url:C?.blockExplorers?.default?.url})})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Network"}),(0,r.jsx)(d.V,{children:k})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Estimated fee"}),(0,r.jsx)(d.V,{$isLoading:V||M||void 0===F,children:F?(0,r.jsxs)(B,{children:[(0,r.jsxs)(W,{children:["Sponsored by ",ex.name]}),(0,r.jsx)(n,{height:16,width:16})]}):A})]}),ec&&!Z&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.R,{className:"cursor-pointer",onClick:()=>ed(!el),children:(0,r.jsxs)(d.b,{className:"flex items-center gap-x-1",children:["Details"," ",(0,r.jsx)(s.default,{style:{width:"0.75rem",marginLeft:"0.25rem",transform:el?"rotate(180deg)":void 0}})]})}),el&&J&&(0,r.jsx)(O,{action:j,chain:C,transactionDetails:J,isTokenContractInfoLoading:$,symbol:_})]}),Z&&(0,r.jsx)(d.R,{children:(0,r.jsxs)(c,{onClick:()=>ee(!0),children:[(0,r.jsx)("span",{className:"text-color-primary",children:"Details"}),(0,r.jsx)(i,{height:"14px",width:"14px",strokeWidth:"2"})]})})]}),(0,r.jsx)(f.q,{}),a?(0,r.jsx)(h.E,{style:{marginTop:"2rem"},children:a.message}):o&&0===G?(0,r.jsx)(h.E,{style:{marginTop:"2rem"},children:o.shortMessage??H}):null,(0,r.jsx)(N,{variant:X,preventMaliciousTransaction:er,setPreventMaliciousTransaction:et}),(0,r.jsx)(P,{$useSmallMargins:!(!o&&!a&&"warn"!==X&&"error"!==X),address:L,balance:q,errMsg:V||o||a||!b?void 0:`Add funds on ${C?.name??Y} to complete transaction.`}),(0,r.jsx)(l.P,{style:{marginTop:"1rem"},loading:E,disabled:S||V,onClick:z,children:R}),ea&&(0,r.jsx)(l.E,{style:{marginTop:"1rem"},onClick:x,isSubmitting:!1,children:"Not now"}),(0,r.jsx)(l.b,{})]})},"T",0,({transactionError:e,chainId:n,onClose:i,onRetry:s,chainType:a,transactionHash:o})=>{let{chains:d}=(0,C.u)(),[c,h]=(0,t.useState)(!1),{errorCode:x,errorMessage:u}=((e,r)=>{if("ethereum"===r)return q(e)?{errorCode:"Transaction blocked",errorMessage:e.message}:{errorCode:e.details??e.message,errorMessage:e.shortMessage};let t=e.txSignature,n=e?.transactionMessage||"Something went wrong.";if(Array.isArray(e.logs)){let r=e.logs.find(e=>/insufficient (lamports|funds)/gi.test(e));r&&(n=r)}return{transactionHash:t,errorMessage:n}})(e,a),p=q(e),m=(({chains:e,chainId:r,chainType:t,transactionHash:n})=>{var i;return"ethereum"===t?e.find(e=>e.id===r)?.blockExplorers?.default.url??"https://etherscan.io":(i=n||"",`https://explorer.solana.com/tx/${i}?chain=${r}`)})({chains:d,chainId:n,chainType:a,transactionHash:o});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.M,{onClose:i}),(0,r.jsxs)(J,{children:[(0,r.jsx)(z,{}),(0,r.jsx)(G,{children:x}),(0,r.jsx)(K,{children:p?"This transaction cannot be completed.":"Please try again."}),(0,r.jsxs)(er,{children:[(0,r.jsx)(ee,{children:"Error message"}),(0,r.jsx)(en,{$clickable:!1,children:u})]}),o&&(0,r.jsxs)(er,{children:[(0,r.jsx)(ee,{children:"Transaction hash"}),(0,r.jsxs)(et,{children:["Copy this hash to view details about the transaction on a"," ",(0,r.jsx)("u",{children:(0,r.jsx)("a",{href:m,children:"block explorer"})}),"."]}),(0,r.jsxs)(en,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(o),h(!0)},children:[o,(0,r.jsx)(ea,{clicked:c})]})]}),!p&&(0,r.jsx)(Z,{onClick:()=>s({resetNonce:!!o}),children:"Retry transaction"})]}),(0,r.jsx)(l.c,{})]})},"a",0,({img:e,title:i,subtitle:a,cta:j,instructions:y,network:v,blockExplorerUrl:w,isMissingFunds:T,submitError:k,parseError:b,total:A,swap:L,transactingWalletAddress:R,fee:S,balance:C,disabled:I,isSubmitting:E,isPreparing:V,isTokenPriceLoading:M,onClick:O,onClose:N,onBack:$,isSponsored:F})=>{let D=V||M,[q,z]=(0,t.useState)(!1),J=(0,g.u)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.M,{onClose:N,backFn:$}),e&&(0,r.jsx)(U,{children:e}),(0,r.jsx)(p.T,{style:{marginTop:e?"1.5rem":0},children:i}),(0,r.jsx)(u.S,{children:a}),(0,r.jsxs)(d.a,{style:{marginTop:"2rem",marginBottom:".5rem"},children:[(A||D)&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount"}),(0,r.jsx)(d.V,{$isLoading:D,children:A})]}),L&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Swap"}),(0,r.jsx)(d.V,{children:L})]}),v&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Network"}),(0,r.jsx)(d.V,{children:v})]}),(S||D||void 0!==F)&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Estimated fee"}),(0,r.jsx)(d.V,{$isLoading:D,children:F&&!D?(0,r.jsxs)(B,{children:[(0,r.jsxs)(W,{children:["Sponsored by ",J.name]}),(0,r.jsx)(n,{height:16,width:16})]}):S})]})]}),(0,r.jsx)(d.R,{children:(0,r.jsxs)(c,{onClick:()=>z(e=>!e),children:[(0,r.jsx)("span",{children:"Advanced"}),(0,r.jsx)(s.default,{height:"16px",width:"16px",strokeWidth:"2",style:{transition:"all 300ms",transform:q?"rotate(180deg)":void 0}})]})}),q&&(0,r.jsx)(r.Fragment,{children:y.map((e,t)=>"sol-transfer"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Transfer ",e.withSeed?"with seed":""]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount"}),(0,r.jsxs)(d.V,{children:[(0,o.formatTokenAmount)({amount:e.value,decimals:e.token.decimals})," ",e.token.symbol]})]}),!!e.toAccount&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Destination"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.toAccount,url:w})})]})]},t):"spl-transfer"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Transfer ",e.token.symbol]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount"}),(0,r.jsx)(d.V,{children:e.value.toString()})]}),!!e.fromAta&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Source"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.fromAta,url:w})})]}),!!e.toAta&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Destination"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.toAta,url:w})})]}),!!e.token.address&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.token.address,url:w})})]})]},t):"ata-creation"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsx)(x.L,{children:"Create token account"})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Program ID"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.program,url:w})})]}),!!e.owner&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Owner"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.owner,url:w})})]})]},t):"create-account"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Create account ",e.withSeed?"with seed":""]})}),!!e.account&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Account"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.account,url:w})})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount"}),(0,r.jsxs)(d.V,{children:[(0,o.formatTokenAmount)({amount:e.value,decimals:9})," SOL"]})]})]},t):"spl-init-account"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsx)(x.L,{children:"Initialize token account"})}),!!e.account&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Account"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.account,url:w})})]}),!!e.mint&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Mint"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mint,url:w})})]}),!!e.owner&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Owner"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.owner,url:w})})]})]},t):"spl-close-account"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsx)(x.L,{children:"Close token account"})}),!!e.source&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Source"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.source,url:w})})]}),!!e.destination&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Destination"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.destination,url:w})})]}),!!e.owner&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Owner"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.owner,url:w})})]})]},t):"spl-sync-native"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsx)(x.L,{children:"Sync native"})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Program ID"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.program,url:w})})]})]},t):"raydium-swap-base-input"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Raydium swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount in"}),(0,r.jsx)(d.V,{children:e.amountIn.toString()})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Minimum amount out"}),(0,r.jsx)(d.V,{children:e.minimumAmountOut.toString()})]}),e.mintIn&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token in"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token out"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintOut,url:w})})]})]},t):"raydium-swap-base-output"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Raydium swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Max amount in"}),(0,r.jsx)(d.V,{children:e.maxAmountIn.toString()})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount out"}),(0,r.jsx)(d.V,{children:e.amountOut.toString()})]}),e.mintIn&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token in"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token out"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintOut,url:w})})]})]},t):"jupiter-swap-shared-accounts-route"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Jupiter swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"In amount"}),(0,r.jsx)(d.V,{children:e.inAmount.toString()})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Quoted out amount"}),(0,r.jsx)(d.V,{children:e.quotedOutAmount.toString()})]}),e.mintIn&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token in"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token out"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintOut,url:w})})]})]},t):"jupiter-swap-exact-out-route"===e.type?(0,r.jsxs)(_,{children:[(0,r.jsx)(d.R,{children:(0,r.jsxs)(x.L,{children:["Jupiter swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Quoted in amount"}),(0,r.jsx)(d.V,{children:e.quotedInAmount.toString()})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Amount out"}),(0,r.jsx)(d.V,{children:e.outAmount.toString()})]}),e.mintIn&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token in"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Token out"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.mintOut,url:w})})]})]},t):(0,r.jsxs)(_,{children:[(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Program ID"}),(0,r.jsx)(d.V,{children:(0,r.jsx)(m.A,{address:e.program,url:w})})]}),(0,r.jsxs)(d.R,{children:[(0,r.jsx)(d.L,{children:"Data"}),(0,r.jsx)(d.V,{children:e.discriminator})]})]},t))}),(0,r.jsx)(f.q,{}),k?(0,r.jsx)(h.E,{style:{marginTop:"2rem"},children:k.message}):b?(0,r.jsx)(h.E,{style:{marginTop:"2rem"},children:H}):null,(0,r.jsx)(P,{$useSmallMargins:!(!b&&!k),title:"",address:R,balance:C,errMsg:V||b||k||!T?void 0:"Add funds on Solana to complete transaction."}),(0,r.jsx)(l.P,{style:{marginTop:"1rem"},loading:E,disabled:I||V,onClick:O,children:j}),(0,r.jsx)(l.b,{})]})}],783729)},982078,e=>{"use strict";var r=e.i(481240),t=e.i(328688);let n="0x0000000000000000000000000000000000000000",i="https://api.relay.link",s="https://api.testnets.relay.link",a=async({input:e,isTestnet:r})=>{let t=await fetch((r?s:i)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!(t.ok||"string"==typeof n.message&&n.message.startsWith("Invalid address")))throw console.error("Relay error:",n),Error(n.message??"Error fetching quote from relay");return n};async function o({transactionHash:e,isTestnet:r}){let t=await fetch((r?s:i)+"/requests/v2?hash="+e),n=await t.json();if(!t.ok){if("message"in n&&"string"==typeof n.message)throw Error(n.message);throw Error("Error fetching request from relay")}return n.requests.at(0)?.status??"pending"}class l extends t.P{constructor(e,r){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,t.a.TRANSACTION_FAILURE),this.relayLink=r?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}e.s(["R",0,l,"a",0,e=>{let r=e.steps[0]?.items?.[0];if(r)return{from:r.data.from,to:r.data.to,value:Number(r.data.value),chainId:Number(r.data.chainId),data:r.data.data}},"b",0,"11111111111111111111111111111111","c",0,0x2f3fb341,"d",0,e=>e.steps.flatMap(e=>e.items?.filter(e=>"incomplete"===e.status)??[]).map(e=>({from:e.data.from,to:e.data.to,value:Number(e.data.value),chainId:Number(e.data.chainId),data:e.data.data})),"e",0,"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","g",0,a,"t",0,({appId:e,originCurrency:r,destinationCurrency:t,...i})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:r??n,destinationCurrency:t??n,referrer:`privy|${e}`,...i}),"u",0,function({transactionHash:e,isTestnet:t,bridgingStatus:n,setBridgingStatus:i,onSuccess:s,onFailure:a}){(0,r.useEffect)(()=>{if(e&&n){if(["delayed","waiting","pending"].includes(n)){let r=setInterval(async()=>{try{let r=await o({transactionHash:e,isTestnet:t});i(r)}catch(e){console.error(e)}},1e3);return()=>clearInterval(r)}"success"===n?s({transactionHash:e}):["refund","failure"].includes(n)&&a({error:new l(e,t)})}},[n,e,t])}])},978093,e=>{"use strict";let r=new Set(["https:","mailto:"]);e.s(["t",0,function(e){if(!e)return null;try{if(r.has(new URL(e).protocol))return e}catch{}return null}])},503554,e=>{"use strict";let r=(0,e.i(333980).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,r],503554)},458940,e=>{"use strict";let r=(0,e.i(333980).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",0,r],458940)}]);