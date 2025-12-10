import{r as p,j as e,F as u,o as h,T as x,v as Z,H as _,w as W,B as $,x as k}from"./ui-vendor-1yuyE_-C.js";import{u as H}from"./form-vendor-DK2_0F4V.js";import{d as y}from"./index-BiCS7MKx.js";import{u as N,i as U}from"./i18n-vendor-BIel8kYB.js";import{F as E,b as q,c as G,d as J}from"./icons-vendor-BFlFs9r8.js";import{p as D}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-20BP2a_X.js";const K=()=>{const{t:r}=N(),n=o=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)&&o.length<=254&&!o.includes("..")&&!o.startsWith(".")&&!o.endsWith(".");return p.useMemo(()=>({validateEmail:t=>{const a=t.trim();if(/\.\./.test(a))return r("validationErrors.email.consecutiveDots");if(!n(a))return r("validationErrors.email.invalid");const[d]=a.split("@");return/^[a-zA-Z0-9._-]+$/.test(d)?!0:r("validationErrors.email.invalidCharacters")},validateNameOrSurname:t=>{const a=t.trim().replace(/\s{2,}/g," "),d=/^[a-zA-ZÀ-ÿ., ]+$/;return/[A-Za-zÀ-ÿ]/.test(a)?a.length<2||a.length>50?r("validationErrors.nameOrSurname.length"):d.test(a)?!0:r("validationErrors.nameOrSurname.invalid"):r("validationErrors.nameOrSurname.invalid")},validatePhone:t=>{const a=t.trim().replace(/\s{2,}/g,""),d=/^[\d+]+$/;return/[0-9]/.test(a)?a.length<3||a.length>15?r("validationErrors.phone.length"):d.test(a)?!0:r("validationErrors.phone.invalid"):r("validationErrors.phone.invalid")},validateTextAreaNotEmpty:t=>{const a=t.trim();return!a||a.length<10?r("validationErrors.message.empty"):!0}}),[r])},Q={API_URL:"https://portfolio-email-service-indol.vercel.app"},X=()=>{const[r,n]=p.useState(!1),[l,o]=p.useState(null);return{sendEmail:async s=>{n(!0),o(null);try{const m=Q.API_URL,t={firstName:s.firstName,lastName:s.lastName,email:s.email,phoneNumber:s.phoneNumber,message:s.message,language:s.language||"es"},a=await fetch(`${m}/api/send-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),d=await a.json();if(!a.ok)throw new Error(d.error||`Error HTTP: ${a.status}`);return{success:!0,message:d.message}}catch(m){const t=m instanceof Error?m.message:"Error desconocido al enviar el email";return o(t),{success:!1,error:t}}finally{n(!1)}},isLoading:r,error:l}},Y={phone:e.jsx(E,{color:"#5ad3bd",icon:J,size:"xl"}),email:e.jsx(E,{color:"#5ad3bd",icon:G,size:"xl"}),address:e.jsx(E,{color:"#5ad3bd",icon:q,size:"xl"})},ee=({data:r})=>{const{t:n}=N(),l=Object.entries(r);return e.jsx(u,{"data-testid":"flex-container",direction:"column",children:l.map(([o,c])=>e.jsxs(u,{alignItems:"center","data-testid":"aboutMe-container",direction:"row",my:"8px",children:[e.jsx(h,{alignContent:"center",bg:"#3333336e",borderRadius:"6px","data-testid":"box-container",h:"60px",textAlign:"center",w:"60px",children:Y[o]}),e.jsxs(u,{direction:"column",mx:"12px",children:[e.jsx(x,{className:"aboutMe-data",color:"#909dad","data-testid":"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold",children:`${n(`contactLabels.${o}`)}:`}),e.jsx(x,{className:"aboutMe-text",color:"#ffffffea","data-testid":"aboutMe-text",display:"inline",fontSize:"md",children:c})]})]},o))})},te=y(h)`
  align-self: center;
  background-color: #3333339e;
  border-radius: 15px;
  height: fit-content;
  justify-content: center;
  max-width: 580px;
  padding: 20px 50px 60px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 20px 25px 40px;
    margin-bottom: 30px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    max-width: 95%;
    padding: 15px 20px 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px 30px;
    margin-bottom: 25px;
  }

  @media (max-width: 360px) {
    padding: 12px 15px 25px;
    margin-bottom: 20px;
  }
