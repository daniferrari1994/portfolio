import{F as r,o as m,B as d,r as R,j as e,H as l,T as a,z as C,A,L as x,n as I}from"./ui-vendor-1yuyE_-C.js";import{F as s,i as T,g as E,j as L,k as D}from"./icons-vendor-BFlFs9r8.js";import{d as i,T as h}from"./index-BdYDgIFI.js";import{u as M}from"./i18n-vendor-BIel8kYB.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-20BP2a_X.js";const N=[{id:"01",image:"https://static.vecteezy.com/system/resources/thumbnails/037/347/356/small_2x/ai-generated-gear-wheel-abstract-background-gear-technology-digital-technology-and-engineering-background-photo.jpg",codeUrl:"https://github.com/daniferrari1994/e-commerce",url:"https://daniferrari1994.github.io/e-commerce/",technologies:["React","TypeScript","Vite","CSS Modules"],translations:{en:{title:"Discord E-commerce",description:"Modern e-commerce with React 19 + TypeScript. Optimized modular architecture, dynamic navigation, infinite carousel, responsive product system. Custom hooks, centralized types, automated GitHub Pages deployment."},es:{title:"Discord E-commerce",description:"E-commerce moderno con React 19 + TypeScript. Arquitectura modular optimizada, navegación dinámica, carousel infinito, sistema de productos responsive. Custom hooks, types centralizados, deploy automatizado en GitHub Pages."}}},{id:"02",image:"https://static.vecteezy.com/system/resources/thumbnails/035/484/819/small_2x/ai-generated-futuristic-blue-hexagon-background-science-illustration-hud-components-technology-concept-3d-landscape-big-data-future-abstract-background-photo.jpg",codeUrl:"https://github.com/example/project-two",url:"https://example.com/project-two",technologies:["JavaScript","Styled Components","Node.js"],translations:{en:{title:"Project Two",description:"English description for project two."},es:{title:"Proyecto Dos",description:"Descripción en español del proyecto dos."}}},{id:"03",image:"https://static.vecteezy.com/system/resources/thumbnails/027/857/270/small_2x/glowing-pulsating-graphic-lines-scientific-background-3d-rendering-photo.jpg",codeUrl:"https://github.com/example/project-three",url:"https://example.com/project-three",technologies:["React","TypeScript","Chakra UI"],translations:{en:{title:"Project three",description:"English description for project three."},es:{title:"Proyecto tres",description:"Descripción en español del proyecto tres."}}}],n={projects:N},W=i(r)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
  padding-top: 80px;

  @media (max-width: 1200px) {
    min-width: auto;
    max-width: 100%;
    padding: 16px 20px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    position: relative;
    top: 150px;
    flex-direction: column;
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
    padding: 10px 10px 10px;
    justify-content: center;
    align-items: center;
  }
`,G=i(r)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    box-shadow: none;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    max-width: 95%;
  }
`,H=i(m)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 768px) {
    order: 2;
    padding: 20px 10px;
    text-align: center;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    order: 2;
    padding: 15px 10px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }

  .buttonLink:hover {
    transform: none;
    background-color: #414040;
  }

  .buttonLinkGithub:hover {
    background-color: #414040;
  }

  /* Solo aplicar rotación en desktop */
  @media (min-width: 769px) {
    .buttonLink:hover {
      transform: rotate(-35deg);
    }
  }
