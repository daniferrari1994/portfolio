import{r as f,j as e,F as x,o as u,T as p,v as L,H as T,w as O,B,x as P}from"./ui-vendor-1yuyE_-C.js";import{u as I}from"./form-vendor-DK2_0F4V.js";import{d as j}from"./index-BdYDgIFI.js";import{u as w,i as Z}from"./i18n-vendor-BIel8kYB.js";import{F as v,b as _,c as V,d as W}from"./icons-vendor-BFlFs9r8.js";import{p as $}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-20BP2a_X.js";const k=()=>{const{t:i}=w(),s=o=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)&&o.length<=254&&!o.includes("..")&&!o.startsWith(".")&&!o.endsWith(".");return f.useMemo(()=>({validateEmail:n=>{const a=n.trim();if(/\.\./.test(a))return i("validationErrors.email.consecutiveDots");if(!s(a))return i("validationErrors.email.invalid");const[c]=a.split("@");return/^[a-zA-Z0-9._-]+$/.test(c)?!0:i("validationErrors.email.invalidCharacters")},validateNameOrSurname:n=>{const a=n.trim().replace(/\s{2,}/g," "),c=/^[a-zA-ZÀ-ÿ., ]+$/;return/[A-Za-zÀ-ÿ]/.test(a)?a.length<2||a.length>50?i("validationErrors.nameOrSurname.length"):c.test(a)?!0:i("validationErrors.nameOrSurname.invalid"):i("validationErrors.nameOrSurname.invalid")},validatePhone:n=>{const a=n.trim().replace(/\s{2,}/g,""),c=/^[\d+]+$/;return/[0-9]/.test(a)?a.length<3||a.length>15?i("validationErrors.phone.length"):c.test(a)?!0:i("validationErrors.phone.invalid"):i("validationErrors.phone.invalid")},validateTextAreaNotEmpty:n=>n.trim()?!0:i("validationErrors.message.empty")}),[i])},H={API_URL:"https://portfolio-email-service-indol.vercel.app"},U=()=>{const[i,s]=f.useState(!1),[d,o]=f.useState(null);return{sendEmail:async t=>{s(!0),o(null);try{const l=H.API_URL,n={firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,message:t.message,language:t.language||"es"},a=await fetch(`${l}/api/send-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=await a.json();if(!a.ok)throw new Error(c.error||`Error HTTP: ${a.status}`);return{success:!0,message:c.message}}catch(l){const n=l instanceof Error?l.message:"Error desconocido al enviar el email";return o(n),{success:!1,error:n}}finally{s(!1)}},isLoading:i,error:d}},q={phone:e.jsx(v,{color:"#5ad3bd",icon:W,size:"xl"}),email:e.jsx(v,{color:"#5ad3bd",icon:V,size:"xl"}),address:e.jsx(v,{color:"#5ad3bd",icon:_,size:"xl"})},G=({data:i})=>{const{t:s}=w(),d=Object.entries(i);return e.jsx(x,{"data-testid":"flex-container",direction:"column",children:d.map(([o,m])=>e.jsxs(x,{alignItems:"center","data-testid":"aboutMe-container",direction:"row",my:"8px",children:[e.jsx(u,{alignContent:"center",bg:"#3333336e",borderRadius:"6px","data-testid":"box-container",h:"60px",textAlign:"center",w:"60px",children:q[o]}),e.jsxs(x,{direction:"column",mx:"12px",children:[e.jsx(p,{className:"aboutMe-data",color:"#909dad","data-testid":"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold",children:`${s(`contactLabels.${o}`)}:`}),e.jsx(p,{className:"aboutMe-text",color:"#ffffffea","data-testid":"aboutMe-text",display:"inline",fontSize:"md",children:m})]})]},o))})},J=j(u)`
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
`,D=j(u)`
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
`,K=j(u)`
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
`,g=({placeholder:i,register:s,error:d,errorMessage:o,maxLength:m,styles:t})=>e.jsxs(u,{fontFamily:"'Roboto Mono', monospace",children:[e.jsx(L,{bg:"#1d1d1d",borderRadius:"6px",color:"#459c8c",maxLength:m,placeholder:i,style:t,w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300},...s}),d&&e.jsx(p,{color:"#E53E3E",display:o?"block":"none",fontSize:"14px",m:"2px 8px","data-testid":"error-message",children:o})]}),re=()=>{const[i,s]=f.useState(0),[d,o]=f.useState(null),m=1e3,{t}=w(),{register:l,handleSubmit:n,formState:{errors:a,isValid:c},reset:S}=I({mode:"onBlur"}),{validateEmail:N,validateNameOrSurname:y,validatePhone:z,validateTextAreaNotEmpty:F}=k(),{sendEmail:A,isLoading:C}=U(),M=r=>r.trim().replace(/\s{2,}/g," "),R=async r=>{try{const b=Z.language,E=await A({firstName:r.firstName,lastName:r.lastName,email:r.email,phoneNumber:r.phoneNumber,message:r.textarea,language:b});E.success?(o({text:t("contact.feedback.success"),type:"success"}),S(),s(0)):o({text:E.error||t("contact.feedback.error"),type:"error"})}catch(b){console.error("Error enviando email:",b),o({text:t("contact.feedback.error"),type:"error"})}finally{setTimeout(()=>o(null),7e3)}},h=r=>{r.target.value=M(r.target.value)};return e.jsxs(D,{children:[e.jsxs(J,{children:[e.jsxs(x,{direction:"column",children:[e.jsx(T,{as:"h2",color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:4,size:"lg",children:t("contact.title")}),e.jsx(p,{mb:6,color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontSize:"sm",fontWeight:"300",children:t("contact.description")})]}),e.jsx(x,{w:{base:"100%",md:"480px"},children:e.jsxs("form",{onSubmit:n(R),children:[e.jsx(g,{placeholder:t("contact.input.name"),"data-testid":"input-firstName",register:l("firstName",{onBlur:h,validate:y}),error:a.firstName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(g,{placeholder:t("contact.input.lastname"),"data-testid":"input-lastName",register:l("lastName",{onBlur:h,validate:y}),error:a.lastName,errorMessage:t("validationErrors.nameOrSurname.invalid"),maxLength:50}),e.jsx(g,{placeholder:t("contact.input.phone"),"data-testid":"input-phonenumber",register:l("phoneNumber",{onBlur:h,validate:z}),error:a.phoneNumber,errorMessage:t("validationErrors.phone.invalid"),maxLength:15}),e.jsx(g,{placeholder:t("contact.input.email"),"data-testid":"input-email",register:l("email",{onBlur:h,validate:N}),error:a.email,errorMessage:t("validationErrors.email.invalid"),maxLength:50}),e.jsx(O,{bg:"#1d1d1d",borderRadius:"6px",color:"#ffffffea","data-testid":"input-textarea",fontFamily:"'Roboto Mono', monospace",maxLength:m,placeholder:t("contact.input.message"),required:!0,resize:"none",size:"xl",w:{base:"100%",md:"480px"},_focusVisible:{outline:"solid 1px #459c8c !important",borderColor:"#459c8c"},_placeholder:{color:"#ffffffea",fontWeight:300,fontSize:"sm"},...l("textarea",{validate:F,onBlur:h,onChange:r=>s(r.target.value.length)})}),e.jsxs(x,{justify:"space-between",align:"center",mt:2,children:[e.jsx(u,{minW:"200px",children:e.jsx(p,{color:"red.500",fontSize:"sm",opacity:a.textarea?1:0,children:t("validationErrors.message.empty")})}),e.jsxs(p,{color:"gray.500",fontSize:"sm",children:[i,"/",m]})]}),e.jsx(B,{type:"submit",borderRadius:"50px",color:"#5ad3bd",colorScheme:"#333",disabled:!c,gap:"5px",variant:"outline",_hover:{bg:"#459c8c",color:"#333"},children:C?e.jsx(P,{size:"sm",mr:2}):t("contact.input.button")}),d&&e.jsx(p,{color:d.type==="success"?"green.500":"red.500",fontSize:"sm",ml:4,children:d.text})]})})]}),e.jsx(K,{children:e.jsx(G,{data:$.data.contact})})]})};export{re as default};
