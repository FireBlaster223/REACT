(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a=t(1),o=t(0),r=t.n(o),c=t(9),i=t.n(c),s=t(2),b=t(13),u=t(5),d=t(6);function l(){var n=Object(u.a)(["\n  margin: 10px 0;\n\n  p {\n    font-size: 24px;\n    color: #777;\n  }\n\n  input {\n    font-size: 16px;\n    border: 1px solid #5f4bb6;\n    border-radius: 10px;\n    background: #fafafa;\n    outline: none;\n    padding: 4px 10px;\n    transition: all ease-in-out 250ms;\n    color: #777;\n\n    &:hover {\n      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.125);\n    }\n  }\n"]);return l=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    background: linear-gradient(90deg, #5f4bb6, #404fa0);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  button {\n    margin: 10px 0;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 5px 80px;\n    background: linear-gradient(90deg, #5f4bb6, #404fa0);\n    border: none;\n    border-radius: 10px;\n    color: #fff;\n    outline: none;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.125);\n    transition: all ease-in-out 250ms;\n\n    &:hover {\n      transform: scale(0.97);\n      cursor: pointer;\n      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.075);\n    }\n  }\n"]);return f=function(){return n},n}var g=d.a.div(f()),p=d.a.div(l());t(21);var j=function(){var n=Object(o.useState)({name:"",age:"",race:"",class:"",advantages:""}),e=Object(b.a)(n,2),t=e[0],r=e[1],c=[{name:"Nome",onchange:function(n){r(Object(s.a)(Object(s.a)({},t),{},{name:n}))}},{name:"Idade",onchange:function(n){r(Object(s.a)(Object(s.a)({},t),{},{age:n}))}},{name:"Ra\xe7a",onchange:function(n){r(Object(s.a)(Object(s.a)({},t),{},{race:n}))}},{name:"Classe",onchange:function(n){r(Object(s.a)(Object(s.a)({},t),{},{class:n}))}},{name:"Vantagens",onchange:function(n){r(Object(s.a)(Object(s.a)({},t),{},{advantages:n}))}}];return Object(o.useEffect)((function(){return console.log(t)}),[t]),Object(a.jsxs)(g,{className:"App",children:[Object(a.jsx)("h1",{children:"RPG Assist"}),c.map((function(n,e){var t=n.name,o=n.onchange;return Object(a.jsxs)(p,{children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("input",{type:"text",onChange:function(n){var e=n.target.value;return o(e)}})]},e)})),Object(a.jsx)("button",{onClick:function(){return localStorage.setItem("ficha_data",JSON.stringify(t)),void alert("Os dados foram salvos!")},children:"Enviar"})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e718d616.chunk.js.map