`,ae=y(h)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    position: relative;
    top: 150px;
  }

  @media (max-width: 580px) {
    top: 170px;
  }

  /* Surface Duo específico */
  @media (max-width: 540px) {
    top: 190px;
  }

  @media (max-width: 480px) {
    top: 200px;
    padding: 15px 10px 30px;
  }

  /* iPhone SE específico */
  @media (max-width: 375px) {
    top: 270px;
  }

  /* Samsung Galaxy S8 específico */
  @media (max-width: 360px) {
    top: 280px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    overflow: hidden;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    top: 80px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`,ie=y(h)`
  margin-left: 70px;
  width: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin-left: 0;
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`,j=({placeholder:r,register:n,error:l,errorMessage:o,maxLength:c,styles:s})=>e.jsxs(h,{fontFamily:"'Roboto Mono', monospace",children:[e.jsx(Z,{bg:"#1d1d1d",borderRadius:"6px",color:"#459c8c",maxLength:c,placeholder:r,style:s,w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300},...n}),l&&e.jsx(x,{color:"#E53E3E",display:o?"block":"none",fontSize:"14px",m:"2px 8px","data-testid":"error-message",children:o})]}),xe=()=>{const[r,n]=p.useState(0),[l,o]=p.useState(null),[c,s]=p.useState(!1),m=1e3,{t}=N(),{register:a,handleSubmit:d,formState:{errors:f},reset:C,watch:M}=H({mode:"onBlur"}),{validateEmail:S,validateNameOrSurname:v,validatePhone:z,validateTextAreaNotEmpty:F}=K(),{sendEmail:R,isLoading:L}=X(),A=M(),T=i=>{if(!i.firstName||!i.lastName||!i.phoneNumber||!i.email||!i.textarea)return!1;const b=v(i.firstName)===!0,w=v(i.lastName)===!0,O=z(i.phoneNumber)===!0,P=S(i.email)===!0,I=F(i.textarea)===!0;return b&&w&&O&&P&&I};p.useEffect(()=>{const i=T(A);s(i)},[A]);const V=i=>i.trim().replace(/\s{2,}/g," "),B=async i=>{try{const b=U.language,w=await R({firstName:i.firstName,lastName:i.lastName,email:i.email,phoneNumber:i.phoneNumber,message:i.textarea,language:b});w.success?(o({text:t("contact.feedback.success"),type:"success"}),C(),n(0)):o({text:w.error||t("contact.feedback.error"),type:"error"})}catch(b){console.error("Error enviando email:",b),o({text:t("contact.feedback.error"),type:"error"})}finally{setTimeout(()=>o(null),7e3)}},g=i=>{i.target.value=V(i.target.value)};return e.jsxs(ae,{children:[e.jsxs(te,{children:[e.jsxs(u,{direction:"column",children:[e.jsx(_,{as:"h2",color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:4,size:"lg",children:t("contact.title")}),e.jsx(x,{mb:6,color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontSize:"sm",fontWeight:"300",children:t("contact.description")})]}),e.jsx(u,{w:{base:"100%",md:"480px"},children:e.jsxs("form",{onSubmit:d(B),children:[e.jsx(j,{placeholder:t("contact.input.name"),"data-testid":"input-firstName",register:a("firstName",{onBlur:g,validate:v}),error:f.firstName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(j,{placeholder:t("contact.input.lastname"),"data-testid":"input-lastName",register:a("lastName",{onBlur:g,validate:v}),error:f.lastName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(j,{placeholder:t("contact.input.phone"),"data-testid":"input-phonenumber",register:a("phoneNumber",{onBlur:g,validate:z}),error:f.phoneNumber,errorMessage:t("validationErrors.phone.invalid"),maxLength:15}),e.jsx(j,{placeholder:t("contact.input.email"),"data-testid":"input-email",register:a("email",{onBlur:g,validate:S}),error:f.email,errorMessage:t("validationErrors.email.invalid"),maxLength:50}),e.jsx(W,{bg:"#1d1d1d",borderRadius:"6px",color:"#ffffffea","data-testid":"input-textarea",fontFamily:"'Roboto Mono', monospace",maxLength:m,placeholder:t("contact.input.message"),required:!0,resize:"none",size:"xl",w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300,fontSize:"sm"},...a("textarea",{validate:F,onBlur:g,onChange:i=>n(i.target.value.length)})}),e.jsxs(u,{justify:"space-between",align:"center",mt:2,children:[e.jsx(h,{minW:"200px",children:e.jsx(x,{color:"red.500",fontSize:"sm",opacity:f.textarea?1:0,children:t("validationErrors.message.empty")})}),e.jsxs(x,{color:"gray.500",fontSize:"sm",children:[r,"/",m]})]}),e.jsx($,{type:"submit",borderRadius:"50px",color:"#5ad3bd",colorScheme:"#333",disabled:!c,gap:"5px",variant:"outline",_hover:{bg:"#459c8c",color:"#333"},children:L?e.jsx(k,{size:"sm",mr:2}):t("contact.input.button")}),l&&e.jsx(x,{color:l.type==="success"?"green.500":"red.500",fontSize:"sm",ml:4,children:l.text})]})})]}),e.jsx(ie,{children:e.jsx(ee,{data:D.data.contact})})]})};export{xe as default};
