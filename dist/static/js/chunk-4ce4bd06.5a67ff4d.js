(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce4bd06"],{1270:function(e,t,o){"use strict";o("4206")},"16f8":function(e,t,o){"use strict";o("70f9")},"3a10":function(e,t,o){"use strict";o.d(t,"f",(function(){return r})),o.d(t,"d",(function(){return l})),o.d(t,"k",(function(){return s})),o.d(t,"a",(function(){return i})),o.d(t,"h",(function(){return d})),o.d(t,"b",(function(){return u})),o.d(t,"g",(function(){return m})),o.d(t,"e",(function(){return b})),o.d(t,"c",(function(){return O})),o.d(t,"j",(function(){return p})),o.d(t,"i",(function(){return f}));var n=o("b775"),c=o("4328"),a=o.n(c);const r=e=>n["a"].post("/WebOrder/goods",a.a.stringify(e)).then(e=>e.data),l=e=>n["a"].post("/WebOrder/getOpenid",a.a.stringify(e)).then(e=>e),s=e=>n["a"].post("/WebOrder/addOrder",a.a.stringify(e)).then(e=>e),i=e=>n["a"].post("/webOrder/addOrder",a.a.stringify(e)).then(e=>e),d=e=>n["a"].post("/webOrder/queryOrder",a.a.stringify(e)).then(e=>e),u=e=>n["a"].post("/WebOrder/cannelOrder",a.a.stringify(e)).then(e=>e),m=e=>n["a"].post("/WebOrder/pay_success",a.a.stringify(e)).then(e=>e.data),b=e=>n["a"].post("/user/editRealname",a.a.stringify(e)).then(e=>e),O=e=>n["a"].post("/SmallAddress/getAddress",a.a.stringify(e)).then(e=>e.data),p=e=>n["a"].post("/SmallAddress/addAddress",a.a.stringify(e)).then(e=>e),f=e=>n["a"].post("/WebOrder/info",a.a.stringify(e)).then(e=>e.data)},4206:function(e,t,o){},"634a":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const c=e=>(Object(n["pushScopeId"])("data-v-1223daa6"),e=e(),Object(n["popScopeId"])(),e),a={class:"order-index"},r=c(()=>Object(n["createElementVNode"])("div",{class:"logo"},[Object(n["createElementVNode"])("img",{src:"https://img01.feimayun.com/wx/manage/kc/2022/2022-07/20220704160614_87883_170x40.png"})],-1)),l={class:"course-content mb-20"},s=c(()=>Object(n["createElementVNode"])("div",{class:"title"},"课程详情",-1)),i={class:"info"},d={class:"left mr-20"},u={class:"right"},m={class:"course-title"},b={class:"price"},O={class:"now-price mr-20"},p={class:"old-price"},f={key:0,class:"real-name mb-20"},j=c(()=>Object(n["createElementVNode"])("div",{class:"name-left"},[Object(n["createElementVNode"])("div",{class:"text mb-10"},"真实姓名（必填项）"),Object(n["createElementVNode"])("div",{class:"tips"},"请填写真实姓名")],-1)),h={class:"pay-price mb-20"},g={class:"price-old mb-25"},v=c(()=>Object(n["createElementVNode"])("div",{class:"text"},"课程单价",-1)),y={class:"value"},w={class:"price-new"},C=c(()=>Object(n["createElementVNode"])("div",{class:"text"},"限时特价",-1)),_={class:"value active"},V={class:"choose-pay mb-20"},N=c(()=>Object(n["createElementVNode"])("div",{class:"title mb-40"},"支付方式",-1)),B=c(()=>Object(n["createElementVNode"])("span",{class:"ml-10"},"微信支付",-1)),k=c(()=>Object(n["createElementVNode"])("span",{class:"ml-10"},"支付宝支付",-1)),E={key:1,class:"rules"},x=c(()=>Object(n["createElementVNode"])("span",null,"已阅读并同意",-1)),S={class:"pay-bottom-btn"},D={key:0,class:"left"},q=c(()=>Object(n["createElementVNode"])("div",{class:"text mb-10"},"特价倒计时",-1)),I=Object(n["createTextVNode"])("立即支付");function T(e,t,o,c,T,W){const P=Object(n["resolveComponent"])("van-nav-bar"),H=Object(n["resolveComponent"])("van-image"),R=Object(n["resolveComponent"])("van-field"),A=Object(n["resolveComponent"])("van-cell-group"),U=Object(n["resolveComponent"])("van-icon"),J=Object(n["resolveComponent"])("van-radio"),L=Object(n["resolveComponent"])("van-cell"),z=Object(n["resolveComponent"])("van-radio-group"),M=Object(n["resolveComponent"])("van-checkbox"),F=Object(n["resolveComponent"])("van-count-down"),$=Object(n["resolveComponent"])("van-button"),K=Object(n["resolveComponent"])("rule-popup");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[e.wechat?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(P,{key:0,title:e.course.channel_name,"safe-area-inset-top":"",fixed:"",placeholder:""},null,8,["title"])),Object(n["createElementVNode"])("main",null,[r,Object(n["createElementVNode"])("div",l,[s,Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(H,{fit:"cover",width:"100%",height:"100%",radius:".16rem",src:e.course.bg_url},null,8,["src"])]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",m,Object(n["toDisplayString"])(e.course.name),1),Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",O,"￥"+Object(n["toDisplayString"])(e.course.preferential_price),1),Object(n["createElementVNode"])("div",p,"￥"+Object(n["toDisplayString"])(e.course.price),1)])])])]),e.RULESHOW?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",f,[j,Object(n["createVNode"])(A,{inset:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(R,{modelValue:e.course.real_name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.course.real_name=t),placeholder:"请输入姓名",autocomplete:"off",maxlength:"12"},null,8,["modelValue"])]),_:1})])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",g,[v,Object(n["createElementVNode"])("div",y,"￥"+Object(n["toDisplayString"])(e.course.price),1)]),Object(n["createElementVNode"])("div",w,[C,Object(n["createElementVNode"])("div",_,"￥"+Object(n["toDisplayString"])(e.course.preferential_price),1)])]),Object(n["createElementVNode"])("div",V,[N,Object(n["createVNode"])(z,{modelValue:e.payChoose,"onUpdate:modelValue":t[3]||(t[3]=t=>e.payChoose=t)},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(A,{border:!1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(L,{clickable:"",onClick:t[1]||(t[1]=t=>e.payChoose="1"),border:!1},{title:Object(n["withCtx"])(()=>[Object(n["createVNode"])(U,{name:"wechat-pay",size:".52rem",color:"#09bb07"}),B]),"right-icon":Object(n["withCtx"])(()=>[Object(n["createVNode"])(J,{name:"1","checked-color":"#ff3737"})]),_:1}),e.wechat?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(L,{key:0,clickable:"",onClick:t[2]||(t[2]=t=>e.payChoose="2"),border:!1},{title:Object(n["withCtx"])(()=>[Object(n["createVNode"])(U,{name:"alipay",size:".52rem",color:"#108ee9"}),k]),"right-icon":Object(n["withCtx"])(()=>[Object(n["createVNode"])(J,{name:"2","checked-color":"#ff3737"})]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),e.RULESHOW?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",E,[Object(n["createVNode"])(M,{modelValue:e.checked,"onUpdate:modelValue":t[5]||(t[5]=t=>e.checked=t),"checked-color":"#ff3737","icon-size":".32rem"},{default:Object(n["withCtx"])(()=>[x,Object(n["createElementVNode"])("span",{class:"active",onClick:t[4]||(t[4]=Object(n["withModifiers"])(t=>e.ruleShow=!0,["stop"]))},"《光环课程支付协议》")]),_:1},8,["modelValue"])])):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",S,[e.course.end_time-e.course.system_time>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",D,[q,Object(n["createVNode"])(F,{time:1e3*(e.course.end_time-e.course.system_time),format:"DD 天 HH : mm : ss",onFinish:e.finish},null,8,["time","onFinish"])])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(e.course.end_time-e.course.system_time>0?"right-mini ":"right-lang")},[Object(n["createVNode"])($,{color:"#FF3737",round:"",block:"",onClick:e.handleBuy},{default:Object(n["withCtx"])(()=>[I]),_:1},8,["onClick"])],2)]),Object(n["createVNode"])(K,{show:e.ruleShow,rich:e.course.agreement_content,onOnClose:t[6]||(t[6]=t=>e.ruleShow=!1)},null,8,["show","rich"])])}var W=o("7336"),P=o("4360"),H=o("6c02"),R=o("6c43"),A=o("fa7c"),U=o("23f9"),J=o("6872"),L=o("1fba"),z=o("e5f6"),M=o("9b55"),F=o("b75f"),$=o("d243"),K=o("5aa0"),G=o("eec6"),Q=o("5f24"),X=o("2e1b"),Y=o("450f");const[Z,ee]=Object(L["a"])("action-bar"),te=Symbol(Z),oe={safeAreaInsetBottom:z["g"]};var ne=Object(n["defineComponent"])({name:Z,props:oe,setup(e,{slots:t}){const{linkChildren:o}=Object(Y["useChildren"])(te);return o(),()=>{var o;return Object(n["createVNode"])("div",{class:[ee(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[null==(o=t.default)?void 0:o.call(t)])}}});const ce=Object(U["a"])(ne);var ae=o("efd9"),re=o("4e5e");const[le,se]=Object(L["a"])("action-bar-button"),ie=Object(A["a"])({},re["a"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var de=Object(n["defineComponent"])({name:le,props:ie,setup(e,{slots:t}){const o=Object(re["b"])(),{parent:c,index:a}=Object(Y["useParent"])(te),r=Object(n["computed"])(()=>{if(c){const e=c.children[a.value-1];return!(e&&"isButton"in e)}}),l=Object(n["computed"])(()=>{if(c){const e=c.children[a.value+1];return!(e&&"isButton"in e)}});return Object(ae["a"])({isButton:!0}),()=>{const{type:c,icon:a,text:s,color:i,loading:d,disabled:u}=e;return Object(n["createVNode"])(X["a"],{class:se([c,{last:l.value,first:r.value}]),size:"large",type:c,icon:a,color:i,loading:d,disabled:u,onClick:o},{default:()=>[t.default?t.default():s]})}}});const ue=Object(U["a"])(de);const[me,be,Oe]=Object(L["a"])("dialog"),pe=Object(A["a"])({},G["b"],{title:String,theme:String,width:z["f"],message:[String,Function],callback:Function,allowHtml:Boolean,className:z["h"],transition:Object(z["e"])("van-dialog-bounce"),messageAlign:String,closeOnPopstate:z["g"],showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:z["g"],closeOnClickOverlay:Boolean}),fe=[...G["a"],"transition","closeOnPopstate"];var je=Object(n["defineComponent"])({name:me,props:pe,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:t,slots:o}){const c=Object(n["ref"])(),a=Object(n["reactive"])({confirm:!1,cancel:!1}),r=e=>t("update:show",e),l=t=>{var o;r(!1),null==(o=e.callback)||o.call(e,t)},s=o=>()=>{e.show&&(t(o),e.beforeClose?(a[o]=!0,Object(M["a"])(e.beforeClose,{args:[o],done(){l(o),a[o]=!1},canceled(){a[o]=!1}})):l(o))},i=s("cancel"),d=s("confirm"),u=Object(n["withKeys"])(o=>{var n,a;if(o.target!==(null==(a=null==(n=c.value)?void 0:n.popupRef)?void 0:a.value))return;const r={Enter:e.showConfirmButton?d:A["d"],Escape:e.showCancelButton?i:A["d"]};r[o.key](),t("keydown",o)},["enter","esc"]),m=()=>{const t=o.title?o.title():e.title;if(t)return Object(n["createVNode"])("div",{class:be("header",{isolated:!e.message&&!o.default})},[t])},b=t=>{const{message:o,allowHtml:c,messageAlign:a}=e,r=be("message",{"has-title":t,[a]:a}),l=Object(F["b"])(o)?o():o;return c&&"string"===typeof l?Object(n["createVNode"])("div",{class:r,innerHTML:l},null):Object(n["createVNode"])("div",{class:r},[l])},O=()=>{if(o.default)return Object(n["createVNode"])("div",{class:be("content")},[o.default()]);const{title:t,message:c,allowHtml:a}=e;if(c){const e=!(!t&&!o.title);return Object(n["createVNode"])("div",{key:a?1:0,class:be("content",{isolated:!e})},[b(e)])}},p=()=>Object(n["createVNode"])("div",{class:[$["d"],be("footer")]},[e.showCancelButton&&Object(n["createVNode"])(X["a"],{size:"large",text:e.cancelButtonText||Oe("cancel"),class:be("cancel"),style:{color:e.cancelButtonColor},loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:i},null),e.showConfirmButton&&Object(n["createVNode"])(X["a"],{size:"large",text:e.confirmButtonText||Oe("confirm"),class:[be("confirm"),{[$["b"]]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]),f=()=>Object(n["createVNode"])(ce,{class:be("footer")},{default:()=>[e.showCancelButton&&Object(n["createVNode"])(ue,{type:"warning",text:e.cancelButtonText||Oe("cancel"),class:be("cancel"),color:e.cancelButtonColor,loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:i},null),e.showConfirmButton&&Object(n["createVNode"])(ue,{type:"danger",text:e.confirmButtonText||Oe("confirm"),class:be("confirm"),color:e.confirmButtonColor,loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]}),j=()=>o.footer?o.footer():"round-button"===e.theme?f():p();return()=>{const{width:t,title:o,theme:a,message:l,className:s}=e;return Object(n["createVNode"])(Q["a"],Object(n["mergeProps"])({ref:c,role:"dialog",class:[be([a]),s],style:{width:Object(K["a"])(t)},tabindex:0,"aria-labelledby":o||l,onKeydown:u,"onUpdate:show":r},Object(A["e"])(e,fe)),{default:()=>[m(),O(),j()]})}}});let he;function ge(){const e={setup(){const{state:e,toggle:t}=Object(J["b"])();return()=>Object(n["createVNode"])(je,Object(n["mergeProps"])(e,{"onUpdate:show":t}),null)}};({instance:he}=Object(J["a"])(e))}function ve(e){return A["c"]?new Promise((t,o)=>{he||ge(),he.open(Object(A["a"])({},ve.currentOptions,e,{callback:e=>{("confirm"===e?t:o)(e)}}))}):Promise.resolve()}ve.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},ve.currentOptions=Object(A["a"])({},ve.defaultOptions),ve.alert=ve,ve.confirm=e=>ve(Object(A["a"])({showCancelButton:!0},e)),ve.close=()=>{he&&he.toggle(!1)},ve.setDefaultOptions=e=>{Object(A["a"])(ve.currentOptions,e)},ve.resetDefaultOptions=()=>{ve.currentOptions=Object(A["a"])({},ve.defaultOptions)},ve.Component=Object(U["a"])(je),ve.install=e=>{e.use(ve.Component),e.config.globalProperties.$dialog=ve};var ye=o("cf45"),we=o("3a10"),Ce=Object(n["defineComponent"])({name:"order-index",components:{rulePopup:W["a"]},setup(){const e=Object(H["d"])(),t=Object(H["c"])(),o=Object(n["ref"])(!1),c=Object(n["ref"])(!1),a=Object(n["ref"])("1"),r=Object(n["ref"])(""),l=Object(n["reactive"])({course:{}}),s=()=>{let{channel_id:o}=t.query;Object(we["f"])({channel_id:o,uid:P["a"].state.userInfo?P["a"].state.userInfo.id:""}).then(t=>{t&&(l.course=t,document.title=t.channel_name,0!==t.end_time&&t.end_time-t.system_time<=0&&e.push({name:"error",query:{type:"search",title:"当前活动已过期～"}}))})},i=o=>{Object(R["a"])({message:o+",跳转支付结果页..."}),setTimeout(()=>{e.push({name:"pay-success",query:{order_num:t.query.order_num||l.course.order_num}})},1500)},d=()=>{const t=localStorage.userInfo;if(t){if(!localStorage.OPENID&&h.value)return void m();if(!l.course.real_name)return void Object(R["a"])("请填写真实姓名");if(!o.value)return void Object(R["a"])("请同意支付协议");"1"===a.value?u():j()}else e.push({name:"login"})},u=()=>{h.value?localStorage.OPENID?b():m():O()},m=()=>{r.value=Object(ye["a"])("code"),null==r.value||""===r.value?window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9804ea25d5e208e5&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo#wechat_redirect`:Object(we["d"])({code:r.value}).then(e=>{1===e.status&&(localStorage.OPENID=e.data.openid,b())})},b=()=>{Object(we["k"])({channel_id:t.query.channel_id,uid:P["a"].state.userInfo.id,pay_method:2,if_wechat_browser:1,real_name:l.course.real_name,openid:localStorage.OPENID}).then(e=>{1===e.status?p(e.data):3===e.status?i(e.msg):4===e.status&&Object(R["a"])(e.msg)})},O=()=>{Object(we["k"])({channel_id:t.query.channel_id,uid:P["a"].state.userInfo.id,pay_method:2,if_wechat_browser:0,real_name:l.course.real_name,redirect_url:`${window.location.origin}/aura-h5/payment?channel_id=${t.query.channel_id}`}).then(e=>{1===e.status?window.location.href=e.data.mweb_url:3===e.status?i(e.msg):4===e.status&&Object(R["a"])(e.msg)})},p=e=>{var t={appId:e.appid,timeStamp:e.timestamp,nonceStr:e.noncestr,package:e.package,signType:"MD5",paySign:e.sign2,order_num:e.order_num};"undifine"==typeof WeixinJSBbridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",f(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",f(t)),document.attachEvent("OnWeixinJSBridgeReady",f(t))):f(t)},f=t=>{WeixinJSBridge.invoke("getBrandWCPayRequest",t,(function(o){"get_brand_wcpay_request:ok"==o.err_msg?(R["a"].success("支付成功"),setTimeout(()=>{e.push({name:"pay-success",query:{order_num:t.order_num}})},1500)):Object(we["b"])({order_num:t.order_num,uid:P["a"].state.userInfo.id}).then(e=>{1===e.status&&Object(R["a"])({message:"支付失败"})})}))},j=()=>{Object(we["a"])({channel_id:t.query.channel_id,uid:P["a"].state.userInfo.id,pay_method:1,real_name:l.course.real_name,redirect_url:window.origin+"/aura-h5/pay-success?order_num="}).then(e=>{if("string"===typeof e){const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t),document.forms[0].submit()}else"object"===typeof e&&3===e.status?i(e.msg):"object"===typeof e&&4===e.status&&Object(R["a"])(e.msg)})},h=Object(n["computed"])(()=>P["a"].state.isWechat),g=Object(n["computed"])(()=>!!localStorage.userInfo),v=()=>s();return Object(n["onMounted"])(()=>{s(),t.query.isAlert&&"1"===t.query.isAlert&&ve.confirm({title:"提示",message:"请确认微信支付是否已经完成",confirmButtonText:"已完成支付",cancelButtonText:"重新支付"}).then(()=>{Object(we["h"])({order_num:t.query.order_num}).then(o=>{1===o.status&&e.push({name:"pay-success",query:{order_num:t.query.order_num}})})}).catch(()=>{O()})}),{code:r,checked:o,ruleShow:c,payChoose:a,wechat:h,RULESHOW:g,...Object(n["toRefs"])(l),routerJump:i,handleBuy:d,getWxCode:m,wxpayRequest:b,wechatPay:u,getWxH5:O,getWxJSSDK:p,onBridgeReady:f,alipay:j,finish:v}}}),_e=(o("1270"),o("6b0d")),Ve=o.n(_e);const Ne=Ve()(Ce,[["render",T],["__scopeId","data-v-1223daa6"]]);t["default"]=Ne},"70f9":function(e,t,o){},7336:function(e,t,o){"use strict";var n=o("7a23");const c={class:"modify-name-content"},a=["innerHTML"],r={class:"handle-btn"},l=Object(n["createTextVNode"])("确定");function s(e,t,o,s,i,d){const u=Object(n["resolveComponent"])("van-button"),m=Object(n["resolveComponent"])("van-popup");return Object(n["openBlock"])(),Object(n["createBlock"])(m,{class:"modify-name",show:e.dialog,"onUpdate:show":t[0]||(t[0]=t=>e.dialog=t),round:"","close-on-click-overlay":!1,onClose:e.close},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",{class:"desc",innerHTML:e.rich},null,8,a),Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(u,{plain:"",type:"primary",onClick:e.close},{default:Object(n["withCtx"])(()=>[l]),_:1},8,["onClick"])])])]),_:1},8,["show","onClose"])}var i=Object(n["defineComponent"])({name:"modify-name-popup",props:{show:{type:Boolean,default:()=>!1},rich:{type:String,default:()=>""}},setup(e,{emit:t}){const o=Object(n["ref"])(!1),c=()=>t("onClose");return Object(n["watchEffect"])(()=>{o.value=e.show}),{dialog:o,close:c}}}),d=(o("16f8"),o("6b0d")),u=o.n(d);const m=u()(i,[["render",s],["__scopeId","data-v-eecd9488"]]);t["a"]=m},cf45:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return c}));const n=e=>{var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null},c=e=>{let t=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return!t.test(e)}}}]);