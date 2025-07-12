"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[668],{9287:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});var o=s(6540),i=s(9415),a=s(752),r=s(3198),n=s(982),l=s(6188),c=s(7875),d=s(6287),p=s(1250);const u=(0,p.I4)(d.az)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  margin-left: 40px;

  @keyframes rotateBorder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: block;
    background: conic-gradient(
      from 90deg,
      #2c645a,
      #5ad3bd 46%,
      transparent 46%
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #fff calc(100% - 3px + 1px)
    );
    animation: rotateBorder 80s linear infinite;
  }

  .imageProfile {
    position: relative;
    z-index: 2;
    border-radius: 100%;
    object-fit: cover;
    padding: 5px;
  }
`;var m=s(874);const g=(0,p.Ay)(m.a)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`,f=p.Ay.span`
  color: #ffffffea;
  max-width: 500px;
`,h=p.Ay.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;

  .highlighted-text {
    color: #5ad3bd;
  }
`,E=(0,p.Ay)(m.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`,y=(0,p.Ay)(m.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
`,b=(0,p.Ay)(m.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`,v=p.Ay.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;
`;var T=s(2389),x=s(2218),S=s(5968);const k=(0,p.Ay)(x.s)`
  align-items: center;
  direction: row;
  margin: 0 6px;
`,O=(0,p.Ay)(S.E)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;
`,w=(0,p.Ay)(m.a)`
  line-height: 1.2;
  text-align: start;
`,I=({duration:e=2e3,targetNumber:t,titleBottom:s,titleTop:i})=>{const[a,r]=(0,o.useState)(0),n=t/(e/50);return(0,o.useEffect)((()=>{let e=0;const s=setInterval((()=>{e+=n,e>=t?(clearInterval(s),r(t)):r(Math.floor(e))}),50);return()=>clearInterval(s)}),[n,t]),o.createElement(k,{"data-testid":"counter"},o.createElement(O,{fontSize:"5xl"},a),o.createElement(x.s,{alignItems:"center",direction:"column",mx:6},o.createElement(w,{lineHeight:"1.2",textAlign:"start"},o.createElement(S.E,{color:"#ffffffea",fontSize:"lg"},i),o.createElement(S.E,{color:"#ffffffea",fontSize:"lg"},s))))},D=()=>{const{t:e}=(0,T.Bd)(),t=[{targetNumber:4,titleBottom:e("counters.experience"),titleTop:e("counters.yearsOfExperience")},{targetNumber:3,titleBottom:e("counters.completed"),titleTop:e("counters.projects")},{targetNumber:6,titleBottom:e("counters.mastered"),titleTop:e("counters.technologies")},{targetNumber:2e3,titleBottom:e("counters.commitsTitle"),titleTop:e("counters.commits")}];return o.createElement(x.s,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",p:4},t.map(((e,t)=>o.createElement(I,{key:t,targetNumber:e.targetNumber,titleBottom:e.titleBottom,titleTop:e.titleTop}))))},R=s.p+"assets/src/assets/profileImage/profilePicture.png";var A=s(9726),P=s(2635),F=s(3720),C=s(6664),N=s(2080),M=s(2449),U=s(76),B=((0,C.y)("toast").parts("group","root","title","description","actionTrigger","closeTrigger").build(),(e,t)=>e.getById(`toast-group:${t}`)),L=e=>e.getById((e=>`toast:${e.id}`)(e)),V={info:5e3,error:5e3,success:2e3,loading:1/0,DEFAULT:5e3};function H(e,t){return e??V[t]??V.DEFAULT}(0,N.Op)({props:({props:e})=>({dir:"ltr",id:(0,U.uR)(),...e,store:e.store}),initialState:({prop:e})=>e("store").attrs.overlap?"overlap":"stack",refs:()=>({lastFocusedEl:null,isFocusWithin:!1,dismissableCleanup:void 0}),context:({bindable:e})=>({toasts:e((()=>({defaultValue:[],sync:!0,hash:e=>e.map((e=>e.id)).join(",")}))),heights:e((()=>({defaultValue:[],sync:!0})))}),computed:{count:({context:e})=>e.get("toasts").length,overlap:({prop:e})=>e("store").attrs.overlap,placement:({prop:e})=>e("store").attrs.placement},effects:["subscribeToStore","trackDocumentVisibility","trackHotKeyPress"],watch({track:e,context:t,action:s}){e([()=>t.hash("toasts")],(()=>{queueMicrotask((()=>{s(["collapsedIfEmpty","setDismissableBranch"])}))}))},exit:["clearDismissableBranch","clearLastFocusedEl"],on:{"DOC.HOTKEY":{actions:["focusRegionEl"]},"REGION.BLUR":[{guard:"isOverlapping",target:"overlap",actions:["collapseToasts","resumeToasts","restoreLastFocusedEl"]},{target:"stack",actions:["resumeToasts","restoreLastFocusedEl"]}],"TOAST.REMOVE":{actions:["removeToast","removeHeight"]},"TOAST.PAUSE":{actions:["pauseToasts"]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:"isOverlapping",target:"overlap",actions:["resumeToasts","collapseToasts"]},{actions:["resumeToasts"]}],"REGION.OVERLAP":{target:"overlap",actions:["collapseToasts"]},"REGION.FOCUS":{actions:["setLastFocusedEl","pauseToasts"]},"REGION.POINTER_ENTER":{actions:["pauseToasts"]}}},overlap:{on:{"REGION.STACK":{target:"stack",actions:["expandToasts"]},"REGION.POINTER_ENTER":{target:"stack",actions:["pauseToasts","expandToasts"]},"REGION.FOCUS":{target:"stack",actions:["setLastFocusedEl","pauseToasts","expandToasts"]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e("overlap")},effects:{subscribeToStore:({context:e,prop:t})=>t("store").subscribe((t=>{t.dismiss?e.set("toasts",(e=>e.filter((e=>e.id!==t.id)))):e.set("toasts",(e=>{const s=e.findIndex((e=>e.id===t.id));return-1!==s?[...e.slice(0,s),{...e[s],...t},...e.slice(s+1)]:[t,...e]}))})),trackHotKeyPress:({prop:e,send:t})=>(0,F.kn)(document,"keydown",(s=>{const{hotkey:o}=e("store").attrs;o.every((e=>s[e]||s.code===e))&&t({type:"DOC.HOTKEY"})}),{capture:!0}),trackDocumentVisibility({prop:e,send:t,scope:s}){const{pauseOnPageIdle:o}=e("store").attrs;if(!o)return;const i=s.getDoc();return(0,F.kn)(i,"visibilitychange",(()=>{const e="hidden"===i.visibilityState;t({type:e?"PAUSE_ALL":"RESUME_ALL"})}))}},actions:{setDismissableBranch({refs:e,context:t,computed:s,scope:o}){const i=t.get("toasts"),a=s("placement"),r=i.length>0;if(!r)return void e.get("dismissableCleanup")?.();if(r&&e.get("dismissableCleanup"))return;const n=(0,M.S)((()=>B(o,a)),{defer:!0});e.set("dismissableCleanup",n)},clearDismissableBranch({refs:e}){e.get("dismissableCleanup")?.()},focusRegionEl({scope:e,computed:t}){queueMicrotask((()=>{B(e,t("placement"))?.focus()}))},pauseToasts({prop:e}){e("store").pause()},resumeToasts({prop:e}){e("store").resume()},expandToasts({prop:e}){e("store").expand()},collapseToasts({prop:e}){e("store").collapse()},removeToast({prop:e,event:t}){e("store").remove(t.id)},removeHeight({event:e,context:t}){null!=e?.id&&queueMicrotask((()=>{t.set("heights",(t=>t.filter((t=>t.id!==e.id))))}))},collapsedIfEmpty({send:e,computed:t}){!t("overlap")||t("count")>1||e({type:"REGION.OVERLAP"})},setLastFocusedEl({refs:e,event:t}){!e.get("isFocusWithin")&&t.target&&(e.set("isFocusWithin",!0),e.set("lastFocusedEl",t.target))},restoreLastFocusedEl({refs:e}){e.get("lastFocusedEl")&&(e.get("lastFocusedEl")?.focus({preventScroll:!0}),e.set("lastFocusedEl",null),e.set("isFocusWithin",!1))},clearLastFocusedEl({refs:e}){e.get("lastFocusedEl")&&(e.get("lastFocusedEl")?.focus({preventScroll:!0}),e.set("lastFocusedEl",null),e.set("isFocusWithin",!1))}}}});var{not:z}=(0,N.b6)();function j(e,t){const{id:s,height:o}=t;e.context.set("heights",(e=>e.find((e=>e.id===s))?e.map((e=>e.id===s?{...e,height:o}:e)):[{id:s,height:o},...e]))}(0,N.Op)({props:({props:e})=>((0,U.Pe)(e,["id","type","parent","removeDelay"],"toast"),{closable:!0,...e,duration:H(e.duration,e.type)}),initialState:({prop:e})=>"loading"===e("type")||e("duration")===1/0?"visible:persist":"visible",context:({prop:e,bindable:t})=>({remainingTime:t((()=>({defaultValue:H(e("duration"),e("type"))}))),createdAt:t((()=>({defaultValue:Date.now()}))),mounted:t((()=>({defaultValue:!1}))),initialHeight:t((()=>({defaultValue:0})))}),refs:()=>({closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}),computed:{zIndex:({prop:e})=>{const t=e("parent").context.get("toasts"),s=t.findIndex((t=>t.id===e("id")));return t.length-s},height:({prop:e})=>{const t=e("parent").context.get("heights").find((t=>t.id===e("id")));return t?.height??0},heightIndex:({prop:e})=>e("parent").context.get("heights").findIndex((t=>t.id===e("id"))),frontmost:({prop:e})=>0===e("index"),heightBefore:({prop:e})=>{const t=e("parent").context.get("heights"),s=t.findIndex((t=>t.id===e("id")));return t.reduce(((e,t,o)=>o>=s?e:e+t.height),0)},shouldPersist:({prop:e})=>"loading"===e("type")||e("duration")===1/0},watch({track:e,prop:t,send:s}){e([()=>t("message")],(()=>{const e=t("message");e&&s({type:e,src:"programmatic"})})),e([()=>t("type"),()=>t("duration")],(()=>{s({type:"UPDATE"})}))},on:{UPDATE:[{guard:"shouldPersist",target:"visible:persist",actions:["resetCloseTimer"]},{target:"visible:updating",actions:["resetCloseTimer"]}],MEASURE:{actions:["measureHeight"]}},entry:["setMounted","measureHeight","invokeOnVisible"],effects:["trackHeight"],states:{"visible:updating":{tags:["visible","updating"],effects:["waitForNextTick"],on:{SHOW:{target:"visible"}}},"visible:persist":{tags:["visible","paused"],on:{RESUME:{guard:z("isLoadingType"),target:"visible",actions:["setCloseTimer"]},DISMISS:{target:"dismissing"}}},visible:{tags:["visible"],effects:["waitForDuration"],on:{DISMISS:{target:"dismissing"},PAUSE:{target:"visible:persist",actions:["syncRemainingTime"]}}},dismissing:{entry:["invokeOnDismiss"],effects:["waitForRemoveDelay"],on:{REMOVE:{target:"unmounted",actions:["notifyParentToRemove"]}}},unmounted:{entry:["invokeOnUnmount"]}},implementations:{effects:{waitForRemoveDelay:({prop:e,send:t})=>(0,U.bK)((()=>{t({type:"REMOVE",src:"timer"})}),e("removeDelay")),waitForDuration({send:e,context:t,computed:s}){if(!s("shouldPersist"))return(0,U.bK)((()=>{e({type:"DISMISS",src:"timer"})}),t.get("remainingTime"))},waitForNextTick:({send:e})=>(0,U.bK)((()=>{e({type:"SHOW",src:"timer"})}),0),trackHeight({scope:e,prop:t}){let s;return(0,F.er)((()=>{const o=L(e);if(!o)return;const i=new(e.getWin().MutationObserver)((()=>{const e=o.style.height;o.style.height="auto";const s=o.getBoundingClientRect().height;o.style.height=e;const i={id:t("id"),height:s};j(t("parent"),i)}));i.observe(o,{childList:!0,subtree:!0,characterData:!0}),s=()=>i.disconnect()})),()=>s?.()}},guards:{isLoadingType:({prop:e})=>"loading"===e("type"),shouldPersist:({computed:e})=>e("shouldPersist")},actions:{setMounted({context:e}){(0,F.er)((()=>{e.set("mounted",!0)}))},measureHeight({scope:e,prop:t,context:s}){queueMicrotask((()=>{const o=L(e);if(!o)return;const i=o.style.height;o.style.height="auto";const a=o.getBoundingClientRect().height;o.style.height=i,s.set("initialHeight",a);const r={id:t("id"),height:a};j(t("parent"),r)}))},setCloseTimer({refs:e}){e.set("closeTimerStartTime",Date.now())},resetCloseTimer({context:e,refs:t,prop:s}){t.set("closeTimerStartTime",Date.now()),e.set("remainingTime",H(s("duration"),s("type")))},syncRemainingTime({context:e,refs:t}){e.set("remainingTime",(e=>{const s=t.get("closeTimerStartTime"),o=Date.now()-s;return t.set("lastCloseStartTimerStartTime",Date.now()),e-o}))},notifyParentToRemove({prop:e}){e("parent").send({type:"TOAST.REMOVE",id:e("id")})},invokeOnDismiss({prop:e,event:t}){e("onStatusChange")?.({status:"dismissing",src:t.src})},invokeOnUnmount({prop:e}){e("onStatusChange")?.({status:"unmounted"})},invokeOnVisible({prop:e}){e("onStatusChange")?.({status:"visible"})}}}});var _=e=>e&&"object"==typeof e&&"ok"in e&&"boolean"==typeof e.ok&&"status"in e&&"number"==typeof e.status;const K=function(e){const t=(s=e,o={placement:"bottom",overlap:!1,max:24,gap:16,offsets:"1rem",hotkey:["altKey","KeyT"],removeDelay:200,pauseOnPageIdle:!0},{...o,...(0,U.oE)(s)});var s,o;let i=[],a=[],r=new Set,n=[];const l=e=>(i.forEach((t=>t(e))),e),c=e=>{const s=e.id??`toast:${(0,U.uR)()}`,o=a.find((e=>e.id===s));return r.has(s)&&r.delete(s),o?a=a.map((t=>t.id===s?l({...t,...e,id:s}):t)):(e=>{a.length>=t.max?n.push(e):(l(e),a.unshift(e))})({id:s,duration:t.duration,removeDelay:t.removeDelay,type:"info",...e,stacked:!t.overlap,gap:t.gap}),s},d=e=>(r.add(e),e?(i.forEach((t=>t({id:e,dismiss:!0}))),a=a.filter((t=>t.id!==e)),(()=>{for(;n.length>0&&a.length<t.max;){const e=n.shift();e&&(l(e),a.unshift(e))}})()):(a.forEach((e=>{i.forEach((t=>t({id:e.id,dismiss:!0})))})),a=[],n=[]),e);return{attrs:t,subscribe:e=>(i.push(e),()=>{const t=i.indexOf(e);i.splice(t,1)}),create:c,update:(e,t)=>c({id:e,...t}),remove:d,dismiss:e=>{a=null!=e?a.map((t=>t.id===e?l({...t,message:"DISMISS"}):t)):a.map((e=>l({...e,message:"DISMISS"})))},error:e=>c({...e,type:"error"}),success:e=>c({...e,type:"success"}),info:e=>c({...e,type:"info"}),warning:e=>c({...e,type:"warning"}),loading:e=>c({...e,type:"loading"}),getVisibleToasts:()=>a.filter((e=>!r.has(e.id))),getCount:()=>a.length,promise:(e,t,s={})=>{if(!t)return;let o;void 0!==t.loading&&(o=c({...s,...t.loading,promise:e,type:"loading"}));let i,a=void 0!==o;const r=(0,U.Jg)(e).then((async e=>{if(i=["resolve",e],_(e)&&!e.ok){a=!1;const i=(0,U.Jg)(t.error,`HTTP Error! status: ${e.status}`);c({...s,...i,id:o,type:"error"})}else if(void 0!==t.success){a=!1;const i=(0,U.Jg)(t.success,e);c({...s,...i,id:o,type:"success"})}})).catch((async e=>{if(i=["reject",e],void 0!==t.error){a=!1;const i=(0,U.Jg)(t.error,e);c({...s,...i,id:o,type:"error"})}})).finally((()=>{a&&(d(o),o=void 0),t.finally?.()}));return{id:o,unwrap:()=>new Promise(((e,t)=>r.then((()=>"reject"===i[0]?t(i[1]):e(i[1]))).catch(t)))}},pause:e=>{a=null!=e?a.map((t=>t.id===e?l({...t,message:"PAUSE"}):t)):a.map((e=>l({...e,message:"PAUSE"})))},resume:e=>{a=null!=e?a.map((t=>t.id===e?l({...t,message:"RESUME"}):t)):a.map((e=>l({...e,message:"RESUME"})))},isVisible:e=>!r.has(e)&&!!a.find((t=>t.id===e)),isDismissed:e=>r.has(e),expand:()=>{a=a.map((e=>l({...e,stacked:!0})))},collapse:()=>{a=a.map((e=>l({...e,stacked:!1})))}}}({placement:"bottom-end",pauseOnPageIdle:!0}),G=()=>{const{t:e}=(0,T.Bd)();return o.createElement(E,null,o.createElement(y,null,o.createElement(g,null,o.createElement(v,null,e("home.subtitle")),o.createElement(h,{"data-testid":"home-title"},e("home.title"),o.createElement("br",null),o.createElement("span",{className:"highlighted-text"},A.p.UU)),o.createElement(f,null,e("home.description")),o.createElement(b,null,o.createElement(i.$,{borderRadius:"50px",color:"#5ad3bd",colorScheme:"gray","data-testid":"btn-download-cv",gap:"5px",onClick:async()=>{const t="en"===P.Ay.language?"cvDanFerrariEngOP.pdf":"cvDanFerrariEspOP.pdf",s=`pdf/${t}`;try{if(!(await fetch(s,{method:"HEAD"})).ok)throw new Error("Archivo no encontrado");const e=document.createElement("a");e.href=s,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(t){K.create({title:e("home.cvDownloadError")||"No se pudo descargar el archivo.",type:"info"})}},variant:"outline",_hover:{bg:"#459c8c",color:"#333"}},e("home.downloadCV"),o.createElement(n.g,{icon:l.cbP})),o.createElement(a.N,{"data-testid":"link-github",href:"https://github.com/daniferrari1994",target:"_blank",rel:"noopener noreferrer"},o.createElement(i.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},o.createElement(n.g,{color:"#5ad3bd",icon:c.Vz1,size:"lg"}))),o.createElement(a.N,{"data-testid":"link-linkedin",href:"https://www.linkedin.com/in/dan-ferrari/",target:"_blank",rel:"noopener noreferrer"},o.createElement(i.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},o.createElement(n.g,{color:"#5ad3bd",icon:c.IAJ,size:"lg"}))))),o.createElement(u,null,o.createElement(r._,{alt:"Profile Picture",boxShadow:"lg",boxSize:"350px",className:"imageProfile","data-testid":"profile-image",src:R}))),o.createElement(D,null))}},9726:e=>{e.exports=JSON.parse('{"p":{"jq":{"address":"Buenos Aires, Argentina","email":"daniferrari1994@gmail.com","phone":"(+54) 011 2725 8396"},"cx":{"languages":["English","Spanish"],"nationality":"Argentina"},"UU":"Dan Ferrari"}}')}}]);