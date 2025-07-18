import{F as l,o as c,B as a,r as R,j as e,H as d,T as h,z as F,A as T,L as m,n as I}from"./ui-vendor-1yuyE_-C.js";import{F as n,i as L,g as A,j as N,k as U}from"./icons-vendor-BFlFs9r8.js";import{d as o,T as g}from"./index-DTbK-oNm.js";import{u as D}from"./i18n-vendor-BIel8kYB.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-CTDWh0HK.js";const E=[{id:"01",image:"https://static.vecteezy.com/system/resources/thumbnails/037/347/356/small_2x/ai-generated-gear-wheel-abstract-background-gear-technology-digital-technology-and-engineering-background-photo.jpg",codeUrl:"https://github.com/example/project-one",url:"https://example.com/project-one",technologies:["React","TypeScript","Chakra UI"],translations:{en:{title:"Project One",description:"English description for project one."},es:{title:"Proyecto Uno",description:"Descripción en español del proyecto uno."}}},{id:"02",image:"https://static.vecteezy.com/system/resources/thumbnails/035/484/819/small_2x/ai-generated-futuristic-blue-hexagon-background-science-illustration-hud-components-technology-concept-3d-landscape-big-data-future-abstract-background-photo.jpg",codeUrl:"https://github.com/example/project-two",url:"https://example.com/project-two",technologies:["JavaScript","Styled Components","Node.js"],translations:{en:{title:"Project Two",description:"English description for project two."},es:{title:"Proyecto Dos",description:"Descripción en español del proyecto dos."}}},{id:"03",image:"https://static.vecteezy.com/system/resources/thumbnails/027/857/270/small_2x/glowing-pulsating-graphic-lines-scientific-background-3d-rendering-photo.jpg",codeUrl:"https://github.com/example/project-three",url:"https://example.com/project-three",technologies:["React","TypeScript","Chakra UI"],translations:{en:{title:"Project three",description:"English description for project three."},es:{title:"Proyecto tres",description:"Descripción en español del proyecto tres."}}}],s={projects:E},B=o(l)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
`,W=o(l)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;
`,_=o(c)`
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
`,H=o(c)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`,x=o(a)`
  margin: 0 18px 28px 0;

  &:hover {
    background-color: #459c8c;
  }
`,V=()=>{const{i18n:j,t:r}=D(),[f,p]=R.useState(0),u=j.language,{id:b,translations:y,technologies:k,url:P,codeUrl:w,image:v}=s.projects[f],i=y[u],z=()=>{p(t=>(t+1)%s.projects.length)},S=()=>{p(t=>(t-1+s.projects.length)%s.projects.length)};return e.jsx(B,{children:e.jsxs(W,{children:[e.jsxs(_,{children:[e.jsxs(c,{children:[e.jsx(d,{color:"#ffffffea",fontFamily:"'Bungee Hairline', sans-serif",fontWeight:"400",mb:"4",size:"6xl",children:b}),e.jsx(d,{color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",mb:"2",size:"2xl",children:i.title}),e.jsx(h,{color:"#A0AEC0",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:"4",minH:"150px",w:"500px",children:i.description}),e.jsx(F,{flexDirection:"row",children:k.map((t,C)=>e.jsx(h,{color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",fontSize:"sm",children:t},C))})]}),e.jsx(T,{size:"md",w:"500px"}),e.jsxs(c,{children:[e.jsx(g,{content:r("projects.tooltip.livePage"),children:e.jsx(a,{bg:"#333",borderRadius:"full",className:"buttonLink",colorScheme:"#333",mr:"4",padding:0,"aria-label":r("projects.tooltip.livePage"),children:e.jsx(m,{href:P,target:"_blank",children:e.jsx(n,{color:"#ffffffea",icon:L,size:"lg"})})})}),e.jsx(g,{content:r("projects.tooltip.github"),children:e.jsx(a,{bg:"#333",borderRadius:"full",className:"buttonLinkGithub",colorScheme:"#333",mr:"4",padding:0,"aria-label":r("projects.tooltip.github"),children:e.jsx(m,{href:w,target:"_blank",children:e.jsx(n,{color:"#ffffffea",icon:A,size:"lg"})})})})]})]}),e.jsxs(H,{children:[e.jsx(I,{alt:i.title,h:"400px",m:"28px 28px 28px 0",objectFit:"cover",src:v,w:"600px"}),e.jsxs(l,{alignSelf:"flex-end",children:[e.jsx(x,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:S,size:"sm","aria-label":"Previous project",children:e.jsx(n,{color:"#333",icon:N,size:"sm"})}),e.jsx(x,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:z,size:"sm","aria-label":"Next project",children:e.jsx(n,{color:"#333",icon:U,size:"sm"})})]})]})]})})};export{V as default};
