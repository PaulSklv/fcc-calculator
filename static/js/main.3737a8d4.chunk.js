(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],{27:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(9),u=t.n(n),c=t(8),o=Object(c.b)(function(e){return{currentValue:e.calculations.currentValue}})(function(e){return r.a.createElement("div",{id:"display"},e.currentValue)}),i=t(11),d=t(12),s=t(14),p=t(13),V=t(15),y=(t(36),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(p.a)(a).call(this,e))).onKeyDown=function(e){e.keyCode==t.props.valueObj.keyValue&&t.props.calculation(t.props.value,t.props.currentValue)},t}return Object(V.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e,a=this,t=this.props,l=t.value,n=t.id,u=t.currentValue;return r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("div",{className:"num-button ".concat((e=l,isNaN(e)&&"."!==e&&"="!==e?"operator":null)),id:n,onClick:function(){return a.props.calculation(l,u)}},l))}}]),a}(r.a.Component)),v=Object(c.b)(function(e){return{currentValue:e.calculations.currentValue}},{calculation:function(e,a,t){return l=e,isNaN(l)&&"="!==l&&"AC"!==l&&"."!==l?{type:"HANDLE_OPERATOR",payload:{currentValue:a,value:e}}:"="===e?{type:"EVALUATION",payload:{currentValue:a,result:t,value:e}}:"AC"===e?{type:"ALL_CLEAR"}:"."===e?{type:"DECIMAL",payload:e}:{type:"HANDLE_NUMBERS",payload:"0"===a?a=e:a+e};var l}})(y),b=[{id:"clear",label:"AC"}],m=[{id:"one",label:"1",keyValue:"97"},{id:"two",label:"2",keyValue:"98"},{id:"three",label:"3",keyValue:"99"},{id:"add",label:"+",keyValue:"107"}],E=[{id:"four",label:"4",keyValue:"100"},{id:"five",label:"5",keyValue:"101"},{id:"six",label:"6",keyValue:"102"},{id:"subtract",label:"-",keyValue:"109"}],h=[{id:"seven",label:"7",keyValue:"103"},{id:"eight",label:"8",keyValue:"104"},{id:"nine",label:"9",keyValue:"105"},{id:"multipy",label:"*",keyValue:"106"}],k=[{id:"equal",label:"=",keyValue:"13"},{id:"zero",label:"0",keyValue:"96"},{id:"decimal",label:".",keyValue:"110"},{id:"divide",label:"/",keyValue:"111"}],w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).renderRow=function(e){return e.map(function(e){var a=e.id,t=e.label;e.keyValue;return r.a.createElement(v,{id:a,value:t,key:a,valueObj:e})})},t}return Object(V.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"row"},this.renderRow(b)),r.a.createElement("div",{className:"row"},this.renderRow(m)),r.a.createElement("div",{className:"row"},this.renderRow(E)),r.a.createElement("div",{className:"row"},this.renderRow(h)),r.a.createElement("div",{className:"row"},this.renderRow(k)))}}]),a}(r.a.Component),f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"display"},r.a.createElement(o,null)),r.a.createElement("div",{className:"num-pad"},r.a.createElement(w,null)))},O=t(7),N=t(40),j=function(e){return!!(e%1)},A={currentValue:"0",evaluated:!1},L=/(\+|\-|\*|\/|\.)/,R=/(\+|\-|\*|\/)/,g=Object(O.b)({calculations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HANDLE_NUMBERS":return{currentValue:a.payload,prevValue:a.payload.calculation};case"HANDLE_OPERATOR":var t=a.payload,l=t.currentValue,r=t.value,n=l.split("");return e.evaluated?{currentValue:e.currentValue+r,evaluated:!1}:L.test(n[n.length-1])?n[n.length-1]===r?{currentValue:l}:/(\+|\*|\/)/.test(n[n.length-2])||"-"!==r?/(\+|\*|\/)/.test(n[n.length-2])&&"-"===n[n.length-1]?(n.splice(n.length-2,2,r),{currentValue:n.join("")}):(n[n.length-1]=r,{currentValue:n.join("")}):{currentValue:a.payload.currentValue+a.payload.value}:{currentValue:l+r};case"ALL_CLEAR":return{currentValue:"0",evaluated:!1};case"EVALUATION":return{currentValue:j(Object(N.a)(a.payload.currentValue))?(Math.floor(1e5*Object(N.a)(a.payload.currentValue))/1e5).toString():Object(N.a)(a.payload.currentValue).toString(),evaluated:!0};case"DECIMAL":return e.currentValue.includes(".")?e.currentValue.includes(".")&&R.test(e.currentValue)&&/\d$/.test(e.currentValue)?{currentValue:e.currentValue+a.payload}:{currentValue:e.currentValue}:{currentValue:e.currentValue+a.payload};default:return e}}});u.a.render(r.a.createElement(c.a,{store:Object(O.c)(g)},r.a.createElement(f,null)),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3737a8d4.chunk.js.map