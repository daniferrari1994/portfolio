import{r as g,j as e,F as m,o as p,T as c,v as B,H as I,w as L,B as _,x as O}from"./ui-vendor-1yuyE_-C.js";import{u as T}from"./form-vendor-DK2_0F4V.js";import{e as W}from"./utils-vendor-CfAUkKb3.js";import{d as j}from"./index-DRdrMt-M.js";import{u as w,i as Z}from"./i18n-vendor-BIel8kYB.js";import{F as v,b as V,c as P,d as $}from"./icons-vendor-BFlFs9r8.js";import{p as k}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";const q=()=>{const{t:i}=w(),s=o=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)&&o.length<=254&&!o.includes("..")&&!o.startsWith(".")&&!o.endsWith(".");return g.useMemo(()=>({validateEmail:t=>{const a=t.trim();if(/\.\./.test(a))return i("validationErrors.email.consecutiveDots");if(!s(a))return i("validationErrors.email.invalid");const[l]=a.split("@");return/^[a-zA-Z0-9._-]+$/.test(l)?!0:i("validationErrors.email.invalidCharacters")},validateNameOrSurname:t=>{const a=t.trim().replace(/\s{2,}/g," "),l=/^[a-zA-ZÀ-ÿ., ]+$/;return/[A-Za-zÀ-ÿ]/.test(a)?a.length<2||a.length>50?i("validationErrors.nameOrSurname.length"):l.test(a)?!0:i("validationErrors.nameOrSurname.invalid"):i("validationErrors.nameOrSurname.invalid")},validatePhone:t=>{const a=t.trim().replace(/\s{2,}/g,""),l=/^[\d+]+$/;return/[0-9]/.test(a)?a.length<3||a.length>15?i("validationErrors.phone.length"):l.test(a)?!0:i("validationErrors.phone.invalid"):i("validationErrors.phone.invalid")},validateTextAreaNotEmpty:t=>t.trim()?!0:i("validationErrors.message.empty")}),[i])},H={phone:e.jsx(v,{color:"#5ad3bd",icon:$,size:"xl"}),email:e.jsx(v,{color:"#5ad3bd",icon:P,size:"xl"}),address:e.jsx(v,{color:"#5ad3bd",icon:V,size:"xl"})},G=({data:i})=>{const{t:s}=w(),r=Object.entries(i);return e.jsx(m,{"data-testid":"flex-container",direction:"column",children:r.map(([o,d])=>e.jsxs(m,{alignItems:"center","data-testid":"aboutMe-container",direction:"row",my:"8px",children:[e.jsx(p,{alignContent:"center",bg:"#3333336e",borderRadius:"6px","data-testid":"box-container",h:"60px",textAlign:"center",w:"60px",children:H[o]}),e.jsxs(m,{direction:"column",mx:"12px",children:[e.jsx(c,{className:"aboutMe-data",color:"#909dad","data-testid":"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold",children:`${s(`contactLabels.${o}`)}:`}),e.jsx(c,{className:"aboutMe-text",color:"#ffffffea","data-testid":"aboutMe-text",display:"inline",fontSize:"md",children:d})]})]},o))})},U=j(p)`
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
`,D=j(p)`
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
`,J=j(p)`
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
`,f=({placeholder:i,register:s,error:r,errorMessage:o,maxLength:d,styles:x})=>e.jsxs(p,{fontFamily:"'Roboto Mono', monospace",children:[e.jsx(B,{bg:"#1d1d1d",borderRadius:"6px",color:"#459c8c",maxLength:d,placeholder:i,style:x,w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300},...s}),r&&e.jsx(c,{color:"#E53E3E",display:o?"block":"none",fontSize:"14px",m:"2px 8px","data-testid":"error-message",children:o})]}),ne=()=>{const[i,s]=g.useState(0),[r,o]=g.useState(null),[d,x]=g.useState(!1),b=1e3,{t}=w(),{register:a,handleSubmit:l,formState:{errors:u,isValid:E},reset:N}=T({mode:"onBlur"}),{validateEmail:z,validateNameOrSurname:y,validatePhone:F,validateTextAreaNotEmpty:A}=q(),C=n=>n.trim().replace(/\s{2,}/g," "),M=async n=>{x(!0);try{const R=Z.language==="en"?"template_9qrrjvn":"template_2oqsezt";await W.send("service_o1b6fuo",R,{firstName:n.firstName,lastName:n.lastName,email:n.email,phoneNumber:n.phoneNumber,message:n.textarea},"0bWIr1jUN6IgRa1N6"),o({text:t("contact.feedback.success"),type:"success"}),N()}catch(S){console.error(S),o({text:t("contact.feedback.error"),type:"error"})}finally{x(!1),setTimeout(()=>o(null),7e3)}},h=n=>{n.target.value=C(n.target.value)};return e.jsxs(D,{children:[e.jsxs(U,{children:[e.jsxs(m,{direction:"column",children:[e.jsx(I,{as:"h2",color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:4,size:"lg",children:t("contact.title")}),e.jsx(c,{mb:6,color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontSize:"sm",fontWeight:"300",children:t("contact.description")})]}),e.jsx(m,{w:{base:"100%",md:"480px"},children:e.jsxs("form",{onSubmit:l(M),children:[e.jsx(f,{placeholder:t("contact.input.name"),"data-testid":"input-firstName",register:a("firstName",{onBlur:h,validate:y}),error:u.firstName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(f,{placeholder:t("contact.input.lastname"),"data-testid":"input-lastName",register:a("lastName",{onBlur:h,validate:y}),error:u.lastName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(f,{placeholder:t("contact.input.phone"),"data-testid":"input-phonenumber",register:a("phoneNumber",{onBlur:h,validate:F}),error:u.phoneNumber,errorMessage:t("validationErrors.phone.invalid"),maxLength:15}),e.jsx(f,{placeholder:t("contact.input.email"),"data-testid":"input-email",register:a("email",{onBlur:h,validate:z}),error:u.email,errorMessage:t("validationErrors.email.invalid"),maxLength:50}),e.jsx(L,{bg:"#1d1d1d",borderRadius:"6px",color:"#ffffffea","data-testid":"input-textarea",fontFamily:"'Roboto Mono', monospace",maxLength:b,placeholder:t("contact.input.message"),required:!0,resize:"none",size:"xl",w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300,fontSize:"sm"},...a("textarea",{validate:A,onBlur:h,onChange:n=>s(n.target.value.length)})}),e.jsxs(m,{justify:"space-between",align:"center",mt:2,children:[e.jsx(p,{minW:"200px",children:e.jsx(c,{color:"red.500",fontSize:"sm",opacity:u.textarea?1:0,children:t("validationErrors.message.empty")})}),e.jsxs(c,{color:"gray.500",fontSize:"sm",children:[i,"/",b]})]}),e.jsx(_,{type:"submit",borderRadius:"50px",color:"#5ad3bd",colorScheme:"#333",disabled:!E,gap:"5px",variant:"outline",_hover:{bg:"#459c8c",color:"#333"},children:d?e.jsx(O,{size:"sm",mr:2}):t("contact.input.button")}),r&&e.jsx(c,{color:r.type==="success"?"green.500":"red.500",fontSize:"sm",ml:4,children:r.text})]})})]}),e.jsx(J,{children:e.jsx(G,{data:k.data.contact})})]})};export{ne as default};
