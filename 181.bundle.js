"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[181],{6181:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var a=r(6540),n=r(9415),o=r(752),i=r(3198),l=r(982),c=r(6188),s=r(7875),d=r(6287),m=r(1250);const f=(0,m.I4)(d.az)`
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
`;var g=r(874);const p=(0,m.Ay)(g.a)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`,u=m.Ay.span`
  color: #ffffffea;
  max-width: 500px;
`,h=m.Ay.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;

  .highlighted-text {
    color: #5ad3bd;
  }
`,b=(0,m.Ay)(g.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`,x=(0,m.Ay)(g.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
`,E=(0,m.Ay)(g.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`,y=m.Ay.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;
`;var v=r(2389),w=r(2218),k=r(5968);const A=(0,m.Ay)(w.s)`
  align-items: center;
  direction: row;
  margin: 0 6px;
`,B=(0,m.Ay)(k.E)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;
`,N=(0,m.Ay)(g.a)`
  line-height: 1.2;
  text-align: start;
`,S=({duration:e=2e3,targetNumber:t,titleBottom:r,titleTop:n})=>{const[o,i]=(0,a.useState)(0),l=t/(e/50);return(0,a.useEffect)((()=>{let e=0;const r=setInterval((()=>{e+=l,e>=t?(clearInterval(r),i(t)):i(Math.floor(e))}),50);return()=>clearInterval(r)}),[l,t]),a.createElement(A,{"data-testid":"counter"},a.createElement(B,{fontSize:"5xl"},o),a.createElement(w.s,{alignItems:"center",direction:"column",mx:6},a.createElement(N,{lineHeight:"1.2",textAlign:"start"},a.createElement(k.E,{color:"#ffffffea",fontSize:"lg"},n),a.createElement(k.E,{color:"#ffffffea",fontSize:"lg"},r))))},z=()=>{const{t:e}=(0,v.Bd)(),t=[{targetNumber:4,titleBottom:e("counters.experience"),titleTop:e("counters.yearsOfExperience")},{targetNumber:3,titleBottom:e("counters.completed"),titleTop:e("counters.projects")},{targetNumber:6,titleBottom:e("counters.mastered"),titleTop:e("counters.technologies")},{targetNumber:2e3,titleBottom:e("counters.commitsTitle"),titleTop:e("counters.commits")}];return a.createElement(w.s,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",p:4},t.map(((e,t)=>a.createElement(S,{key:t,targetNumber:e.targetNumber,titleBottom:e.titleBottom,titleTop:e.titleTop}))))},P=r.p+"assets/src/assets/profileImage/profilePicture.png";var I=r(9726),T=r(2635);const j=()=>{const{t:e}=(0,v.Bd)();return a.createElement(b,null,a.createElement(x,null,a.createElement(p,null,a.createElement(y,null,e("home.subtitle")),a.createElement(h,{"data-testid":"home-title"},e("home.title"),a.createElement("br",null),a.createElement("span",{className:"highlighted-text"},I.p.UU)),a.createElement(u,null,e("home.description")),a.createElement(E,null,a.createElement(n.$,{borderRadius:"50px",color:"#5ad3bd",colorScheme:"gray","data-testid":"btn-download-cv",gap:"5px",onClick:()=>{const e="en"===T.Ay.language?"cvDanFerrariEngOP.pdf":"cvDanFerrariEspOP.pdf",t=document.createElement("a");t.href="/pdf/cvDanFerrariEngOP.pdf",t.download=e,t.click()},variant:"outline",_hover:{bg:"#459c8c",color:"#333"}},e("home.downloadCV"),a.createElement(l.g,{icon:c.cbP})),a.createElement(o.N,{"data-testid":"link-github",href:"https://github.com/daniferrari1994",target:"_blank",rel:"noopener noreferrer"},a.createElement(n.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},a.createElement(l.g,{color:"#5ad3bd",icon:s.Vz1,size:"lg"}))),a.createElement(o.N,{"data-testid":"link-linkedin",href:"https://www.linkedin.com/in/dan-ferrari/",target:"_blank",rel:"noopener noreferrer"},a.createElement(n.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},a.createElement(l.g,{color:"#5ad3bd",icon:s.IAJ,size:"lg"}))))),a.createElement(f,null,a.createElement(i._,{alt:"Profile Picture",boxShadow:"lg",boxSize:"350px",className:"imageProfile","data-testid":"profile-image",src:P}))),a.createElement(z,null))}},9726:e=>{e.exports=JSON.parse('{"p":{"jq":{"address":"Buenos Aires, Argentina","email":"daniferrari1994@gmail.com","phone":"(+54) 011 2725 8396"},"cx":{"languages":["English","Spanish"],"nationality":"Argentina"},"UU":"Dan Ferrari"}}')}}]);