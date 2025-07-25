import{o as s,F as x,T as p,j as e,r as d,y,B as f,L as u,n as w}from"./ui-vendor-1yuyE_-C.js";import{F as m,e as v,g as C,h as k}from"./icons-vendor-BFlFs9r8.js";import{d as o}from"./index-8pvJtkhO.js";import{u as b,i as T}from"./i18n-vendor-BIel8kYB.js";import{p as S}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-CTDWh0HK.js";const B=o(s)`
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
`,N=o(s)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`,z=o.span`
  color: #ffffffea;
  max-width: 500px;
`,E=o.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;

  .highlighted-text {
    color: #5ad3bd;
  }
`,I=o(s)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`,P=o(s)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
`,D=o(s)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`,F=o.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;
`,L=o(x)`
  align-items: center;
  direction: row;
  margin: 0 6px;
`,H=o(p)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;
`,R=o(s)`
  line-height: 1.2;
  text-align: start;
`,j=d.memo(({duration:t=2e3,targetNumber:n,titleBottom:i,titleTop:a})=>{const[l,r]=d.useState(0),g=n/(t/50);return d.useEffect(()=>{let c=0;const h=setInterval(()=>{c+=g,c>=n?(clearInterval(h),r(n)):r(Math.floor(c))},50);return()=>clearInterval(h)},[g,n]),e.jsxs(L,{"data-testid":"counter",children:[e.jsx(H,{fontSize:"5xl",children:l}),e.jsx(x,{alignItems:"center",direction:"column",mx:6,children:e.jsxs(R,{lineHeight:"1.2",textAlign:"start",children:[e.jsx(p,{color:"#ffffffea",fontSize:"lg",children:a}),e.jsx(p,{color:"#ffffffea",fontSize:"lg",children:i})]})})]})});j.displayName="Counter";const _=()=>{const{t}=b(),n=[{targetNumber:5,titleBottom:t("counters.experience"),titleTop:t("counters.yearsOfExperience")},{targetNumber:3,titleBottom:t("counters.completed"),titleTop:t("counters.projects")},{targetNumber:6,titleBottom:t("counters.mastered"),titleTop:t("counters.technologies")},{targetNumber:2e3,titleBottom:t("counters.commitsTitle"),titleTop:t("counters.commits")}];return e.jsx(x,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",p:4,children:n.map((i,a)=>e.jsx(j,{targetNumber:i.targetNumber,titleBottom:i.titleBottom,titleTop:i.titleTop},a))})},O="/portfolio/assets/profilePicture-CwKq6i4N.png",A=y({placement:"bottom-end",pauseOnPageIdle:!0}),J=()=>{const{t}=b(),n=async()=>{const a=T.language==="en"?"cvDanFerrariEngOP.pdf":"cvDanFerrariEspOP.pdf",l=`pdf/${a}`;try{const r=document.createElement("a");r.href=l,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch{A.create({title:t("home.cvDownloadError")||"No se pudo descargar el archivo.",type:"info"})}};return e.jsxs(I,{children:[e.jsxs(P,{children:[e.jsxs(N,{children:[e.jsx(F,{children:t("home.subtitle")}),e.jsxs(E,{"data-testid":"home-title",children:[t("home.title"),e.jsx("br",{}),e.jsx("span",{className:"highlighted-text",children:S.data.name})]}),e.jsx(z,{children:t("home.description")}),e.jsxs(D,{children:[e.jsxs(f,{borderRadius:"50px",color:"#5ad3bd",colorScheme:"gray","data-testid":"btn-download-cv",gap:"5px",onClick:n,variant:"outline",_hover:{bg:"#459c8c",color:"#333"},children:[t("home.downloadCV"),e.jsx(m,{icon:v})]}),e.jsx(u,{"data-testid":"link-github",href:"https://github.com/daniferrari1994",target:"_blank",rel:"noopener noreferrer",children:e.jsx(f,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"},children:e.jsx(m,{color:"#5ad3bd",icon:C,size:"lg"})})}),e.jsx(u,{"data-testid":"link-linkedin",href:"https://www.linkedin.com/in/dan-ferrari/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(f,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"},children:e.jsx(m,{color:"#5ad3bd",icon:k,size:"lg"})})})]})]}),e.jsx(B,{children:e.jsx(w,{alt:"Profile Picture",boxShadow:"lg",boxSize:"350px",className:"imageProfile","data-testid":"profile-image",src:O})})]}),e.jsx(_,{})]})};export{J as default};
