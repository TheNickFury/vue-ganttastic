(function(O,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):(O=typeof globalThis<"u"?globalThis:O||self,H(O.VueGanttastic={},O.dayjs,O.Vue))})(this,function(O,H,t){"use strict";const T=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(H);var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},it={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){var i="day";return function(o,w,h){var m=function(n){return n.add(4-n.isoWeekday(),i)},r=w.prototype;r.isoWeekYear=function(){return m(this).year()},r.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),i);var a,l,u,y,x=m(this),g=(a=this.isoWeekYear(),l=this.$u,u=(l?h.utc:h)().year(a).startOf("year"),y=4-u.isoWeekday(),u.isoWeekday()>4&&(y+=7),u.add(y,i));return x.diff(g,"week")+1},r.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var s=r.startOf;r.startOf=function(n,a){var l=this.$utils(),u=!!l.u(a)||a;return l.p(n)==="isoweek"?u?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(n,a)}}})})(it);const $t=it.exports;var st={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){return function(i,o){o.prototype.isSameOrBefore=function(w,h){return this.isSame(w,h)||this.isBefore(w,h)}}})})(st);const Lt=st.exports;var lt={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){return function(i,o){o.prototype.isSameOrAfter=function(w,h){return this.isSame(w,h)||this.isAfter(w,h)}}})})(lt);const Gt=lt.exports;var ct={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){return function(i,o,w){o.prototype.isBetween=function(h,m,r,s){var n=w(h),a=w(m),l=(s=s||"()")[0]==="(",u=s[1]===")";return(l?this.isAfter(n,r):!this.isBefore(n,r))&&(u?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(n,r):!this.isAfter(n,r))&&(u?this.isAfter(a,r):!this.isBefore(a,r))}}})})(ct);const Rt=ct.exports;var dt={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){var i="week",o="year";return function(w,h,m){var r=h.prototype;r.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var a=m(this).startOf(o).add(1,o).date(n),l=m(this).endOf(i);if(a.isBefore(l))return 1}var u=m(this).startOf(o).date(n).startOf(i).subtract(1,"millisecond"),y=this.diff(u,i,!0);return y<0?m(this).startOf("week").week():Math.ceil(y)},r.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})})(dt);const It=dt.exports;var ft={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){return function(i,o){var w=o.prototype,h=w.format;w.format=function(m){var r=this,s=this.$locale();if(!this.isValid())return h.bind(this)(m);var n=this.$utils(),a=(m||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(l){switch(l){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return s.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return s.ordinal(r.week(),"W");case"w":case"ww":return n.s(r.week(),l==="w"?1:2,"0");case"W":case"WW":return n.s(r.isoWeek(),l==="W"?1:2,"0");case"k":case"kk":return n.s(String(r.$H===0?24:r.$H),l==="k"?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return l}});return h.bind(this)(a)}}})})(ft);const zt=ft.exports;var ut={exports:{}};(function(e,p){(function(i,o){e.exports=o()})(V,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,w=/\d\d/,h=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,r={},s=function(g){return(g=+g)+(g>68?1900:2e3)},n=function(g){return function(f){this[g]=+f}},a=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(f){if(!f||f==="Z")return 0;var v=f.match(/([+-]|\d\d)/g),_=60*v[1]+(+v[2]||0);return _===0?0:v[0]==="+"?-_:_}(g)}],l=function(g){var f=r[g];return f&&(f.indexOf?f:f.s.concat(f.f))},u=function(g,f){var v,_=r.meridiem;if(_){for(var d=1;d<=24;d+=1)if(g.indexOf(_(d,0,f))>-1){v=d>12;break}}else v=g===(f?"pm":"PM");return v},y={A:[m,function(g){this.afternoon=u(g,!1)}],a:[m,function(g){this.afternoon=u(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[w,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[h,n("seconds")],ss:[h,n("seconds")],m:[h,n("minutes")],mm:[h,n("minutes")],H:[h,n("hours")],h:[h,n("hours")],HH:[h,n("hours")],hh:[h,n("hours")],D:[h,n("day")],DD:[w,n("day")],Do:[m,function(g){var f=r.ordinal,v=g.match(/\d+/);if(this.day=v[0],f)for(var _=1;_<=31;_+=1)f(_).replace(/\[|\]/g,"")===g&&(this.day=_)}],M:[h,n("month")],MM:[w,n("month")],MMM:[m,function(g){var f=l("months"),v=(l("monthsShort")||f.map(function(_){return _.slice(0,3)})).indexOf(g)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[m,function(g){var f=l("months").indexOf(g)+1;if(f<1)throw new Error;this.month=f%12||f}],Y:[/[+-]?\d+/,n("year")],YY:[w,function(g){this.year=s(g)}],YYYY:[/\d{4}/,n("year")],Z:a,ZZ:a};function x(g){var f,v;f=g,v=r&&r.formats;for(var _=(g=f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,D,S){var M=S&&S.toUpperCase();return D||v[S]||i[S]||v[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Y,L,I){return L||I.slice(1)})})).match(o),d=_.length,k=0;k<d;k+=1){var c=_[k],B=y[c],b=B&&B[0],E=B&&B[1];_[k]=E?{regex:b,parser:E}:c.replace(/^\[|\]$/g,"")}return function(C){for(var D={},S=0,M=0;S<d;S+=1){var Y=_[S];if(typeof Y=="string")M+=Y.length;else{var L=Y.regex,I=Y.parser,z=C.slice(M),N=L.exec(z)[0];I.call(D,N),C=C.replace(N,"")}}return function(G){var R=G.afternoon;if(R!==void 0){var j=G.hours;R?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(D),D}}return function(g,f,v){v.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(s=g.parseTwoDigitYear);var _=f.prototype,d=_.parse;_.parse=function(k){var c=k.date,B=k.utc,b=k.args;this.$u=B;var E=b[1];if(typeof E=="string"){var C=b[2]===!0,D=b[3]===!0,S=C||D,M=b[2];D&&(M=b[2]),r=this.$locale(),!C&&M&&(r=v.Ls[M]),this.$d=function(z,N,G){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*z);var R=x(N)(z),j=R.year,q=R.month,Be=R.day,xe=R.hours,ke=R.minutes,_e=R.seconds,ve=R.milliseconds,Yt=R.zone,J=new Date,tt=Be||(j||q?1:J.getDate()),et=j||J.getFullYear(),Q=0;j&&!q||(Q=q>0?q-1:J.getMonth());var nt=xe||0,rt=ke||0,ot=_e||0,at=ve||0;return Yt?new Date(Date.UTC(et,Q,tt,nt,rt,ot,at+60*Yt.offset*1e3)):G?new Date(Date.UTC(et,Q,tt,nt,rt,ot,at)):new Date(et,Q,tt,nt,rt,ot,at)}catch{return new Date("")}}(c,E,B),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),S&&c!=this.format(E)&&(this.$d=new Date("")),r={}}else if(E instanceof Array)for(var Y=E.length,L=1;L<=Y;L+=1){b[1]=E[L-1];var I=v.apply(this,b);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}L===Y&&(this.$d=new Date(""))}else d.call(this,k)}}})})(ut);const Nt=ut.exports,mt=Symbol("CHART_ROWS_KEY"),gt=Symbol("CONFIG_KEY"),ht=Symbol("EMIT_BAR_EVENT_KEY"),pt=Symbol("BAR_CONTAINER_KEY");function $(){const e=t.inject(gt);if(!e)throw Error("Failed to inject config!");return e}const yt="YYYY-MM-DD HH:mm";function A(e=$()){const{chartStart:p,chartEnd:i,barStart:o,barEnd:w,dateFormat:h}=e,m=t.computed(()=>s(p.value)),r=t.computed(()=>s(i.value)),s=(a,l)=>{let u;if(l!==void 0&&typeof a!="string"&&!(a instanceof Date)&&(u=l==="start"?a[o.value]:a[w.value]),typeof a=="string")u=a;else if(a instanceof Date)return T.default(a);const y=h.value||yt;return T.default(u,y,!0)};return{chartStartDayjs:m,chartEndDayjs:r,toDayjs:s,format:(a,l)=>l===!1?a instanceof Date?a:T.default(a).toDate():(typeof a=="string"||a instanceof Date?s(a):a).format(l)}}function bt(){const{precision:e}=$(),{chartStartDayjs:p,chartEndDayjs:i}=A(),o=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),w=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),h={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"WW",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const r=[],s=[],n=i.value.diff(p.value,"minutes",!0),a=o.value,l=w.value;let u=p.value,y=p.value;for(;y.isSameOrBefore(i.value);){const x=y.endOf(l),f=x.isAfter(i.value)?i.value.diff(y,"minutes",!0)/n*100:x.diff(y,"minutes",!0)/n*100;s.push({label:y.format(h[e==null?void 0:e.value]),value:String(y),date:y.toDate(),width:String(f)+"%"}),y=x.add(1,l==="isoWeek"?"week":l).startOf(l)}for(;u.isSameOrBefore(i.value);){const x=u.endOf(a),f=x.isAfter(i.value)?i.value.diff(u,"minutes",!0)/n*100:x.diff(u,"minutes",!0)/n*100;r.push({label:u.format(h[a]),value:String(u),date:u.toDate(),width:String(f)+"%"}),u=x.add(1,a).startOf(a)}return{upperUnits:r,lowerUnits:s}})}}const Ht={class:"g-grid-container"},Vt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{},highlightDates:{}},setup(e){const p=e,{colors:i}=$(),{timeaxisUnits:o}=bt();function w(a){const l=a%19,u=Math.floor(a/100),y=a%100,x=Math.floor(u/4),g=u%4,f=Math.floor((u+8)/25),v=Math.floor((u-f+1)/3),_=(19*l+u-x-v+15)%30,d=Math.floor(y/4),k=y%4,c=(32+2*g+2*d-_-k)%7,B=Math.floor((l+11*_+22*c)/451),b=Math.floor((_+c-7*B+114)/31),E=(_+c-7*B+114)%31+1;return T.default(`${a}-${b}-${E}`)}function h(a,l){const u=T.default(a),y=T.default(l),x=[],g=["01-01","01-06","04-25","05-01","06-02","08-15","11-01","12-08","12-25","12-26"],f=u.year(),v=y.year();for(let d=f;d<=v;d++){const k=w(d),c=k.add(1,"day");g.push(k.format("MM-DD")),g.push(c.format("MM-DD"))}let _=u;for(;_.isBefore(y)||_.isSame(y,"day");){const d=_.format("YYYY-MM-DD"),k=_.format("MM-DD");(_.day()===6||_.day()===0)&&x.push(d),g.includes(k)&&x.push(d),_=_.add(1,"day")}return x}let m;const r=T.default(o.value.upperUnits[0].date).format("YYYY-MM-DD"),s=T.default(o.value.upperUnits[1].date).add(1,"month").format("YYYY-MM-DD");return m=[...h(r,s),...p.highlightDates],(a,l)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).lowerUnits,({label:u,value:y,date:x,width:g})=>{var f,v;return t.openBlock(),t.createElementBlock("div",{key:u,class:"g-grid-line",style:t.normalizeStyle({width:g,background:((f=t.unref(m))==null?void 0:f.includes(t.unref(T.default)(x).format("YYYY-MM-DD")))||((v=a.highlightedUnits)==null?void 0:v.includes(Number(y)))?t.unref(i).hoverHighlight:void 0})},null,4)}),128))]))}}),Ee="";function X(){const e=t.inject(mt);if(!e)throw Error("Failed to inject getChartRows!");return e}const jt={class:"g-label-column-rows"},At=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:p,colors:i,labelColumnTitle:o,rowHeight:w}=$(),h=X();return(m,r)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(p),color:t.unref(i).text})},[t.renderSlot(m.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(i).primary})},t.toDisplayString(t.unref(o)),5)]),t.createElementVNode("div",jt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(h)(),({label:s},n)=>(t.openBlock(),t.createElementBlock("div",{key:`${s}_${n}`,class:"g-label-column-row",style:t.normalizeStyle({background:n%2===0?t.unref(i).ternary:t.unref(i).quartenary,height:`${t.unref(w)}px`})},[t.renderSlot(m.$slots,"label-column-row",{label:s},()=>[t.createElementVNode("span",null,t.toDisplayString(s),1)])],4))),128))])],4))}}),Ce="",Ft={class:"g-timeaxis"},Wt={class:"g-timeunits-container"},Pt={class:"g-timeunits-container"},Ut=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:p,colors:i}=$(),{timeaxisUnits:o}=bt();return(w,h)=>(t.openBlock(),t.createElementBlock("div",Ft,[t.createElementVNode("div",Wt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).upperUnits,({label:m,value:r,date:s,width:n},a)=>(t.openBlock(),t.createElementBlock("div",{key:m,class:"g-upper-timeunit",style:t.normalizeStyle({background:a%2===0?t.unref(i).primary:t.unref(i).secondary,color:t.unref(i).text,width:n})},[t.renderSlot(w.$slots,"upper-timeunit",{label:m,value:r,date:s},()=>[t.createTextVNode(t.toDisplayString(m),1)])],4))),128))]),t.createElementVNode("div",Pt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).lowerUnits,({label:m,value:r,date:s,width:n},a)=>(t.openBlock(),t.createElementBlock("div",{key:m,class:"g-timeunit",style:t.normalizeStyle({background:a%2===0?t.unref(i).ternary:t.unref(i).quartenary,color:t.unref(i).text,flexDirection:t.unref(p)==="hour"?"column":"row",alignItems:t.unref(p)==="hour"?"":"center",width:n})},[t.renderSlot(w.$slots,"timeunit",{label:m,value:r,date:s},()=>[t.createTextVNode(t.toDisplayString(m),1)]),t.unref(p)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(i).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),De="",qt="cadetblue",Qt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const p={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},i=e,{bar:o}=t.toRefs(i),{precision:w,font:h,barStart:m,barEnd:r,rowHeight:s}=$(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>i.bar,async()=>{var c;await t.nextTick();const f=((c=o==null?void 0:o.value)==null?void 0:c.ganttBarConfig.id)||"";if(!f)return;const v=document.getElementById(f),{top:_,left:d}=(v==null?void 0:v.getBoundingClientRect())||{top:0,left:0},k=Math.max(d,10);n.value=`${_+s.value-10}px`,a.value=`${k}px`},{deep:!0,immediate:!0});const l=t.computed(()=>{var f,v;return((v=(f=o==null?void 0:o.value)==null?void 0:f.ganttBarConfig.style)==null?void 0:v.background)||qt}),{toDayjs:u}=A(),y=t.computed(()=>{var f;return(f=o.value)==null?void 0:f[m.value]}),x=t.computed(()=>{var f;return(f=o.value)==null?void 0:f[r.value]}),g=t.computed(()=>{if(!(o!=null&&o.value))return"";const f=p[w.value],v=u(y.value).format(f),_=u(x.value).format(f);return`${v} \u2013 ${_}`});return(f,v)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[f.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(h)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:l.value})},null,4),t.renderSlot(f.$slots,"default",{bar:t.unref(o),barStart:y.value,barEnd:x.value},()=>[t.createTextVNode(t.toDisplayString(g.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Se="";function P(e=$()){const{dateFormat:p,chartSize:i}=e,{chartStartDayjs:o,chartEndDayjs:w,toDayjs:h,format:m}=A(e),r=t.computed(()=>w.value.diff(o.value,"minutes"));return{mapTimeToPosition:a=>{const l=i.width.value||0,u=h(a).diff(o.value,"minutes",!0);return Math.ceil(u/r.value*l)},mapPositionToTime:a=>{const l=i.width.value||0,u=a/l*r.value;return m(o.value.add(u,"minutes"),p.value)}}}const Xt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:p}=P(),i=t.ref(T.default()),{colors:o,dateFormat:w,currentTimeLabel:h}=$(),m=t.computed(()=>{const r=w.value||"YYYY-MM-DD HH:mm";return p(T.default(i.value,r).format(r))});return(r,s)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${m.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(o).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(o).markerCurrentTime})},[t.renderSlot(r.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(h)),1)])],4)],4))}}),Me="";var wt;const F=typeof window<"u";F&&((wt=window==null?void 0:window.navigator)==null?void 0:wt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kt(e){return typeof e=="function"?e():t.unref(e)}function Zt(e){return e}function Jt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function te(e,p=!0){t.getCurrentInstance()?t.onMounted(e):p?e():t.nextTick(e)}function U(e){var p;const i=Kt(e);return(p=i==null?void 0:i.$el)!=null?p:i}const Bt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function ee(e,p=!1){const i=t.ref(),o=()=>i.value=Boolean(e());return o(),te(o,p),i}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__";K[Z]=K[Z]||{},K[Z];var xt=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,oe=(e,p)=>{var i={};for(var o in e)ne.call(e,o)&&p.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&xt)for(var o of xt(e))p.indexOf(o)<0&&re.call(e,o)&&(i[o]=e[o]);return i};function ae(e,p,i={}){const o=i,{window:w=Bt}=o,h=oe(o,["window"]);let m;const r=ee(()=>w&&"ResizeObserver"in w),s=()=>{m&&(m.disconnect(),m=void 0)},n=t.watch(()=>U(e),l=>{s(),r.value&&w&&l&&(m=new ResizeObserver(p),m.observe(l,h))},{immediate:!0,flush:"post"}),a=()=>{s(),n()};return Jt(a),{isSupported:r,stop:a}}function ie(e,p={width:0,height:0},i={}){const{window:o=Bt,box:w="content-box"}=i,h=t.computed(()=>{var s,n;return(n=(s=U(e))==null?void 0:s.namespaceURI)==null?void 0:n.includes("svg")}),m=t.ref(p.width),r=t.ref(p.height);return ae(e,([s])=>{const n=w==="border-box"?s.borderBoxSize:w==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(o&&h.value){const a=U(e);if(a){const l=o.getComputedStyle(a);m.value=parseFloat(l.width),r.value=parseFloat(l.height)}}else if(n){const a=Array.isArray(n)?n:[n];m.value=a.reduce((l,{inlineSize:u})=>l+u,0),r.value=a.reduce((l,{blockSize:u})=>l+u,0)}else m.value=s.contentRect.width,r.value=s.contentRect.height},i),t.watch(()=>U(e),s=>{m.value=s?p.width:0,r.value=s?p.height:0}),{width:m,height:r}}var kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(kt||(kt={}));var se=Object.defineProperty,_t=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,vt=(e,p,i)=>p in e?se(e,p,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[p]=i,de=(e,p)=>{for(var i in p||(p={}))le.call(p,i)&&vt(e,i,p[i]);if(_t)for(var i of _t(p))ce.call(p,i)&&vt(e,i,p[i]);return e};de({linear:Zt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const Et={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},fe={class:"g-gantt-rows-container"},Ct=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:yt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},highlightDates:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:p}){const i=e,o=p,{width:w,font:h,colorScheme:m}=t.toRefs(i),r=t.useSlots(),s=t.computed(()=>typeof m.value!="string"?m.value:Et[m.value]||Et.default),n=()=>{var c;const d=(c=r.default)==null?void 0:c.call(r),k=[];return d&&d.forEach(B=>{var b;if((b=B.props)!=null&&b.bars){const{label:E,bars:C}=B.props;k.push({label:E,bars:C})}else Array.isArray(B.children)&&B.children.forEach(E=>{var D;const C=E;if((D=C==null?void 0:C.props)!=null&&D.bars){const{label:S,bars:M}=C.props;k.push({label:S,bars:M})}})}),k},a=t.ref(!1),l=t.ref(!1),u=t.ref(void 0);let y;const x=d=>{y&&clearTimeout(y),y=setTimeout(()=>{a.value=!0},800),u.value=d},g=()=>{clearTimeout(y),a.value=!1},f=(d,k,c,B)=>{switch(d.type){case"click":o("click-bar",{bar:k,e:d,datetime:c});break;case"mousedown":o("mousedown-bar",{bar:k,e:d,datetime:c});break;case"mouseup":o("mouseup-bar",{bar:k,e:d,datetime:c});break;case"dblclick":o("dblclick-bar",{bar:k,e:d,datetime:c});break;case"mouseenter":x(k),o("mouseenter-bar",{bar:k,e:d});break;case"mouseleave":g(),o("mouseleave-bar",{bar:k,e:d});break;case"dragstart":l.value=!0,o("dragstart-bar",{bar:k,e:d});break;case"drag":o("drag-bar",{bar:k,e:d});break;case"dragend":l.value=!1,o("dragend-bar",{bar:k,e:d,movedBars:B});break;case"contextmenu":o("contextmenu-bar",{bar:k,e:d,datetime:c});break}},v=t.ref(null),_=ie(v);return t.provide(mt,n),t.provide(gt,{...t.toRefs(i),colors:s,chartSize:_}),t.provide(ht,f),(d,k)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!d.labelColumnTitle}])},[d.labelColumnTitle?(t.openBlock(),t.createBlock(At,{key:0,style:t.normalizeStyle({width:d.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(d.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:c})=>[t.renderSlot(d.$slots,"label-column-row",{label:c})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:v,class:t.normalizeClass(["g-gantt-chart",{"with-column":d.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(w),background:s.value.background,fontFamily:t.unref(h)})},[d.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Ut,{key:0},{"upper-timeunit":t.withCtx(({label:c,value:B,date:b})=>[t.renderSlot(d.$slots,"upper-timeunit",{label:c,value:B,date:b})]),timeunit:t.withCtx(({label:c,value:B,date:b})=>[t.renderSlot(d.$slots,"timeunit",{label:c,value:B,date:b})]),_:3})),d.grid?(t.openBlock(),t.createBlock(Vt,{key:1,"highlighted-units":d.highlightedUnits,"highlight-dates":d.highlightDates},null,8,["highlighted-units","highlight-dates"])):t.createCommentVNode("",!0),d.currentTime?(t.openBlock(),t.createBlock(Xt,{key:2},{"current-time-label":t.withCtx(()=>[t.renderSlot(d.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",fe,[t.renderSlot(d.$slots,"default")])],6)],2),t.createVNode(Qt,{"model-value":a.value||l.value,bar:u.value},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"bar-tooltip",{bar:u.value})]),_:3},8,["model-value","bar"])]))}}),Oe="";function Dt(e,p=()=>null,i=()=>null,o=$()){const{barStart:w,barEnd:h,pushOnOverlap:m}=o,r=t.ref(!1);let s=0,n;const{mapPositionToTime:a}=P(o),{toDayjs:l}=A(o),u=d=>{const k=document.getElementById(e.ganttBarConfig.id);if(!k)return;switch(s=d.clientX-(k.getBoundingClientRect().left||0),d.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=g;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=f;break;default:n=x}r.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",_)},y=()=>{var c;const d=document.getElementById(e.ganttBarConfig.id),k=(c=d==null?void 0:d.closest(".g-gantt-row-bars-container"))==null?void 0:c.getBoundingClientRect();return{barElement:d,barContainer:k}},x=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=k.getBoundingClientRect().width,b=d.clientX-c.left-s,E=b+B;v(b,E)||(e[w.value]=a(b),e[h.value]=a(E),p(d,e))},g=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=d.clientX-c.left,b=a(B);l(b).isSameOrAfter(l(e,"end"))||(e[w.value]=b,p(d,e))},f=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=d.clientX-c.left,b=a(B);l(b).isSameOrBefore(l(e,"start"))||(e[h.value]=b,p(d,e))},v=(d,k)=>{if(!m.value)return!1;const c=e.ganttBarConfig.dragLimitLeft,B=e.ganttBarConfig.dragLimitRight;return d&&c!=null&&d<c||k&&B!=null&&k>B},_=d=>{r.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",_),i(d,e)};return{isDragging:r,initDrag:u}}function St(){const e=t.inject(ht);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ue(){const e=$(),p=X(),i=St(),{pushOnOverlap:o,barStart:w,barEnd:h,noOverlap:m,dateFormat:r}=e,s=new Map,{toDayjs:n,format:a}=A(),l=(c,B)=>{const{initDrag:b}=Dt(c,y,_,e);i({...B,type:"dragstart"},c),b(B),d(c)},u=(c,B)=>{const b=c.ganttBarConfig.bundle;b!=null&&(p().forEach(E=>{E.bars.forEach(C=>{if(C.ganttBarConfig.bundle===b){const D=C===c?_:()=>null,{initDrag:S}=Dt(C,y,D,e);S(B),d(C)}})}),i({...B,type:"dragstart"},c))},y=(c,B)=>{i({...c,type:"drag"},B),x(B)},x=c=>{if(!(o!=null&&o.value))return;let B=c,{overlapBar:b,overlapType:E}=g(B);for(;b;){d(b);const C=n(B[w.value]),D=n(B[h.value]),S=n(b[w.value]),M=n(b[h.value]);let Y;switch(E){case"left":Y=M.diff(C,"minutes",!0),b[h.value]=a(B[w.value],r.value),b[w.value]=a(S.subtract(Y,"minutes"),r.value);break;case"right":Y=D.diff(S,"minutes",!0),b[w.value]=a(D,r.value),b[h.value]=a(M.add(Y,"minutes"),r.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}b&&(E==="left"||E==="right")&&f(b,Y,E),B=b,{overlapBar:b,overlapType:E}=g(b)}},g=c=>{var L,I;let B,b,E;const C=(I=(L=p().find(z=>z.bars.includes(c)))==null?void 0:L.bars)!=null?I:[],D=n(c[w.value]),S=n(c[h.value]);return{overlapBar:C.find(z=>{if(z===c)return!1;const N=n(z[w.value]),G=n(z[h.value]);return B=D.isBetween(N,G),b=S.isBetween(N,G),E=N.isBetween(D,S)||G.isBetween(D,S),B||b||E}),overlapType:B?"left":b?"right":E?"between":null}},f=(c,B,b)=>{d(c),c.ganttBarConfig.bundle&&p().forEach(E=>{E.bars.forEach(C=>{C.ganttBarConfig.bundle===c.ganttBarConfig.bundle&&C!==c&&(d(C),v(C,B,b))})})},v=(c,B,b)=>{switch(b){case"left":c[w.value]=a(n(c,"start").subtract(B,"minutes"),r.value),c[h.value]=a(n(c,"end").subtract(B,"minutes"),r.value);break;case"right":c[w.value]=a(n(c,"start").add(B,"minutes"),r.value),c[h.value]=a(n(c,"end").add(B,"minutes"),r.value)}x(c)},_=(c,B)=>{k();const b={...c,type:"dragend"};i(b,B,void 0,new Map(s)),s.clear()},d=c=>{if(!s.has(c)){const B=c[w.value],b=c[h.value];s.set(c,{oldStart:B,oldEnd:b})}},k=()=>{if(o.value||!m.value)return;let c=!1;s.forEach((B,b)=>{const{overlapBar:E}=g(b);E!=null&&(c=!0)}),c&&s.forEach(({oldStart:B,oldEnd:b},E)=>{E[w.value]=B,E[h.value]=b})};return{initDragOfBar:l,initDragOfBundle:u}}function me(){const{pushOnOverlap:e}=$(),p=X(),i=m=>{const r=[];return m!=null&&p().forEach(s=>{s.bars.forEach(n=>{n.ganttBarConfig.bundle===m&&r.push(n)})}),r},o=m=>{if(!e.value||m.ganttBarConfig.pushOnOverlap===!1)return;for(const s of["left","right"]){const n=s,{gapDistanceSoFar:a,bundleBarsAndGapDist:l}=w(m,0,n);let u=a;const y=l;if(!y)continue;for(let g=0;g<y.length;g++){const f=y[g].bar,v=y[g].gapDistance;i(f.ganttBarConfig.bundle).filter(d=>d!==f).forEach(d=>{const k=w(d,v,n),c=k.gapDistanceSoFar,B=k.bundleBarsAndGapDist;c!=null&&(!u||c<u)&&(u=c),B.forEach(b=>{y.find(E=>E.bar===b.bar)||y.push(b)})})}const x=document.getElementById(m.ganttBarConfig.id);u!=null&&n==="left"?m.ganttBarConfig.dragLimitLeft=x.offsetLeft-u:u!=null&&n==="right"&&(m.ganttBarConfig.dragLimitRight=x.offsetLeft+x.offsetWidth+u)}i(m.ganttBarConfig.bundle).forEach(s=>{s.ganttBarConfig.dragLimitLeft=m.ganttBarConfig.dragLimitLeft,s.ganttBarConfig.dragLimitRight=m.ganttBarConfig.dragLimitRight})},w=(m,r=0,s)=>{const n=m.ganttBarConfig.bundle?[{bar:m,gapDistance:r}]:[];let a=m,l=h(a,s);if(s==="left")for(;l;){const u=document.getElementById(a.ganttBarConfig.id),y=document.getElementById(l.ganttBarConfig.id),x=y.offsetLeft+y.offsetWidth;if(r+=u.offsetLeft-x,l.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};l.ganttBarConfig.bundle&&n.push({bar:l,gapDistance:r}),a=l,l=h(l,"left")}if(s==="right")for(;l;){const u=document.getElementById(a.ganttBarConfig.id),y=document.getElementById(l.ganttBarConfig.id),x=u.offsetLeft+u.offsetWidth;if(r+=y.offsetLeft-x,l.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};l.ganttBarConfig.bundle&&n.push({bar:l,gapDistance:r}),a=l,l=h(l,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},h=(m,r)=>{var l,u;const s=document.getElementById(m.ganttBarConfig.id),n=(u=(l=p().find(y=>y.bars.includes(m)))==null?void 0:l.bars)!=null?u:[];let a=[];return r==="left"?a=n.filter(y=>{const x=document.getElementById(y.ganttBarConfig.id);return x&&x.offsetLeft<s.offsetLeft&&y.ganttBarConfig.pushOnOverlap!==!1}):a=n.filter(y=>{const x=document.getElementById(y.ganttBarConfig.id);return x&&x.offsetLeft>s.offsetLeft&&y.ganttBarConfig.pushOnOverlap!==!1}),a.length>0?a.reduce((y,x)=>{const g=document.getElementById(y.ganttBarConfig.id),f=document.getElementById(x.ganttBarConfig.id),v=Math.abs(g.offsetLeft-s.offsetLeft),_=Math.abs(f.offsetLeft-s.offsetLeft);return v<_?y:x},a[0]):null};return{setDragLimitsOfGanttBar:o}}const ge=["id"],he={class:"g-gantt-bar-label"},pe=["innerHTML"],ye=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),be=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),we=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){const p=e,i=St(),o=$(),{rowHeight:w}=o,{bar:h}=t.toRefs(p),{mapTimeToPosition:m,mapPositionToTime:r}=P(),{initDragOfBar:s,initDragOfBundle:n}=ue(),{setDragLimitsOfGanttBar:a}=me(),l=t.ref(!1),u=t.computed(()=>h.value.ganttBarConfig);function y(C){u.value.bundle!=null?n(h.value,C):s(h.value,C),l.value=!0}const x=()=>{a(h.value),!u.value.immobile&&(window.addEventListener("mousemove",y,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",y),l.value=!1},{once:!0}))},g=t.inject(pt),f=C=>{var M;C.preventDefault(),C.type==="mousedown"&&x();const D=(M=g==null?void 0:g.value)==null?void 0:M.getBoundingClientRect();if(!D)return;const S=r(C.clientX-D.left);i(C,h.value,S)},{barStart:v,barEnd:_,width:d,chartStart:k,chartEnd:c,chartSize:B}=o,b=t.ref(0),E=t.ref(0);return t.onMounted(()=>{t.watch([h,d,k,c,B.width],()=>{b.value=m(h.value[v.value]),E.value=m(h.value[_.value])},{deep:!0,immediate:!0})}),(C,D)=>(t.openBlock(),t.createElementBlock("div",{id:u.value.id,class:t.normalizeClass(["g-gantt-bar",u.value.class||""]),style:t.normalizeStyle({...u.value.style,position:"absolute",top:`${t.unref(w)*.1}px`,left:`${b.value}px`,width:`${E.value-b.value}px`,height:`${t.unref(w)*.8}px`,zIndex:l.value?3:2}),onMousedown:f,onClick:f,onDblclick:f,onMouseenter:f,onMouseleave:f,onContextmenu:f},[t.createElementVNode("div",he,[t.renderSlot(C.$slots,"default",{bar:t.unref(h)},()=>[t.createElementVNode("div",null,t.toDisplayString(u.value.label||""),1),u.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:u.value.html},null,8,pe)):t.createCommentVNode("",!0)])]),u.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ye,be],64)):t.createCommentVNode("",!0)],46,ge))}}),Ye="",Mt=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:p}){const i=e,o=p,{rowHeight:w,colors:h,labelColumnTitle:m}=$(),{highlightOnHover:r}=t.toRefs(i),s=t.ref(!1),n=t.computed(()=>({height:`${w.value}px`,background:(r==null?void 0:r.value)&&s.value?h.value.hoverHighlight:null})),{mapPositionToTime:a}=P(),l=t.ref(null);t.provide(pt,l);const u=x=>{var _;const g=(_=l.value)==null?void 0:_.getBoundingClientRect();if(!g){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const f=x.clientX-g.left,v=a(f);o("drop",{e:x,datetime:v})},y=x=>!x||/^\s*$/.test(x);return(x,g)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(n.value),onDragover:g[0]||(g[0]=t.withModifiers(f=>s.value=!0,["prevent"])),onDragleave:g[1]||(g[1]=f=>s.value=!1),onDrop:g[2]||(g[2]=f=>u(f)),onMouseover:g[3]||(g[3]=f=>s.value=!0),onMouseleave:g[4]||(g[4]=f=>s.value=!1)},[!y(x.label)&&!t.unref(m)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(h).primary,color:t.unref(h).text})},[t.renderSlot(x.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(x.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:l,class:"g-gantt-row-bars-container"},x.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(x.bars,f=>(t.openBlock(),t.createBlock(we,{key:f.ganttBarConfig.id,bar:f},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:f})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),$e="";function Tt(){T.default.extend(Lt),T.default.extend(Gt),T.default.extend(Rt),T.default.extend(Nt),T.default.extend(It),T.default.extend($t),T.default.extend(zt)}const Ot={install(e,p){Tt(),e.component("GGanttChart",Ct),e.component("GGanttRow",Mt)}};O.GGanttChart=Ct,O.GGanttRow=Mt,O.default=Ot,O.extendDayjs=Tt,O.ganttastic=Ot,Object.defineProperties(O,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(O,H="top"){if(!O||typeof document>"u")return;const t=document.head,W=document.createElement("style");H==="top"&&t.firstChild?t.insertBefore(W,t.firstChild):t.appendChild(W),W.appendChild(document.createTextNode(O))}injectStyle(`
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
