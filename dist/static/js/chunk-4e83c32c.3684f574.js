(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e83c32c"],{"0523":function(e,t,n){},"16f8":function(e,t,n){"use strict";n("70f9")},"3a10":function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"k",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return O})),n.d(t,"j",(function(){return p})),n.d(t,"i",(function(){return f}));var o=n("b775"),c=n("4328"),a=n.n(c);const r=e=>o["a"].post("/WebOrder/goods",a.a.stringify(e)).then(e=>e.data),l=e=>o["a"].post("/WebOrder/getOpenid",a.a.stringify(e)).then(e=>e),s=e=>o["a"].post("/WebOrder/addOrder",a.a.stringify(e)).then(e=>e),i=e=>o["a"].post("/webOrder/addOrder",a.a.stringify(e)).then(e=>e),d=e=>o["a"].post("/webOrder/queryOrder",a.a.stringify(e)).then(e=>e),u=e=>o["a"].post("/WebOrder/cannelOrder",a.a.stringify(e)).then(e=>e),b=e=>o["a"].post("/WebOrder/pay_success",a.a.stringify(e)).then(e=>e.data),m=e=>o["a"].post("/user/editRealname",a.a.stringify(e)).then(e=>e),O=e=>o["a"].post("/SmallAddress/getAddress",a.a.stringify(e)).then(e=>e.data),p=e=>o["a"].post("/SmallAddress/addAddress",a.a.stringify(e)).then(e=>e),f=e=>o["a"].post("/WebOrder/info",a.a.stringify(e)).then(e=>e.data)},"634a":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=e=>(Object(o["pushScopeId"])("data-v-6bfe61cc"),e=e(),Object(o["popScopeId"])(),e),a={class:"order-index"},r={class:"course-content mb-20"},l=c(()=>Object(o["createElementVNode"])("div",{class:"title"},"课程详情",-1)),s={class:"info"},i={class:"left mr-20"},d={class:"right"},u={class:"course-title"},b={class:"price"},m={class:"now-price mr-20"},O={class:"old-price"},p={class:"real-name mb-20"},f=c(()=>Object(o["createElementVNode"])("div",{class:"name-left"},[Object(o["createElementVNode"])("div",{class:"text mb-10"},"真实姓名（必填项）"),Object(o["createElementVNode"])("div",{class:"tips"},"请填写真实姓名")],-1)),j={class:"pay-price mb-20"},h={class:"price-old mb-25"},v=c(()=>Object(o["createElementVNode"])("div",{class:"text"},"课程单价",-1)),g={class:"value"},y={class:"price-new"},w=c(()=>Object(o["createElementVNode"])("div",{class:"text"},"限时特价",-1)),C={class:"value active"},_={class:"choose-pay mb-20"},V=c(()=>Object(o["createElementVNode"])("div",{class:"title mb-40"},"支付方式",-1)),N=c(()=>Object(o["createElementVNode"])("span",{class:"ml-10"},"微信支付",-1)),B=c(()=>Object(o["createElementVNode"])("span",{class:"ml-10"},"支付宝支付",-1)),k={class:"rules"},x=c(()=>Object(o["createElementVNode"])("span",null,"已阅读并同意",-1)),E={class:"pay-bottom-btn"},S={key:0,class:"left"},D=c(()=>Object(o["createElementVNode"])("div",{class:"text mb-10"},"特价倒计时",-1)),q=Object(o["createTextVNode"])("立即支付");function T(e,t,n,c,T,I){const W=Object(o["resolveComponent"])("van-nav-bar"),P=Object(o["resolveComponent"])("van-image"),A=Object(o["resolveComponent"])("van-field"),H=Object(o["resolveComponent"])("van-cell-group"),R=Object(o["resolveComponent"])("van-icon"),J=Object(o["resolveComponent"])("van-radio"),z=Object(o["resolveComponent"])("van-cell"),M=Object(o["resolveComponent"])("van-radio-group"),U=Object(o["resolveComponent"])("van-checkbox"),F=Object(o["resolveComponent"])("van-count-down"),L=Object(o["resolveComponent"])("van-button"),$=Object(o["resolveComponent"])("rule-popup");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[e.wechat?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(W,{key:0,title:e.course.channel_name,"safe-area-inset-top":"",fixed:"",placeholder:""},null,8,["title"])),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("div",r,[l,Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(P,{fit:"cover",width:"100%",height:"100%",radius:".16rem",src:e.course.bg_url},null,8,["src"])]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",u,Object(o["toDisplayString"])(e.course.name),1),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",m,"￥"+Object(o["toDisplayString"])(e.course.rprice),1),Object(o["createElementVNode"])("div",O,"￥"+Object(o["toDisplayString"])(e.course.price),1)])])])]),Object(o["createElementVNode"])("div",p,[f,Object(o["createVNode"])(H,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(A,{modelValue:e.course.real_name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.course.real_name=t),placeholder:"请输入姓名",autocomplete:"off",maxlength:"12"},null,8,["modelValue"])]),_:1})]),Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("div",h,[v,Object(o["createElementVNode"])("div",g,"￥"+Object(o["toDisplayString"])(e.course.price),1)]),Object(o["createElementVNode"])("div",y,[w,Object(o["createElementVNode"])("div",C,"￥"+Object(o["toDisplayString"])(e.course.preferential_price),1)])]),Object(o["createElementVNode"])("div",_,[V,Object(o["createVNode"])(M,{modelValue:e.payChoose,"onUpdate:modelValue":t[3]||(t[3]=t=>e.payChoose=t)},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(H,{border:!1},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(z,{clickable:"",onClick:t[1]||(t[1]=t=>e.payChoose="1"),border:!1},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(R,{name:"wechat-pay",size:".52rem",color:"#09bb07"}),N]),"right-icon":Object(o["withCtx"])(()=>[Object(o["createVNode"])(J,{name:"1","checked-color":"#ff3737"})]),_:1}),e.wechat?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(z,{key:0,clickable:"",onClick:t[2]||(t[2]=t=>e.payChoose="2"),border:!1},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(R,{name:"alipay",size:".52rem",color:"#108ee9"}),B]),"right-icon":Object(o["withCtx"])(()=>[Object(o["createVNode"])(J,{name:"2","checked-color":"#ff3737"})]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),Object(o["createElementVNode"])("div",k,[Object(o["createVNode"])(U,{modelValue:e.checked,"onUpdate:modelValue":t[5]||(t[5]=t=>e.checked=t),"checked-color":"#ff3737","icon-size":".32rem"},{default:Object(o["withCtx"])(()=>[x,Object(o["createElementVNode"])("span",{class:"active",onClick:t[4]||(t[4]=Object(o["withModifiers"])(t=>e.ruleShow=!0,["stop"]))},"《光环课程支付协议》")]),_:1},8,["modelValue"])])]),Object(o["createElementVNode"])("div",E,[e.course.end_time-e.course.system_time>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,[D,Object(o["createVNode"])(F,{time:1e3*(e.course.end_time-e.course.system_time),format:"DD 天 HH : mm : ss",onFinish:e.finish},null,8,["time","onFinish"])])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.course.end_time-e.course.system_time>0?"right-mini ":"right-lang")},[Object(o["createVNode"])(L,{color:"#FF3737",round:"",block:"",onClick:e.handleBuy},{default:Object(o["withCtx"])(()=>[q]),_:1},8,["onClick"])],2)]),Object(o["createVNode"])($,{show:e.ruleShow,rich:e.course.agreement_content,onOnClose:t[6]||(t[6]=t=>e.ruleShow=!1)},null,8,["show","rich"])])}var I=n("7336"),W=n("4360"),P=n("6c02"),A=n("6c43"),H=n("fa7c"),R=n("23f9"),J=n("6872"),z=n("1fba"),M=n("e5f6"),U=n("9b55"),F=n("b75f"),L=n("d243"),$=n("5aa0"),K=n("eec6"),G=n("5f24"),Q=n("2e1b"),X=n("450f");const[Y,Z]=Object(z["a"])("action-bar"),ee=Symbol(Y),te={safeAreaInsetBottom:M["g"]};var ne=Object(o["defineComponent"])({name:Y,props:te,setup(e,{slots:t}){const{linkChildren:n}=Object(X["useChildren"])(ee);return n(),()=>{var n;return Object(o["createVNode"])("div",{class:[Z(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[null==(n=t.default)?void 0:n.call(t)])}}});const oe=Object(R["a"])(ne);var ce=n("efd9"),ae=n("4e5e");const[re,le]=Object(z["a"])("action-bar-button"),se=Object(H["a"])({},ae["a"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var ie=Object(o["defineComponent"])({name:re,props:se,setup(e,{slots:t}){const n=Object(ae["b"])(),{parent:c,index:a}=Object(X["useParent"])(ee),r=Object(o["computed"])(()=>{if(c){const e=c.children[a.value-1];return!(e&&"isButton"in e)}}),l=Object(o["computed"])(()=>{if(c){const e=c.children[a.value+1];return!(e&&"isButton"in e)}});return Object(ce["a"])({isButton:!0}),()=>{const{type:c,icon:a,text:s,color:i,loading:d,disabled:u}=e;return Object(o["createVNode"])(Q["a"],{class:le([c,{last:l.value,first:r.value}]),size:"large",type:c,icon:a,color:i,loading:d,disabled:u,onClick:n},{default:()=>[t.default?t.default():s]})}}});const de=Object(R["a"])(ie);const[ue,be,me]=Object(z["a"])("dialog"),Oe=Object(H["a"])({},K["b"],{title:String,theme:String,width:M["f"],message:[String,Function],callback:Function,allowHtml:Boolean,className:M["h"],transition:Object(M["e"])("van-dialog-bounce"),messageAlign:String,closeOnPopstate:M["g"],showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:M["g"],closeOnClickOverlay:Boolean}),pe=[...K["a"],"transition","closeOnPopstate"];var fe=Object(o["defineComponent"])({name:ue,props:Oe,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:t,slots:n}){const c=Object(o["ref"])(),a=Object(o["reactive"])({confirm:!1,cancel:!1}),r=e=>t("update:show",e),l=t=>{var n;r(!1),null==(n=e.callback)||n.call(e,t)},s=n=>()=>{e.show&&(t(n),e.beforeClose?(a[n]=!0,Object(U["a"])(e.beforeClose,{args:[n],done(){l(n),a[n]=!1},canceled(){a[n]=!1}})):l(n))},i=s("cancel"),d=s("confirm"),u=Object(o["withKeys"])(n=>{var o,a;if(n.target!==(null==(a=null==(o=c.value)?void 0:o.popupRef)?void 0:a.value))return;const r={Enter:e.showConfirmButton?d:H["d"],Escape:e.showCancelButton?i:H["d"]};r[n.key](),t("keydown",n)},["enter","esc"]),b=()=>{const t=n.title?n.title():e.title;if(t)return Object(o["createVNode"])("div",{class:be("header",{isolated:!e.message&&!n.default})},[t])},m=t=>{const{message:n,allowHtml:c,messageAlign:a}=e,r=be("message",{"has-title":t,[a]:a}),l=Object(F["b"])(n)?n():n;return c&&"string"===typeof l?Object(o["createVNode"])("div",{class:r,innerHTML:l},null):Object(o["createVNode"])("div",{class:r},[l])},O=()=>{if(n.default)return Object(o["createVNode"])("div",{class:be("content")},[n.default()]);const{title:t,message:c,allowHtml:a}=e;if(c){const e=!(!t&&!n.title);return Object(o["createVNode"])("div",{key:a?1:0,class:be("content",{isolated:!e})},[m(e)])}},p=()=>Object(o["createVNode"])("div",{class:[L["d"],be("footer")]},[e.showCancelButton&&Object(o["createVNode"])(Q["a"],{size:"large",text:e.cancelButtonText||me("cancel"),class:be("cancel"),style:{color:e.cancelButtonColor},loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:i},null),e.showConfirmButton&&Object(o["createVNode"])(Q["a"],{size:"large",text:e.confirmButtonText||me("confirm"),class:[be("confirm"),{[L["b"]]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]),f=()=>Object(o["createVNode"])(oe,{class:be("footer")},{default:()=>[e.showCancelButton&&Object(o["createVNode"])(de,{type:"warning",text:e.cancelButtonText||me("cancel"),class:be("cancel"),color:e.cancelButtonColor,loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:i},null),e.showConfirmButton&&Object(o["createVNode"])(de,{type:"danger",text:e.confirmButtonText||me("confirm"),class:be("confirm"),color:e.confirmButtonColor,loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]}),j=()=>n.footer?n.footer():"round-button"===e.theme?f():p();return()=>{const{width:t,title:n,theme:a,message:l,className:s}=e;return Object(o["createVNode"])(G["a"],Object(o["mergeProps"])({ref:c,role:"dialog",class:[be([a]),s],style:{width:Object($["a"])(t)},tabindex:0,"aria-labelledby":n||l,onKeydown:u,"onUpdate:show":r},Object(H["e"])(e,pe)),{default:()=>[b(),O(),j()]})}}});let je;function he(){const e={setup(){const{state:e,toggle:t}=Object(J["b"])();return()=>Object(o["createVNode"])(fe,Object(o["mergeProps"])(e,{"onUpdate:show":t}),null)}};({instance:je}=Object(J["a"])(e))}function ve(e){return H["c"]?new Promise((t,n)=>{je||he(),je.open(Object(H["a"])({},ve.currentOptions,e,{callback:e=>{("confirm"===e?t:n)(e)}}))}):Promise.resolve()}ve.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},ve.currentOptions=Object(H["a"])({},ve.defaultOptions),ve.alert=ve,ve.confirm=e=>ve(Object(H["a"])({showCancelButton:!0},e)),ve.close=()=>{je&&je.toggle(!1)},ve.setDefaultOptions=e=>{Object(H["a"])(ve.currentOptions,e)},ve.resetDefaultOptions=()=>{ve.currentOptions=Object(H["a"])({},ve.defaultOptions)},ve.Component=Object(R["a"])(fe),ve.install=e=>{e.use(ve.Component),e.config.globalProperties.$dialog=ve};var ge=n("cf45"),ye=n("3a10"),we=Object(o["defineComponent"])({name:"order-index",components:{rulePopup:I["a"]},setup(){const e=Object(P["d"])(),t=Object(P["c"])(),n=Object(o["ref"])(!1),c=Object(o["ref"])(!1),a=Object(o["ref"])("1"),r=Object(o["ref"])(""),l=Object(o["reactive"])({course:{}}),s=()=>{let{channel_id:n}=t.query;Object(ye["f"])({channel_id:n,uid:W["a"].state.userInfo?W["a"].state.userInfo.id:""}).then(t=>{t&&(l.course=t,document.title=t.channel_name,0!==t.end_time&&t.end_time-t.system_time<=0&&e.push({name:"error",query:{type:"search",title:"当前活动已过期～"}}))})},i=n=>{Object(A["a"])({message:n+",跳转支付结果页..."}),setTimeout(()=>{e.push({name:"pay-success",query:{order_num:t.query.order_num||l.course.order_num}})},1500)},d=()=>{const t=localStorage.userInfo;if(t){if(!l.course.real_name)return void Object(A["a"])("请填写真实姓名");if(!n.value)return void Object(A["a"])("请同意支付协议");"1"===a.value?u():j()}else e.push({name:"login"})},u=()=>{h.value?localStorage.OPENID?m():b():O()},b=()=>{r.value=Object(ge["a"])("code"),null==r.value||""===r.value?window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2aa465e8ca0f0986&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo#wechat_redirect`:Object(ye["d"])({code:r.value}).then(e=>{1===e.status&&(localStorage.OPENID=e.data.openid,m())})},m=()=>{Object(ye["k"])({channel_id:t.query.channel_id,uid:W["a"].state.userInfo.id,pay_method:2,if_wechat_browser:1,real_name:l.course.real_name,openid:localStorage.OPENID}).then(e=>{1===e.status?p(e.data):3===e.status?i(e.msg):4===e.status&&Object(A["a"])(e.msg)})},O=()=>{Object(ye["k"])({channel_id:t.query.channel_id,uid:W["a"].state.userInfo.id,pay_method:2,if_wechat_browser:0,real_name:l.course.real_name,redirect_url:`${window.location.origin}/aura-h5/payment?channel_id=${t.query.channel_id}`}).then(e=>{1===e.status?window.location.href=e.data.mweb_url:3===e.status?i(e.msg):4===e.status&&Object(A["a"])(e.msg)})},p=e=>{var t={appId:e.appid,timeStamp:e.timestamp,nonceStr:e.noncestr,package:e.package,signType:"MD5",paySign:e.sign2,order_num:e.order_num};"undifine"==typeof WeixinJSBbridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",f(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",f(t)),document.attachEvent("OnWeixinJSBridgeReady",f(t))):f(t)},f=t=>{WeixinJSBridge.invoke("getBrandWCPayRequest",t,(function(n){"get_brand_wcpay_request:ok"==n.err_msg?(A["a"].success("支付成功"),setTimeout(()=>{e.push({name:"pay-success",query:{order_num:t.order_num}})},1500)):Object(ye["b"])({order_num:t.order_num,uid:W["a"].state.userInfo.id}).then(e=>{1===e.status&&Object(A["a"])({message:"支付失败"})})}))},j=()=>{Object(ye["a"])({channel_id:t.query.channel_id,uid:W["a"].state.userInfo.id,pay_method:1,real_name:l.course.real_name,redirect_url:window.origin+"/aura-h5/pay-success?order_num="}).then(e=>{if("string"===typeof e){const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t),document.forms[0].submit()}else"object"===typeof e&&3===e.status?i(e.msg):"object"===typeof e&&4===e.status&&Object(A["a"])(e.msg)})},h=Object(o["computed"])(()=>W["a"].state.isWechat),v=()=>s();return Object(o["onMounted"])(()=>{s(),t.query.isAlert&&"1"===t.query.isAlert&&ve.confirm({title:"提示",message:"请确认微信支付是否已经完成",confirmButtonText:"已完成支付",cancelButtonText:"重新支付"}).then(()=>{Object(ye["h"])({order_num:t.query.order_num}).then(n=>{1===n.status&&e.push({name:"pay-success",query:{order_num:t.query.order_num}})})}).catch(()=>{O()})}),{code:r,checked:n,ruleShow:c,payChoose:a,wechat:h,...Object(o["toRefs"])(l),routerJump:i,handleBuy:d,getWxCode:b,wxpayRequest:m,wechatPay:u,getWxH5:O,getWxJSSDK:p,onBridgeReady:f,alipay:j,finish:v}}}),Ce=(n("88ea"),n("6b0d")),_e=n.n(Ce);const Ve=_e()(we,[["render",T],["__scopeId","data-v-6bfe61cc"]]);t["default"]=Ve},"70f9":function(e,t,n){},7336:function(e,t,n){"use strict";var o=n("7a23");const c={class:"modify-name-content"},a=["innerHTML"],r={class:"handle-btn"},l=Object(o["createTextVNode"])("确定");function s(e,t,n,s,i,d){const u=Object(o["resolveComponent"])("van-button"),b=Object(o["resolveComponent"])("van-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{class:"modify-name",show:e.dialog,"onUpdate:show":t[0]||(t[0]=t=>e.dialog=t),round:"","close-on-click-overlay":!1,onClose:e.close},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",{class:"desc",innerHTML:e.rich},null,8,a),Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(u,{plain:"",type:"primary",onClick:e.close},{default:Object(o["withCtx"])(()=>[l]),_:1},8,["onClick"])])])]),_:1},8,["show","onClose"])}var i=Object(o["defineComponent"])({name:"modify-name-popup",props:{show:{type:Boolean,default:()=>!1},rich:{type:String,default:()=>""}},setup(e,{emit:t}){const n=Object(o["ref"])(!1),c=()=>t("onClose");return Object(o["watchEffect"])(()=>{n.value=e.show}),{dialog:n,close:c}}}),d=(n("16f8"),n("6b0d")),u=n.n(d);const b=u()(i,[["render",s],["__scopeId","data-v-eecd9488"]]);t["a"]=b},"88ea":function(e,t,n){"use strict";n("0523")},cf45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));const o=e=>{var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},c=e=>{let t=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return!t.test(e)}}}]);