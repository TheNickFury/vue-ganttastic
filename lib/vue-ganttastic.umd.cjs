(function(M,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):(M=typeof globalThis<"u"?globalThis:M||self,H(M.VueGanttastic={},M.dayjs,M.Vue))})(this,function(M,H,e){"use strict";const O=(t=>t&&typeof t=="object"&&"default"in t?t:{default:t})(H);var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){var i="day";return function(o,y,f){var d=function(n){return n.add(4-n.isoWeekday(),i)},r=y.prototype;r.isoWeekYear=function(){return d(this).year()},r.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),i);var a,l,m,w,x=d(this),g=(a=this.isoWeekYear(),l=this.$u,m=(l?f.utc:f)().year(a).startOf("year"),w=4-m.isoWeekday(),m.isoWeekday()>4&&(w+=7),m.add(w,i));return x.diff(g,"week")+1},r.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var s=r.startOf;r.startOf=function(n,a){var l=this.$utils(),m=!!l.u(a)||a;return l.p(n)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(n,a)}}})})(ie);const Le=ie.exports;var se={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){return function(i,o){o.prototype.isSameOrBefore=function(y,f){return this.isSame(y,f)||this.isBefore(y,f)}}})})(se);const $e=se.exports;var le={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){return function(i,o){o.prototype.isSameOrAfter=function(y,f){return this.isSame(y,f)||this.isAfter(y,f)}}})})(le);const Ge=le.exports;var ce={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){return function(i,o,y){o.prototype.isBetween=function(f,d,r,s){var n=y(f),a=y(d),l=(s=s||"()")[0]==="(",m=s[1]===")";return(l?this.isAfter(n,r):!this.isBefore(n,r))&&(m?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(n,r):!this.isAfter(n,r))&&(m?this.isAfter(a,r):!this.isBefore(a,r))}}})})(ce);const Re=ce.exports;var de={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){var i="week",o="year";return function(y,f,d){var r=f.prototype;r.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var a=d(this).startOf(o).add(1,o).date(n),l=d(this).endOf(i);if(a.isBefore(l))return 1}var m=d(this).startOf(o).date(n).startOf(i).subtract(1,"millisecond"),w=this.diff(m,i,!0);return w<0?d(this).startOf("week").week():Math.ceil(w)},r.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})})(de);const Ie=de.exports;var ue={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){return function(i,o){var y=o.prototype,f=y.format;y.format=function(d){var r=this,s=this.$locale();if(!this.isValid())return f.bind(this)(d);var n=this.$utils(),a=(d||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(l){switch(l){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return s.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return s.ordinal(r.week(),"W");case"w":case"ww":return n.s(r.week(),l==="w"?1:2,"0");case"W":case"WW":return n.s(r.isoWeek(),l==="W"?1:2,"0");case"k":case"kk":return n.s(String(r.$H===0?24:r.$H),l==="k"?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return l}});return f.bind(this)(a)}}})})(ue);const ze=ue.exports;var fe={exports:{}};(function(t,p){(function(i,o){t.exports=o()})(V,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,y=/\d\d/,f=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,r={},s=function(g){return(g=+g)+(g>68?1900:2e3)},n=function(g){return function(u){this[g]=+u}},a=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(u){if(!u||u==="Z")return 0;var _=u.match(/([+-]|\d\d)/g),v=60*_[1]+(+_[2]||0);return v===0?0:_[0]==="+"?-v:v}(g)}],l=function(g){var u=r[g];return u&&(u.indexOf?u:u.s.concat(u.f))},m=function(g,u){var _,v=r.meridiem;if(v){for(var h=1;h<=24;h+=1)if(g.indexOf(v(h,0,u))>-1){_=h>12;break}}else _=g===(u?"pm":"PM");return _},w={A:[d,function(g){this.afternoon=m(g,!1)}],a:[d,function(g){this.afternoon=m(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[y,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[f,n("seconds")],ss:[f,n("seconds")],m:[f,n("minutes")],mm:[f,n("minutes")],H:[f,n("hours")],h:[f,n("hours")],HH:[f,n("hours")],hh:[f,n("hours")],D:[f,n("day")],DD:[y,n("day")],Do:[d,function(g){var u=r.ordinal,_=g.match(/\d+/);if(this.day=_[0],u)for(var v=1;v<=31;v+=1)u(v).replace(/\[|\]/g,"")===g&&(this.day=v)}],M:[f,n("month")],MM:[y,n("month")],MMM:[d,function(g){var u=l("months"),_=(l("monthsShort")||u.map(function(v){return v.slice(0,3)})).indexOf(g)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[d,function(g){var u=l("months").indexOf(g)+1;if(u<1)throw new Error;this.month=u%12||u}],Y:[/[+-]?\d+/,n("year")],YY:[y,function(g){this.year=s(g)}],YYYY:[/\d{4}/,n("year")],Z:a,ZZ:a};function x(g){var u,_;u=g,_=r&&r.formats;for(var v=(g=u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(E,D,S){var T=S&&S.toUpperCase();return D||_[S]||i[S]||_[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Y,$,I){return $||I.slice(1)})})).match(o),h=v.length,k=0;k<h;k+=1){var c=v[k],B=w[c],b=B&&B[0],C=B&&B[1];v[k]=C?{regex:b,parser:C}:c.replace(/^\[|\]$/g,"")}return function(E){for(var D={},S=0,T=0;S<h;S+=1){var Y=v[S];if(typeof Y=="string")T+=Y.length;else{var $=Y.regex,I=Y.parser,z=E.slice(T),N=$.exec(z)[0];I.call(D,N),E=E.replace(N,"")}}return function(G){var R=G.afternoon;if(R!==void 0){var j=G.hours;R?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(D),D}}return function(g,u,_){_.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(s=g.parseTwoDigitYear);var v=u.prototype,h=v.parse;v.parse=function(k){var c=k.date,B=k.utc,b=k.args;this.$u=B;var C=b[1];if(typeof C=="string"){var E=b[2]===!0,D=b[3]===!0,S=E||D,T=b[2];D&&(T=b[2]),r=this.$locale(),!E&&T&&(r=_.Ls[T]),this.$d=function(z,N,G){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*z);var R=x(N)(z),j=R.year,q=R.month,Bt=R.day,xt=R.hours,kt=R.minutes,_t=R.seconds,vt=R.milliseconds,Ye=R.zone,J=new Date,ee=Bt||(j||q?1:J.getDate()),te=j||J.getFullYear(),Q=0;j&&!q||(Q=q>0?q-1:J.getMonth());var ne=xt||0,re=kt||0,oe=_t||0,ae=vt||0;return Ye?new Date(Date.UTC(te,Q,ee,ne,re,oe,ae+60*Ye.offset*1e3)):G?new Date(Date.UTC(te,Q,ee,ne,re,oe,ae)):new Date(te,Q,ee,ne,re,oe,ae)}catch{return new Date("")}}(c,C,B),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),S&&c!=this.format(C)&&(this.$d=new Date("")),r={}}else if(C instanceof Array)for(var Y=C.length,$=1;$<=Y;$+=1){b[1]=C[$-1];var I=_.apply(this,b);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}$===Y&&(this.$d=new Date(""))}else h.call(this,k)}}})})(fe);const Ne=fe.exports,me=Symbol("CHART_ROWS_KEY"),ge=Symbol("CONFIG_KEY"),he=Symbol("EMIT_BAR_EVENT_KEY"),pe=Symbol("BAR_CONTAINER_KEY");function L(){const t=e.inject(ge);if(!t)throw Error("Failed to inject config!");return t}const ye="YYYY-MM-DD HH:mm";function A(t=L()){const{chartStart:p,chartEnd:i,barStart:o,barEnd:y,dateFormat:f}=t,d=e.computed(()=>s(p.value)),r=e.computed(()=>s(i.value)),s=(a,l)=>{let m;if(l!==void 0&&typeof a!="string"&&!(a instanceof Date)&&(m=l==="start"?a[o.value]:a[y.value]),typeof a=="string")m=a;else if(a instanceof Date)return O.default(a);const w=f.value||ye;return O.default(m,w,!0)};return{chartStartDayjs:d,chartEndDayjs:r,toDayjs:s,format:(a,l)=>l===!1?a instanceof Date?a:O.default(a).toDate():(typeof a=="string"||a instanceof Date?s(a):a).format(l)}}function be(){const{precision:t}=L(),{chartStartDayjs:p,chartEndDayjs:i}=A(),o=e.computed(()=>{switch(t==null?void 0:t.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),y=e.computed(()=>{switch(t.value){case"date":return"day";case"week":return"isoWeek";default:return t.value}}),f={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"WW",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:e.computed(()=>{const r=[],s=[],n=i.value.diff(p.value,"minutes",!0),a=o.value,l=y.value;let m=p.value,w=p.value;for(;w.isSameOrBefore(i.value);){const x=w.endOf(l),u=x.isAfter(i.value)?i.value.diff(w,"minutes",!0)/n*100:x.diff(w,"minutes",!0)/n*100;s.push({label:w.format(f[t==null?void 0:t.value]),value:String(w),date:w.toDate(),width:String(u)+"%"}),w=x.add(1,l==="isoWeek"?"week":l).startOf(l)}for(;m.isSameOrBefore(i.value);){const x=m.endOf(a),u=x.isAfter(i.value)?i.value.diff(m,"minutes",!0)/n*100:x.diff(m,"minutes",!0)/n*100;r.push({label:m.format(f[a]),value:String(m),date:m.toDate(),width:String(u)+"%"}),m=x.add(1,a).startOf(a)}return{upperUnits:r,lowerUnits:s}})}}const He={class:"g-grid-container"},Ve=e.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{},highlightDates:{}},setup(t){const p=t,{colors:i}=L(),{timeaxisUnits:o}=be();function y(n,a){const l=O.default(n),m=O.default(a),w=[];let x=l;for(;x.isBefore(m)||x.isSame(m,"day");)(x.day()===6||x.day()===0)&&w.push(x.format("YYYY-MM-DD")),x=x.add(1,"day");return w}let f;const d=O.default(o.value.upperUnits[0].date).format("YYYY-MM-DD"),r=O.default(o.value.upperUnits[1].date).format("YYYY-MM-DD");return f=[...y(d,r),...p.highlightDates],(n,a)=>(e.openBlock(),e.createElementBlock("div",He,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o).lowerUnits,({label:l,value:m,date:w,width:x})=>{var g,u;return e.openBlock(),e.createElementBlock("div",{key:l,class:"g-grid-line",style:e.normalizeStyle({width:x,background:((g=e.unref(f))==null?void 0:g.includes(e.unref(O.default)(w).format("YYYY-MM-DD")))||((u=n.highlightedUnits)==null?void 0:u.includes(Number(m)))?e.unref(i).hoverHighlight:void 0})},null,4)}),128))]))}}),Ct="";function X(){const t=e.inject(me);if(!t)throw Error("Failed to inject getChartRows!");return t}const je={class:"g-label-column-rows"},Ae=e.defineComponent({__name:"GGanttLabelColumn",setup(t){const{font:p,colors:i,labelColumnTitle:o,rowHeight:y}=L(),f=X();return(d,r)=>(e.openBlock(),e.createElementBlock("div",{class:"g-label-column",style:e.normalizeStyle({fontFamily:e.unref(p),color:e.unref(i).text})},[e.renderSlot(d.$slots,"label-column-title",{},()=>[e.createElementVNode("div",{class:"g-label-column-header",style:e.normalizeStyle({background:e.unref(i).primary})},e.toDisplayString(e.unref(o)),5)]),e.createElementVNode("div",je,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f)(),({label:s},n)=>(e.openBlock(),e.createElementBlock("div",{key:`${s}_${n}`,class:"g-label-column-row",style:e.normalizeStyle({background:n%2===0?e.unref(i).ternary:e.unref(i).quartenary,height:`${e.unref(y)}px`})},[e.renderSlot(d.$slots,"label-column-row",{label:s},()=>[e.createElementVNode("span",null,e.toDisplayString(s),1)])],4))),128))])],4))}}),Et="",Fe={class:"g-timeaxis"},We={class:"g-timeunits-container"},Pe={class:"g-timeunits-container"},Ue=e.defineComponent({__name:"GGanttTimeaxis",setup(t){const{precision:p,colors:i}=L(),{timeaxisUnits:o}=be();return(y,f)=>(e.openBlock(),e.createElementBlock("div",Fe,[e.createElementVNode("div",We,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o).upperUnits,({label:d,value:r,date:s,width:n},a)=>(e.openBlock(),e.createElementBlock("div",{key:d,class:"g-upper-timeunit",style:e.normalizeStyle({background:a%2===0?e.unref(i).primary:e.unref(i).secondary,color:e.unref(i).text,width:n})},[e.renderSlot(y.$slots,"upper-timeunit",{label:d,value:r,date:s},()=>[e.createTextVNode(e.toDisplayString(d),1)])],4))),128))]),e.createElementVNode("div",Pe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o).lowerUnits,({label:d,value:r,date:s,width:n},a)=>(e.openBlock(),e.createElementBlock("div",{key:d,class:"g-timeunit",style:e.normalizeStyle({background:a%2===0?e.unref(i).ternary:e.unref(i).quartenary,color:e.unref(i).text,flexDirection:e.unref(p)==="hour"?"column":"row",alignItems:e.unref(p)==="hour"?"":"center",width:n})},[e.renderSlot(y.$slots,"timeunit",{label:d,value:r,date:s},()=>[e.createTextVNode(e.toDisplayString(d),1)]),e.unref(p)==="hour"?(e.openBlock(),e.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:e.normalizeStyle({background:e.unref(i).text})},null,4)):e.createCommentVNode("",!0)],4))),128))])]))}}),Dt="",qe="cadetblue",Qe=e.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(t){const p={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},i=t,{bar:o}=e.toRefs(i),{precision:y,font:f,barStart:d,barEnd:r,rowHeight:s}=L(),n=e.ref("0px"),a=e.ref("0px");e.watch(()=>i.bar,async()=>{var c;await e.nextTick();const u=((c=o==null?void 0:o.value)==null?void 0:c.ganttBarConfig.id)||"";if(!u)return;const _=document.getElementById(u),{top:v,left:h}=(_==null?void 0:_.getBoundingClientRect())||{top:0,left:0},k=Math.max(h,10);n.value=`${v+s.value-10}px`,a.value=`${k}px`},{deep:!0,immediate:!0});const l=e.computed(()=>{var u,_;return((_=(u=o==null?void 0:o.value)==null?void 0:u.ganttBarConfig.style)==null?void 0:_.background)||qe}),{toDayjs:m}=A(),w=e.computed(()=>{var u;return(u=o.value)==null?void 0:u[d.value]}),x=e.computed(()=>{var u;return(u=o.value)==null?void 0:u[r.value]}),g=e.computed(()=>{if(!(o!=null&&o.value))return"";const u=p[y.value],_=m(w.value).format(u),v=m(x.value).format(u);return`${_} \u2013 ${v}`});return(u,_)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(e.Transition,{name:"g-fade",mode:"out-in"},{default:e.withCtx(()=>[u.modelValue?(e.openBlock(),e.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:e.normalizeStyle({top:n.value,left:a.value,fontFamily:e.unref(f)})},[e.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:e.normalizeStyle({background:l.value})},null,4),e.renderSlot(u.$slots,"default",{bar:e.unref(o),barStart:w.value,barEnd:x.value},()=>[e.createTextVNode(e.toDisplayString(g.value),1)])],4)):e.createCommentVNode("",!0)]),_:3})]))}}),St="";function P(t=L()){const{dateFormat:p,chartSize:i}=t,{chartStartDayjs:o,chartEndDayjs:y,toDayjs:f,format:d}=A(t),r=e.computed(()=>y.value.diff(o.value,"minutes"));return{mapTimeToPosition:a=>{const l=i.width.value||0,m=f(a).diff(o.value,"minutes",!0);return Math.ceil(m/r.value*l)},mapPositionToTime:a=>{const l=i.width.value||0,m=a/l*r.value;return d(o.value.add(m,"minutes"),p.value)}}}const Xe=e.defineComponent({__name:"GGanttCurrentTime",setup(t){const{mapTimeToPosition:p}=P(),i=e.ref(O.default()),{colors:o,dateFormat:y,currentTimeLabel:f}=L(),d=e.computed(()=>{const r=y.value||"YYYY-MM-DD HH:mm";return p(O.default(i.value,r).format(r))});return(r,s)=>(e.openBlock(),e.createElementBlock("div",{class:"g-grid-current-time",style:e.normalizeStyle({left:`${d.value}px`})},[e.createElementVNode("div",{class:"g-grid-current-time-marker",style:e.normalizeStyle({border:`1px dashed ${e.unref(o).markerCurrentTime}`})},null,4),e.createElementVNode("span",{class:"g-grid-current-time-text",style:e.normalizeStyle({color:e.unref(o).markerCurrentTime})},[e.renderSlot(r.$slots,"current-time-label",{},()=>[e.createTextVNode(e.toDisplayString(e.unref(f)),1)])],4)],4))}}),Tt="";var we;const F=typeof window<"u";F&&((we=window==null?void 0:window.navigator)==null?void 0:we.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ke(t){return typeof t=="function"?t():e.unref(t)}function Ze(t){return t}function Je(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function et(t,p=!0){e.getCurrentInstance()?e.onMounted(t):p?t():e.nextTick(t)}function U(t){var p;const i=Ke(t);return(p=i==null?void 0:i.$el)!=null?p:i}const Be=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function tt(t,p=!1){const i=e.ref(),o=()=>i.value=Boolean(t());return o(),et(o,p),i}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__";K[Z]=K[Z]||{},K[Z];var xe=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,ot=(t,p)=>{var i={};for(var o in t)nt.call(t,o)&&p.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&xe)for(var o of xe(t))p.indexOf(o)<0&&rt.call(t,o)&&(i[o]=t[o]);return i};function at(t,p,i={}){const o=i,{window:y=Be}=o,f=ot(o,["window"]);let d;const r=tt(()=>y&&"ResizeObserver"in y),s=()=>{d&&(d.disconnect(),d=void 0)},n=e.watch(()=>U(t),l=>{s(),r.value&&y&&l&&(d=new ResizeObserver(p),d.observe(l,f))},{immediate:!0,flush:"post"}),a=()=>{s(),n()};return Je(a),{isSupported:r,stop:a}}function it(t,p={width:0,height:0},i={}){const{window:o=Be,box:y="content-box"}=i,f=e.computed(()=>{var s,n;return(n=(s=U(t))==null?void 0:s.namespaceURI)==null?void 0:n.includes("svg")}),d=e.ref(p.width),r=e.ref(p.height);return at(t,([s])=>{const n=y==="border-box"?s.borderBoxSize:y==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(o&&f.value){const a=U(t);if(a){const l=o.getComputedStyle(a);d.value=parseFloat(l.width),r.value=parseFloat(l.height)}}else if(n){const a=Array.isArray(n)?n:[n];d.value=a.reduce((l,{inlineSize:m})=>l+m,0),r.value=a.reduce((l,{blockSize:m})=>l+m,0)}else d.value=s.contentRect.width,r.value=s.contentRect.height},i),e.watch(()=>U(t),s=>{d.value=s?p.width:0,r.value=s?p.height:0}),{width:d,height:r}}var ke;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(ke||(ke={}));var st=Object.defineProperty,_e=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,ve=(t,p,i)=>p in t?st(t,p,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[p]=i,dt=(t,p)=>{for(var i in p||(p={}))lt.call(p,i)&&ve(t,i,p[i]);if(_e)for(var i of _e(p))ct.call(p,i)&&ve(t,i,p[i]);return t};dt({linear:Ze},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const Ce={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},ut={class:"g-gantt-rows-container"},Ee=e.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:ye},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},highlightDates:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(t,{emit:p}){const i=t,o=p,{width:y,font:f,colorScheme:d}=e.toRefs(i),r=e.useSlots(),s=e.computed(()=>typeof d.value!="string"?d.value:Ce[d.value]||Ce.default),n=()=>{var c;const h=(c=r.default)==null?void 0:c.call(r),k=[];return h&&h.forEach(B=>{var b;if((b=B.props)!=null&&b.bars){const{label:C,bars:E}=B.props;k.push({label:C,bars:E})}else Array.isArray(B.children)&&B.children.forEach(C=>{var D;const E=C;if((D=E==null?void 0:E.props)!=null&&D.bars){const{label:S,bars:T}=E.props;k.push({label:S,bars:T})}})}),k},a=e.ref(!1),l=e.ref(!1),m=e.ref(void 0);let w;const x=h=>{w&&clearTimeout(w),w=setTimeout(()=>{a.value=!0},800),m.value=h},g=()=>{clearTimeout(w),a.value=!1},u=(h,k,c,B)=>{switch(h.type){case"click":o("click-bar",{bar:k,e:h,datetime:c});break;case"mousedown":o("mousedown-bar",{bar:k,e:h,datetime:c});break;case"mouseup":o("mouseup-bar",{bar:k,e:h,datetime:c});break;case"dblclick":o("dblclick-bar",{bar:k,e:h,datetime:c});break;case"mouseenter":x(k),o("mouseenter-bar",{bar:k,e:h});break;case"mouseleave":g(),o("mouseleave-bar",{bar:k,e:h});break;case"dragstart":l.value=!0,o("dragstart-bar",{bar:k,e:h});break;case"drag":o("drag-bar",{bar:k,e:h});break;case"dragend":l.value=!1,o("dragend-bar",{bar:k,e:h,movedBars:B});break;case"contextmenu":o("contextmenu-bar",{bar:k,e:h,datetime:c});break}},_=e.ref(null),v=it(_);return e.provide(me,n),e.provide(ge,{...e.toRefs(i),colors:s,chartSize:v}),e.provide(he,u),(h,k)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",{class:e.normalizeClass([{"labels-in-column":!!h.labelColumnTitle}])},[h.labelColumnTitle?(e.openBlock(),e.createBlock(Ae,{key:0,style:e.normalizeStyle({width:h.labelColumnWidth})},{"label-column-title":e.withCtx(()=>[e.renderSlot(h.$slots,"label-column-title")]),"label-column-row":e.withCtx(({label:c})=>[e.renderSlot(h.$slots,"label-column-row",{label:c})]),_:3},8,["style"])):e.createCommentVNode("",!0),e.createElementVNode("div",{ref_key:"ganttChart",ref:_,class:e.normalizeClass(["g-gantt-chart",{"with-column":h.labelColumnTitle}]),style:e.normalizeStyle({width:e.unref(y),background:s.value.background,fontFamily:e.unref(f)})},[h.hideTimeaxis?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(Ue,{key:0},{"upper-timeunit":e.withCtx(({label:c,value:B,date:b})=>[e.renderSlot(h.$slots,"upper-timeunit",{label:c,value:B,date:b})]),timeunit:e.withCtx(({label:c,value:B,date:b})=>[e.renderSlot(h.$slots,"timeunit",{label:c,value:B,date:b})]),_:3})),h.grid?(e.openBlock(),e.createBlock(Ve,{key:1,"highlighted-units":h.highlightedUnits,"highlight-dates":h.highlightDates},null,8,["highlighted-units","highlight-dates"])):e.createCommentVNode("",!0),h.currentTime?(e.openBlock(),e.createBlock(Xe,{key:2},{"current-time-label":e.withCtx(()=>[e.renderSlot(h.$slots,"current-time-label")]),_:3})):e.createCommentVNode("",!0),e.createElementVNode("div",ut,[e.renderSlot(h.$slots,"default")])],6)],2),e.createVNode(Qe,{"model-value":a.value||l.value,bar:m.value},{default:e.withCtx(()=>[e.renderSlot(h.$slots,"bar-tooltip",{bar:m.value})]),_:3},8,["model-value","bar"])]))}}),Mt="";function De(t,p=()=>null,i=()=>null,o=L()){const{barStart:y,barEnd:f,pushOnOverlap:d}=o,r=e.ref(!1);let s=0,n;const{mapPositionToTime:a}=P(o),{toDayjs:l}=A(o),m=h=>{const k=document.getElementById(t.ganttBarConfig.id);if(!k)return;switch(s=h.clientX-(k.getBoundingClientRect().left||0),h.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=g;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=u;break;default:n=x}r.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",v)},w=()=>{var c;const h=document.getElementById(t.ganttBarConfig.id),k=(c=h==null?void 0:h.closest(".g-gantt-row-bars-container"))==null?void 0:c.getBoundingClientRect();return{barElement:h,barContainer:k}},x=h=>{const{barElement:k,barContainer:c}=w();if(!k||!c)return;const B=k.getBoundingClientRect().width,b=h.clientX-c.left-s,C=b+B;_(b,C)||(t[y.value]=a(b),t[f.value]=a(C),p(h,t))},g=h=>{const{barElement:k,barContainer:c}=w();if(!k||!c)return;const B=h.clientX-c.left,b=a(B);l(b).isSameOrAfter(l(t,"end"))||(t[y.value]=b,p(h,t))},u=h=>{const{barElement:k,barContainer:c}=w();if(!k||!c)return;const B=h.clientX-c.left,b=a(B);l(b).isSameOrBefore(l(t,"start"))||(t[f.value]=b,p(h,t))},_=(h,k)=>{if(!d.value)return!1;const c=t.ganttBarConfig.dragLimitLeft,B=t.ganttBarConfig.dragLimitRight;return h&&c!=null&&h<c||k&&B!=null&&k>B},v=h=>{r.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",v),i(h,t)};return{isDragging:r,initDrag:m}}function Se(){const t=e.inject(he);if(!t)throw Error("Failed to inject emitBarEvent!");return t}function ft(){const t=L(),p=X(),i=Se(),{pushOnOverlap:o,barStart:y,barEnd:f,noOverlap:d,dateFormat:r}=t,s=new Map,{toDayjs:n,format:a}=A(),l=(c,B)=>{const{initDrag:b}=De(c,w,v,t);i({...B,type:"dragstart"},c),b(B),h(c)},m=(c,B)=>{const b=c.ganttBarConfig.bundle;b!=null&&(p().forEach(C=>{C.bars.forEach(E=>{if(E.ganttBarConfig.bundle===b){const D=E===c?v:()=>null,{initDrag:S}=De(E,w,D,t);S(B),h(E)}})}),i({...B,type:"dragstart"},c))},w=(c,B)=>{i({...c,type:"drag"},B),x(B)},x=c=>{if(!(o!=null&&o.value))return;let B=c,{overlapBar:b,overlapType:C}=g(B);for(;b;){h(b);const E=n(B[y.value]),D=n(B[f.value]),S=n(b[y.value]),T=n(b[f.value]);let Y;switch(C){case"left":Y=T.diff(E,"minutes",!0),b[f.value]=a(B[y.value],r.value),b[y.value]=a(S.subtract(Y,"minutes"),r.value);break;case"right":Y=D.diff(S,"minutes",!0),b[y.value]=a(D,r.value),b[f.value]=a(T.add(Y,"minutes"),r.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}b&&(C==="left"||C==="right")&&u(b,Y,C),B=b,{overlapBar:b,overlapType:C}=g(b)}},g=c=>{var $,I;let B,b,C;const E=(I=($=p().find(z=>z.bars.includes(c)))==null?void 0:$.bars)!=null?I:[],D=n(c[y.value]),S=n(c[f.value]);return{overlapBar:E.find(z=>{if(z===c)return!1;const N=n(z[y.value]),G=n(z[f.value]);return B=D.isBetween(N,G),b=S.isBetween(N,G),C=N.isBetween(D,S)||G.isBetween(D,S),B||b||C}),overlapType:B?"left":b?"right":C?"between":null}},u=(c,B,b)=>{h(c),c.ganttBarConfig.bundle&&p().forEach(C=>{C.bars.forEach(E=>{E.ganttBarConfig.bundle===c.ganttBarConfig.bundle&&E!==c&&(h(E),_(E,B,b))})})},_=(c,B,b)=>{switch(b){case"left":c[y.value]=a(n(c,"start").subtract(B,"minutes"),r.value),c[f.value]=a(n(c,"end").subtract(B,"minutes"),r.value);break;case"right":c[y.value]=a(n(c,"start").add(B,"minutes"),r.value),c[f.value]=a(n(c,"end").add(B,"minutes"),r.value)}x(c)},v=(c,B)=>{k();const b={...c,type:"dragend"};i(b,B,void 0,new Map(s)),s.clear()},h=c=>{if(!s.has(c)){const B=c[y.value],b=c[f.value];s.set(c,{oldStart:B,oldEnd:b})}},k=()=>{if(o.value||!d.value)return;let c=!1;s.forEach((B,b)=>{const{overlapBar:C}=g(b);C!=null&&(c=!0)}),c&&s.forEach(({oldStart:B,oldEnd:b},C)=>{C[y.value]=B,C[f.value]=b})};return{initDragOfBar:l,initDragOfBundle:m}}function mt(){const{pushOnOverlap:t}=L(),p=X(),i=d=>{const r=[];return d!=null&&p().forEach(s=>{s.bars.forEach(n=>{n.ganttBarConfig.bundle===d&&r.push(n)})}),r},o=d=>{if(!t.value||d.ganttBarConfig.pushOnOverlap===!1)return;for(const s of["left","right"]){const n=s,{gapDistanceSoFar:a,bundleBarsAndGapDist:l}=y(d,0,n);let m=a;const w=l;if(!w)continue;for(let g=0;g<w.length;g++){const u=w[g].bar,_=w[g].gapDistance;i(u.ganttBarConfig.bundle).filter(h=>h!==u).forEach(h=>{const k=y(h,_,n),c=k.gapDistanceSoFar,B=k.bundleBarsAndGapDist;c!=null&&(!m||c<m)&&(m=c),B.forEach(b=>{w.find(C=>C.bar===b.bar)||w.push(b)})})}const x=document.getElementById(d.ganttBarConfig.id);m!=null&&n==="left"?d.ganttBarConfig.dragLimitLeft=x.offsetLeft-m:m!=null&&n==="right"&&(d.ganttBarConfig.dragLimitRight=x.offsetLeft+x.offsetWidth+m)}i(d.ganttBarConfig.bundle).forEach(s=>{s.ganttBarConfig.dragLimitLeft=d.ganttBarConfig.dragLimitLeft,s.ganttBarConfig.dragLimitRight=d.ganttBarConfig.dragLimitRight})},y=(d,r=0,s)=>{const n=d.ganttBarConfig.bundle?[{bar:d,gapDistance:r}]:[];let a=d,l=f(a,s);if(s==="left")for(;l;){const m=document.getElementById(a.ganttBarConfig.id),w=document.getElementById(l.ganttBarConfig.id),x=w.offsetLeft+w.offsetWidth;if(r+=m.offsetLeft-x,l.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};l.ganttBarConfig.bundle&&n.push({bar:l,gapDistance:r}),a=l,l=f(l,"left")}if(s==="right")for(;l;){const m=document.getElementById(a.ganttBarConfig.id),w=document.getElementById(l.ganttBarConfig.id),x=m.offsetLeft+m.offsetWidth;if(r+=w.offsetLeft-x,l.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};l.ganttBarConfig.bundle&&n.push({bar:l,gapDistance:r}),a=l,l=f(l,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},f=(d,r)=>{var l,m;const s=document.getElementById(d.ganttBarConfig.id),n=(m=(l=p().find(w=>w.bars.includes(d)))==null?void 0:l.bars)!=null?m:[];let a=[];return r==="left"?a=n.filter(w=>{const x=document.getElementById(w.ganttBarConfig.id);return x&&x.offsetLeft<s.offsetLeft&&w.ganttBarConfig.pushOnOverlap!==!1}):a=n.filter(w=>{const x=document.getElementById(w.ganttBarConfig.id);return x&&x.offsetLeft>s.offsetLeft&&w.ganttBarConfig.pushOnOverlap!==!1}),a.length>0?a.reduce((w,x)=>{const g=document.getElementById(w.ganttBarConfig.id),u=document.getElementById(x.ganttBarConfig.id),_=Math.abs(g.offsetLeft-s.offsetLeft),v=Math.abs(u.offsetLeft-s.offsetLeft);return _<v?w:x},a[0]):null};return{setDragLimitsOfGanttBar:o}}const gt=["id"],ht={class:"g-gantt-bar-label"},pt=["innerHTML"],yt=e.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),bt=e.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),wt=e.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(t){const p=t,i=Se(),o=L(),{rowHeight:y}=o,{bar:f}=e.toRefs(p),{mapTimeToPosition:d,mapPositionToTime:r}=P(),{initDragOfBar:s,initDragOfBundle:n}=ft(),{setDragLimitsOfGanttBar:a}=mt(),l=e.ref(!1),m=e.computed(()=>f.value.ganttBarConfig);function w(E){m.value.bundle!=null?n(f.value,E):s(f.value,E),l.value=!0}const x=()=>{a(f.value),!m.value.immobile&&(window.addEventListener("mousemove",w,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",w),l.value=!1},{once:!0}))},g=e.inject(pe),u=E=>{var T;E.preventDefault(),E.type==="mousedown"&&x();const D=(T=g==null?void 0:g.value)==null?void 0:T.getBoundingClientRect();if(!D)return;const S=r(E.clientX-D.left);i(E,f.value,S)},{barStart:_,barEnd:v,width:h,chartStart:k,chartEnd:c,chartSize:B}=o,b=e.ref(0),C=e.ref(0);return e.onMounted(()=>{e.watch([f,h,k,c,B.width],()=>{b.value=d(f.value[_.value]),C.value=d(f.value[v.value])},{deep:!0,immediate:!0})}),(E,D)=>(e.openBlock(),e.createElementBlock("div",{id:m.value.id,class:e.normalizeClass(["g-gantt-bar",m.value.class||""]),style:e.normalizeStyle({...m.value.style,position:"absolute",top:`${e.unref(y)*.1}px`,left:`${b.value}px`,width:`${C.value-b.value}px`,height:`${e.unref(y)*.8}px`,zIndex:l.value?3:2}),onMousedown:u,onClick:u,onDblclick:u,onMouseenter:u,onMouseleave:u,onContextmenu:u},[e.createElementVNode("div",ht,[e.renderSlot(E.$slots,"default",{bar:e.unref(f)},()=>[e.createElementVNode("div",null,e.toDisplayString(m.value.label||""),1),m.value.html?(e.openBlock(),e.createElementBlock("div",{key:0,innerHTML:m.value.html},null,8,pt)):e.createCommentVNode("",!0)])]),m.value.hasHandles?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[yt,bt],64)):e.createCommentVNode("",!0)],46,gt))}}),Yt="",Te=e.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(t,{emit:p}){const i=t,o=p,{rowHeight:y,colors:f,labelColumnTitle:d}=L(),{highlightOnHover:r}=e.toRefs(i),s=e.ref(!1),n=e.computed(()=>({height:`${y.value}px`,background:(r==null?void 0:r.value)&&s.value?f.value.hoverHighlight:null})),{mapPositionToTime:a}=P(),l=e.ref(null);e.provide(pe,l);const m=x=>{var v;const g=(v=l.value)==null?void 0:v.getBoundingClientRect();if(!g){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const u=x.clientX-g.left,_=a(u);o("drop",{e:x,datetime:_})},w=x=>!x||/^\s*$/.test(x);return(x,g)=>(e.openBlock(),e.createElementBlock("div",{class:"g-gantt-row",style:e.normalizeStyle(n.value),onDragover:g[0]||(g[0]=e.withModifiers(u=>s.value=!0,["prevent"])),onDragleave:g[1]||(g[1]=u=>s.value=!1),onDrop:g[2]||(g[2]=u=>m(u)),onMouseover:g[3]||(g[3]=u=>s.value=!0),onMouseleave:g[4]||(g[4]=u=>s.value=!1)},[!w(x.label)&&!e.unref(d)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:e.normalizeStyle({background:e.unref(f).primary,color:e.unref(f).text})},[e.renderSlot(x.$slots,"label",{},()=>[e.createTextVNode(e.toDisplayString(x.label),1)])],4)):e.createCommentVNode("",!0),e.createElementVNode("div",e.mergeProps({ref_key:"barContainer",ref:l,class:"g-gantt-row-bars-container"},x.$attrs),[e.createVNode(e.TransitionGroup,{name:"bar-transition",tag:"div"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(x.bars,u=>(e.openBlock(),e.createBlock(wt,{key:u.ganttBarConfig.id,bar:u},{default:e.withCtx(()=>[e.renderSlot(x.$slots,"bar-label",{bar:u})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Lt="";function Oe(){O.default.extend($e),O.default.extend(Ge),O.default.extend(Re),O.default.extend(Ne),O.default.extend(Ie),O.default.extend(Le),O.default.extend(ze)}const Me={install(t,p){Oe(),t.component("GGanttChart",Ee),t.component("GGanttRow",Te)}};M.GGanttChart=Ee,M.GGanttRow=Te,M.default=Me,M.extendDayjs=Oe,M.ganttastic=Me,Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(M,H="top"){if(!M||typeof document>"u")return;const e=document.head,W=document.createElement("style");H==="top"&&e.firstChild?e.insertBefore(W,e.firstChild):e.appendChild(W),W.appendChild(document.createTextNode(M))}injectStyle(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  border-radius: 5px;
}
.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.g-gantt-rows-container {
  position: relative;
}
.labels-in-column {
  display: flex;
  flex-direction: row;
}
.highlighted-day {
  color: darkred;
}
`,"top");injectStyle(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`,"top");injectStyle(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`,"top");injectStyle(`
.g-label-column {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(64, 64, 64);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-size: 0.9em;
}
.g-label-column-header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
}
.g-label-column-rows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
}
.g-label-column-row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.1rem 0.3rem;
  overflow: hidden;
  white-space: normal;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.g-label-column-row:last-child {
  border-bottom-left-radius: 5px;
}
`,"top");injectStyle(`
.g-grid-current-time {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 5;
  pointer-events: none;
}
.g-grid-current-time-marker {
  width: 0px;
  height: calc(100% - 2px);
  display: flex;
}
.g-grid-current-time-text {
  font-size: x-small;
}
`,"top");injectStyle(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`,"top");injectStyle(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`,"top");injectStyle(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`,"top");
