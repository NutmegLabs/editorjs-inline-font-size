!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FontSizeTool=e():t.FontSizeTool=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(1).toString();var l=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"isDropDownOpen",!1),s(this,"togglingCallback",null),s(this,"emptyString","&nbsp;&nbsp"),s(this,"fontSizeDropDown","font-size-dropdown"),s(this,"commandName","fontSize"),s(this,"CSS",{button:"ce-inline-tool",buttonActive:"ce-font-size-tool--active",buttonModifier:"ce-inline-tool--font"}),s(this,"nodes",{button:void 0}),s(this,"selectedFontSize",null),s(this,"selectionList",void 0),s(this,"buttonWrapperText",void 0),s(this,"createSvg",void 0),s(this,"toggleFontSizeSelector",(function(t){e.selectedFontSize=t.target.id,e.toggle()})),s(this,"toggleDropDown",(function(t){t.target.id!==e.fontSizeDropDown&&"fontSizeBtn"!==t.target.parentNode.id&&"fontSizeBtn"!==t.target.id||e.toggle((function(t){t&&(e.isDropDownOpen=!0)}))}))}var e,n,i;return e=t,i=[{key:"sanitize",get:function(){return{font:{size:!0,face:!0}}}},{key:"isInline",get:function(){return!0}}],(n=[{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=document.createElement(t);return Array.isArray(n)?(e=i.classList).add.apply(e,o(n)):n&&i.classList.add(n),i}},{key:"createButton",value:function(){this.nodes.button=this.make("button",[this.CSS.button,this.CSS.buttonModifier]),this.nodes.button.type="button",this.nodes.button.setAttribute("id","fontSizeBtn"),this.getFontSizeForButton(),this.createSvg=this.svg("toggler-down",13,13),this.nodes.button.appendChild(this.createSvg)}},{key:"getFontSizeForButton",value:function(){this.buttonWrapperText=this.make("div","button-wrapper-text");var t=this.make("div");t.setAttribute("id",this.fontSizeDropDown),t.innerHTML=this.emptyString,this.buttonWrapperText.append(t),this.nodes.button.append(this.buttonWrapperText)}},{key:"addFontSizeOptions",value:function(){var t=this;this.selectionList=this.make("div","selectionList");for(var e=this.make("div","selection-list-wrapper"),n=0,o=[{label:"14",value:"defaultFontSize"},{label:"10",value:"1"},{label:"13",value:"2"},{label:"16",value:"3"},{label:"18",value:"4"},{label:"24",value:"5"},{label:"32",value:"6"},{label:"48",value:"7"}];n<o.length;n++){var i=o[n],r=this.make("div");r.setAttribute("value",i.value),r.setAttribute("id",i.value),r.classList.add("selection-list-option"),document.getElementById(this.fontSizeDropDown).innerHTML!==i.label&&this.selectedFontSize!==i.value||r.classList.add("selection-list-option-active"),r.innerHTML=i.label,e.append(r)}this.selectionList.append(e),this.nodes.button.append(this.selectionList),this.selectionList.addEventListener("click",this.toggleFontSizeSelector),setTimeout((function(){"function"==typeof t.togglingCallback&&t.togglingCallback(!0)}),50)}},{key:"removeFontSizeOptions",value:function(){this.selectionList&&(this.isDropDownOpen=!1,this.selectionList=this.selectionList.remove()),"function"==typeof this.togglingCallback&&this.togglingCallback(!1)}},{key:"render",value:function(){return this.createButton(),this.nodes.button.addEventListener("click",this.toggleDropDown),this.nodes.button}},{key:"toggle",value:function(t){!this.isDropDownOpen&&t?this.addFontSizeOptions():this.removeFontSizeOptions(),"function"==typeof t&&(this.togglingCallback=t)}},{key:"surround",value:function(t){console.log("fontsize"),console.log(this.selectedFontSize),console.log("getelement"),console.log(document.getElementById(this.selectedFontSize)),console.log("document"),console.log(document),"defaultFontSize"!=this.selectedFontSize?this.selectedFontSize&&(console.log("other"),document.execCommand("fontSize",!1,this.selectedFontSize)):console.log("default")}},{key:"getComputedFontStyle",value:function(t){return window.getComputedStyle(t.parentElement,null).getPropertyValue("font-size")}},{key:"checkState",value:function(t){var e=document.queryCommandState("fontSize"),n=this.getComputedFontStyle(t.anchorNode);console.log("anchoredElementFontSize"),console.log(n);var o=this.getComputedFontStyle(t.focusNode);if(console.log("focusedElementFontSize"),console.log(o),n===o)n=n.slice(0,n.indexOf("p")),console.log("anchoredElementFontSize"),console.log(n),-1!==n.indexOf(".")&&(n=n.slice(0,n.indexOf(".")),console.log("anchoredElementFontSize"),console.log(n)),this.replaceFontSizeInWrapper(n);else{var i=this.emptyString;this.replaceFontSizeInWrapper(i)}return e}},{key:"replaceFontSizeInWrapper",value:function(t){document.getElementById(this.fontSizeDropDown).innerHTML=t}},{key:"clear",value:function(){this.toggle(),this.selectedFontSize=null}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}}])&&r(e.prototype,n),i&&r(e,i),t}();s(l,"title","Font Size"),t.exports=l},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".ce-inline-tool.ce-inline-tool--font {\n        display: flex;\n        flex-direction: row;\n        position: relative;\n    }\n    .ce-inline-tool .button-wrapper-text {\n        width: 30px;\n    }\n    .ce-inline-tool .selectionList {\n        position: absolute;\n        top: 35px;\n        left: 0; \n    }\n    .ce-inline-tool .selectionList .selection-list-wrapper {\n            width: 50px;\n            background: #fff;\n            border: 1px solid #eaeaea;\n        }\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option {\n                padding-top: 5px;\n                padding-bottom: 5px;\n                border-bottom: 1px solid #eaeaea;\n            }\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option-active {\n                  background-color: #eff2f5;\n                }\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option:hover {\n                background-color: #eff2f5;\n            }\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(r).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),l=function(t){return document.querySelector(t)},a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=l.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,f=[],p=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(y(o.parts[s],e))}else{var l=[];for(s=0;s<o.parts.length;s++)l.push(y(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:l}}}}function h(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var s=u++;n=c||(c=g(e)),o=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),o=k.bind(null,n,e),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=z.bind(null,n),i=function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i];(l=r[s.id]).refs--,o.push(l)}t&&d(h(t,e),e);for(i=0;i<o.length;i++){var l;if(0===(l=o[i]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete r[l.id]}}}};var S,w=(S=[],function(t,e){return S[t]=e,S.filter(Boolean).join("\n")});function x(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function z(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=p(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}])}));