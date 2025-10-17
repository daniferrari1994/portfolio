import{j as e,F as u,T as i,D as j,o as d,L as C,E as y,G as v,B as b,H as l,I as A,V as R,r as M,A as x}from"./ui-vendor-1yuyE_-C.js";import{u as S}from"./i18n-vendor-BIel8kYB.js";import{L as T,d as s,T as E}from"./index-WJ75PVkC.js";import{l as D,m as I,n as k,o as P,p as N,q as J,r as z,s as G,t as F,u as B,v as L,F as O}from"./icons-vendor-BFlFs9r8.js";import{p as H}from"./personalData-y2EhKX-j.js";import"./react-vendor-DJG_os-6.js";import"./routing-vendor-CdlMa7pa.js";import"./utils-vendor-CfAUkKb3.js";const U=({data:t})=>{const{t:a}=S(),o=Object.entries(t);return e.jsx(u,{wrap:"wrap",justify:"space-between",children:o.map(([c,r],p)=>{const m=Array.isArray(r)&&c==="languages"?r.map(g=>a(`aboutMe.data.aboutMeValues.${g}`)).join(", "):a(`aboutMe.data.aboutMeValues.${r}`)||r;return e.jsxs(u,{direction:"column",mb:4,width:["100%","48%"],children:[e.jsx(i,{className:"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold",children:`${a(`aboutMe.data.aboutMe.${c}`)}:`}),e.jsx(i,{className:"aboutMe-text",display:"inline",fontSize:"md",children:m})]},p)})})},V=j(d)`
  background-color: #303030c5;
  border-radius: 2%;
  flex-basis: 100%;
  margin: 4px;
  max-width: 100%;
  padding: 25px 30px;

  .infoCard {
    font-family: 'Roboto Mono', monospace;
  }

  .infoCard-title {
    margin: 4px 0 8px;
  }
`,f=({date:t,description:a,location:o,title:c,url:r})=>e.jsxs(V,{children:[e.jsx(i,{className:"infoCard infoCard-date",color:"#5ad3bd",fontSize:"sm",children:t}),e.jsx(i,{className:"infoCard infoCard-title",color:"#ffffffea",fontSize:"lg",fontWeight:"bold",children:c}),e.jsx(i,{className:"infoCard infoCard-location",color:"#A0AEC0",fontSize:"lg",children:o}),e.jsxs(C,{color:"#5ad3bd",fontSize:"sm",href:r,my:"5px",children:[r,e.jsx(T,{})]}),e.jsx(y,{children:a.map((p,m)=>e.jsx(v,{color:"#E2E8F0",fontSize:"md",children:p},m))})]}),$=s(b)`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  padding: 24px;
  width: 120px;

  &:hover {
    background-color: #444;
    color: #5ad3bd;
  }
`,q=s(d)`
  max-height: 500px;
  max-width: 560px;
  min-height: 460px;
  min-width: 300px;
  overflow-y: auto;
  padding: 16px;
  text-align: center;

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
  }
`,W=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
`,Q={"frontend development":[{name:"HTML5",icon:z},{name:"CSS3",icon:G},{name:"JavaScript",icon:F},{name:"React",icon:B},{name:"Sass",icon:L}],"backend development and tools":[{name:"Node.js",icon:N},{name:"Npm",icon:J}],design:[{name:"Figma",icon:P}],"version control":[{name:"Git",icon:I},{name:"Gitlab",icon:k}],"project management":[{name:"Jira",icon:D}]},K=t=>t.charAt(0).toUpperCase()+t.slice(1),X=()=>e.jsx(q,{children:Object.entries(Q).map(([t,a])=>e.jsxs(d,{mb:6,children:[e.jsx(l,{as:"h5",className:"headingSkills",color:"#718096",mb:4,size:"md",children:K(t)}),e.jsx(W,{children:a.map(o=>e.jsx($,{bg:"#333",colorScheme:"#333",size:"lg",height:"100px",width:"120px","aria-label":`Learn more about ${o.name}`,children:e.jsx(E,{content:o.name,showArrow:!0,children:e.jsx(A,{size:"2xl",children:e.jsx(O,{icon:o.icon,size:"2xl"})})})},o.name))})]},t))}),Y={experience:[{id:"01",company:"Interbanking",url:"https://www.interbanking.com.ar/",translations:{en:{date:"2021 - Current job",description:["Applications developed with microfrontends.","Technologies: JavaScript, Node Js","Frameworks and librarys: React JS with TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Scrum methodology"],title:"Applications developer"},es:{date:"2021 - Empleo actual",description:["Aplicaciones desarrolladas con microfrontends","Tecnologías: JavaScript, Node Js","Frameworks y librerias: React JS con TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Metodología Scrum"],title:"Desarrollador de aplicaciones"}}}],education:[{id:"01",institute:"Da vinci",date:"2023 - 2026",url:"https://davinci.edu.ar/",translations:{en:{title:"Video Game Design and Programming",description:["Unity Game Engine and Unreal Engine","Virtual Reality with HTC Vive","Game Design","Concept Art","Games for All Platforms","Multiplayer Games","3D Rendering and Animation","Creation of Complex Environments","Interactive Design","Graphic Design and Representation","Artificial Intelligence","Augmented Reality"]},es:{title:"Diseño y programación de Video juegos",description:["Unity Game Engine y Unreal Engine","Realidad Virtual con HTC Vive","Game Design","Concept Art","Juegos para Todas las Plataformas","Juegos Multijugador","Render y Animación 3D","Creación de Escenarios Complejos","Diseño Interactivo","Diseño y Representación Gráfica","Inteligencia Artificial","Realidad Aumentada"]}}},{id:"02",institute:"Coderhouse",date:"2022 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"React JS, IT programming",description:["Understanding React fundamentals","Setting up the development environment for React","State management","Component lifecycle","Handling events","Conditional rendering","Lists and keys","Routing","Context API","Testing"]},es:{title:"React JS, programación IT",description:["Comprender los fundamentos de React","Configurar el entorno de desarrollo para React","Gestión del estado","Ciclo de vida del componente","Manejo de eventos","Renderizado condicional","Listas y claves","Enrutamiento","API de Contexto","Pruebas"]}}},{id:"03",institute:"Coderhouse",date:"2021 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Testeo QA Manual, IT programming",description:["Understanding software testing concepts","Writing test cases","Executing test cases","Test documentation","Understanding requirements","Defect life cycle","Test environments","Regression testing","Exploratory testing","Collaboration with development teams"]},es:{title:"Testing QA Manual, programación IT",description:["Comprender conceptos de pruebas de software","Escribir casos de prueba","Ejecutar casos de prueba","Documentación de pruebas","Comprender requisitos","Ciclo de vida de defectos","Entornos de prueba","Pruebas de regresión","Pruebas exploratorias","Colaboración con equipos de desarrollo"]}}},{id:"04",institute:"Coderhouse",date:"2021 - 2022",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Angular, IT programming",description:["Understanding Angular architecture","Setting up the Angular development environment","Data binding","Directives","Routing","Forms","HTTP Client","Dependency Injection","Pipes","Testing"]},es:{title:"Angular, programación IT",description:["Comprender la arquitectura de Angular","Configuración del entorno de desarrollo de Angular","Vinculación de datos","Directivas","Enrutamiento","Formularios","Cliente HTTP","Inyección de dependencias","Pipes","Pruebas"]}}},{id:"05",institute:"Coderhouse",date:"2021 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Java, IT programming",description:["Basic syntax","Control Structures","Object-Oriented Programming","Exception Handling","Collections and Data Structures","File Handling","Concurrency and Multithreading","Java Standard Libraries","Application Development","Database Interaction","Software Testing","Best Practices"]},es:{title:"Java, programación IT",description:["Sintaxis básica","Estructuras de Control","Programación Orientada a Objetos","Manejo de Excepciones","Colecciones y Estructuras de Datos","Manejo de Archivos","Concurrencia y Multithreading","Bibliotecas Estándar de Java","Desarrollo de Aplicaciones","Interacción con Bases de Datos","Pruebas de Software","Buenas Prácticas"]}}},{id:"06",institute:"Coderhouse",date:"2021 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Scrum methodology, Business",description:["Fundamentals of the agile methodology","Roles in Scrum","Tools and techniques of Scrum","Scrum ceremonies","Backlog Management","Sprint Planning","Managing Multidisciplinary Teams","Continuous Improvement"]},es:{title:"Metodología scrum, Negocio",description:["Fundamentos de la metodología ágil","Roles en Scrum","Herramientas y técnicas de Scrum","Ceremonias de Scrum","Gestión del Backlog","Planificación de Sprints","Gestión de Equipos Multidisciplinarios","Mejora Continua"]}}},{id:"07",institute:"Coderhouse",date:"2020 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Javascript, IT programming",description:["Understand the structure of the language","Use of operators","Control Structures","Functions","DOM Manipulation","Object-Oriented Programming","Asynchronicity","Modules","Error Handling","JSON and APIs","Best Practices"]},es:{title:"Javascript, programación IT",description:["Comprender la estructura del lenguaje","Uso de operadores","Estructuras de Control","Funciones","Manipulación del DOM","Programación Orientada a Objetos","Asincronía","Módulos","Manejo de Errores","JSON y APIs","Buenas Prácticas"]}}},{id:"08",institute:"Coderhouse",date:"2020 - 2021",url:"https://www.coderhouse.com/ar/",translations:{en:{title:"Web Development, IT programming",description:["Web development practices","working with HTML and CSS","Code versioning practices with GIT","Preprocessors like SASS","Bootstrap and SEO application in the project","Upload to the server and budget development"]},es:{title:"Desarrollo web, programación IT",description:["Prácticas de desarrollo web","trabajando con HTML y CSS","Prácticas de control de versiones con GIT","Preprocesadores como SASS","Aplicación de Bootstrap y SEO en el proyecto","Carga al servidor y desarrollo de presupuesto"]}}}]},h={resume:Y},Z=s(d)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`,_=s(d)`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 80%;
`,ee=s(R)`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 350px;

  .headingResume {
    align-self: flex-start;
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
  }
  
  .textResume {
    align-self: flex-start;
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
    max-width: 300px;
  }  
`,te=s(d)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  margin-left: 70px;
  max-height: 500px;
  max-width: 560px;
  min-height: 560px;
  min-width: 300px;

  .flex-scrollable {
    overflow-y: auto;
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
  }

  .textResume {
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
  }

  .headingResume,
  .aboutMe-text {
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
  }
