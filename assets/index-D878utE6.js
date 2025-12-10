import{o as d,F as h,T as l,j as e,r as x,y as j,B as s,L as w,n as v}from"./ui-vendor-1yuyE_-C.js";import{F as c,e as y,g as S,h as k}from"./icons-vendor-BFlFs9r8.js";import{d as i}from"./index-BiCS7MKx.js";import{u,i as z}from"./i18n-vendor-BIel8kYB.js";import{p as T}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-20BP2a_X.js";const C=i(d)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  margin-left: 40px;

  /* Tablets en orientación vertical específicos */
  @media (max-width: 920px) and (min-width: 769px) {
    margin-left: 0;
    margin-top: 25px;
    width: auto;
    height: auto;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin-left: 0;
    margin-top: 15px;
    width: auto;
    height: auto;
    max-width: 250px;
    max-height: 250px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }

  /* Surface Duo específico */
  @media (max-width: 540px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }

  /* iPhone SE específico */
  @media (max-width: 375px) {
    margin-top: 8px;
  }

  /* Samsung Galaxy S8 específico */
  @media (max-width: 360px) {
    margin-top: 5px;
  }

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
    aspect-ratio: 1;

    /* Tablets en orientación vertical específicos */
    @media (max-width: 920px) and (min-width: 769px) {
      aspect-ratio: 1;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    /* Surface Duo específico */
    @media (max-width: 540px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 2.5px),
        #fff calc(100% - 2.5px + 1px)
      );
    }

    @media (max-width: 480px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 2px),
        #fff calc(100% - 2px + 1px)
      );
    }

    /* iPhone SE y Galaxy S8 específicos */
    @media (max-width: 375px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 1.5px),
        #fff calc(100% - 1.5px + 1px)
      );
      animation: rotateBorder 60s linear infinite;
    }

    @media (max-width: 360px) {
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 1px),
        #fff calc(100% - 1px + 1px)
      );
      animation: rotateBorder 60s linear infinite;
    }
  }

  .imageProfile {
    position: relative;
    z-index: 2;
    border-radius: 100%;
    object-fit: cover;
    padding: 5px;
    aspect-ratio: 1;

    /* Tablets en orientación vertical específicos */
    @media (max-width: 920px) and (min-width: 769px) {
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
      width: 280px !important;
      height: 280px !important;
      max-width: 280px;
      max-height: 280px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
      width: 250px !important;
      height: 250px !important;
      max-width: 250px;
      max-height: 250px;
    }

    /* Surface Duo específico */
    @media (max-width: 540px) {
      padding: 4px;
    }

    @media (max-width: 480px) {
      padding: 3px;
    }

    /* iPhone SE específico */
    @media (max-width: 375px) {
      padding: 2px;
    }

    /* Samsung Galaxy S8 específico */
    @media (max-width: 360px) {
      padding: 2px;
    }
  }
`,B=i(d)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,E=i.span`
  color: #ffffffea;
  max-width: 500px;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.95rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 5px;
  }
`,P=i.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.2;

  .highlighted-text {
    color: #5ad3bd;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    font-size: 2.2rem;
    text-align: center;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`,D=i(d)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  margin-top: 80px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    justify-content: flex-start;
    margin-top: 0;
    position: relative;
    top: 150px;
    overflow-x: hidden;
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
`,F=i(d)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
  gap: 40px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
  }

  @media (max-width: 580px) {
    gap: 25px;
    margin-bottom: 30px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 25px;
    padding-top: 5px;
  }

  @media (max-width: 360px) {
    gap: 15px;
    margin-bottom: 20px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    max-width: 95%;
    padding: 0 10px;
  }
`,N=i(d)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 20px;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;

    button {
      width: 100%;
      max-width: 200px;
    }
  }
`,I=i.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,A=i(h)`
  align-items: center;
  direction: row;
  margin: 0 6px;

  @media (max-width: 768px) {
    margin: 8px 4px;
    flex-direction: column;
    text-align: center;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    margin: 6px 2px;
    min-width: 100px;
  }

  @media (max-width: 360px) {
    margin: 4px 1px;
    min-width: 90px;
  }
