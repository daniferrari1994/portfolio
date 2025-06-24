"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[281],{8281:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(6540),r=a(7493),i=a(5968),o=a(2218),s=a(8034),l=a(6287),c=a(3552),d=a(4848),m=e=>(0,d.jsx)(c.B.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});m.displayName="StackItem";var p=a(9857);Object.freeze(["base","sm","md","lg","xl","2xl"]);var u=a(8855),g=(0,u.R)(((e,t)=>{const{isInline:a,direction:r,align:i,justify:o,spacing:s="0.5rem",wrap:l,children:u,divider:g,className:f,shouldWrapChildren:b,...h}=e,x=a?"row":null!=r?r:"column",y=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:a}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=a,i=e=>n[e],Array.isArray(r)?r.map((e=>null===e?null:i(e))):(0,p.Gv)(r)?Object.keys(r).reduce(((e,t)=>(e[t]=i(r[t]),e)),{}):null!=r?i(r):null)};var r,i}({spacing:s,direction:x})),[s,x]),E=!!g,w=!b&&!E,v=(0,n.useMemo)((()=>{const e=function(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(u);return w?e:e.map(((t,a)=>{const r=void 0!==t.key?t.key:a,i=a+1===e.length,o=b?(0,d.jsx)(m,{children:t},r):t;if(!E)return o;const s=(0,n.cloneElement)(g,{__css:y}),l=i?null:s;return(0,d.jsxs)(n.Fragment,{children:[o,l]},r)}))}),[g,y,E,w,b,u]),C=(0,p.cx)("chakra-stack",f);return(0,d.jsx)(c.B.div,{ref:t,display:"flex",alignItems:i,justifyContent:o,flexDirection:x,flexWrap:l,gap:E?void 0:s,className:C,...h,children:v})}));g.displayName="Stack";var f=(0,u.R)(((e,t)=>(0,d.jsx)(g,{align:"center",...e,direction:"column",ref:t})));f.displayName="VStack";var b=a(9415),h=a(1250);const x=(0,h.I4)(l.az)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`,y=(0,h.I4)(l.az)`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 80%;
`,E=(0,h.I4)(f)`
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
`,w=(0,h.I4)(l.az)`
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
`,v=(0,h.I4)(b.$)`
  background-color: ${({isActive:e})=>e?"#5ad3bd":"#333"};
  color: ${({isActive:e})=>e?"#333 !important":"#ffffffea"};
  letter-spacing: 2px;
  margin: 8px 0;
  width: 90%;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${({isActive:e})=>e?"#5ad3bd":"#459c8c"};
    color: ${({isActive:e})=>e?"#ffffffea":"#333"};
  }
