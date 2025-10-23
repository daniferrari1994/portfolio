import{r as f,j as e,F as x,o as u,T as p,v as T,H as L,w as O,B,x as Z}from"./ui-vendor-1yuyE_-C.js";import{u as P}from"./form-vendor-DK2_0F4V.js";import{d as j}from"./index-BWLdF9IR.js";import{u as w,i as V}from"./i18n-vendor-BIel8kYB.js";import{F as v,b as W,c as $,d as k}from"./icons-vendor-BFlFs9r8.js";import{p as I}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-20BP2a_X.js";const _=()=>{const{t:r}=w(),s=o=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)&&o.length<=254&&!o.includes("..")&&!o.startsWith(".")&&!o.endsWith(".");return f.useMemo(()=>({validateEmail:i=>{const a=i.trim();if(/\.\./.test(a))return r("validationErrors.email.consecutiveDots");if(!s(a))return r("validationErrors.email.invalid");const[m]=a.split("@");return/^[a-zA-Z0-9._-]+$/.test(m)?!0:r("validationErrors.email.invalidCharacters")},validateNameOrSurname:i=>{const a=i.trim().replace(/\s{2,}/g," "),m=/^[a-zA-ZÀ-ÿ., ]+$/;return/[A-Za-zÀ-ÿ]/.test(a)?a.length<2||a.length>50?r("validationErrors.nameOrSurname.length"):m.test(a)?!0:r("validationErrors.nameOrSurname.invalid"):r("validationErrors.nameOrSurname.invalid")},validatePhone:i=>{const a=i.trim().replace(/\s{2,}/g,""),m=/^[\d+]+$/;return/[0-9]/.test(a)?a.length<3||a.length>15?r("validationErrors.phone.length"):m.test(a)?!0:r("validationErrors.phone.invalid"):r("validationErrors.phone.invalid")},validateTextAreaNotEmpty:i=>i.trim()?!0:r("validationErrors.message.empty")}),[r])},H=()=>{const[r,s]=f.useState(!1),[l,o]=f.useState(null);return{sendEmail:async t=>{s(!0),o(null);try{const i=await fetch("https://portfolio-email-server-psi.vercel.app/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,message:t.message,language:t.language||"es"})}),a=await i.json();if(!i.ok)throw new Error(a.error||`Error HTTP: ${i.status}`);return{success:!0,message:a.message}}catch(d){const i=d instanceof Error?d.message:"Error desconocido al enviar el email";return o(i),{success:!1,error:i}}finally{s(!1)}},isLoading:r,error:l}},U={phone:e.jsx(v,{color:"#5ad3bd",icon:k,size:"xl"}),email:e.jsx(v,{color:"#5ad3bd",icon:$,size:"xl"}),address:e.jsx(v,{color:"#5ad3bd",icon:W,size:"xl"})},q=({data:r})=>{const{t:s}=w(),l=Object.entries(r);return e.jsx(x,{"data-testid":"flex-container",direction:"column",children:l.map(([o,c])=>e.jsxs(x,{alignItems:"center","data-testid":"aboutMe-container",direction:"row",my:"8px",children:[e.jsx(u,{alignContent:"center",bg:"#3333336e",borderRadius:"6px","data-testid":"box-container",h:"60px",textAlign:"center",w:"60px",children:U[o]}),e.jsxs(x,{direction:"column",mx:"12px",children:[e.jsx(p,{className:"aboutMe-data",color:"#909dad","data-testid":"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold",children:`${s(`contactLabels.${o}`)}:`}),e.jsx(p,{className:"aboutMe-text",color:"#ffffffea","data-testid":"aboutMe-text",display:"inline",fontSize:"md",children:c})]})]},o))})},G=j(u)`
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
`,J=j(u)`
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
`,D=j(u)`
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
`,g=({placeholder:r,register:s,error:l,errorMessage:o,maxLength:c,styles:t})=>e.jsxs(u,{fontFamily:"'Roboto Mono', monospace",children:[e.jsx(T,{bg:"#1d1d1d",borderRadius:"6px",color:"#459c8c",maxLength:c,placeholder:r,style:t,w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300},...s}),l&&e.jsx(p,{color:"#E53E3E",display:o?"block":"none",fontSize:"14px",m:"2px 8px","data-testid":"error-message",children:o})]}),ie=()=>{const[r,s]=f.useState(0),[l,o]=f.useState(null),c=1e3,{t}=w(),{register:d,handleSubmit:i,formState:{errors:a,isValid:m},reset:S}=P({mode:"onBlur"}),{validateEmail:N,validateNameOrSurname:E,validatePhone:z,validateTextAreaNotEmpty:F}=_(),{sendEmail:C,isLoading:M}=H(),A=n=>n.trim().replace(/\s{2,}/g," "),R=async n=>{try{const b=V.language,y=await C({firstName:n.firstName,lastName:n.lastName,email:n.email,phoneNumber:n.phoneNumber,message:n.textarea,language:b});y.success?(o({text:t("contact.feedback.success"),type:"success"}),S(),s(0)):o({text:y.error||t("contact.feedback.error"),type:"error"})}catch(b){console.error("Error enviando email:",b),o({text:t("contact.feedback.error"),type:"error"})}finally{setTimeout(()=>o(null),7e3)}},h=n=>{n.target.value=A(n.target.value)};return e.jsxs(J,{children:[e.jsxs(G,{children:[e.jsxs(x,{direction:"column",children:[e.jsx(L,{as:"h2",color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:4,size:"lg",children:t("contact.title")}),e.jsx(p,{mb:6,color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontSize:"sm",fontWeight:"300",children:t("contact.description")})]}),e.jsx(x,{w:{base:"100%",md:"480px"},children:e.jsxs("form",{onSubmit:i(R),children:[e.jsx(g,{placeholder:t("contact.input.name"),"data-testid":"input-firstName",register:d("firstName",{onBlur:h,validate:E}),error:a.firstName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(g,{placeholder:t("contact.input.lastname"),"data-testid":"input-lastName",register:d("lastName",{onBlur:h,validate:E}),error:a.lastName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(g,{placeholder:t("contact.input.phone"),"data-testid":"input-phonenumber",register:d("phoneNumber",{onBlur:h,validate:z}),error:a.phoneNumber,errorMessage:t("validationErrors.phone.invalid"),maxLength:15}),e.jsx(g,{placeholder:t("contact.input.email"),"data-testid":"input-email",register:d("email",{onBlur:h,validate:N}),error:a.email,errorMessage:t("validationErrors.email.invalid"),maxLength:50}),e.jsx(O,{bg:"#1d1d1d",borderRadius:"6px",color:"#ffffffea","data-testid":"input-textarea",fontFamily:"'Roboto Mono', monospace",maxLength:c,placeholder:t("contact.input.message"),required:!0,resize:"none",size:"xl",w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300,fontSize:"sm"},...d("textarea",{validate:F,onBlur:h,onChange:n=>s(n.target.value.length)})}),e.jsxs(x,{justify:"space-between",align:"center",mt:2,children:[e.jsx(u,{minW:"200px",children:e.jsx(p,{color:"red.500",fontSize:"sm",opacity:a.textarea?1:0,children:t("validationErrors.message.empty")})}),e.jsxs(p,{color:"gray.500",fontSize:"sm",children:[r,"/",c]})]}),e.jsx(B,{type:"submit",borderRadius:"50px",color:"#5ad3bd",colorScheme:"#333",disabled:!m,gap:"5px",variant:"outline",_hover:{bg:"#459c8c",color:"#333"},children:M?e.jsx(Z,{size:"sm",mr:2}):t("contact.input.button")}),l&&e.jsx(p,{color:l.type==="success"?"green.500":"red.500",fontSize:"sm",ml:4,children:l.text})]})})]}),e.jsx(D,{children:e.jsx(q,{data:I.data.contact})})]})};export{ie as default};
