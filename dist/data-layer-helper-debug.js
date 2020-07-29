(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';/*
 jQuery v1.9.1 (c) 2005, 2012
 jQuery Foundation, Inc. jquery.org/license.
*/
var f=/\[object (Boolean|Number|String|Function|Array|Date|RegExp|Arguments)\]/;function g(b){return null==b?String(b):(b=f.exec(Object.prototype.toString.call(Object(b))))?b[1].toLowerCase():"object"}function k(b,a){return Object.prototype.hasOwnProperty.call(Object(b),a)}function l(b){if(!b||"object"!=g(b)||b.nodeType||b==b.window)return!1;try{if(b.constructor&&!k(b,"constructor")&&!k(b.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var a in b);return void 0===a||k(b,a)};/*
 Copyright 2012 Google Inc. All rights reserved. */
function m(b,a,c){a=void 0===a?{}:a;c=void 0===c?!1:c;"function"===typeof a?(q("Legacy constructor was used. See README for latest usage.",r),a={listener:a,l:c,m:!0,h:{}}):a={listener:a.listener||function(){},l:a.listenToPast||!1,m:void 0===a.processNow?!0:a.processNow,h:a.commandProcessors||{}};this.a=b;this.s=a.listener;this.o=a.l;this.g=this.j=!1;this.c={};this.f=[];this.b=a.h;this.i=t(this);a.m&&this.process()}
m.prototype.process=function(){this.j&&q("Process has already been ran. This method should only run a single time to prepare the helper.",u);v(this,this.a,!this.o);this.registerProcessor("set",function(){if(1===arguments.length&&"object"===g(arguments[0]))y(arguments[0],this);else if(2===arguments.length&&"string"===g(arguments[0])){var c=z(arguments[0],arguments[1]);y(c,this)}});this.j=!0;var b=this.a.push,a=this;this.a.push=function(){var c=[].slice.call(arguments,0),d=b.apply(a.a,c);v(a,c);return d}};
m.prototype.get=function(b){var a=this.c;b=b.split(".");for(var c=0;c<b.length;c++){if(void 0===a[b[c]])return;a=a[b[c]]}return a};m.prototype.flatten=function(){this.a.splice(0,this.a.length);this.a[0]={};y(this.c,this.a[0])};m.prototype.registerProcessor=function(b,a){b in this.b||(this.b[b]=[]);this.b[b].push(a)};
function v(b,a,c){c=void 0===c?!1:c;for(b.f.push.apply(b.f,a);!1===b.g&&0<b.f.length;){a=b.f.shift();if("array"===g(a))a:{var d=b.c;"string"===g(a[0])||q("Error processing command, no command was run. The first argument must be of type string, but was of type "+(typeof a[0]+".\nThe command run was "+a),r);for(var e=a[0].split("."),n=e.pop(),p=a.slice(1),h=0;h<e.length;h++){if(void 0===d[e[h]]){q("Error processing command, no command was run as the object at "+(e+" was undefined.\nThe command run was "+
a),r);break a}d=d[e[h]]}try{d[n].apply(d,p)}catch(w){q("An exception was thrown by the method "+(n+", so no command was run.\nThe method was called on the data layer object at the location ")+(e+"."),u)}}else if("arguments"===g(a)){e=b;n=[];p=a[0];if(e.b[p])for(d=e.b[p].length,h=0;h<d;h++)n.push(e.b[p][h].apply(e.i,[].slice.call(a,1)));b.f.push.apply(b.f,n)}else if("function"==typeof a)try{a.call(b.i)}catch(w){q("An exception was thrown when running the method "+(a+", execution was skipped."),u),
q(w,u)}else if(l(a))for(var x in a)y(z(x,a[x]),b.c);else continue;c||(b.g=!0,b.s(b.c,a),b.g=!1)}}m.prototype.registerProcessor=m.prototype.registerProcessor;m.prototype.flatten=m.prototype.flatten;m.prototype.get=m.prototype.get;m.prototype.process=m.prototype.process;window.DataLayerHelper=m;function t(b){return{set:function(a,c){y(z(a,c),b.c)},get:function(a){return b.get(a)}}}function z(b,a){var c={},d=c;b=b.split(".");for(var e=0;e<b.length-1;e++)d=d[b[e]]={};d[b[b.length-1]]=a;return c}
function y(b,a){var c=!b._clear,d;for(d in b)if(k(b,d)){var e=b[d];"array"===g(e)&&c?("array"===g(a[d])||(a[d]=[]),y(e,a[d])):l(e)&&c?(l(a[d])||(a[d]={}),y(e,a[d])):a[d]=e}delete a._clear}var A=1,r=2,u=3;function q(b,a){switch(a){case A:console.log(b);break;case r:console.warn(b);break;case u:console.error(b)}};})();