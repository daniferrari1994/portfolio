"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[696],{6696:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(6540),a=r(9415),o=r(752),l=r(3198),i=r(982),c=r(6188),s=r(7875),f=r(6287),m=r(1250);const d=(0,m.I4)(f.az)`
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
`;var p=r(874);const g=(0,m.Ay)(p.a)`
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
`,b=(0,m.Ay)(p.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`,x=(0,m.Ay)(p.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
`,E=(0,m.Ay)(p.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`,y=m.Ay.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;
`;var v=r(2389),w=r(2218),A=r(5968);const k=(0,m.Ay)(w.s)`
  align-items: center;
  direction: row;
  margin: 0 6px;
`,B=(0,m.Ay)(A.E)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;
`,N=(0,m.Ay)(p.a)`
  line-height: 1.2;
  text-align: start;
`,S=({duration:e=2e3,targetNumber:t,titleBottom:r,titleTop:a})=>{const[o,l]=(0,n.useState)(0),i=t/(e/50);return(0,n.useEffect)((()=>{let e=0;const r=setInterval((()=>{e+=i,e>=t?(clearInterval(r),l(t)):l(Math.floor(e))}),50);return()=>clearInterval(r)}),[i,t]),n.createElement(k,null,n.createElement(B,{fontSize:"5xl"},o),n.createElement(w.s,{alignItems:"center",direction:"column",mx:6},n.createElement(N,{lineHeight:"1.2",textAlign:"start"},n.createElement(A.E,{color:"#ffffffea",fontSize:"lg"},a),n.createElement(A.E,{color:"#ffffffea",fontSize:"lg"},r))))},z=()=>{const{t:e}=(0,v.Bd)(),t=[{targetNumber:4,titleBottom:e("counters.experience"),titleTop:e("counters.yearsOfExperience")},{targetNumber:4,titleBottom:e("counters.completed"),titleTop:e("counters.projects")},{targetNumber:6,titleBottom:e("counters.mastered"),titleTop:e("counters.technologies")},{targetNumber:2e3,titleBottom:e("counters.commitsTitle"),titleTop:e("counters.commits")}];return n.createElement(w.s,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",p:4},t.map(((e,t)=>n.createElement(S,{key:t,targetNumber:e.targetNumber,titleBottom:e.titleBottom,titleTop:e.titleTop}))))},P=r.p+"assets/src/assets/profileImage/profilePicture.png";var I=r(9726),T=r(2635);const j=()=>{const{t:e}=(0,v.Bd)();return n.createElement(b,null,n.createElement(x,null,n.createElement(g,null,n.createElement(y,null,e("home.subtitle")),n.createElement(h,null,e("home.title"),n.createElement("br",null),n.createElement("span",{className:"highlighted-text"},I.p.UU)),n.createElement(u,null,e("home.description")),n.createElement(E,null,n.createElement(a.$,{borderRadius:"50px",color:"#5ad3bd",colorScheme:"gray",gap:"5px",onClick:()=>{const e="en"===T.Ay.language?"cvDanFerrariEngOP.pdf":"cvDanFerrariEspOP.pdf",t=document.createElement("a");t.href="/pdf/cvDanFerrariEngOP.pdf",t.download=e,t.click()},variant:"outline",_hover:{bg:"#459c8c",color:"#333"}},e("home.downloadCV"),n.createElement(i.g,{icon:c.cbP})),n.createElement(o.N,{href:"https://github.com/daniferrari1994",target:"_blank",rel:"noopener noreferrer"},n.createElement(a.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},n.createElement(i.g,{color:"#5ad3bd",icon:s.Vz1,size:"lg"}))),n.createElement(o.N,{href:"https://www.linkedin.com/in/dan-ferrari/",target:"_blank",rel:"noopener noreferrer"},n.createElement(a.$,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",_hover:{bg:"#1b3d37"}},n.createElement(i.g,{color:"#5ad3bd",icon:s.IAJ,size:"lg"}))))),n.createElement(d,null,n.createElement(l._,{alt:"Profile Picture",boxShadow:"lg",boxSize:"350px",className:"imageProfile",src:P}))),n.createElement(z,null))}},9726:e=>{e.exports=JSON.parse('{"p":{"jq":{"address":"Buenos Aires, Argentina","email":"daniferrari1994@gmail.com","phone":"(+54) 011 2725 8396"},"cx":{"languages":["English","Spanish"],"nationality":"Argentina"},"UU":"Dan Ferrari"}}')}}]);