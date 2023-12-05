import{s as L,_ as d,r as x,u as E,a as P,L as D,j as n,c as B,b as O,g as _e,l as he,T as A,d as we,e as w,f as W,h as j,B as We,i as $,k as ae,m as Ue,n as ue,o as ke,p as Be,q as je,t as Ve,v as ye,w as pe,x as fe,y as re,z as X,A as De,C as qe,D as M,E as He,F as Ke,G as Q,H as Ye,I as Ce,J as Je,K as Qe,M as Xe,N as Te,O as Ze,Q as et,P as tt}from"./index-5ad183d4.js";import{u as Le,F as ot,T as ve}from"./TextField-ad81bddb.js";const st=["className"],nt=e=>{const{alignItems:t,classes:o}=e;return O({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},_e,o)},at=L("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>d({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),rt=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiListItemIcon"}),{className:a}=s,r=P(s,st),l=x.useContext(D),i=d({},s,{alignItems:l.alignItems}),u=nt(i);return n.jsx(at,d({className:B(u.root,a),ownerState:i,ref:o},r))}),it=rt,lt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ct=e=>{const{classes:t,inset:o,primary:s,secondary:a,dense:r}=e;return O({root:["root",o&&"inset",r&&"dense",s&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},we,t)},dt=L("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${he.primary}`]:t.primary},{[`& .${he.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>d({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ut=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiListItemText"}),{children:a,className:r,disableTypography:l=!1,inset:i=!1,primary:u,primaryTypographyProps:c,secondary:p,secondaryTypographyProps:b}=s,f=P(s,lt),{dense:g}=x.useContext(D);let v=u??a,m=p;const C=d({},s,{disableTypography:l,inset:i,primary:!!v,secondary:!!m,dense:g}),y=ct(C);return v!=null&&v.type!==A&&!l&&(v=n.jsx(A,d({variant:g?"body2":"body1",className:y.primary,component:c!=null&&c.variant?void 0:"span",display:"block"},c,{children:v}))),m!=null&&m.type!==A&&!l&&(m=n.jsx(A,d({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},b,{children:m}))),n.jsxs(dt,d({className:B(y.root,r),ownerState:C,ref:o},f,{children:[v,m]}))}),pt=ut;var ne="NOT_FOUND";function ft(e){var t;return{get:function(s){return t&&e(t.key,s)?t.value:ne},put:function(s,a){t={key:s,value:a}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function vt(e,t){var o=[];function s(i){var u=o.findIndex(function(p){return t(i,p.key)});if(u>-1){var c=o[u];return u>0&&(o.splice(u,1),o.unshift(c)),c.value}return ne}function a(i,u){s(i)===ne&&(o.unshift({key:i,value:u}),o.length>e&&o.pop())}function r(){return o}function l(){o=[]}return{get:s,put:a,getEntries:r,clear:l}}var gt=function(t,o){return t===o};function mt(e){return function(o,s){if(o===null||s===null||o.length!==s.length)return!1;for(var a=o.length,r=0;r<a;r++)if(!e(o[r],s[r]))return!1;return!0}}function xt(e,t){var o=typeof t=="object"?t:{equalityCheck:t},s=o.equalityCheck,a=s===void 0?gt:s,r=o.maxSize,l=r===void 0?1:r,i=o.resultEqualityCheck,u=mt(a),c=l===1?ft(u):vt(l,u);function p(){var b=c.get(arguments);if(b===ne){if(b=e.apply(null,arguments),i){var f=c.getEntries(),g=f.find(function(v){return i(v.value,b)});g&&(b=g.value)}c.put(arguments,b)}return b}return p.clearCache=function(){return c.clear()},p}function bt(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(s){return typeof s=="function"})){var o=t.map(function(s){return typeof s=="function"?"function "+(s.name||"unnamed")+"()":typeof s}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return t}function ht(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];var a=function(){for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];var c=0,p,b={memoizeOptions:void 0},f=i.pop();if(typeof f=="object"&&(b=f,f=i.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var g=b,v=g.memoizeOptions,m=v===void 0?o:v,C=Array.isArray(m)?m:[m],y=bt(i),I=e.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(C)),h=e(function(){for(var G=[],T=y.length,U=0;U<T;U++)G.push(y[U].apply(null,arguments));return p=I.apply(null,G),p});return Object.assign(h,{resultFunc:f,memoizedResultFunc:I,dependencies:y,lastResult:function(){return p},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return a}var ze=ht(xt);function yt(e){return W("MuiButtonGroup",e)}const Ct=w("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),S=Ct,$t=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],It=(e,t)=>{const{ownerState:o}=e;return[{[`& .${S.grouped}`]:t.grouped},{[`& .${S.grouped}`]:t[`grouped${$(o.orientation)}`]},{[`& .${S.grouped}`]:t[`grouped${$(o.variant)}`]},{[`& .${S.grouped}`]:t[`grouped${$(o.variant)}${$(o.orientation)}`]},{[`& .${S.grouped}`]:t[`grouped${$(o.variant)}${$(o.color)}`]},t.root,t[o.variant],o.disableElevation===!0&&t.disableElevation,o.fullWidth&&t.fullWidth,o.orientation==="vertical"&&t.vertical]},Rt=e=>{const{classes:t,color:o,disabled:s,disableElevation:a,fullWidth:r,orientation:l,variant:i}=e,u={root:["root",i,l==="vertical"&&"vertical",r&&"fullWidth",a&&"disableElevation"],grouped:["grouped",`grouped${$(l)}`,`grouped${$(i)}`,`grouped${$(i)}${$(l)}`,`grouped${$(i)}${$(o)}`,s&&"disabled"]};return O(u,yt,t)},kt=L("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:It})(({theme:e,ownerState:t})=>d({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},t.orientation==="vertical"&&{flexDirection:"column"},{[`& .${S.grouped}`]:d({minWidth:40,"&:not(:first-of-type)":d({},t.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},t.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},t.variant==="outlined"&&t.orientation==="horizontal"&&{marginLeft:-1},t.variant==="outlined"&&t.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":d({},t.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},t.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},t.variant==="text"&&t.orientation==="horizontal"&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${S.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},t.variant==="text"&&t.orientation==="vertical"&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${S.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},t.variant==="text"&&t.color!=="inherit"&&{borderColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:j(e.palette[t.color].main,.5)},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"transparent"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"transparent"},t.variant==="contained"&&t.orientation==="horizontal"&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${S.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},t.variant==="contained"&&t.orientation==="vertical"&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${S.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},t.variant==="contained"&&t.color!=="inherit"&&{borderColor:(e.vars||e).palette[t.color].dark},{"&:hover":d({},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"currentColor"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":d({},t.variant==="contained"&&{boxShadow:"none"})},t.variant==="contained"&&{boxShadow:"none"})})),Bt=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiButtonGroup"}),{children:a,className:r,color:l="primary",component:i="div",disabled:u=!1,disableElevation:c=!1,disableFocusRipple:p=!1,disableRipple:b=!1,fullWidth:f=!1,orientation:g="horizontal",size:v="medium",variant:m="outlined"}=s,C=P(s,$t),y=d({},s,{color:l,component:i,disabled:u,disableElevation:c,disableFocusRipple:p,disableRipple:b,fullWidth:f,orientation:g,size:v,variant:m}),I=Rt(y),h=x.useMemo(()=>({className:I.grouped,color:l,disabled:u,disableElevation:c,disableFocusRipple:p,disableRipple:b,fullWidth:f,size:v,variant:m}),[l,u,c,p,b,f,v,m,I.grouped]);return n.jsx(kt,d({as:i,role:"group",className:B(I.root,r),ref:o,ownerState:y},C,{children:n.jsx(We.Provider,{value:h,children:a})}))}),jt=Bt;function Tt(e){return W("PrivateSwitchBase",e)}w("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Lt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],zt=e=>{const{classes:t,checked:o,disabled:s,edge:a}=e,r={root:["root",o&&"checked",s&&"disabled",a&&`edge${$(a)}`],input:["input"]};return O(r,Tt,t)},Pt=L(ae)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ot=L("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ft=x.forwardRef(function(t,o){const{autoFocus:s,checked:a,checkedIcon:r,className:l,defaultChecked:i,disabled:u,disableFocusRipple:c=!1,edge:p=!1,icon:b,id:f,inputProps:g,inputRef:v,name:m,onBlur:C,onChange:y,onFocus:I,readOnly:h,required:R=!1,tabIndex:G,type:T,value:U}=t,le=P(t,Lt),[ee,te]=Ue({controlled:a,default:!!i,name:"SwitchBase",state:"checked"}),z=Le(),Z=k=>{I&&I(k),z&&z.onFocus&&z.onFocus(k)},V=k=>{C&&C(k),z&&z.onBlur&&z.onBlur(k)},oe=k=>{if(k.nativeEvent.defaultPrevented)return;const N=k.target.checked;te(N),y&&y(k,N)};let F=u;z&&typeof F>"u"&&(F=z.disabled);const se=T==="checkbox"||T==="radio",K=d({},t,{checked:ee,disabled:F,disableFocusRipple:c,edge:p}),q=zt(K);return n.jsxs(Pt,d({component:"span",className:B(q.root,l),centerRipple:!0,focusRipple:!c,disabled:F,tabIndex:null,role:void 0,onFocus:Z,onBlur:V,ownerState:K,ref:o},le,{children:[n.jsx(Ot,d({autoFocus:s,checked:a,defaultChecked:i,className:q.input,disabled:F,id:se?f:void 0,name:m,onChange:oe,readOnly:h,ref:v,required:R,ownerState:K,tabIndex:G,type:T},T==="checkbox"&&U===void 0?{}:{value:U},g)),ee?r:b]}))}),Nt=Ft,Mt=ue(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),St=ue(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),At=ue(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Et(e){return W("MuiCheckbox",e)}const Gt=w("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),ce=Gt,_t=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],wt=e=>{const{classes:t,indeterminate:o,color:s}=e,a={root:["root",o&&"indeterminate",`color${$(s)}`]},r=O(a,Et,t);return d({},t,r)},Wt=L(Nt,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,o.color!=="default"&&t[`color${$(o.color)}`]]}})(({theme:e,ownerState:t})=>d({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:j(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${ce.checked}, &.${ce.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${ce.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ut=n.jsx(St,{}),Vt=n.jsx(Mt,{}),Dt=n.jsx(At,{}),qt=x.forwardRef(function(t,o){var s,a;const r=E({props:t,name:"MuiCheckbox"}),{checkedIcon:l=Ut,color:i="primary",icon:u=Vt,indeterminate:c=!1,indeterminateIcon:p=Dt,inputProps:b,size:f="medium",className:g}=r,v=P(r,_t),m=c?p:u,C=c?p:l,y=d({},r,{color:i,indeterminate:c,size:f}),I=wt(y);return n.jsx(Wt,d({type:"checkbox",inputProps:d({"data-indeterminate":c},b),icon:x.cloneElement(m,{fontSize:(s=m.props.fontSize)!=null?s:f}),checkedIcon:x.cloneElement(C,{fontSize:(a=C.props.fontSize)!=null?a:f}),ownerState:y,ref:o,className:B(I.root,g)},v,{classes:I}))}),Ht=qt;function Kt(e){return W("MuiInputAdornment",e)}const Yt=w("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),$e=Yt;var Ie;const Jt=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Qt=(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${$(o.position)}`],o.disablePointerEvents===!0&&t.disablePointerEvents,t[o.variant]]},Xt=e=>{const{classes:t,disablePointerEvents:o,hiddenLabel:s,position:a,size:r,variant:l}=e,i={root:["root",o&&"disablePointerEvents",a&&`position${$(a)}`,l,s&&"hiddenLabel",r&&`size${$(r)}`]};return O(i,Kt,t)},Zt=L("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Qt})(({theme:e,ownerState:t})=>d({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${$e.positionStart}&:not(.${$e.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),eo=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiInputAdornment"}),{children:a,className:r,component:l="div",disablePointerEvents:i=!1,disableTypography:u=!1,position:c,variant:p}=s,b=P(s,Jt),f=Le()||{};let g=p;p&&f.variant,f&&!g&&(g=f.variant);const v=d({},s,{hiddenLabel:f.hiddenLabel,size:f.size,disablePointerEvents:i,position:c,variant:g}),m=Xt(v);return n.jsx(ot.Provider,{value:null,children:n.jsx(Zt,d({as:l,ownerState:v,className:B(m.root,r),ref:o},b,{children:typeof a=="string"&&!u?n.jsx(A,{color:"text.secondary",children:a}):n.jsxs(x.Fragment,{children:[c==="start"?Ie||(Ie=n.jsx("span",{className:"notranslate",children:"​"})):null,a]})}))})}),to=eo;function oo(e){return W("MuiListItem",e)}const so=w("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Y=so;function no(e){return W("MuiListItemButton",e)}const ao=w("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),J=ao,ro=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],io=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},lo=e=>{const{alignItems:t,classes:o,dense:s,disabled:a,disableGutters:r,divider:l,selected:i}=e,c=O({root:["root",s&&"dense",!r&&"gutters",l&&"divider",a&&"disabled",t==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},no,o);return d({},o,c)},co=L(ae,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:io})(({theme:e,ownerState:t})=>d({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${J.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${J.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${J.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${J.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${J.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),uo=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:r=!1,component:l="div",children:i,dense:u=!1,disableGutters:c=!1,divider:p=!1,focusVisibleClassName:b,selected:f=!1,className:g}=s,v=P(s,ro),m=x.useContext(D),C=x.useMemo(()=>({dense:u||m.dense||!1,alignItems:a,disableGutters:c}),[a,m.dense,u,c]),y=x.useRef(null);Be(()=>{r&&y.current&&y.current.focus()},[r]);const I=d({},s,{alignItems:a,dense:C.dense,disableGutters:c,divider:p,selected:f}),h=lo(I),R=je(y,o);return n.jsx(D.Provider,{value:C,children:n.jsx(co,d({ref:R,href:v.href||v.to,component:(v.href||v.to)&&l==="div"?"button":l,focusVisibleClassName:B(h.focusVisible,b),ownerState:I,className:B(h.root,g)},v,{classes:h,children:i}))})}),po=uo;function fo(e){return W("MuiListItemSecondaryAction",e)}w("MuiListItemSecondaryAction",["root","disableGutters"]);const vo=["className"],go=e=>{const{disableGutters:t,classes:o}=e;return O({root:["root",t&&"disableGutters"]},fo,o)},mo=L("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Pe=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiListItemSecondaryAction"}),{className:a}=s,r=P(s,vo),l=x.useContext(D),i=d({},s,{disableGutters:l.disableGutters}),u=go(i);return n.jsx(mo,d({className:B(u.root,a),ownerState:i,ref:o},r))});Pe.muiName="ListItemSecondaryAction";const xo=Pe,bo=["className"],ho=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],yo=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},Co=e=>{const{alignItems:t,button:o,classes:s,dense:a,disabled:r,disableGutters:l,disablePadding:i,divider:u,hasSecondaryAction:c,selected:p}=e;return O({root:["root",a&&"dense",!l&&"gutters",!i&&"padding",u&&"divider",r&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction",p&&"selected"],container:["container"]},oo,s)},$o=L("div",{name:"MuiListItem",slot:"Root",overridesResolver:yo})(({theme:e,ownerState:t})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&d({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${J.root}`]:{paddingRight:48}},{[`&.${Y.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Y.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Y.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Io=L("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Ro=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiListItem"}),{alignItems:a="center",autoFocus:r=!1,button:l=!1,children:i,className:u,component:c,components:p={},componentsProps:b={},ContainerComponent:f="li",ContainerProps:{className:g}={},dense:v=!1,disabled:m=!1,disableGutters:C=!1,disablePadding:y=!1,divider:I=!1,focusVisibleClassName:h,secondaryAction:R,selected:G=!1,slotProps:T={},slots:U={}}=s,le=P(s.ContainerProps,bo),ee=P(s,ho),te=x.useContext(D),z=x.useMemo(()=>({dense:v||te.dense||!1,alignItems:a,disableGutters:C}),[a,te.dense,v,C]),Z=x.useRef(null);Be(()=>{r&&Z.current&&Z.current.focus()},[r]);const V=x.Children.toArray(i),oe=V.length&&Ve(V[V.length-1],["ListItemSecondaryAction"]),F=d({},s,{alignItems:a,autoFocus:r,button:l,dense:z.dense,disabled:m,disableGutters:C,disablePadding:y,divider:I,hasSecondaryAction:oe,selected:G}),se=Co(F),K=je(Z,o),q=U.root||p.Root||$o,k=T.root||b.root||{},N=d({className:B(se.root,k.className,u),disabled:m},ee);let H=c||"li";return l&&(N.component=c||"div",N.focusVisibleClassName=B(Y.focusVisible,h),H=ae),oe?(H=!N.component&&!c?"div":H,f==="li"&&(H==="li"?H="div":N.component==="li"&&(N.component="div")),n.jsx(D.Provider,{value:z,children:n.jsxs(Io,d({as:f,className:B(se.container,g),ref:K,ownerState:F},le,{children:[n.jsx(q,d({},k,!ye(q)&&{as:H,ownerState:d({},F,k.ownerState)},N,{children:V})),V.pop()]}))})):n.jsx(D.Provider,{value:z,children:n.jsxs(q,d({},k,{as:H,ref:K},!ye(q)&&{ownerState:d({},F,k.ownerState)},N,{children:[V,R&&n.jsx(xo,{children:R})]}))})}),ko=Ro;function Bo(e){return W("MuiToggleButton",e)}const jo=w("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),Re=jo,To=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Lo=e=>{const{classes:t,fullWidth:o,selected:s,disabled:a,size:r,color:l}=e,i={root:["root",s&&"selected",a&&"disabled",o&&"fullWidth",`size${$(r)}`,l]};return O(i,Bo,t)},zo=L(ae,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`size${$(o.size)}`]]}})(({theme:e,ownerState:t})=>{let o=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main,s;return e.vars&&(o=t.color==="standard"?e.vars.palette.text.primary:e.vars.palette[t.color].main,s=t.color==="standard"?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),d({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${Re.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:j(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Re.selected}`]:{color:o,backgroundColor:e.vars?`rgba(${s} / ${e.vars.palette.action.selectedOpacity})`:j(o,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${s} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(o,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${s} / ${e.vars.palette.action.selectedOpacity})`:j(o,e.palette.action.selectedOpacity)}}}},t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)})}),Po=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiToggleButton"}),{children:a,className:r,color:l="standard",disabled:i=!1,disableFocusRipple:u=!1,fullWidth:c=!1,onChange:p,onClick:b,selected:f,size:g="medium",value:v}=s,m=P(s,To),C=d({},s,{color:l,disabled:i,disableFocusRipple:u,fullWidth:c,size:g}),y=Lo(C),I=h=>{b&&(b(h,v),h.defaultPrevented)||p&&p(h,v)};return n.jsx(zo,d({className:B(y.root,r),disabled:i,focusRipple:!u,ref:o,onClick:I,onChange:p,value:v,ownerState:C,"aria-pressed":f},m,{children:a}))}),de=Po;function Oo(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.indexOf(e)>=0:e===t}function Fo(e){return W("MuiToggleButtonGroup",e)}const No=w("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),_=No,Mo=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],So=e=>{const{classes:t,orientation:o,fullWidth:s,disabled:a}=e,r={root:["root",o==="vertical"&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${$(o)}`,a&&"disabled"]};return O(r,Fo,t)},Ao=L("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${_.grouped}`]:t.grouped},{[`& .${_.grouped}`]:t[`grouped${$(o.orientation)}`]},t.root,o.orientation==="vertical"&&t.vertical,o.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>d({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},e.orientation==="vertical"&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${_.grouped}`]:d({},e.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${_.selected} + .${_.grouped}.${_.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${_.selected} + .${_.grouped}.${_.selected}`]:{borderTop:0,marginTop:0}})})),Eo=x.forwardRef(function(t,o){const s=E({props:t,name:"MuiToggleButtonGroup"}),{children:a,className:r,color:l="standard",disabled:i=!1,exclusive:u=!1,fullWidth:c=!1,onChange:p,orientation:b="horizontal",size:f="medium",value:g}=s,v=P(s,Mo),m=d({},s,{disabled:i,fullWidth:c,orientation:b,size:f}),C=So(m),y=(h,R)=>{if(!p)return;const G=g&&g.indexOf(R);let T;g&&G>=0?(T=g.slice(),T.splice(G,1)):T=g?g.concat(R):[R],p(h,T)},I=(h,R)=>{p&&p(h,g===R?null:R)};return n.jsx(Ao,d({role:"group",className:B(C.root,r),ref:o,ownerState:m},v,{children:x.Children.map(a,h=>x.isValidElement(h)?x.cloneElement(h,{className:B(C.grouped,h.props.className),onChange:u?I:y,selected:h.props.selected===void 0?Oo(h.props.value,g):h.props.selected,size:h.props.size||f,fullWidth:c,color:h.props.color||l,disabled:h.props.disabled||i}):null)}))}),Go=Eo;var ge={},_o=fe;Object.defineProperty(ge,"__esModule",{value:!0});var Oe=ge.default=void 0,wo=_o(pe()),Wo=n,Uo=(0,wo.default)((0,Wo.jsx)("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"}),"AddTask");Oe=ge.default=Uo;const Vo=()=>{const e=re(),[t,o]=x.useState(""),s=r=>{o(r.target.value)},a=r=>{r.preventDefault(),t!==""&&(e(qe(t)),o(""))};return n.jsxs(X,{component:"form",onSubmit:a,sx:{display:{xs:"block",sm:"flex"},justifyContent:"space-between",width:"100%",my:6,p:1,borderRadius:1,backgroundColor:"#fff",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},children:[n.jsx(ve,{variant:"outlined",value:t,placeholder:"write todo...",onChange:s,size:"medium",sx:{flexGrow:1,mr:{sm:1},mb:{xs:1,sm:0},width:{xs:"100%",sm:"auto"}},InputProps:{startAdornment:n.jsx(to,{position:"start",children:n.jsx(Oe,{color:"primary"})})}}),n.jsx(De,{type:"submit",variant:"contained",color:"primary",sx:{px:9,width:{xs:"100%",sm:"auto"}},children:"Add"})]})},Fe=e=>e.filters.text,Ne=e=>e.filters.status,me=()=>{const e=M(Fe),t=M(Ne);return{textFilter:e,statusFilter:t}},Do=()=>{const e=He(),{textFilter:t}=me(),o=s=>{e(Ke(s.target.value))};return n.jsx(ve,{value:t,placeholder:"text filter...",onChange:o,fullWidth:!0})},qo=()=>{const e=re(),{statusFilter:t}=me(),o=(s,a)=>{e(Ye(a))};return n.jsxs(Go,{value:t,onChange:o,exclusive:!0,"aria-label":"status filter",children:[n.jsx(de,{value:Q.all,children:"All"}),n.jsx(de,{value:Q.active,children:"Active"}),n.jsx(de,{value:Q.completed,children:"Completed"})]})};var xe={},Ho=fe;Object.defineProperty(xe,"__esModule",{value:!0});var Me=xe.default=void 0,Ko=Ho(pe()),Yo=n,Jo=(0,Ko.default)((0,Yo.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");Me=xe.default=Jo;var be={},Qo=fe;Object.defineProperty(be,"__esModule",{value:!0});var Se=be.default=void 0,Xo=Qo(pe()),Zo=n,es=(0,Xo.default)((0,Zo.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");Se=be.default=es;const ts=({todo:{id:e,text:t,completed:o}})=>{const s=re(),[a,r]=x.useState(!1),[l,i]=x.useState(t),u=c=>{c.preventDefault(),s(Xe({id:e,text:l})),r(!1)};return n.jsx(ko,{sx:{pr:2},secondaryAction:n.jsxs(jt,{children:[n.jsx(Ce,{onClick:()=>r(!0),"aria-label":"edit",children:n.jsx(Se,{color:"primary"})}),n.jsx(Ce,{"data-id":e,onClick:()=>s(Je(e)),"aria-label":"delete",children:n.jsx(Me,{color:"primary"})})]}),children:a?n.jsx("form",{onSubmit:u,style:{width:"85%"},children:n.jsx(ve,{label:"Edit todo text, please",value:l,onChange:c=>i(c.target.value),sx:{width:{xs:"85%",sm:"100%"}}})}):n.jsxs(po,{sx:{px:{xs:0,sm:1}},role:void 0,id:e,onClick:()=>s(Qe({id:e,completed:o})),children:[n.jsx(it,{children:n.jsx(Ht,{checked:o})}),n.jsx(pt,{sx:{pr:{xs:5,sm:12}},children:n.jsx(A,{children:o?n.jsx("del",{children:l}):l})})]})})},ie=e=>e.todos.items,Ae=e=>e.todos.isLoading,Ee=e=>e.todos.error,os=ze([ie,Ne,Fe],(e,t,o)=>{let s=[];switch(t){case Q.active:s=e.filter(a=>a.completed===!1);break;case Q.completed:s=e.filter(a=>a.completed===!0);break;default:s=e;break}return o?s.filter(a=>{const r=o.trim().toLowerCase();return a.text.toLocaleLowerCase().includes(r)}):s}),ss=ze([ie],e=>e.reduce((t,o)=>(o.completed?t.completed+=1:t.active+=1,t),{active:0,completed:0})),Ge=()=>{const e=M(ie),t=M(os),o=M(Ae),s=M(Ee),a=M(ss);return{todos:e,visibleTodos:t,isLoading:o,error:s,count:a}},ns=()=>{const{todos:e,visibleTodos:t,isLoading:o}=Ge(),{statusFilter:s}=me();return n.jsxs(X,{sx:{position:"relative"},children:[o&&e.length>0&&n.jsx(X,{sx:{position:"absolute",top:0,left:0,width:"50px",display:"flex",justifyContent:"center",py:1},children:n.jsx(Te,{color:"primary",size:40,thickness:4})}),n.jsx(Ze,{sx:{width:"100%",pt:4},children:t.length>0?t.map(a=>n.jsx(ts,{todo:a},a.id)):n.jsxs(A,{variant:"subtitle1",sx:{pl:2},children:["there are no"," ",s===Q.all?"":s," todos"]})})]})},as=()=>{const{count:e}=Ge();return n.jsxs(X,{sx:{mb:{xs:2,sm:0}},children:[n.jsxs(A,{variant:"subtitle2",sx:{lineHeight:1.2},children:[e.active," active"]}),n.jsxs(A,{variant:"subtitle2",sx:{lineHeight:1.2},children:[e.completed," completed"]})]})},rs=()=>{const e=M(ie),t=M(Ae),o=M(Ee),s=re();return x.useEffect(()=>{s(et())},[s]),n.jsxs(n.Fragment,{children:[n.jsx(Vo,{}),t&&!o&&e.length===0&&n.jsx(X,{sx:{display:"flex",justifyContent:"center",pt:15},children:n.jsx(Te,{sx:{color:"#fff"},size:80,thickness:5})}),e.length>0?n.jsx(n.Fragment,{children:n.jsxs(tt,{elevation:7,sx:{p:1},children:[n.jsx(Do,{}),n.jsx(ns,{}),n.jsxs(X,{sx:{display:{xs:"block",sm:"flex"},justifyContent:"space-between",alignItems:"flex-end",position:"sticky",bottom:0,px:2,py:3,backgroundColor:"#fff"},children:[n.jsx(as,{}),n.jsx(qo,{})]})]})}):n.jsx(A,{variant:"h6",color:"#fff",children:"Your future plans..."})]})},cs=rs;export{cs as default};