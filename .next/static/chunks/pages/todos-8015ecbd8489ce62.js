(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},n=e.split(";"),i=(t||{}).decode||o,s=0;s<n.length;s++){var a=n[s],c=a.indexOf("=");if(!(c<0)){var l=a.substring(0,c).trim();if(void 0==r[l]){var d=a.substring(c+1,a.length).trim();'"'===d[0]&&(d=d.slice(1,-1)),r[l]=function(e,t){try{return t(e)}catch(t){return e}}(d,i)}}}return r},t.serialize=function(e,t,o){var i=o||{},s=i.encode||r;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!n.test(a))throw TypeError("argument val is invalid");var c=e+"="+a;if(null!=i.maxAge){var l=i.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(i.domain){if(!n.test(i.domain))throw TypeError("option domain is invalid");c+="; Domain="+i.domain}if(i.path){if(!n.test(i.path))throw TypeError("option path is invalid");c+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(c+="; HttpOnly"),i.secure&&(c+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var o=decodeURIComponent,r=encodeURIComponent,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},7041:function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};Object.defineProperty(t,"__esModule",{value:!0}),t.checkCookies=t.hasCookie=t.removeCookies=t.deleteCookie=t.setCookies=t.setCookie=t.getCookie=t.getCookies=void 0;var i=o(6489),s=function(){return"undefined"!=typeof window},a=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.getCookies=function(e){if(e&&(t=e.req),!s())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,i.parse)(t.headers.cookie):{};for(var t,o={},r=document.cookie?document.cookie.split("; "):[],n=0,a=r.length;n<a;n++){var c=r[n].split("="),l=c.slice(1).join("=");o[c[0]]=l}return o},t.getCookie=function(e,o){var r,n=(0,t.getCookies)(o)[e];if(void 0!==n)return"true"===(r=n?n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):n)||"false"!==r&&("undefined"!==r?"null"===r?null:r:void 0)},t.setCookie=function(e,t,o){if(o){var c,l,d,u=o.req,f=o.res,p=n(o,["req","res"]);l=u,d=f,c=p}var h=(0,i.serialize)(e,a(t),r({path:"/"},c));if(s())document.cookie=h;else if(d&&l){var m=d.getHeader("Set-Cookie");if(Array.isArray(m)||(m=m?[String(m)]:[]),d.setHeader("Set-Cookie",m.concat(h)),l&&l.cookies){var v=l.cookies;""===t?delete v[e]:v[e]=a(t)}if(l&&l.headers&&l.headers.cookie){var v=(0,i.parse)(l.headers.cookie);""===t?delete v[e]:v[e]=a(t),l.headers.cookie=Object.entries(v).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.setCookies=function(e,o,r){return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."),(0,t.setCookie)(e,o,r)},t.deleteCookie=function(e,o){return(0,t.setCookie)(e,"",r(r({},o),{maxAge:-1}))},t.removeCookies=function(e,o){return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."),(0,t.deleteCookie)(e,o)},t.hasCookie=function(e,o){return!!e&&(0,t.getCookies)(o).hasOwnProperty(e)},t.checkCookies=function(e,o){return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."),(0,t.hasCookie)(e,o)}},6254:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todos",function(){return o(6324)}])},6324:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return m},default:function(){return v}});var r=o(5893),n=o(7041),i=o(1664),s=o.n(i),a=o(7294),c=o(8193),l=o(5434);let d=e=>{let{id:t,todoName:o,remainedTime:n,completed:i,onChangeCondition:a,onTodoDelete:d}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-6 p-4 shadow-md rounded-md gap-6 ".concat(i?"bg-teal-700 ":"bg-teal-300"),children:[(0,r.jsxs)("div",{className:"flex justify-between item-center flex-1 col-span-4",children:[(0,r.jsx)("p",{children:o}),i?(0,r.jsx)("p",{children:"done"}):(0,r.jsxs)("p",{className:"flex items-center gap-x-1",children:[(0,r.jsx)(c.Etu,{className:"icon"}),n]})]}),(0,r.jsxs)("div",{className:"flex justify-end items-center gap-4 col-span-2",children:[(0,r.jsxs)("div",{className:"flex justify-center items-center",children:[i&&(0,r.jsx)(c.bzc,{className:"icon cursor-pointer",onClick:a}),!i&&(0,r.jsx)(l.hrt,{className:"icon cursor-pointer",onClick:a})]}),(0,r.jsx)(s(),{legacyBehavior:!0,href:"/todos/".concat(t),className:"flex justify-center items-center",children:(0,r.jsx)("a",{children:(0,r.jsx)(c.$iz,{className:"icon cursor-pointer"})})}),(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)(c.VPh,{className:"icon cursor-pointer",onClick:d})})]})]})};var u=o(6154),f=o(6501),p=o(1163);let h=e=>{let{userTodos:t,name:o}=e,[i,l]=(0,a.useState)({data:JSON.parse(t),loading:!1,error:null}),[h,m]=(0,a.useState)({condition:"All"}),v=(0,p.useRouter)(),x=e=>{let t=(new Date(e).getTime()-Date.now())/864e5,o=t+1;return o+1<0?"expired":"".concat(Math.floor(o),"d:").concat(Math.floor(o%1*24),"h")},g=e=>{u.Z.patch("/api/todos/dynamicTodos/".concat(e)).then(e=>{l({...i,data:e.data.todos}),f.Am.success("changed")}).catch(e=>{l({...i,error:e}),f.Am.error(e.message)})},y=e=>{u.Z.delete("/api/todos/dynamicTodos/".concat(e)).then(e=>{f.Am.success(e.data.message),l({...i,data:e.data.todos})}).catch(e=>{l({...i,error:e}),f.Am.error(e.message)})},k=()=>{(0,n.deleteCookie)("todoToken"),v.reload(window.location.pathname)};return(0,r.jsx)("div",{className:"flex flex-col gap-2 container mx-auto max-w-2xl",children:i.loading?(0,r.jsx)("p",{children:"loading"}):0===i.data.length?(0,r.jsxs)("div",{children:[(0,r.jsx)(s(),{href:"/todos/create",legacyBehavior:!0,children:(0,r.jsx)("a",{className:"text-teal-500 hover:text-teal-800",children:"Add new Todo?"})}),(0,r.jsx)("p",{children:"no todo"})]}):(0,r.jsxs)("div",{className:"flex flex-col gap-3 w-full",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(s(),{href:"/todos/create",legacyBehavior:!0,children:(0,r.jsx)("a",{className:"text-teal-500 hover:text-teal-800",children:"Add new Todo?"})}),(0,r.jsx)("p",{children:o}),(0,r.jsx)(c.Mqe,{className:"icon cursor-pointer",onClick:k})]}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col gap-6",children:[i.data.map(e=>(0,r.jsx)(d,{todoName:e.todoName,id:e._id,remainedTime:x(e.todoDate),completed:e.completed,onChangeCondition:()=>g(e._id),onCompleteHandler:()=>completeHandler(e._id),onTodoDelete:()=>y(e._id)},e._id)),(0,r.jsx)(f.x7,{})]})]})})};var m=!0,v=h},1163:function(e,t,o){e.exports=o(6885)},8357:function(e,t,o){"use strict";o.d(t,{w_:function(){return c}});var r=o(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function c(e){return function(t){return r.createElement(l,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,o){return r.createElement(t.tag,s({key:o},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var o,n=e.attr,i=e.size,c=e.title,l=a(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:o,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[617,228,470,774,888,179],function(){return e(e.s=6254)}),_N_E=e.O()}]);