"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[779],{9397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(5893),s=n(1151);const r={sidebar_position:2},l="Display Star Wars character data",i={id:"tutorial-basics/fetch-star-wars-data",title:"Display Star Wars character data",description:"To get started using the SWAPI API, we'll create a simple page that displays Star Wars character data in an interactive table. For this example, we'll collect the character's Name, Birth year (Star Wars year), Homeworld and the Films they appeared in.",source:"@site/docs/tutorial-basics/fetch-star-wars-data.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/fetch-star-wars-data",permalink:"/docs/tutorial-basics/fetch-star-wars-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to the Star Wars API (SWAPI)",permalink:"/docs/tutorial-basics/intro"}},c={},o=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Set up the site structure",id:"set-up-the-site-structure",level:2},{value:"Add a HTML table",id:"add-a-html-table",level:2},{value:"Setup the API call",id:"setup-the-api-call",level:2},{value:"Completed script",id:"completed-script",level:3},{value:"The css",id:"the-css",level:2},{value:"Viewing the table",id:"viewing-the-table",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"display-star-wars-character-data",children:"Display Star Wars character data"}),"\n",(0,a.jsxs)(t.p,{children:["To get started using the SWAPI API, we'll create a simple page that displays Star Wars character data in an interactive table. For this example, we'll collect the character's ",(0,a.jsx)(t.em,{children:"Name"}),", ",(0,a.jsx)(t.em,{children:"Birth year"})," (Star Wars year), ",(0,a.jsx)(t.em,{children:"Homeworld"})," and the ",(0,a.jsx)(t.em,{children:"Films"})," they appeared in."]}),"\n",(0,a.jsx)(t.p,{children:"We'll also give the table simple styling and a button to get even more data in those eyeballs and quite possibly find the droids you were looking for."}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,a.jsx)(t.p,{children:"To complete this first part of the tutorial, you'll need the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A basic understanding of HTML, JavaScript, and REST APIs"}),"\n",(0,a.jsxs)(t.li,{children:["An empty repository or somewhere to save your site (we're using ",(0,a.jsx)(t.a,{href:"https://github.com/",children:"GitHub"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["A tool like ",(0,a.jsx)(t.a,{href:"https://notepad-plus-plus.org/",children:"Notepad++"})," or ",(0,a.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," to edit files locally"]}),"\n",(0,a.jsx)(t.li,{children:"A continued interest in Star Wars"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\ud83d\udca1","\nThis tutorial assumes you're starting from scratch. However, the code can be copied and inserted into an existing site or web app. Just skip the set up."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"set-up-the-site-structure",children:"Set up the site structure"}),"\n",(0,a.jsx)(t.p,{children:"In the root of your repository,"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Create a new file named ",(0,a.jsx)(t.code,{children:"index.html"})]}),"\n",(0,a.jsxs)(t.li,{children:["Create a new file named ",(0,a.jsx)(t.code,{children:"table.css"})]}),"\n",(0,a.jsxs)(t.li,{children:["Create a new folder named ",(0,a.jsx)(t.code,{children:"scripts"})]}),"\n",(0,a.jsxs)(t.li,{children:["Open the ",(0,a.jsx)(t.code,{children:"scripts"})," folder"]}),"\n",(0,a.jsxs)(t.li,{children:["Create a new file named ",(0,a.jsx)(t.code,{children:"main.js"})]}),"\n",(0,a.jsx)(t.li,{children:"Save the files and folders"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You should see the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"#Demo site structure\n./root/*\n\u251c\u2500 scripts\n|   \u251c\u2500 main.js\n\u251c\u2500 table.css\n\u251c\u2500 index.html\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"add-a-html-table",children:"Add a HTML table"}),"\n",(0,a.jsxs)(t.p,{children:["Copy this HTML into your ",(0,a.jsx)(t.code,{children:"index.html"})," file. It includes the basic syntax for using the SWAPI data in a four-column table."]}),"\n",(0,a.jsxs)(t.p,{children:["The rows will be populated using the data we fetch and pass into the ",(0,a.jsx)(t.code,{children:"id=data"})," value."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Star Wars database</title>\n        <meta charset="UTF-8" />\n        <script src="scripts/main.js"><\/script>\n        <link href="table.css" rel="stylesheet">\n    </head>\n<body onload="fetchCharacters()">\n    <h1>Star Wars Characters</h1>\n        <table id="characters">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Birth year</th>\n                    <th>Homeworld</th>\n                    <th>Films</th>\n                </tr>\n            </thead>\n            <tbody id="data"></tbody>\n        </table>\n    <button onclick="fetchPage(2)">Load Page 2</button>\n</body>\n</html>\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"setup-the-api-call",children:"Setup the API call"}),"\n",(0,a.jsxs)(t.p,{children:["Using this script, we will call the ",(0,a.jsx)(t.code,{children:"people"})," resource and fetch the character's ",(0,a.jsx)(t.em,{children:"name"}),", ",(0,a.jsx)(t.em,{children:"birth_year"}),", ",(0,a.jsx)(t.em,{children:"homeworld"}),", and ",(0,a.jsx)(t.em,{children:"films"}),". You can write this from scratch using a different language or copy the example JavaScript."]}),"\n",(0,a.jsxs)(t.p,{children:["As SWAPI stores the ",(0,a.jsx)(t.em,{children:"homeworld"})," attribute as a URL, you'll need to define a second function to fetch it's ",(0,a.jsx)(t.em,{children:"name"})," attribute and append it to the URL."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly, the ",(0,a.jsx)(t.em,{children:"films"})," attribute is stored as an array of URLs, so you'll need two additional functions to loop through these and join and append them."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\ud83d\udca1",'\nYou should copy all the code in these steps into your "main.js" file that we created earlier. You can find the complete script ',(0,a.jsx)(t.a,{href:"/docs/tutorial-basics/fetch-star-wars-data#completed-script",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Define a function to fetch the character data. We have called ours ",(0,a.jsx)(t.code,{children:"fetchCharacters"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'    // Fetch and display Star Wars character data.\n    async function fetchCharacters()\n        {\n            // Fetch people data and set "temp" variable\n            let response = await fetch("https://swapi.dev/api/people/?page=1");\n            const data = await response.json();\n            let temp = "";\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add a nested function to fetch the homeworld ",(0,a.jsx)(t.em,{children:"name"})," attribute"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"            // Fetch the homeworld name\n            const getHomeworldName = async (homeworldUrl) => {\n                let homeworldResponse = await fetch(homeworldUrl);\n                let homeworldData = await homeworldResponse.json();\n                return homeworldData.name\n            }\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add two more to fetch each film's name and then join them into a comma-separated list"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"            /* Film Names */\n            // Fetch film name\n            const getFilmName = async (filmUrl) => {\n                let filmResponse = await fetch(filmUrl);\n                let filmData = await filmResponse.json();\n                return filmData.title;\n            };\n\n            //Fetch and display film names\n            const getFilmNames = async (filmUrls) => {\n                const filmNames = [];\n                for (const filmUrl of filmUrls) {\n                    const filmName = await getFilmName(filmUrl);\n                    filmNames.push(filmName);\n                }\n                return filmNames.join(', ');\n            };\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Loop through the fetched character data and add it to the table"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'            // loop through each character and set table data\n            for (const character of data.results)\n            {\n                temp += "<tr>";\n                temp += "<td>" + character.name + "</td>";\n                temp += "<td>" + character.birth_year + "</td>";\n                const homeworldName = await getHomeworldName(character.homeworld);\n                temp += "<td><a href=\'" + character.homeworld + "\' target=\'_blank\'>" + homeworldName + "</a></td>";\n                const filmNames = await getFilmNames(character.films);\n                temp += "<td>" + filmNames + "</td>";\n                temp += "</tr>";\n            };\n        document.getElementById("data").innerHTML = temp;\n        }\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add a function for the next page button"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"        //Fetch page//\n        async function fetchPage(page) {\n            await fetchCharacters(page);\n        }\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"completed-script",children:"Completed script"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Your finished script should look something like this"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'\n// Fetch and display Star Wars character data.\nasync function fetchCharacters()\n   {\n           // Fetch people data and set "temp" variable\n           let response = await fetch("https://swapi.dev/api/people/?page=1");\n           const data = await response.json();\n           let temp = "";\n\n           // Fetch the homeworld name\n           const getHomeworldName = async (homeworldUrl) => {\n               let homeworldResponse = await fetch(homeworldUrl);\n               let homeworldData = await homeworldResponse.json();\n               return homeworldData.name\n           }\n\n\n           /* Film Names */\n           // Fetch film name\n           const getFilmName = async (filmUrl) => {\n               let filmResponse = await fetch(filmUrl);\n               let filmData = await filmResponse.json();\n               return filmData.title;\n           };\n\n           //Fetch and display film names\n           const getFilmNames = async (filmUrls) => {\n               const filmNames = [];\n               for (const filmUrl of filmUrls) {\n                   const filmName = await getFilmName(filmUrl);\n                   filmNames.push(filmName);\n               }\n               return filmNames.join(\', \');\n           };\n\n           // loop through each character and set table data\n           for (const character of data.results)\n           {\n               temp += "<tr>";\n               temp += "<td>" + character.name + "</td>";\n               temp += "<td>" + character.birth_year + "</td>";\n               const homeworldName = await getHomeworldName(character.homeworld);\n               temp += "<td><a href=\'" + character.homeworld + "\' target=\'_blank\'>" + homeworldName + "</a></td>";\n               const filmNames = await getFilmNames(character.films);\n               temp += "<td>" + filmNames + "</td>";\n               temp += "</tr>";\n           };\n       document.getElementById("data").innerHTML = temp;\n       }\n\n//Fetch page 2//\nasync function fetchPage(page) {\n           await fetchCharacters(page);\n       }\n'})})]}),"\n",(0,a.jsx)(t.h2,{id:"the-css",children:"The css"}),"\n",(0,a.jsx)(t.p,{children:"To add some simple styles to the table"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Open ",(0,a.jsx)(t.code,{children:"table.css"})," in an editor"]}),"\n",(0,a.jsxs)(t.li,{children:["Enter the following","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",children:"\n/* table layout */\n\ntable {\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse;\n    border: 3px;\n    margin-top: 5%;\n\n}\n\nth, td {\n    border: 1px solid;\n    padding: 10px;\n    text align: left\n}\n\nth {\n    background-color: #D2B48C;\n}\n\ntd {\n    background-color: rgb(207, 174, 141);\n}\n\n/* table headers */\n\nthead th:nth-child(1) {\n    width: 15%;\n    font-weight: bold;\n}\n\nthead th:nth-child(2) {\n    width: 15%;\n}\n\nthead th:nth-child(3) {\n    width: 30%;  \n}\n\nthead th:nth-child(4) {\n    width: 40%;\n}\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Save ",(0,a.jsx)(t.code,{children:"table.css"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"viewing-the-table",children:"Viewing the table"}),"\n",(0,a.jsxs)(t.p,{children:["Once you've saved the HTML, scripts, and css, and that fact-off anxiety is kicking in open the ",(0,a.jsx)(t.code,{children:"index.html"})," file in a browser, (",(0,a.jsx)(t.strong,{children:"Right Click"})," ",(0,a.jsx)(t.code,{children:"index.html"})," > ",(0,a.jsx)(t.strong,{children:"Open with..."}),",) or use a Node package like ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/http-server",children:"http-server"})," or ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/gaming/playfab/features/authentication/platform-specific-authentication/running-an-http-server-for-testing",children:"npm"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"You should see this table"}),"\n",(0,a.jsx)(t.img,{alt:"Alt text",src:n(9955).Z+"",title:"The table. Beautiful.",width:"1094",height:"704"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Table01-9f64827043f23b48b122c5a3d8cfcd8f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var a=n(7294);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);