!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n,o,s,c;function r(e){for(var t=e;t<o.length;t++)o[t].classList.remove("show"),o[t].classList.add("hide"),n[t].classList.remove("whiteborder")}function i(e){o[e].classList.contains("hide")&&(r(0),n[e].classList.add("whiteborder"),o[e].classList.remove("hide"),o[e].classList.add("show"))}function a(e){for(var t=e;t<c.length;t++)c[t].classList.remove("show"),c[t].classList.add("hide"),s[t].classList.remove("active-pop-up")}function l(e){c[e].classList.contains("hide")&&(a(0),s[e].classList.add("active-pop-up"),c[e].classList.remove("hide"),c[e].classList.add("show"))}window.onload=function(){c=document.getElementsByClassName("popupContent"),s=document.getElementsByClassName("popup"),a(1),o=document.getElementsByClassName("tab-content"),n=document.getElementsByClassName("tab"),r(1)},document.getElementById("tabs").onclick=function(e){var t=e.target;if("tab"==t.className)for(var o=0;o<n.length;o++)if(t==n[o]){i(o);break}},document.getElementById("tabPopUp").onclick=function(e){var t=e.target;if("popup"==t.className)for(var n=0;n<s.length;n++)if(t==s[n]){l(n);break}};const u=document.querySelector("#tab1"),d=document.querySelector("#tab2"),f=document.querySelector("#tab3"),m=document.getElementById("progres-nav");u.addEventListener("click",(function(){m.classList.remove("end"),m.classList.remove("center"),m.classList.add("start")})),d.addEventListener("click",(function(){m.classList.remove("start"),m.classList.remove("end"),m.classList.add("center")})),f.addEventListener("click",(function(){m.classList.remove("center"),m.classList.add("end")}));const v=document.querySelector("#busines"),p=document.querySelector("#personal");v.addEventListener("click",(function(){this.classList.add("active"),p.classList.remove("active")})),p.addEventListener("click",(function(){this.classList.add("active"),v.classList.remove("active")}));const L=document.querySelector("#sign-up");function y(){const e=document.querySelectorAll(".input");for(let t=0;t<e.length;t++)if(""==e[t].value){let n=e[t].closest(".form-group");console.log(n),n.classList.add("error")}}document.querySelector("#log-in").addEventListener("click",(function(){y(),event.preventDefault()})),L.addEventListener("click",(function(){y(),event.preventDefault()}));const g=document.querySelectorAll(".input");for(let e=0;e<g.length;e++)g[e].addEventListener("click",(function(){b()}));function b(){const e=document.querySelectorAll(".form-group");for(let t=0;t<e.length;t++)e[t].classList.remove("error")}},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map