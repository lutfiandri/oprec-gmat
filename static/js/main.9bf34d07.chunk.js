(this["webpackJsonpoprec-gmat"]=this["webpackJsonpoprec-gmat"]||[]).push([[0],{25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(18),i=c.n(r),l=c(10),d=(c(25),c(9)),j=c(2),o=function(){var e=Object(j.f)().pathname;return Object(s.jsx)("header",{className:"sticky top-0 z-50",children:Object(s.jsxs)("nav",{className:"flex space-x-3 px-10 items-center font-bold bg-gray-800",children:[Object(s.jsx)("div",{className:"text-2xl mr-5",children:"GMAT"}),Object(s.jsx)(d.b,{to:"/",className:"py-1 px-8 rounded-md m-3 ".concat("/"===e?"bg-gray-400":" bg-gray-500"),children:"1"}),Object(s.jsx)(d.b,{to:"/2",className:"py-1 px-8 rounded-md m-3 ".concat("/2"===e?"bg-gray-400":" bg-gray-500"),children:"2"})]})})},u=c(11),x=c.n(u),b=function(e){var t=e.id,c=e.times,n=e.plus,r=e.row,i=e.setAltitude,d=Object(a.useState)(0),j=Object(l.a)(d,2),o=j[0],u=j[1],b=Object(a.useState)(0),m=Object(l.a)(b,2),h=m[0],O=m[1],p=function(){return Math.random()*c+n};return Object(a.useEffect)((function(){var e=[{x:[new Date],y:[o],mode:"lines",line:{color:"#4B5563"}}];x.a.newPlot(t,e,{autosize:!0,margin:{l:40,r:10,b:40,t:20,pad:0}}),setInterval((function(){O(p())}),200)}),[]),Object(a.useEffect)((function(){var e=new Date,c=p().toFixed(2);u(c),"altitude"===t&&i(c);var s={x:[[e]],y:[[c]]},a={xaxis:{range:[e.setSeconds(e.getSeconds()-60),e.setSeconds(e.getSeconds()+60)]}};x.a.relayout(t,a),x.a.extendTraces(t,s,[0])}),[h]),Object(s.jsxs)("div",{className:"bg-white rounded-md p-2 w-full h-full col-span-5 ".concat("2"===r?"row-span-2":"row-span-1"),children:[Object(s.jsxs)("div",{className:"h-6 text-center",children:[t," : ",o]}),Object(s.jsx)("div",{className:"".concat("2"===r?"h-134":"h-60"),children:Object(s.jsx)("div",{className:"w-full h-full",id:t})})]})},m=function(e){var t=e.altitude,c=(e.setAltitude,e.row);return Object(s.jsxs)("div",{className:"bg-white flex flex-col items-center rounded-md p-2 h-full w-full ".concat("2"===c?"row-span-2":"row-span-1"),children:[Object(s.jsxs)("div",{className:"text-center",children:[t," m"]}),Object(s.jsx)("div",{className:"bg-gray-800 w-1 h-full my-4"})]})},h=function(e){var t=e.text;return Object(s.jsx)("div",{className:"bg-white rounded-md p-2 col-span-5",children:Object(s.jsx)("div",{className:"h-60 flex justify-center items-center",children:t})})},O=function(e){var t=e.altitude;return Object(s.jsxs)("div",{className:"px-10 py-8 grid grid-cols-11 w-full text-gray-800 gap-4",children:[Object(s.jsx)(m,{altitude:t,row:"2"}),Object(s.jsx)(b,{id:"yaw",times:1,plus:-.5}),Object(s.jsx)(b,{id:"pitch",times:1,plus:-.5}),Object(s.jsx)(b,{id:"roll",times:1,plus:-.5}),Object(s.jsx)(h,{text:"3D Model | (Coming Soon)"})]})},p=function(e){var t=e.altitude,c=e.setAltitude;return Object(s.jsxs)("div",{className:"px-10 py-8 grid grid-cols-11 w-full text-gray-800 gap-4",children:[Object(s.jsx)(m,{altitude:t,row:"2"}),Object(s.jsx)(b,{id:"altitude",times:10,plus:34,row:"2",setAltitude:c}),Object(s.jsx)(b,{id:"pressure",times:11,plus:112,row:"1"}),Object(s.jsx)(b,{id:"temperature",times:3,plus:32,row:"1"})]})},f=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.jsx)("div",{className:"relative min-h-screen bg-gray-700 flex flex-col text-white",children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)(o,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/",children:Object(s.jsx)(O,{altitude:c})}),Object(s.jsx)(j.a,{exact:!0,path:"/2",children:Object(s.jsx)(p,{altitude:c,setAltitude:n})})]})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.9bf34d07.chunk.js.map