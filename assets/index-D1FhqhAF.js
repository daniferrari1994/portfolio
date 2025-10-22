import{j as e,F as x,T as o,D as y,o as c,L as S,E as C,G as A,B as w,H as l,V as v,r as k,A as g}from"./ui-vendor-1yuyE_-C.js";import{u as b}from"./i18n-vendor-BIel8kYB.js";import{L as R,d as r,T as M}from"./index-DRdrMt-M.js";import{l as T,m as z,n as E,o as D,p as F,q as I,r as N,s as P,t as J,u as G,v as B,F as L}from"./icons-vendor-BFlFs9r8.js";import{p as O}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-CfAUkKb3.js";const H=({data:t})=>{const{t:i}=b(),n=Object.entries(t);return e.jsx(x,{wrap:"wrap",justify:"space-between",children:n.map(([d,s],p)=>{const m=Array.isArray(s)&&d==="languages"?s.map(h=>i(`aboutMe.data.aboutMeValues.${h}`)).join(", "):i(`aboutMe.data.aboutMeValues.${s}`)||s;return e.jsxs(x,{direction:"column",mb:4,width:["100%","100%","48%"],children:[e.jsx(o,{className:"aboutMe-data",display:"inline",fontSize:{base:"sm",md:"md"},fontWeight:"bold",children:`${i(`aboutMe.data.aboutMe.${d}`)}:`}),e.jsx(o,{className:"aboutMe-text",display:"inline",fontSize:{base:"sm",md:"md"},children:m})]},p)})})},U=y(c)`
  background-color: #303030c5;
  border-radius: 2%;
  flex-basis: 100%;
  margin: 4px;
  max-width: 100%;
  padding: 25px 30px;

  @media (max-width: 768px) {
    padding: 20px 25px;
    margin: 6px 0;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    padding: 15px 20px;
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    margin: 4px 0;
  }

  @media (max-width: 360px) {
    padding: 12px 15px;
    margin: 3px 0;
  }

  .infoCard {
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }

  .infoCard-title {
    margin: 4px 0 8px;

    @media (max-width: 480px) {
      margin: 3px 0 6px;
    }
  }
`,u=({date:t,description:i,location:n,title:d,url:s})=>e.jsxs(U,{children:[e.jsx(o,{className:"infoCard infoCard-date",color:"#5ad3bd",fontSize:"sm",children:t}),e.jsx(o,{className:"infoCard infoCard-title",color:"#ffffffea",fontSize:"lg",fontWeight:"bold",children:d}),e.jsx(o,{className:"infoCard infoCard-location",color:"#A0AEC0",fontSize:"lg",children:n}),e.jsxs(S,{color:"#5ad3bd",fontSize:"sm",href:s,my:"5px",children:[s,e.jsx(R,{})]}),e.jsx(C,{children:i.map((p,m)=>e.jsx(A,{color:"#E2E8F0",fontSize:"md",children:p},m))})]}),Z=r(w)`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  padding: 20px;
  width: 130px;

  .skill-icon-container {
    .skill-icon {
      font-size: 50px !important;
      width: 50px !important;
      height: 50px !important;
    }
  }

  @media (max-width: 768px) {
    height: 110px;
    width: 110px;
    padding: 16px;
    justify-content: space-between;

    .skill-icon-container {
      .skill-icon {
        font-size: 50px !important;
        width: 50px !important;
        height: 50px !important;
      }
    }
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    height: 100px;
    width: 100px;
    padding: 12px;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    padding: 12px;
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    height: 90px;
    width: 90px;
    padding: 8px;
    justify-content: space-between;
  }

  &:hover {
    background-color: #444;
    color: #5ad3bd;
  }
`,V=r(c)`
  max-height: 500px;
  max-width: 560px;
  min-height: 460px;
  min-width: 300px;
  overflow-y: auto;
  padding: 16px;
  text-align: center;

  @media (max-width: 768px) {
    max-height: 400px;
    min-height: 300px;
    max-width: 100%;
    min-width: 100%;
    padding: 12px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    max-height: 300px;
    min-height: 250px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
    min-height: 250px;
    padding: 10px;
  }

  @media (max-width: 360px) {
    max-height: 280px;
    min-height: 220px;
    padding: 8px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5ad3bd;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#0000000';
    border-radius: 20px;
  }

  .headingSkills {
    display: flex;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }
`,$=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`,q={"frontend development":[{name:"HTML5",icon:N},{name:"CSS3",icon:P},{name:"JavaScript",icon:J},{name:"React",icon:G},{name:"Sass",icon:B}],"backend development and tools":[{name:"Node.js",icon:F},{name:"Npm",icon:I}],design:[{name:"Figma",icon:D}],"version control":[{name:"Git",icon:z},{name:"Gitlab",icon:E}],"project management":[{name:"Jira",icon:T}]},W=t=>t.charAt(0).toUpperCase()+t.slice(1),Q=()=>e.jsx(V,{children:Object.entries(q).map(([t,i])=>e.jsxs(c,{mb:6,children:[e.jsx(l,{as:"h5",className:"headingSkills",color:"#718096",mb:4,size:"md",children:W(t)}),e.jsx($,{children:i.map(n=>e.jsxs(Z,{bg:"#333",colorScheme:"#333",size:"lg",height:"100px",width:"120px","aria-label":`Learn more about ${n.name}`,display:"flex",flexDirection:"column",gap:2,children:[e.jsx(M,{content:n.name,showArrow:!0,children:e.jsx(c,{className:"skill-icon-container",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(L,{icon:n.icon,className:"skill-icon"})})}),e.jsx(o,{display:{base:"block",md:"none"},color:"#ffffffea",fontSize:"xs",fontFamily:"'Roboto Mono', monospace",textAlign:"center",mt:1,children:n.name})]},n.name))})]},t))}),K={experience:[{id:"01",company:"Interbanking",url:"https://www.interbanking.com.ar/",translations:{en:{date:"2021 - Current job",description:["Applications developed with microfrontends.","Technologies: JavaScript, Node Js","Frameworks and librarys: React JS with TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Scrum methodology"],title:"Applications developer"},es:{date:"2021 - Empleo actual",description:["Aplicaciones desarrolladas con microfrontends","Tecnologías: JavaScript, Node Js","Frameworks y librerias: React JS con TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Metodología Scrum"],title:"Desarrollador de aplicaciones"}}}],education:[{id:"01",institute:"Da vinci",date:"2023 - 2026",url:"https://davinci.edu.ar/",translations:{en:{title:"Video Game Design and Programming",description:["Unity Game Engine and Unreal Engine","Virtual Reality with HTC Vive","Game Design","Concept Art","Games for All Platforms","Multiplayer Games","3D Rendering and Animation","Creation of Complex Environments","Interactive Design","Graphic Design and Representation","Artificial Intelligence","Augmented Reality"]},es:{title:"Diseño y programación de Video juegos",description:["Unity Game Engine y Unreal Engine","Realidad Virtual con HTC Vive","Game Design","Concept Art","Juegos para Todas las Plataformas","Juegos Multijugador","Render y Animación 3D","Creación de Escenarios Complejos","Diseño Interactivo","Diseño y Representación Gráfica","Inteligencia Artificial","Realidad Aumentada"]}}},{id:"02",institute:"Coderhouse",date:"2022 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"React JS, IT programming",description:["Understanding React fundamentals","Setting up the development environment for React","State management","Component lifecycle","Handling events","Conditional rendering","Lists and keys","Routing","Context API","Testing"]},es:{title:"React JS, programación IT",description:["Comprender los fundamentos de React","Configurar el entorno de desarrollo para React","Gestión del estado","Ciclo de vida del componente","Manejo de eventos","Renderizado condicional","Listas y claves","Enrutamiento","API de Contexto","Pruebas"]}}},{id:"03",institute:"Coderhouse",date:"2021 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Testeo QA Manual, IT programming",description:["Understanding software testing concepts","Writing test cases","Executing test cases","Test documentation","Understanding requirements","Defect life cycle","Test environments","Regression testing","Exploratory testing","Collaboration with development teams"]},es:{title:"Testing QA Manual, programación IT",description:["Comprender conceptos de pruebas de software","Escribir casos de prueba","Ejecutar casos de prueba","Documentación de pruebas","Comprender requisitos","Ciclo de vida de defectos","Entornos de prueba","Pruebas de regresión","Pruebas exploratorias","Colaboración con equipos de desarrollo"]}}},{id:"04",institute:"Coderhouse",date:"2021 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Angular, IT programming",description:["Understanding Angular architecture","Setting up the Angular development environment","Data binding","Directives","Routing","Forms","HTTP Client","Dependency Injection","Pipes","Testing"]},es:{title:"Angular, programación IT",description:["Comprender la arquitectura de Angular","Configuración del entorno de desarrollo de Angular","Vinculación de datos","Directivas","Enrutamiento","Formularios","Cliente HTTP","Inyección de dependencias","Pipes","Pruebas"]}}},{id:"05",institute:"Coderhouse",date:"2021 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Java, IT programming",description:["Basic syntax","Control Structures","Object-Oriented Programming","Exception Handling","Collections and Data Structures","File Handling","Concurrency and Multithreading","Java Standard Libraries","Application Development","Database Interaction","Software Testing","Best Practices"]},es:{title:"Java, programación IT",description:["Sintaxis básica","Estructuras de Control","Programación Orientada a Objetos","Manejo de Excepciones","Colecciones y Estructuras de Datos","Manejo de Archivos","Concurrencia y Multithreading","Bibliotecas Estándar de Java","Desarrollo de Aplicaciones","Interacción con Bases de Datos","Pruebas de Software","Buenas Prácticas"]}}},{id:"06",institute:"Coderhouse",date:"2021 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Scrum methodology, Business",description:["Fundamentals of the agile methodology","Roles in Scrum","Tools and techniques of Scrum","Scrum ceremonies","Backlog Management","Sprint Planning","Managing Multidisciplinary Teams","Continuous Improvement"]},es:{title:"Metodología scrum, Negocio",description:["Fundamentos de la metodología ágil","Roles en Scrum","Herramientas y técnicas de Scrum","Ceremonias de Scrum","Gestión del Backlog","Planificación de Sprints","Gestión de Equipos Multidisciplinarios","Mejora Continua"]}}},{id:"07",institute:"Coderhouse",date:"2020 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Javascript, IT programming",description:["Understand the structure of the language","Use of operators","Control Structures","Functions","DOM Manipulation","Object-Oriented Programming","Asynchronicity","Modules","Error Handling","JSON and APIs","Best Practices"]},es:{title:"Javascript, programación IT",description:["Comprender la estructura del lenguaje","Uso de operadores","Estructuras de Control","Funciones","Manipulación del DOM","Programación Orientada a Objetos","Asincronía","Módulos","Manejo de Errores","JSON y APIs","Buenas Prácticas"]}}},{id:"08",institute:"Coderhouse",date:"2020 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Web Development, IT programming",description:["Web development practices","working with HTML and CSS","Code versioning practices with GIT","Preprocessors like SASS","Bootstrap and SEO application in the project","Upload to the server and budget development"]},es:{title:"Desarrollo web, programación IT",description:["Prácticas de desarrollo web","trabajando con HTML y CSS","Prácticas de control de versiones con GIT","Preprocesadores como SASS","Aplicación de Bootstrap y SEO en el proyecto","Carga al servidor y desarrollo de presupuesto"]}}}]},f={resume:K},X=r(c)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  padding-top: 80px;

  @media (max-width: 768px) {
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
`,Y=r(c)`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,_=r(v)`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 350px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    gap: 15px;
    flex-direction: column;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    width: 100%;
    margin-bottom: 15px;
    gap: 10px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    gap: 8px;
    margin-bottom: 12px;
  }

  .headingResume {
    align-self: flex-start;
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;

    @media (max-width: 768px) {
      align-self: center;
      text-align: center;
      margin: 5px 0;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      align-self: center;
      text-align: center;
      font-size: 1.8rem;
      margin: 5px 0;
    }
  }
  
  .textResume {
    align-self: flex-start;
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
    max-width: 300px;

    @media (max-width: 768px) {
      align-self: center;
      text-align: center;
      max-width: 100%;
      margin: 5px 0 15px 0;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      align-self: center;
      text-align: center;
      max-width: 100%;
      font-size: 0.85rem;
      margin: 5px 0 10px 0;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin: 5px 0 12px 0;
    }
  }

  /* Contenedor horizontal para los botones en móvil */
  .button-container {
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      width: 100%;
      max-width: 400px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      gap: 8px;
      max-width: 350px;
    }

    @media (max-width: 480px) {
      gap: 8px;
      max-width: 320px;
    }

    @media (max-width: 360px) {
      gap: 6px;
      max-width: 280px;
    }
  }
`,ee=r(c)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  margin-left: 70px;
  max-height: 500px;
  max-width: 560px;
  min-height: 560px;
  min-width: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    min-width: 100%;
    max-height: none;
    min-height: auto;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin-left: 0;
    max-width: 95%;
    min-width: 95%;
    max-height: 400px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }

  .flex-scrollable {
    overflow-y: auto;

    @media (max-width: 768px) {
      max-height: 400px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      max-height: 300px;
    }

    @media (max-width: 480px) {
      max-height: 300px;
    }
  }

  .flex-scrollable::-webkit-scrollbar {
    width: 4px;
  }

  .flex-scrollable::-webkit-scrollbar-thumb {
    background-color: #5ad3bd;
    border-radius: 20px;
  }

  .flex-scrollable::-webkit-scrollbar-track {
    background-color: '#0000000';
    border-radius: 20px;
  }

  .aboutMe-data {
    color: #718096;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  .textResume {
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .headingResume,
  .aboutMe-text {
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;

    @media (max-width: 480px) {
      margin: 8px 0;
      font-size: 0.9rem;
    }
  }
`,te=r(w)`
  background-color: ${({isActive:t})=>t?"#5ad3bd":"#333"};
  color: ${({isActive:t})=>t?"#333 !important":"#ffffffea"};
  letter-spacing: 2px;
  margin: 8px 0;
  width: 90%;
  font-family: 'Roboto Mono', monospace;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 12px 8px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: normal;
    line-height: 1.2;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    padding: 10px 6px;
    font-size: 0.75rem;
    height: 45px;
  }

  @media (max-width: 480px) {
    padding: 10px 6px;
    font-size: 0.7rem;
    height: 45px;
  }

  @media (max-width: 360px) {
    padding: 8px 4px;
    font-size: 0.65rem;
    height: 40px;
    letter-spacing: 0.5px;
  }

  &:hover {
    background-color: ${({isActive:t})=>t?"#5ad3bd":"#459c8c"};
    color: ${({isActive:t})=>t?"#ffffffea":"#333"};
  }
`,le=()=>{const{i18n:t,t:i}=b(),n=t.language,[d,s]=k.useState("Experience"),p=f.resume.experience,m=f.resume.education,h=()=>{switch(d){case"Experience":return e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"headingResume",size:"lg",children:i("experience.title")}),e.jsx(o,{className:"textResume",fontSize:"14px",children:i("experience.description")}),e.jsx(x,{className:"flex-scrollable",justifyContent:"space-between",wrap:"wrap",children:p.map(a=>e.jsx(u,{date:a.translations[n].date,description:a.translations[n].description,location:a.company,title:a.translations[n].title,url:a.url},a.id))})]});case"Education":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:i("education.title")}),e.jsx(o,{className:"textResume",fontSize:"14px",children:i("education.description")}),e.jsx(x,{wrap:"wrap",className:"flex-scrollable",justifyContent:"space-between",children:m.map(a=>e.jsx(u,{date:a.date,description:a.translations[n].description,location:a.institute,title:a.translations[n].title,url:a.url},a.id))})]});case"Skills":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:i("skills.title")}),e.jsx(o,{className:"textResume",fontSize:"14px",children:i("skills.description")}),e.jsx(g,{my:5,size:"md"}),e.jsx(Q,{})]});case"About me":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:i("aboutMe.title")}),e.jsx(o,{className:"textResume",fontSize:"14px",children:i("aboutMe.description")}),e.jsx(g,{my:5,size:"md"}),e.jsx(H,{data:O.data.aboutMe})]});default:return null}};return e.jsx(X,{children:e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsx(l,{size:"2xl",className:"headingResume",children:i("resume.title")}),e.jsx(o,{className:"textResume",fontSize:"14px",children:i("resume.description")}),e.jsx("div",{className:"button-container",children:["Experience","Education","Skills","About me"].map(a=>{const j=a==="About me"?"aboutMe":a.toLowerCase();return e.jsx(te,{colorScheme:"#333",isActive:d===a,onClick:()=>s(a),children:i(j+".title")},a)})})]}),e.jsx(ee,{children:h()})]})})};export{le as default};