`,B=i(m)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 20px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    order: 1;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`,g=i(d)`
  margin: 0 18px 28px 0;

  @media (max-width: 768px) {
    margin: 0 10px 15px 0;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin: 0 8px 10px 0;
  }

  @media (max-width: 480px) {
    margin: 0 8px 12px 0;
  }

  @media (max-width: 360px) {
    margin: 0 6px 10px 0;
  }

  &:hover {
    background-color: #459c8c;
  }
`,K=()=>{const{i18n:f,t}=M(),[b,p]=R.useState(0),u=f.language,{id:j,translations:w,technologies:y,url:k,codeUrl:v,image:S}=n.projects[b],c=w[u],z=()=>{p(o=>(o+1)%n.projects.length)},P=()=>{p(o=>(o-1+n.projects.length)%n.projects.length)};return e.jsx(W,{children:e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsxs(m,{children:[e.jsx(l,{color:"#ffffffea",fontFamily:"'Bungee Hairline', sans-serif",fontWeight:"400",mb:"4",size:{base:"3xl",sm:"4xl",md:"5xl",lg:"6xl"},children:j}),e.jsx(l,{color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",mb:"2",size:{base:"lg",sm:"xl",md:"2xl"},children:c.title}),e.jsx(a,{color:"#A0AEC0",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:"4",minH:{base:"auto",md:"150px"},w:{base:"100%",md:"500px"},fontSize:{base:"sm",md:"md"},children:c.description}),e.jsx(C,{flexDirection:{base:"column",sm:"row"},flexWrap:"wrap",justify:{base:"center",md:"flex-start"},align:{base:"center",md:"flex-start"},gap:{base:2,md:4},children:y.map((o,F)=>e.jsx(a,{color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",fontSize:{base:"xs",md:"sm"},children:o},F))})]}),e.jsx(A,{size:"md",w:{base:"100%",md:"500px"},my:{base:4,md:6}}),e.jsxs(r,{direction:{base:"column",md:"row"},align:"center",gap:{base:2,md:0},children:[e.jsx(h,{content:t("projects.tooltip.livePage"),children:e.jsx(d,{bg:"#333",borderRadius:"full",className:"buttonLink",colorScheme:"#333",mr:{base:"0",md:"4"},mb:{base:"2",md:"0"},padding:{base:"8px 12px",md:"0"},size:{base:"sm",md:"md"},"aria-label":t("projects.tooltip.livePage"),display:"flex",alignItems:"center",gap:2,children:e.jsxs(x,{href:k,target:"_blank",display:"flex",alignItems:"center",gap:2,children:[e.jsx(s,{color:"#ffffffea",icon:T,size:{base:"sm",md:"lg"}}),e.jsx(a,{display:{base:"inline",md:"none"},color:"#ffffffea",fontSize:"xs",fontFamily:"'Roboto Mono', monospace",children:t("projects.liveProject")})]})})}),e.jsx(h,{content:t("projects.tooltip.github"),children:e.jsx(d,{bg:"#333",borderRadius:"full",className:"buttonLinkGithub",colorScheme:"#333",mr:{base:"0",md:"4"},padding:{base:"8px 12px",md:"0"},size:{base:"sm",md:"md"},"aria-label":t("projects.tooltip.github"),display:"flex",alignItems:"center",gap:2,children:e.jsxs(x,{href:v,target:"_blank",display:"flex",alignItems:"center",gap:2,children:[e.jsx(s,{color:"#ffffffea",icon:E,size:{base:"sm",md:"lg"}}),e.jsx(a,{display:{base:"inline",md:"none"},color:"#ffffffea",fontSize:"xs",fontFamily:"'Roboto Mono', monospace",children:t("projects.viewCode")})]})})})]})]}),e.jsxs(B,{children:[e.jsx(I,{alt:c.title,h:{base:"250px",sm:"300px",md:"350px",lg:"400px"},m:{base:"20px 0",md:"28px 28px 28px 0"},objectFit:"cover",src:S,w:{base:"100%",sm:"450px",md:"550px",lg:"600px"},maxW:"100%",borderRadius:{base:"md",md:"none"}}),e.jsxs(r,{alignSelf:{base:"center",md:"flex-end"},mt:{base:4,md:0},children:[e.jsx(g,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:P,size:{base:"sm",md:"sm"},"aria-label":"Previous project",children:e.jsx(s,{color:"#333",icon:L,size:"sm"})}),e.jsx(g,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:z,size:{base:"sm",md:"sm"},"aria-label":"Next project",children:e.jsx(s,{color:"#333",icon:D,size:"sm"})})]})]})]})})};export{K as default};
