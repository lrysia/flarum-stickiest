module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}({0:function(t,e){t.exports=flarum.core.compat.app},10:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n);i.a.initializers.add("the-turk-stickiest",(function(){i.a.extensionData.for("the-turk-stickiest").registerSetting({setting:"the-turk-stickiest.badge_icon",type:"text",label:i.a.translator.trans("the-turk-stickiest.admin.settings.badge_icon_label"),help:i.a.translator.trans("the-turk-stickiest.admin.settings.badge_icon_text")}).registerPermission({icon:"fas fa-thumbtack",label:i.a.translator.trans("the-turk-stickiest.admin.permissions.sticky_discussions_label"),permission:"discussion.stickiest"},"moderate",95)}))}});
//# sourceMappingURL=admin.js.map