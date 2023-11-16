"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[460],{1073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=a(5893),i=a(1151);const n={sidebar_position:1},r="Welcome to the Star Wars API (SWAPI)",o={id:"tutorial-basics/intro",title:"Welcome to the Star Wars API (SWAPI)",description:"The Star Wars API (SWAPI or Swah-pee) is a simple, HTTP-accessible web API that contains quantified and programmatically accessible data for all the data you could imagine from the (canon) Star Wars universe. The team at SWAPI has taken the rich contextual lore from seven (at last update) Star Wars films, made it all consumable by software, and stuck an API on the front.",source:"@site/docs/tutorial-basics/intro.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/intro",permalink:"/docs/tutorial-basics/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"A SWAPI Tutorial",permalink:"/docs/category/a-swapi-tutorial"},next:{title:"Display Star Wars character data",permalink:"/docs/tutorial-basics/fetch-star-wars-data"}},l={},c=[{value:"Schema",id:"schema",level:2},{value:"Resource",id:"resource",level:3},{value:"Complete attribute table",id:"complete-attribute-table",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"welcome-to-the-star-wars-api-swapi",children:"Welcome to the Star Wars API (SWAPI)"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://swapi.dev/",children:"Star Wars API"})," (SWAPI or Swah-pee) is a simple, HTTP-accessible web API that contains quantified and programmatically accessible data for all the data you could imagine from the (canon) Star Wars universe. The team at SWAPI has taken the rich contextual lore from seven (at last update) Star Wars films, made it all consumable by software, and stuck an API on the front."]}),"\n",(0,s.jsx)(t.p,{children:"It's open source, has helper libraries for all the popular languages, and is your most potent tool in the inevitable Star Wars fact-off at the culmination of our collective existence."}),"\n",(0,s.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(t.p,{children:"All the resources in the SWAPI support JSON schema."}),"\n",(0,s.jsx)(t.p,{children:"The SWAPI comprises seven resources, all of which contain fixed attributes."}),"\n",(0,s.jsx)(t.h3,{id:"resource",children:"Resource"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#root",children:"Root"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#films",children:"Films"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#people",children:"People"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#planets",children:"Planets"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#species",children:"Species"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#starships",children:"Starships"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#vehicles",children:"Vehicles"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, a call to the People resource for Luke Skywalker (/api/people/1) returns the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"name": "Luke Skywalker",\n\t"height": "172",\n\t"mass": "77",\n\t"hair_color": "blond",\n\t"skin_color": "fair",\n\t"eye_color": "blue",\n\t"birth_year": "19BBY",\n\t"gender": "male",\n\t"homeworld": "https://swapi.dev/api/planets/1/",\n\t"films": [\n\t\t"https://swapi.dev/api/films/2/",\n\t\t"https://swapi.dev/api/films/6/",\n\t\t"https://swapi.dev/api/films/3/",\n\t\t"https://swapi.dev/api/films/1/",\n\t\t"https://swapi.dev/api/films/7/"\n\t],\n\t"species": [\n\t\t"https://swapi.dev/api/species/1/"\n\t],\n\t"vehicles": [\n\t\t"https://swapi.dev/api/vehicles/14/",\n\t\t"https://swapi.dev/api/vehicles/30/"\n\t],\n\t"starships": [\n\t\t"https://swapi.dev/api/starships/12/",\n\t\t"https://swapi.dev/api/starships/22/"\n\t],\n\t"created": "2014-12-09T13:50:51.644000Z",\n\t"edited": "2014-12-20T21:17:56.891000Z",\n\t"url": "https://swapi.dev/api/people/1/"\n}\n\n'})}),"\n",(0,s.jsx)(t.p,{children:'Attributes that also exist as a resource (Luke Skywalker\'s homeland, Tatooine, also exists as "planet 1") are returned as a URL.'}),"\n",(0,s.jsx)(t.h3,{id:"complete-attribute-table",children:"Complete attribute table"}),"\n",(0,s.jsxs)(t.p,{children:["You can find the attributes for each resource ",(0,s.jsx)(t.a,{href:"https://swapi.dev/documentation#wookiee",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,s.jsx)(t.p,{children:"To get started (and prepare for that fact-off,) let's set up a simple script to return some character info into a basic HTML table."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A basic understanding of HTML, JavaScript, CSS, and REST APIs"}),"\n",(0,s.jsxs)(t.li,{children:["An empty repository (we're using ",(0,s.jsx)(t.a,{href:"https://github.com",children:"GitHub"}),") or, if you're doing things locally, an empty folder and something to edit HTML, JavaScript, and CSS (such as ",(0,s.jsx)(t.a,{href:"https://notepad-plus-plus.org/",children:"Notepad++"})," or ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"A passing interest in Star Wars (or a desire to know more)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc4f"," Allrighty!"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"./fetch-star-wars-data.md",children:(0,s.jsx)(t.img,{alt:"Let&#39;s go see a Star War",src:a(9530).Z+"",width:"480",height:"270"})})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9530:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/starwar-28ef447c5c901cddf71e1c1b4134bd4e.gif"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var s=a(7294);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);