`;var C=a(2389);const S=({data:e})=>{const{t}=(0,C.Bd)(),a=Object.entries(e);return n.createElement(o.s,{wrap:"wrap",justify:"space-between"},a.map((([e,a],r)=>{const s=Array.isArray(a)&&"languages"===e?a.map((e=>t(`aboutMe.data.aboutMeValues.${e}`))).join(", "):t(`aboutMe.data.aboutMeValues.${a}`)||a;return n.createElement(o.s,{direction:"column",key:r,mb:4,width:["100%","48%"]},n.createElement(i.E,{className:"aboutMe-data",display:"inline",fontSize:"md",fontWeight:"bold"},`${t(`aboutMe.data.aboutMe.${e}`)}:`),n.createElement(i.E,{className:"aboutMe-text",display:"inline",fontSize:"md"},s))})))};var k=a(752),A=a(9150);const{withProvider:M,withContext:R,useStyles:j,PropsProvider:D}=(0,A.c)({key:"list"}),N=M("ul","root",{defaultProps:{role:"list"}}),I=R("li","item");R("span","indicator");var P=a(874);const T=(0,a(794).A)(P.a)`
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
`;var z=a(6391);const J=({date:e,description:t,location:a,title:r,url:o})=>n.createElement(T,null,n.createElement(i.E,{className:"infoCard infoCard-date",color:"#5ad3bd",fontSize:"sm"},e),n.createElement(i.E,{className:"infoCard infoCard-title",color:"#ffffffea",fontSize:"lg",fontWeight:"bold"},r),n.createElement(i.E,{className:"infoCard infoCard-location",color:"#A0AEC0",fontSize:"lg"},a),n.createElement(k.N,{color:"#5ad3bd",fontSize:"sm",href:o,my:"5px"},o,n.createElement(z.TdP,null)),n.createElement(N,null,t.map(((e,t)=>n.createElement(I,{key:t,color:"#E2E8F0",fontSize:"md"},e)))));var B=a(7154),G=a(126),O=a(7875),F=a(982);const U=(0,h.Ay)(b.$)`
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
`,W=(0,h.Ay)(P.a)`
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
`,H=h.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
`,L={"frontend development":[{name:"HTML5",icon:O.Y5v},{name:"CSS3",icon:O.Tel},{name:"JavaScript",icon:O.is5},{name:"React",icon:O.zk},{name:"Sass",icon:O.kyA}],"backend development and tools":[{name:"Node.js",icon:O._xH},{name:"Npm",icon:O.lSG}],design:[{name:"Figma",icon:O.slN}],"version control":[{name:"Git",icon:O.b0},{name:"Gitlab",icon:O.rYY}],"project management":[{name:"Jira",icon:O.iMk}]},V=()=>n.createElement(W,null,Object.entries(L).map((([e,t])=>{return n.createElement(P.a,{key:e,mb:6},n.createElement(r.D,{as:"h5",className:"headingSkills",color:"#718096",mb:4,size:"md"},(a=e).charAt(0).toUpperCase()+a.slice(1)),n.createElement(H,null,t.map((e=>n.createElement(U,{key:e.name,bg:"#333",colorScheme:"#333",size:"lg",height:"100px",width:"120px","aria-label":`Learn more about ${e.name}`},n.createElement(G.m,{content:e.name,showArrow:!0},n.createElement(B.I,{size:"2xl"},n.createElement(F.g,{icon:e.icon,size:"2xl"}))))))));var a})));var $=a(9726);const _=JSON.parse('{"U":{"D":[{"id":"01","company":"Interbanking","url":"https://www.interbanking.com.ar/","translations":{"en":{"date":"2021 - Current job","description":["Applications developed with microfrontends.","Technologies: JavaScript, Node Js","Frameworks and librarys: React JS with TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Scrum methodology"],"title":"Applications developer"},"es":{"date":"2021 - Empleo actual","description":["Aplicaciones desarrolladas con microfrontends","Tecnologías: JavaScript, Node Js","Frameworks y librerias: React JS con TypeScript, Nest Js","Git/Gitlab","CI/CD","Jira, Metodología Scrum"],"title":"Desarrollador de aplicaciones"}}}],"F":[{"id":"01","institute":"Da vinci","date":"2023 - 2026","url":"https://davinci.edu.ar/","translations":{"en":{"title":"Video Game Design and Programming","description":["Unity Game Engine and Unreal Engine","Virtual Reality with HTC Vive","Game Design","Concept Art","Games for All Platforms","Multiplayer Games","3D Rendering and Animation","Creation of Complex Environments","Interactive Design","Graphic Design and Representation","Artificial Intelligence","Augmented Reality"]},"es":{"title":"Diseño y programación de Video juegos","description":["Unity Game Engine y Unreal Engine","Realidad Virtual con HTC Vive","Game Design","Concept Art","Juegos para Todas las Plataformas","Juegos Multijugador","Render y Animación 3D","Creación de Escenarios Complejos","Diseño Interactivo","Diseño y Representación Gráfica","Inteligencia Artificial","Realidad Aumentada"]}}},{"id":"02","institute":"Coderhouse","date":"2022 - 2022","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"React JS, IT programming","description":["Understanding React fundamentals","Setting up the development environment for React","State management","Component lifecycle","Handling events","Conditional rendering","Lists and keys","Routing","Context API","Testing"]},"es":{"title":"React JS, programación IT","description":["Comprender los fundamentos de React","Configurar el entorno de desarrollo para React","Gestión del estado","Ciclo de vida del componente","Manejo de eventos","Renderizado condicional","Listas y claves","Enrutamiento","API de Contexto","Pruebas"]}}},{"id":"03","institute":"Coderhouse","date":"2021 - 2022","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Testeo QA Manual, IT programming","description":["Understanding software testing concepts","Writing test cases","Executing test cases","Test documentation","Understanding requirements","Defect life cycle","Test environments","Regression testing","Exploratory testing","Collaboration with development teams"]},"es":{"title":"Testing QA Manual, programación IT","description":["Comprender conceptos de pruebas de software","Escribir casos de prueba","Ejecutar casos de prueba","Documentación de pruebas","Comprender requisitos","Ciclo de vida de defectos","Entornos de prueba","Pruebas de regresión","Pruebas exploratorias","Colaboración con equipos de desarrollo"]}}},{"id":"04","institute":"Coderhouse","date":"2021 - 2022","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Angular, IT programming","description":["Understanding Angular architecture","Setting up the Angular development environment","Data binding","Directives","Routing","Forms","HTTP Client","Dependency Injection","Pipes","Testing"]},"es":{"title":"Angular, programación IT","description":["Comprender la arquitectura de Angular","Configuración del entorno de desarrollo de Angular","Vinculación de datos","Directivas","Enrutamiento","Formularios","Cliente HTTP","Inyección de dependencias","Pipes","Pruebas"]}}},{"id":"05","institute":"Coderhouse","date":"2021 - 2021","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Java, IT programming","description":["Basic syntax","Control Structures","Object-Oriented Programming","Exception Handling","Collections and Data Structures","File Handling","Concurrency and Multithreading","Java Standard Libraries","Application Development","Database Interaction","Software Testing","Best Practices"]},"es":{"title":"Java, programación IT","description":["Sintaxis básica","Estructuras de Control","Programación Orientada a Objetos","Manejo de Excepciones","Colecciones y Estructuras de Datos","Manejo de Archivos","Concurrencia y Multithreading","Bibliotecas Estándar de Java","Desarrollo de Aplicaciones","Interacción con Bases de Datos","Pruebas de Software","Buenas Prácticas"]}}},{"id":"06","institute":"Coderhouse","date":"2021 - 2021","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Scrum methodology, Business","description":["Fundamentals of the agile methodology","Roles in Scrum","Tools and techniques of Scrum","Scrum ceremonies","Backlog Management","Sprint Planning","Managing Multidisciplinary Teams","Continuous Improvement"]},"es":{"title":"Metodología scrum, Negocio","description":["Fundamentos de la metodología ágil","Roles en Scrum","Herramientas y técnicas de Scrum","Ceremonias de Scrum","Gestión del Backlog","Planificación de Sprints","Gestión de Equipos Multidisciplinarios","Mejora Continua"]}}},{"id":"07","institute":"Coderhouse","date":"2020 - 2021","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Javascript, IT programming","description":["Understand the structure of the language","Use of operators","Control Structures","Functions","DOM Manipulation","Object-Oriented Programming","Asynchronicity","Modules","Error Handling","JSON and APIs","Best Practices"]},"es":{"title":"Javascript, programación IT","description":["Comprender la estructura del lenguaje","Uso de operadores","Estructuras de Control","Funciones","Manipulación del DOM","Programación Orientada a Objetos","Asincronía","Módulos","Manejo de Errores","JSON y APIs","Buenas Prácticas"]}}},{"id":"08","institute":"Coderhouse","date":"2020 - 2021","url":"https://www.coderhouse.com/ar/","translations":{"en":{"title":"Web Development, IT programming","description":["Web development practices","working with HTML and CSS","Code versioning practices with GIT","Preprocessors like SASS","Bootstrap and SEO application in the project","Upload to the server and budget development"]},"es":{"title":"Desarrollo web, programación IT","description":["Prácticas de desarrollo web","trabajando con HTML y CSS","Prácticas de control de versiones con GIT","Preprocesadores como SASS","Aplicación de Bootstrap y SEO en el proyecto","Carga al servidor y desarrollo de presupuesto"]}}}]}}'),q=()=>{const{i18n:e}=(0,C.Bd)(),{t}=(0,C.Bd)(),a=e.language,[l,c]=(0,n.useState)("Experience"),d=_.U.D,m=_.U.F;return n.createElement(x,null,n.createElement(y,null,n.createElement(E,null,n.createElement(r.D,{size:"2xl",className:"headingResume"},t("resume.title")),n.createElement(i.E,{className:"textResume",fontSize:"14px"},t("resume.description")),["Experience","Education","Skills","About me"].map((e=>{const a="About me"===e?"aboutMe":e.toLowerCase();return n.createElement(v,{colorScheme:"#333",isActive:l===e,key:e,onClick:()=>c(e)},t(a+".title"))}))),n.createElement(w,null,(()=>{switch(l){case"Experience":return n.createElement(n.Fragment,null,n.createElement(r.D,{className:"headingResume",size:"lg"},t("experience.title")),n.createElement(i.E,{className:"textResume",fontSize:"14px"},t("experience.description")),n.createElement(o.s,{className:"flex-scrollable",justifyContent:"space-between",wrap:"wrap"},d.map((e=>n.createElement(J,{date:e.translations[a].date,description:e.translations[a].description,key:e.id,location:e.company,title:e.translations[a].title,url:e.url})))));case"Education":return n.createElement(n.Fragment,null,n.createElement(r.D,{size:"lg",className:"headingResume"},t("education.title")),n.createElement(i.E,{className:"textResume",fontSize:"14px"},t("education.description")),n.createElement(o.s,{wrap:"wrap",className:"flex-scrollable",justifyContent:"space-between"},m.map((e=>n.createElement(J,{date:e.date,description:e.translations[a].description,key:e.id,location:e.institute,title:e.translations[a].title,url:e.url})))));case"Skills":return n.createElement(n.Fragment,null,n.createElement(r.D,{size:"lg",className:"headingResume"},t("skills.title")),n.createElement(i.E,{className:"textResume",fontSize:"14px"},t("skills.description")),n.createElement(s.w,{my:5,size:"md"}),n.createElement(V,null));case"About me":return n.createElement(n.Fragment,null,n.createElement(r.D,{size:"lg",className:"headingResume"},t("aboutMe.title")),n.createElement(i.E,{className:"textResume",fontSize:"14px"},t("aboutMe.description")),n.createElement(s.w,{my:5,size:"md"}),n.createElement(S,{data:$.p.cx}));default:return null}})())))}},8034:(e,t,a)=>{a.d(t,{w:()=>p});var n=a(4848),r=a(6540),i=a(5815),o=a(7556),s=a(7129),l=a(9319),c=a(4118);const{useRecipeResult:d,PropsProvider:m}=(0,l.a)({key:"separator"}),p=(0,r.forwardRef)((function(e,t){const{styles:a,className:r,props:l}=d(e),m=e.orientation||"horizontal";return(0,n.jsx)(c.B.span,{ref:t,role:(0,o.Kg)(m)?"separator":"presentation","aria-orientation":(0,o.Kg)(m)?m:void 0,...(0,s.c)(l,["orientation"]),className:(0,i.cx)(r,e.className),css:[a,e.css]})}))},7493:(e,t,a)=>{a.d(t,{D:()=>o});var n=a(9319);const{withContext:r,PropsProvider:i}=(0,n.a)({key:"heading"}),o=r("h2")},9726:e=>{e.exports=JSON.parse('{"p":{"jq":{"address":"Buenos Aires, Argentina","email":"daniferrari1994@gmail.com","phone":"(+54) 011 2725 8396"},"cx":{"languages":["English","Spanish"],"nationality":"Argentina"},"UU":"Dan Ferrari"}}')}}]);