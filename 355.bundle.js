"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[355],{355:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var r=o(6540),n=o(874),a=o(7493),c=o(5968),l=o(7967),i=o(8034),s=o(9415),p=o(752),m=o(3198),d=o(2218),g=o(126),h=o(6188),u=o(7875),f=o(982),b=o(2389);const x=JSON.parse('{"d":[{"id":"01","image":"https://static.vecteezy.com/system/resources/thumbnails/037/347/356/small_2x/ai-generated-gear-wheel-abstract-background-gear-technology-digital-technology-and-engineering-background-photo.jpg","codeUrl":"https://github.com/example/project-one","url":"https://example.com/project-one","technologies":["React","TypeScript","Chakra UI"],"translations":{"en":{"title":"Project One","description":"English description for project one."},"es":{"title":"Proyecto Uno","description":"Descripción en español del proyecto uno."}}},{"id":"02","image":"https://static.vecteezy.com/system/resources/thumbnails/035/484/819/small_2x/ai-generated-futuristic-blue-hexagon-background-science-illustration-hud-components-technology-concept-3d-landscape-big-data-future-abstract-background-photo.jpg","codeUrl":"https://github.com/example/project-two","url":"https://example.com/project-two","technologies":["JavaScript","Styled Components","Node.js"],"translations":{"en":{"title":"Project Two","description":"English description for project two."},"es":{"title":"Proyecto Dos","description":"Descripción en español del proyecto dos."}}},{"id":"03","image":"https://static.vecteezy.com/system/resources/thumbnails/027/857/270/small_2x/glowing-pulsating-graphic-lines-scientific-background-3d-rendering-photo.jpg","codeUrl":"https://github.com/example/project-three","url":"https://example.com/project-three","technologies":["React","TypeScript","Chakra UI"],"translations":{"en":{"title":"Project three","description":"English description for project three."},"es":{"title":"Proyecto tres","description":"Descripción en español del proyecto tres."}}}]}');var y=o(1250);const E=(0,y.Ay)(d.s)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
`,j=(0,y.Ay)(d.s)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;
`,k=(0,y.Ay)(n.a)`
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
`,v=(0,y.Ay)(n.a)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`,w=(0,y.Ay)(s.$)`
  margin: 0 18px 28px 0;

  &:hover {
    background-color: #459c8c;
  }
`,z=()=>{const{i18n:e,t}=(0,b.Bd)(),[o,y]=(0,r.useState)(0),z=e.language,{id:P,translations:S,technologies:N,url:R,codeUrl:C,image:D}=x.d[o],U=S[z];return r.createElement(E,null,r.createElement(j,null,r.createElement(k,null,r.createElement(n.a,null,r.createElement(a.D,{color:"#ffffffea",fontFamily:"'Bungee Hairline', sans-serif",fontWeight:"400",mb:"4",size:"6xl"},P),r.createElement(a.D,{color:"#ffffffea",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",mb:"2",size:"2xl"},U.title),r.createElement(c.E,{color:"#A0AEC0",fontFamily:"'Roboto Mono', monospace",fontWeight:"400",mb:"4",minH:"150px",w:"500px"},U.description),r.createElement(l.B,{flexDirection:"row"},N.map(((e,t)=>r.createElement(c.E,{color:"#5ad3bd",fontFamily:"'Roboto Mono', monospace",fontWeight:"bold",fontSize:"sm",key:t},e))))),r.createElement(i.w,{size:"md",w:"500px"}),r.createElement(n.a,null,r.createElement(g.m,{content:t("projects.tooltip.livePage")},r.createElement(s.$,{bg:"#333",borderRadius:"full",className:"buttonLink",colorScheme:"#333",mr:"4",padding:0,"aria-label":t("projects.tooltip.livePage")},r.createElement(p.N,{href:R,target:"_blank"},r.createElement(f.g,{color:"#ffffffea",icon:h.dmS,size:"lg"})))),r.createElement(g.m,{content:t("projects.tooltip.github")},r.createElement(s.$,{bg:"#333",borderRadius:"full",className:"buttonLinkGithub",colorScheme:"#333",mr:"4",padding:0,"aria-label":t("projects.tooltip.github")},r.createElement(p.N,{href:C,target:"_blank"},r.createElement(f.g,{color:"#ffffffea",icon:u.Vz1,size:"lg"})))))),r.createElement(v,null,r.createElement(m._,{alt:U.title,h:"400px",m:"28px 28px 28px 0",objectFit:"cover",src:D,w:"600px"}),r.createElement(d.s,{alignSelf:"flex-end"},r.createElement(w,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:()=>{y((e=>(e-1+x.d.length)%x.d.length))},size:"sm","aria-label":"Previous project"},r.createElement(f.g,{color:"#333",icon:h.Uec,size:"sm"})),r.createElement(w,{bg:"#5ad3bd",className:"buttonProject",colorScheme:"#333",onClick:()=>{y((e=>(e+1)%x.d.length))},size:"sm","aria-label":"Next project"},r.createElement(f.g,{color:"#333",icon:h.vmR,size:"sm"}))))))}},8034:(e,t,o)=>{o.d(t,{w:()=>d});var r=o(4848),n=o(6540),a=o(5815),c=o(7556),l=o(7129),i=o(9319),s=o(4118);const{useRecipeResult:p,PropsProvider:m}=(0,i.a)({key:"separator"}),d=(0,n.forwardRef)((function(e,t){const{styles:o,className:n,props:i}=p(e),m=e.orientation||"horizontal";return(0,r.jsx)(s.B.span,{ref:t,role:(0,c.Kg)(m)?"separator":"presentation","aria-orientation":(0,c.Kg)(m)?m:void 0,...(0,l.c)(i,["orientation"]),className:(0,a.cx)(n,e.className),css:[o,e.css]})}))},7493:(e,t,o)=>{o.d(t,{D:()=>c});var r=o(9319);const{withContext:n,PropsProvider:a}=(0,r.a)({key:"heading"}),c=n("h2")}}]);