`,L=i(l)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;

  @media (max-width: 768px) {
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    margin-bottom: 2px;
  }
`,Z=i(d)`
  line-height: 1.2;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`,b=x.memo(({duration:t=2e3,targetNumber:a,titleBottom:n,titleTop:r})=>{const[p,o]=x.useState(0),f=a/(t/50);return x.useEffect(()=>{let m=0;const g=setInterval(()=>{m+=f,m>=a?(clearInterval(g),o(a)):o(Math.floor(m))},50);return()=>clearInterval(g)},[f,a]),e.jsxs(A,{"data-testid":"counter",children:[e.jsx(L,{fontSize:{base:"3xl",sm:"4xl",md:"5xl"},children:p}),e.jsx(h,{alignItems:"center",direction:"column",mx:{base:2,md:6},children:e.jsxs(Z,{lineHeight:"1.2",textAlign:"start",children:[e.jsx(l,{color:"#ffffffea",fontSize:{base:"sm",sm:"md",md:"lg"},children:r}),e.jsx(l,{color:"#ffffffea",fontSize:{base:"sm",sm:"md",md:"lg"},children:n})]})})]})});b.displayName="Counter";const G=()=>{const{t}=u(),a=[{targetNumber:5,titleBottom:t("counters.experience"),titleTop:t("counters.yearsOfExperience")},{targetNumber:3,titleBottom:t("counters.completed"),titleTop:t("counters.projects")},{targetNumber:6,titleBottom:t("counters.mastered"),titleTop:t("counters.technologies")},{targetNumber:2e3,titleBottom:t("counters.commitsTitle"),titleTop:t("counters.commits")}];return e.jsx(h,{alignItems:"center",flexWrap:"wrap",justifyContent:"center",p:{base:2,md:4},gap:{base:1,sm:2,md:4},maxWidth:"100%",direction:{base:"column",sm:"row"},children:a.map((n,r)=>e.jsx(b,{targetNumber:n.targetNumber,titleBottom:n.titleBottom,titleTop:n.titleTop},r))})},H="/portfolio/assets/profilePicture-CwKq6i4N.png",R=j({placement:"bottom-end",pauseOnPageIdle:!0}),$=()=>{const{t}=u(),a=async()=>{const r=z.language==="en"?"cvDanFerrariEngOP.pdf":"cvDanFerrariEspOP.pdf",p=`pdf/${r}`;try{const o=document.createElement("a");o.href=p,o.download=r,document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch{R.create({title:t("home.cvDownloadError")||"No se pudo descargar el archivo.",type:"info"})}};return e.jsxs(D,{children:[e.jsxs(F,{children:[e.jsxs(B,{children:[e.jsx(I,{children:t("home.subtitle")}),e.jsxs(P,{"data-testid":"home-title",children:[t("home.title"),e.jsx("br",{}),e.jsx("span",{className:"highlighted-text",children:T.data.name})]}),e.jsx(E,{children:t("home.description")}),e.jsxs(N,{children:[e.jsxs(s,{borderRadius:"50px",color:"#5ad3bd",colorScheme:"gray","data-testid":"btn-download-cv",gap:"5px",onClick:a,variant:"outline",size:{base:"sm",md:"md"},fontSize:{base:"sm",md:"md"},_hover:{bg:"#459c8c",color:"#333"},children:[t("home.downloadCV"),e.jsx(c,{icon:y})]}),e.jsx(w,{"data-testid":"link-github",href:"https://github.com/daniferrari1994",target:"_blank",rel:"noopener noreferrer",children:e.jsx(s,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",size:{base:"sm",md:"md"},_hover:{bg:"#1b3d37"},children:e.jsx(c,{color:"#5ad3bd",icon:S,size:"lg"})})}),e.jsx(w,{"data-testid":"link-linkedin",href:"https://www.linkedin.com/in/dan-ferrari/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(s,{borderRadius:"full",color:"#5ad3bd",colorScheme:"gray",padding:0,variant:"outline",size:{base:"sm",md:"md"},_hover:{bg:"#1b3d37"},children:e.jsx(c,{color:"#5ad3bd",icon:k,size:"lg"})})})]})]}),e.jsx(C,{children:e.jsx(v,{alt:"Profile Picture",boxShadow:"lg",boxSize:{base:"250px",sm:"280px",md:"320px",lg:"350px"},className:"imageProfile","data-testid":"profile-image",src:H})})]}),e.jsx(G,{})]})};export{$ as default};
