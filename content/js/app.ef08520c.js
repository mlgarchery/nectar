(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],p=0,m=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"appmemento"}},[n("div",{attrs:{id:"setup"}},[n("div",[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myYear,expression:"myYear"}],domProps:{value:e.myYear},on:{input:function(t){t.target.composing||(e.myYear=t.target.value)}}}),e._v(" years "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myMonth,expression:"myMonth"}],domProps:{value:e.myMonth},on:{input:function(t){t.target.composing||(e.myMonth=t.target.value)}}}),e._v(" monthes. "),n("p",[e._v(" You've used "),n("span",{staticClass:"percentage"},[e._v(e._s(parseInt(e.completedMonthes/1080*100)))]),e._v("% of a 90-years, "),n("br"),e._v(" fully creative and beautiful life. "),n("br"),e._v(" You'll be remembered.")]),n("p",[e._v("Just get to work.")])])]),n("div",{attrs:{id:"life"}},e._l(e.monthes,(function(t){var r;return n("div",{key:t,class:["month",(r={},r["completedMonthes"]=t<=e.completedMonthes,r)],on:{click:function(n){return e.complete(t)}}},[e._v(" "+e._s(parseInt(t/12))+" "),n("br"),e._v(" "+e._s(t%12)+" ")])})),0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"title"},[e._v(" Your life calendar"),n("br")])}],i=(n("a630"),n("3ca3"),n("d3b7"),n("ddb0"),{name:"App",mounted:function(){var e=localStorage.getItem("myYear"),t=localStorage.getItem("myMonth");e&&(this.myYear=e),t&&(this.myMonth=t)},computed:{completedMonthes:{get:function(){return 12*parseInt(this.myYear)+parseInt(this.myMonth)},set:function(e){this.myYear=parseInt(e/12),this.myMonth=parseInt(e%12),this.setAgeInLocalStorage(this.myYear,this.myMonth)}}},data:function(){return{myYear:27,myMonth:11,monthes:Array.from(Array(1080).keys())}},methods:{complete:function(e){this.completedMonthes=e},setAgeInLocalStorage:function(e,t){localStorage.setItem("myYear",e),localStorage.setItem("myMonth",t)}}}),u=i,c=(n("5c0b"),n("2877")),s=Object(c["a"])(u,o,a,!1,null,null,null),l=s.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ef08520c.js.map