import{F as l,o as n,B as a,r as R,j as e,H as p,T as m,z as T,A as F,L as h,n as A}from"./ui-vendor-1yuyE_-C.js";import{F as i,i as E,g as L,j as D,k as I}from"./icons-vendor-BFlFs9r8.js";import{d as o,T as g}from"./index-WJ75PVkC.js";import{u as N}from"./i18n-vendor-BIel8kYB.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-CfAUkKb3.js";const H=[{id:"01",image:"https://static.vecteezy.com/system/resources/thumbnails/037/347/356/small_2x/ai-generated-gear-wheel-abstract-background-gear-technology-digital-technology-and-engineering-background-photo.jpg",codeUrl:"https://github.com/daniferrari1994/e-commerce",url:"https://daniferrari1994.github.io/e-commerce/",technologies:["React","TypeScript","Vite","CSS Modules"],translations:{en:{title:"Discord E-commerce",description:"Modern e-commerce with React 19 + TypeScript. Optimized modular architecture, dynamic navigation, infinite carousel, responsive product system. Custom hooks, centralized types, automated GitHub Pages deployment."},es:{title:"Discord E-commerce",description:"E-commerce moderno con React 19 + TypeScript. Arquitectura modular optimizada, navegación dinámica, carousel infinito, sistema de productos responsive. Custom hooks, types centralizados, deploy automatizado en GitHub Pages."}}},{id:"02",image:"https://static.vecteezy.com/system/resources/thumbnails/035/484/819/small_2x/ai-generated-futuristic-blue-hexagon-background-science-illustration-hud-components-technology-concept-3d-landscape-big-data-future-abstract-background-photo.jpg",codeUrl:"https://github.com/example/project-two",url:"https://example.com/project-two",technologies:["JavaScript","Styled Components","Node.js"],translations:{en:{title:"Project Two",description:"English description for project two."},es:{title:"Proyecto Dos",description:"Descripción en español del proyecto dos."}}},{id:"03",image:"https://static.vecteezy.com/system/resources/thumbnails/027/857/270/small_2x/glowing-pulsating-graphic-lines-scientific-background-3d-rendering-photo.jpg",codeUrl:"https://github.com/example/project-three",url:"https://example.com/project-three",technologies:["React","TypeScript","Chakra UI"],translations:{en:{title:"Project three",description:"English description for project three."},es:{title:"Proyecto tres",description:"Descripción en español del proyecto tres."}}}],s={projects:H},M=o(l)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
`,B=o(l)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;
`,G=o(n)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  .buttonLink:hover{
    transform: rotate(-35deg);
    background-color: #414040;
  }

  .buttonLinkGithub:hover {
    background-color: #414040;
  }
`,U=o(n)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`,u=o(a)`
  margin: 0 18px 28px 0;

  &:hover {
    background-color: #459c8c;
  }
`,Q=()=>{const{i18n:x,t:r}=N(),[f,d]=R.useState(0),j=x.language,{id:b,translations:y,technologies:k,url:v,codeUrl:w,image:P}=s.projects[f],c=y[j],z=()=>{d(t=>(t+1)%s.projects.length)},S=()=>{d(t=>(t-1+s.projects.length)%s.projects.length)};return e.jsx(M,{children:e.jsxs(B,{children:[e.jsxs(G,{children:[e.jsxs(n,{children:[e.jsx(p,{color:"#ffffffea",fontFamily:"'Bungee Hairline', sans-serif",fontWeight:"400",mb:"4",size:"6xl",children:b}),e.jsx(p,{color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",mb:"2",size:"2xl",children:c.title}),e.jsx(m,{color:"#A0AEC0",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:"4",minH:"150px",w:"500px",children:c.description}),e.jsx(T,{flexDirection:"row",children:k.map((t,C)=>e.jsx(m,{color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",fontSize:"sm",children:t},C))})]}),e.jsx(F,{size:"md",w:"500px"}),e.jsxs(n,{children:[e.jsx(g,{content:r("projects.tooltip.livePage"),children:e.jsx(a,{bg:"#333",borderRadius:"full",className:"buttonLink",colorScheme:"#333",mr:"4",padding:0,"aria-label":r("projects.tooltip.livePage"),children:e.jsx(h,{href:v,target:"_blank",children:e.jsx(i,{color:"#ffffffea",icon:E,size:"lg"})})})}),e.jsx(g,{content:r("projects.tooltip.github"),children:e.jsx(a,{bg:"#333",borderRadius:"full",className:"buttonLinkGithub",colorScheme:"#333",mr:"4",padding:0,"aria-label":r("projects.tooltip.github"),children:e.jsx(h,{href:w,target:"_blank",children:e.jsx(i,{color:"#ffffffea",icon:L,size:"lg"})})})})]})]}),e.jsxs(U,{children:[e.jsx(A,{alt:c.title,h:"400px",m:"28px 28px 28px 0",objectFit:"cover",src:P,w:"600px"}),e.jsxs(l,{alignSelf:"flex-end",children:[e.jsx(u,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:S,size:"sm","aria-label":"Previous project",children:e.jsx(i,{color:"#333",icon:D,size:"sm"})}),e.jsx(u,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:z,size:"sm","aria-label":"Next project",children:e.jsx(i,{color:"#333",icon:I,size:"sm"})})]})]})]})})};export{Q as default};