`,ae=s(b)`
  background-color: ${({isActive:t})=>t?"#5ad3bd":"#333"};
  color: ${({isActive:t})=>t?"#333 !important":"#ffffffea"};
  letter-spacing: 2px;
  margin: 8px 0;
  width: 90%;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${({isActive:t})=>t?"#5ad3bd":"#459c8c"};
    color: ${({isActive:t})=>t?"#ffffffea":"#333"};
  }
`,pe=()=>{const{i18n:t,t:a}=S(),o=t.language,[c,r]=M.useState("Experience"),p=h.resume.experience,m=h.resume.education,g=()=>{switch(c){case"Experience":return e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"headingResume",size:"lg",children:a("experience.title")}),e.jsx(i,{className:"textResume",fontSize:"14px",children:a("experience.description")}),e.jsx(u,{className:"flex-scrollable",justifyContent:"space-between",wrap:"wrap",children:p.map(n=>e.jsx(f,{date:n.translations[o].date,description:n.translations[o].description,location:n.company,title:n.translations[o].title,url:n.url},n.id))})]});case"Education":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:a("education.title")}),e.jsx(i,{className:"textResume",fontSize:"14px",children:a("education.description")}),e.jsx(u,{wrap:"wrap",className:"flex-scrollable",justifyContent:"space-between",children:m.map(n=>e.jsx(f,{date:n.date,description:n.translations[o].description,location:n.institute,title:n.translations[o].title,url:n.url},n.id))})]});case"Skills":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:a("skills.title")}),e.jsx(i,{className:"textResume",fontSize:"14px",children:a("skills.description")}),e.jsx(x,{my:5,size:"md"}),e.jsx(X,{})]});case"About me":return e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"lg",className:"headingResume",children:a("aboutMe.title")}),e.jsx(i,{className:"textResume",fontSize:"14px",children:a("aboutMe.description")}),e.jsx(x,{my:5,size:"md"}),e.jsx(U,{data:H.data.aboutMe})]});default:return null}};return e.jsx(Z,{children:e.jsxs(_,{children:[e.jsxs(ee,{children:[e.jsx(l,{size:"2xl",className:"headingResume",children:a("resume.title")}),e.jsx(i,{className:"textResume",fontSize:"14px",children:a("resume.description")}),["Experience","Education","Skills","About me"].map(n=>{const w=n==="About me"?"aboutMe":n.toLowerCase();return e.jsx(ae,{colorScheme:"#333",isActive:c===n,onClick:()=>r(n),children:a(w+".title")},n)})]}),e.jsx(te,{children:g()})]})})};export{pe as default};
