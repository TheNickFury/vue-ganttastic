(function(T,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):(T=typeof globalThis<"u"?globalThis:T||self,H(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,H,t){"use strict";const M=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(H);var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},it={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){var i="day";return function(a,b,h){var m=function(n){return n.add(4-n.isoWeekday(),i)},r=b.prototype;r.isoWeekYear=function(){return m(this).year()},r.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),i);var o,s,f,y,x=m(this),g=(o=this.isoWeekYear(),s=this.$u,f=(s?h.utc:h)().year(o).startOf("year"),y=4-f.isoWeekday(),f.isoWeekday()>4&&(y+=7),f.add(y,i));return x.diff(g,"week")+1},r.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var l=r.startOf;r.startOf=function(n,o){var s=this.$utils(),f=!!s.u(o)||o;return s.p(n)==="isoweek"?f?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(n,o)}}})})(it);const $t=it.exports;var st={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){return function(i,a){a.prototype.isSameOrBefore=function(b,h){return this.isSame(b,h)||this.isBefore(b,h)}}})})(st);const Lt=st.exports;var lt={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){return function(i,a){a.prototype.isSameOrAfter=function(b,h){return this.isSame(b,h)||this.isAfter(b,h)}}})})(lt);const Gt=lt.exports;var ct={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){return function(i,a,b){a.prototype.isBetween=function(h,m,r,l){var n=b(h),o=b(m),s=(l=l||"()")[0]==="(",f=l[1]===")";return(s?this.isAfter(n,r):!this.isBefore(n,r))&&(f?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(n,r):!this.isAfter(n,r))&&(f?this.isAfter(o,r):!this.isBefore(o,r))}}})})(ct);const Rt=ct.exports;var dt={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){var i="week",a="year";return function(b,h,m){var r=h.prototype;r.week=function(l){if(l===void 0&&(l=null),l!==null)return this.add(7*(l-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var o=m(this).startOf(a).add(1,a).date(n),s=m(this).endOf(i);if(o.isBefore(s))return 1}var f=m(this).startOf(a).date(n).startOf(i).subtract(1,"millisecond"),y=this.diff(f,i,!0);return y<0?m(this).startOf("week").week():Math.ceil(y)},r.weeks=function(l){return l===void 0&&(l=null),this.week(l)}}})})(dt);const It=dt.exports;var ft={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){return function(i,a){var b=a.prototype,h=b.format;b.format=function(m){var r=this,l=this.$locale();if(!this.isValid())return h.bind(this)(m);var n=this.$utils(),o=(m||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(s){switch(s){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return l.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return l.ordinal(r.week(),"W");case"w":case"ww":return n.s(r.week(),s==="w"?1:2,"0");case"W":case"WW":return n.s(r.isoWeek(),s==="W"?1:2,"0");case"k":case"kk":return n.s(String(r.$H===0?24:r.$H),s==="k"?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return s}});return h.bind(this)(o)}}})})(ft);const zt=ft.exports;var ut={exports:{}};(function(e,p){(function(i,a){e.exports=a()})(V,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,b=/\d\d/,h=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,r={},l=function(g){return(g=+g)+(g>68?1900:2e3)},n=function(g){return function(u){this[g]=+u}},o=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(u){if(!u||u==="Z")return 0;var _=u.match(/([+-]|\d\d)/g),v=60*_[1]+(+_[2]||0);return v===0?0:_[0]==="+"?-v:v}(g)}],s=function(g){var u=r[g];return u&&(u.indexOf?u:u.s.concat(u.f))},f=function(g,u){var _,v=r.meridiem;if(v){for(var d=1;d<=24;d+=1)if(g.indexOf(v(d,0,u))>-1){_=d>12;break}}else _=g===(u?"pm":"PM");return _},y={A:[m,function(g){this.afternoon=f(g,!1)}],a:[m,function(g){this.afternoon=f(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[b,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[h,n("seconds")],ss:[h,n("seconds")],m:[h,n("minutes")],mm:[h,n("minutes")],H:[h,n("hours")],h:[h,n("hours")],HH:[h,n("hours")],hh:[h,n("hours")],D:[h,n("day")],DD:[b,n("day")],Do:[m,function(g){var u=r.ordinal,_=g.match(/\d+/);if(this.day=_[0],u)for(var v=1;v<=31;v+=1)u(v).replace(/\[|\]/g,"")===g&&(this.day=v)}],M:[h,n("month")],MM:[b,n("month")],MMM:[m,function(g){var u=s("months"),_=(s("monthsShort")||u.map(function(v){return v.slice(0,3)})).indexOf(g)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[m,function(g){var u=s("months").indexOf(g)+1;if(u<1)throw new Error;this.month=u%12||u}],Y:[/[+-]?\d+/,n("year")],YY:[b,function(g){this.year=l(g)}],YYYY:[/\d{4}/,n("year")],Z:o,ZZ:o};function x(g){var u,_;u=g,_=r&&r.formats;for(var v=(g=u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(D,C,S){var O=S&&S.toUpperCase();return C||_[S]||i[S]||_[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Y,L,I){return L||I.slice(1)})})).match(a),d=v.length,k=0;k<d;k+=1){var c=v[k],B=y[c],w=B&&B[0],E=B&&B[1];v[k]=E?{regex:w,parser:E}:c.replace(/^\[|\]$/g,"")}return function(D){for(var C={},S=0,O=0;S<d;S+=1){var Y=v[S];if(typeof Y=="string")O+=Y.length;else{var L=Y.regex,I=Y.parser,z=D.slice(O),N=L.exec(z)[0];I.call(C,N),D=D.replace(N,"")}}return function(G){var R=G.afternoon;if(R!==void 0){var j=G.hours;R?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(C),C}}return function(g,u,_){_.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(l=g.parseTwoDigitYear);var v=u.prototype,d=v.parse;v.parse=function(k){var c=k.date,B=k.utc,w=k.args;this.$u=B;var E=w[1];if(typeof E=="string"){var D=w[2]===!0,C=w[3]===!0,S=D||C,O=w[2];C&&(O=w[2]),r=this.$locale(),!D&&O&&(r=_.Ls[O]),this.$d=function(z,N,G){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*z);var R=x(N)(z),j=R.year,q=R.month,Be=R.day,xe=R.hours,ke=R.minutes,ve=R.seconds,_e=R.milliseconds,Yt=R.zone,J=new Date,tt=Be||(j||q?1:J.getDate()),et=j||J.getFullYear(),Q=0;j&&!q||(Q=q>0?q-1:J.getMonth());var nt=xe||0,rt=ke||0,ot=ve||0,at=_e||0;return Yt?new Date(Date.UTC(et,Q,tt,nt,rt,ot,at+60*Yt.offset*1e3)):G?new Date(Date.UTC(et,Q,tt,nt,rt,ot,at)):new Date(et,Q,tt,nt,rt,ot,at)}catch{return new Date("")}}(c,E,B),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),S&&c!=this.format(E)&&(this.$d=new Date("")),r={}}else if(E instanceof Array)for(var Y=E.length,L=1;L<=Y;L+=1){w[1]=E[L-1];var I=_.apply(this,w);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}L===Y&&(this.$d=new Date(""))}else d.call(this,k)}}})})(ut);const Nt=ut.exports,mt=Symbol("CHART_ROWS_KEY"),gt=Symbol("CONFIG_KEY"),ht=Symbol("EMIT_BAR_EVENT_KEY"),pt=Symbol("BAR_CONTAINER_KEY");function $(){const e=t.inject(gt);if(!e)throw Error("Failed to inject config!");return e}const yt="YYYY-MM-DD HH:mm";function A(e=$()){const{chartStart:p,chartEnd:i,barStart:a,barEnd:b,dateFormat:h}=e,m=t.computed(()=>l(p.value)),r=t.computed(()=>l(i.value)),l=(o,s)=>{let f;if(s!==void 0&&typeof o!="string"&&!(o instanceof Date)&&(f=s==="start"?o[a.value]:o[b.value]),typeof o=="string")f=o;else if(o instanceof Date)return M.default(o);const y=h.value||yt;return M.default(f,y,!0)};return{chartStartDayjs:m,chartEndDayjs:r,toDayjs:l,format:(o,s)=>s===!1?o instanceof Date?o:M.default(o).toDate():(typeof o=="string"||o instanceof Date?l(o):o).format(s)}}function bt(){const{precision:e}=$(),{chartStartDayjs:p,chartEndDayjs:i}=A(),a=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),b=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),h={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"WW",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const r=[],l=[],n=i.value.diff(p.value,"minutes",!0),o=a.value,s=b.value;let f=p.value,y=p.value;for(;y.isSameOrBefore(i.value);){const x=y.endOf(s),u=x.isAfter(i.value)?i.value.diff(y,"minutes",!0)/n*100:x.diff(y,"minutes",!0)/n*100;l.push({label:y.format(h[e==null?void 0:e.value]),value:String(y),date:y.toDate(),width:String(u)+"%"}),y=x.add(1,s==="isoWeek"?"week":s).startOf(s)}for(;f.isSameOrBefore(i.value);){const x=f.endOf(o),u=x.isAfter(i.value)?i.value.diff(f,"minutes",!0)/n*100:x.diff(f,"minutes",!0)/n*100;r.push({label:f.format(h[o]),value:String(f),date:f.toDate(),width:String(u)+"%"}),f=x.add(1,o).startOf(o)}return{upperUnits:r,lowerUnits:l}})}}const Ht={class:"g-grid-container"},Vt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{},highlightDates:{},chartStart:{},chartEnd:{}},setup(e){const p=e,{colors:i}=$(),{timeaxisUnits:a}=bt(),b=t.ref([]);function h(o){const s=o%19,f=Math.floor(o/100),y=o%100,x=Math.floor(f/4),g=f%4,u=Math.floor((f+8)/25),_=Math.floor((f-u+1)/3),v=(19*s+f-x-_+15)%30,d=Math.floor(y/4),k=y%4,c=(32+2*g+2*d-v-k)%7,B=Math.floor((s+11*v+22*c)/451),w=Math.floor((v+c-7*B+114)/31),E=(v+c-7*B+114)%31+1;return M.default(`${o}-${w}-${E}`)}function m(o,s){const f=M.default(o),y=M.default(s),x=[],g=["01-01","01-06","04-25","05-01","06-02","08-15","11-01","12-08","12-25","12-26"],u=f.year(),_=y.year();for(let d=u;d<=_;d++){const k=h(d),c=k.add(1,"day");g.push(k.format("MM-DD")),g.push(c.format("MM-DD"))}let v=f;for(;v.isBefore(y)||v.isSame(y,"day");){const d=v.format("YYYY-MM-DD"),k=v.format("MM-DD");(v.day()===6||v.day()===0)&&x.push(d),g.includes(k)&&x.push(d),v=v.add(1,"day")}return x}const r=M.default(p.chartStart).format("YYYY-MM-DD"),l=M.default(p.chartEnd).add(1,"month").format("YYYY-MM-DD"),n=m(r,l);return b.value=[...n,...p.highlightDates],t.watch(()=>p.chartStart,()=>{const o=M.default(p.chartStart).format("YYYY-MM-DD"),s=M.default(p.chartEnd).add(1,"month").format("YYYY-MM-DD"),f=m(o,s);b.value=[...f,...p.highlightDates]}),(o,s)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).lowerUnits,({label:f,value:y,date:x,width:g})=>{var u,_;return t.openBlock(),t.createElementBlock("div",{key:f,class:"g-grid-line",style:t.normalizeStyle({width:g,background:((u=b.value)==null?void 0:u.includes(t.unref(M.default)(x).format("YYYY-MM-DD")))||((_=o.highlightedUnits)==null?void 0:_.includes(Number(y)))?t.unref(i).hoverHighlight:void 0})},null,4)}),128))]))}}),Ee="";function X(){const e=t.inject(mt);if(!e)throw Error("Failed to inject getChartRows!");return e}const jt={class:"g-label-column-rows"},At=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:p,colors:i,labelColumnTitle:a,rowHeight:b}=$(),h=X();return(m,r)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(p),color:t.unref(i).text})},[t.renderSlot(m.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(i).primary})},t.toDisplayString(t.unref(a)),5)]),t.createElementVNode("div",jt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(h)(),({label:l},n)=>(t.openBlock(),t.createElementBlock("div",{key:`${l}_${n}`,class:"g-label-column-row",style:t.normalizeStyle({background:n%2===0?t.unref(i).ternary:t.unref(i).quartenary,height:`${t.unref(b)}px`})},[t.renderSlot(m.$slots,"label-column-row",{label:l},()=>[t.createElementVNode("span",null,t.toDisplayString(l),1)])],4))),128))])],4))}}),De="",Ft={class:"g-timeaxis"},Wt={class:"g-timeunits-container"},Pt={class:"g-timeunits-container"},Ut=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:p,colors:i}=$(),{timeaxisUnits:a}=bt();return(b,h)=>(t.openBlock(),t.createElementBlock("div",Ft,[t.createElementVNode("div",Wt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).upperUnits,({label:m,value:r,date:l,width:n},o)=>(t.openBlock(),t.createElementBlock("div",{key:m,class:"g-upper-timeunit",style:t.normalizeStyle({background:o%2===0?t.unref(i).primary:t.unref(i).secondary,color:t.unref(i).text,width:n})},[t.renderSlot(b.$slots,"upper-timeunit",{label:m,value:r,date:l},()=>[t.createTextVNode(t.toDisplayString(m),1)])],4))),128))]),t.createElementVNode("div",Pt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).lowerUnits,({label:m,value:r,date:l,width:n},o)=>(t.openBlock(),t.createElementBlock("div",{key:m,class:"g-timeunit",style:t.normalizeStyle({background:o%2===0?t.unref(i).ternary:t.unref(i).quartenary,color:t.unref(i).text,flexDirection:t.unref(p)==="hour"?"column":"row",alignItems:t.unref(p)==="hour"?"":"center",width:n})},[t.renderSlot(b.$slots,"timeunit",{label:m,value:r,date:l},()=>[t.createTextVNode(t.toDisplayString(m),1)]),t.unref(p)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(i).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),Ce="",qt="cadetblue",Qt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const p={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},i=e,{bar:a}=t.toRefs(i),{precision:b,font:h,barStart:m,barEnd:r,rowHeight:l}=$(),n=t.ref("0px"),o=t.ref("0px");t.watch(()=>i.bar,async()=>{var c;await t.nextTick();const u=((c=a==null?void 0:a.value)==null?void 0:c.ganttBarConfig.id)||"";if(!u)return;const _=document.getElementById(u),{top:v,left:d}=(_==null?void 0:_.getBoundingClientRect())||{top:0,left:0},k=Math.max(d,10);n.value=`${v+l.value-10}px`,o.value=`${k}px`},{deep:!0,immediate:!0});const s=t.computed(()=>{var u,_;return((_=(u=a==null?void 0:a.value)==null?void 0:u.ganttBarConfig.style)==null?void 0:_.background)||qt}),{toDayjs:f}=A(),y=t.computed(()=>{var u;return(u=a.value)==null?void 0:u[m.value]}),x=t.computed(()=>{var u;return(u=a.value)==null?void 0:u[r.value]}),g=t.computed(()=>{if(!(a!=null&&a.value))return"";const u=p[b.value],_=f(y.value).format(u),v=f(x.value).format(u);return`${_} \u2013 ${v}`});return(u,_)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[u.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:o.value,fontFamily:t.unref(h)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:s.value})},null,4),t.renderSlot(u.$slots,"default",{bar:t.unref(a),barStart:y.value,barEnd:x.value},()=>[t.createTextVNode(t.toDisplayString(g.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Se="";function P(e=$()){const{dateFormat:p,chartSize:i}=e,{chartStartDayjs:a,chartEndDayjs:b,toDayjs:h,format:m}=A(e),r=t.computed(()=>b.value.diff(a.value,"minutes"));return{mapTimeToPosition:o=>{const s=i.width.value||0,f=h(o).diff(a.value,"minutes",!0);return Math.ceil(f/r.value*s)},mapPositionToTime:o=>{const s=i.width.value||0,f=o/s*r.value;return m(a.value.add(f,"minutes"),p.value)}}}const Xt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:p}=P(),i=t.ref(M.default()),{colors:a,dateFormat:b,currentTimeLabel:h}=$(),m=t.computed(()=>{const r=b.value||"YYYY-MM-DD HH:mm";return p(M.default(i.value,r).format(r))});return(r,l)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${m.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(a).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(a).markerCurrentTime})},[t.renderSlot(r.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(h)),1)])],4)],4))}}),Me="";var wt;const F=typeof window<"u";F&&((wt=window==null?void 0:window.navigator)==null?void 0:wt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kt(e){return typeof e=="function"?e():t.unref(e)}function Zt(e){return e}function Jt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function te(e,p=!0){t.getCurrentInstance()?t.onMounted(e):p?e():t.nextTick(e)}function U(e){var p;const i=Kt(e);return(p=i==null?void 0:i.$el)!=null?p:i}const Bt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function ee(e,p=!1){const i=t.ref(),a=()=>i.value=Boolean(e());return a(),te(a,p),i}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__";K[Z]=K[Z]||{},K[Z];var xt=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,oe=(e,p)=>{var i={};for(var a in e)ne.call(e,a)&&p.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&xt)for(var a of xt(e))p.indexOf(a)<0&&re.call(e,a)&&(i[a]=e[a]);return i};function ae(e,p,i={}){const a=i,{window:b=Bt}=a,h=oe(a,["window"]);let m;const r=ee(()=>b&&"ResizeObserver"in b),l=()=>{m&&(m.disconnect(),m=void 0)},n=t.watch(()=>U(e),s=>{l(),r.value&&b&&s&&(m=new ResizeObserver(p),m.observe(s,h))},{immediate:!0,flush:"post"}),o=()=>{l(),n()};return Jt(o),{isSupported:r,stop:o}}function ie(e,p={width:0,height:0},i={}){const{window:a=Bt,box:b="content-box"}=i,h=t.computed(()=>{var l,n;return(n=(l=U(e))==null?void 0:l.namespaceURI)==null?void 0:n.includes("svg")}),m=t.ref(p.width),r=t.ref(p.height);return ae(e,([l])=>{const n=b==="border-box"?l.borderBoxSize:b==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(a&&h.value){const o=U(e);if(o){const s=a.getComputedStyle(o);m.value=parseFloat(s.width),r.value=parseFloat(s.height)}}else if(n){const o=Array.isArray(n)?n:[n];m.value=o.reduce((s,{inlineSize:f})=>s+f,0),r.value=o.reduce((s,{blockSize:f})=>s+f,0)}else m.value=l.contentRect.width,r.value=l.contentRect.height},i),t.watch(()=>U(e),l=>{m.value=l?p.width:0,r.value=l?p.height:0}),{width:m,height:r}}var kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(kt||(kt={}));var se=Object.defineProperty,vt=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,_t=(e,p,i)=>p in e?se(e,p,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[p]=i,de=(e,p)=>{for(var i in p||(p={}))le.call(p,i)&&_t(e,i,p[i]);if(vt)for(var i of vt(p))ce.call(p,i)&&_t(e,i,p[i]);return e};de({linear:Zt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const Et={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},fe={class:"g-gantt-rows-container"},Dt=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:yt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},highlightDates:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:p}){const i=e,a=p,{width:b,font:h,colorScheme:m}=t.toRefs(i),r=t.useSlots(),l=t.computed(()=>typeof m.value!="string"?m.value:Et[m.value]||Et.default),n=()=>{var c;const d=(c=r.default)==null?void 0:c.call(r),k=[];return d&&d.forEach(B=>{var w;if((w=B.props)!=null&&w.bars){const{label:E,bars:D}=B.props;k.push({label:E,bars:D})}else Array.isArray(B.children)&&B.children.forEach(E=>{var C;const D=E;if((C=D==null?void 0:D.props)!=null&&C.bars){const{label:S,bars:O}=D.props;k.push({label:S,bars:O})}})}),k},o=t.ref(!1),s=t.ref(!1),f=t.ref(void 0);let y;const x=d=>{y&&clearTimeout(y),y=setTimeout(()=>{o.value=!0},800),f.value=d},g=()=>{clearTimeout(y),o.value=!1},u=(d,k,c,B)=>{switch(d.type){case"click":a("click-bar",{bar:k,e:d,datetime:c});break;case"mousedown":a("mousedown-bar",{bar:k,e:d,datetime:c});break;case"mouseup":a("mouseup-bar",{bar:k,e:d,datetime:c});break;case"dblclick":a("dblclick-bar",{bar:k,e:d,datetime:c});break;case"mouseenter":x(k),a("mouseenter-bar",{bar:k,e:d});break;case"mouseleave":g(),a("mouseleave-bar",{bar:k,e:d});break;case"dragstart":s.value=!0,a("dragstart-bar",{bar:k,e:d});break;case"drag":a("drag-bar",{bar:k,e:d});break;case"dragend":s.value=!1,a("dragend-bar",{bar:k,e:d,movedBars:B});break;case"contextmenu":a("contextmenu-bar",{bar:k,e:d,datetime:c});break}},_=t.ref(null),v=ie(_);return t.provide(mt,n),t.provide(gt,{...t.toRefs(i),colors:l,chartSize:v}),t.provide(ht,u),(d,k)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!d.labelColumnTitle}])},[d.labelColumnTitle?(t.openBlock(),t.createBlock(At,{key:0,style:t.normalizeStyle({width:d.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(d.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:c})=>[t.renderSlot(d.$slots,"label-column-row",{label:c})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:_,class:t.normalizeClass(["g-gantt-chart",{"with-column":d.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(b),background:l.value.background,fontFamily:t.unref(h)})},[d.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Ut,{key:0},{"upper-timeunit":t.withCtx(({label:c,value:B,date:w})=>[t.renderSlot(d.$slots,"upper-timeunit",{label:c,value:B,date:w})]),timeunit:t.withCtx(({label:c,value:B,date:w})=>[t.renderSlot(d.$slots,"timeunit",{label:c,value:B,date:w})]),_:3})),d.grid?(t.openBlock(),t.createBlock(Vt,{key:1,"chart-start":d.chartStart,"chart-end":d.chartEnd,"highlighted-units":d.highlightedUnits,"highlight-dates":d.highlightDates},null,8,["chart-start","chart-end","highlighted-units","highlight-dates"])):t.createCommentVNode("",!0),d.currentTime?(t.openBlock(),t.createBlock(Xt,{key:2},{"current-time-label":t.withCtx(()=>[t.renderSlot(d.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",fe,[t.renderSlot(d.$slots,"default")])],6)],2),t.createVNode(Qt,{"model-value":o.value||s.value,bar:f.value},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"bar-tooltip",{bar:f.value})]),_:3},8,["model-value","bar"])]))}}),Te="";function Ct(e,p=()=>null,i=()=>null,a=$()){const{barStart:b,barEnd:h,pushOnOverlap:m}=a,r=t.ref(!1);let l=0,n;const{mapPositionToTime:o}=P(a),{toDayjs:s}=A(a),f=d=>{const k=document.getElementById(e.ganttBarConfig.id);if(!k)return;switch(l=d.clientX-(k.getBoundingClientRect().left||0),d.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=g;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=u;break;default:n=x}r.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",v)},y=()=>{var c;const d=document.getElementById(e.ganttBarConfig.id),k=(c=d==null?void 0:d.closest(".g-gantt-row-bars-container"))==null?void 0:c.getBoundingClientRect();return{barElement:d,barContainer:k}},x=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=k.getBoundingClientRect().width,w=d.clientX-c.left-l,E=w+B;_(w,E)||(e[b.value]=o(w),e[h.value]=o(E),p(d,e))},g=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=d.clientX-c.left,w=o(B);s(w).isSameOrAfter(s(e,"end"))||(e[b.value]=w,p(d,e))},u=d=>{const{barElement:k,barContainer:c}=y();if(!k||!c)return;const B=d.clientX-c.left,w=o(B);s(w).isSameOrBefore(s(e,"start"))||(e[h.value]=w,p(d,e))},_=(d,k)=>{if(!m.value)return!1;const c=e.ganttBarConfig.dragLimitLeft,B=e.ganttBarConfig.dragLimitRight;return d&&c!=null&&d<c||k&&B!=null&&k>B},v=d=>{r.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",v),i(d,e)};return{isDragging:r,initDrag:f}}function St(){const e=t.inject(ht);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ue(){const e=$(),p=X(),i=St(),{pushOnOverlap:a,barStart:b,barEnd:h,noOverlap:m,dateFormat:r}=e,l=new Map,{toDayjs:n,format:o}=A(),s=(c,B)=>{const{initDrag:w}=Ct(c,y,v,e);i({...B,type:"dragstart"},c),w(B),d(c)},f=(c,B)=>{const w=c.ganttBarConfig.bundle;w!=null&&(p().forEach(E=>{E.bars.forEach(D=>{if(D.ganttBarConfig.bundle===w){const C=D===c?v:()=>null,{initDrag:S}=Ct(D,y,C,e);S(B),d(D)}})}),i({...B,type:"dragstart"},c))},y=(c,B)=>{i({...c,type:"drag"},B),x(B)},x=c=>{if(!(a!=null&&a.value))return;let B=c,{overlapBar:w,overlapType:E}=g(B);for(;w;){d(w);const D=n(B[b.value]),C=n(B[h.value]),S=n(w[b.value]),O=n(w[h.value]);let Y;switch(E){case"left":Y=O.diff(D,"minutes",!0),w[h.value]=o(B[b.value],r.value),w[b.value]=o(S.subtract(Y,"minutes"),r.value);break;case"right":Y=C.diff(S,"minutes",!0),w[b.value]=o(C,r.value),w[h.value]=o(O.add(Y,"minutes"),r.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(E==="left"||E==="right")&&u(w,Y,E),B=w,{overlapBar:w,overlapType:E}=g(w)}},g=c=>{var L,I;let B,w,E;const D=(I=(L=p().find(z=>z.bars.includes(c)))==null?void 0:L.bars)!=null?I:[],C=n(c[b.value]),S=n(c[h.value]);return{overlapBar:D.find(z=>{if(z===c)return!1;const N=n(z[b.value]),G=n(z[h.value]);return B=C.isBetween(N,G),w=S.isBetween(N,G),E=N.isBetween(C,S)||G.isBetween(C,S),B||w||E}),overlapType:B?"left":w?"right":E?"between":null}},u=(c,B,w)=>{d(c),c.ganttBarConfig.bundle&&p().forEach(E=>{E.bars.forEach(D=>{D.ganttBarConfig.bundle===c.ganttBarConfig.bundle&&D!==c&&(d(D),_(D,B,w))})})},_=(c,B,w)=>{switch(w){case"left":c[b.value]=o(n(c,"start").subtract(B,"minutes"),r.value),c[h.value]=o(n(c,"end").subtract(B,"minutes"),r.value);break;case"right":c[b.value]=o(n(c,"start").add(B,"minutes"),r.value),c[h.value]=o(n(c,"end").add(B,"minutes"),r.value)}x(c)},v=(c,B)=>{k();const w={...c,type:"dragend"};i(w,B,void 0,new Map(l)),l.clear()},d=c=>{if(!l.has(c)){const B=c[b.value],w=c[h.value];l.set(c,{oldStart:B,oldEnd:w})}},k=()=>{if(a.value||!m.value)return;let c=!1;l.forEach((B,w)=>{const{overlapBar:E}=g(w);E!=null&&(c=!0)}),c&&l.forEach(({oldStart:B,oldEnd:w},E)=>{E[b.value]=B,E[h.value]=w})};return{initDragOfBar:s,initDragOfBundle:f}}function me(){const{pushOnOverlap:e}=$(),p=X(),i=m=>{const r=[];return m!=null&&p().forEach(l=>{l.bars.forEach(n=>{n.ganttBarConfig.bundle===m&&r.push(n)})}),r},a=m=>{if(!e.value||m.ganttBarConfig.pushOnOverlap===!1)return;for(const l of["left","right"]){const n=l,{gapDistanceSoFar:o,bundleBarsAndGapDist:s}=b(m,0,n);let f=o;const y=s;if(!y)continue;for(let g=0;g<y.length;g++){const u=y[g].bar,_=y[g].gapDistance;i(u.ganttBarConfig.bundle).filter(d=>d!==u).forEach(d=>{const k=b(d,_,n),c=k.gapDistanceSoFar,B=k.bundleBarsAndGapDist;c!=null&&(!f||c<f)&&(f=c),B.forEach(w=>{y.find(E=>E.bar===w.bar)||y.push(w)})})}const x=document.getElementById(m.ganttBarConfig.id);f!=null&&n==="left"?m.ganttBarConfig.dragLimitLeft=x.offsetLeft-f:f!=null&&n==="right"&&(m.ganttBarConfig.dragLimitRight=x.offsetLeft+x.offsetWidth+f)}i(m.ganttBarConfig.bundle).forEach(l=>{l.ganttBarConfig.dragLimitLeft=m.ganttBarConfig.dragLimitLeft,l.ganttBarConfig.dragLimitRight=m.ganttBarConfig.dragLimitRight})},b=(m,r=0,l)=>{const n=m.ganttBarConfig.bundle?[{bar:m,gapDistance:r}]:[];let o=m,s=h(o,l);if(l==="left")for(;s;){const f=document.getElementById(o.ganttBarConfig.id),y=document.getElementById(s.ganttBarConfig.id),x=y.offsetLeft+y.offsetWidth;if(r+=f.offsetLeft-x,s.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};s.ganttBarConfig.bundle&&n.push({bar:s,gapDistance:r}),o=s,s=h(s,"left")}if(l==="right")for(;s;){const f=document.getElementById(o.ganttBarConfig.id),y=document.getElementById(s.ganttBarConfig.id),x=f.offsetLeft+f.offsetWidth;if(r+=y.offsetLeft-x,s.ganttBarConfig.immobile)return{gapDistanceSoFar:r,bundleBarsAndGapDist:n};s.ganttBarConfig.bundle&&n.push({bar:s,gapDistance:r}),o=s,s=h(s,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},h=(m,r)=>{var s,f;const l=document.getElementById(m.ganttBarConfig.id),n=(f=(s=p().find(y=>y.bars.includes(m)))==null?void 0:s.bars)!=null?f:[];let o=[];return r==="left"?o=n.filter(y=>{const x=document.getElementById(y.ganttBarConfig.id);return x&&x.offsetLeft<l.offsetLeft&&y.ganttBarConfig.pushOnOverlap!==!1}):o=n.filter(y=>{const x=document.getElementById(y.ganttBarConfig.id);return x&&x.offsetLeft>l.offsetLeft&&y.ganttBarConfig.pushOnOverlap!==!1}),o.length>0?o.reduce((y,x)=>{const g=document.getElementById(y.ganttBarConfig.id),u=document.getElementById(x.ganttBarConfig.id),_=Math.abs(g.offsetLeft-l.offsetLeft),v=Math.abs(u.offsetLeft-l.offsetLeft);return _<v?y:x},o[0]):null};return{setDragLimitsOfGanttBar:a}}const ge=["id"],he={class:"g-gantt-bar-label"},pe=["innerHTML"],ye=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),be=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),we=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){const p=e,i=St(),a=$(),{rowHeight:b}=a,{bar:h}=t.toRefs(p),{mapTimeToPosition:m,mapPositionToTime:r}=P(),{initDragOfBar:l,initDragOfBundle:n}=ue(),{setDragLimitsOfGanttBar:o}=me(),s=t.ref(!1),f=t.computed(()=>h.value.ganttBarConfig);function y(D){f.value.bundle!=null?n(h.value,D):l(h.value,D),s.value=!0}const x=()=>{o(h.value),!f.value.immobile&&(window.addEventListener("mousemove",y,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",y),s.value=!1},{once:!0}))},g=t.inject(pt),u=D=>{var O;D.preventDefault(),D.type==="mousedown"&&x();const C=(O=g==null?void 0:g.value)==null?void 0:O.getBoundingClientRect();if(!C)return;const S=r(D.clientX-C.left);i(D,h.value,S)},{barStart:_,barEnd:v,width:d,chartStart:k,chartEnd:c,chartSize:B}=a,w=t.ref(0),E=t.ref(0);return t.onMounted(()=>{t.watch([h,d,k,c,B.width],()=>{w.value=m(h.value[_.value]),E.value=m(h.value[v.value])},{deep:!0,immediate:!0})}),(D,C)=>(t.openBlock(),t.createElementBlock("div",{id:f.value.id,class:t.normalizeClass(["g-gantt-bar",f.value.class||""]),style:t.normalizeStyle({...f.value.style,position:"absolute",top:`${t.unref(b)*.1}px`,left:`${w.value}px`,width:`${E.value-w.value}px`,height:`${t.unref(b)*.8}px`,zIndex:s.value?3:2}),onMousedown:u,onClick:u,onDblclick:u,onMouseenter:u,onMouseleave:u,onContextmenu:u},[t.createElementVNode("div",he,[t.renderSlot(D.$slots,"default",{bar:t.unref(h)},()=>[t.createElementVNode("div",null,t.toDisplayString(f.value.label||""),1),f.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:f.value.html},null,8,pe)):t.createCommentVNode("",!0)])]),f.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ye,be],64)):t.createCommentVNode("",!0)],46,ge))}}),Ye="",Mt=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:p}){const i=e,a=p,{rowHeight:b,colors:h,labelColumnTitle:m}=$(),{highlightOnHover:r}=t.toRefs(i),l=t.ref(!1),n=t.computed(()=>({height:`${b.value}px`,background:(r==null?void 0:r.value)&&l.value?h.value.hoverHighlight:null})),{mapPositionToTime:o}=P(),s=t.ref(null);t.provide(pt,s);const f=x=>{var v;const g=(v=s.value)==null?void 0:v.getBoundingClientRect();if(!g){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const u=x.clientX-g.left,_=o(u);a("drop",{e:x,datetime:_})},y=x=>!x||/^\s*$/.test(x);return(x,g)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(n.value),onDragover:g[0]||(g[0]=t.withModifiers(u=>l.value=!0,["prevent"])),onDragleave:g[1]||(g[1]=u=>l.value=!1),onDrop:g[2]||(g[2]=u=>f(u)),onMouseover:g[3]||(g[3]=u=>l.value=!0),onMouseleave:g[4]||(g[4]=u=>l.value=!1)},[!y(x.label)&&!t.unref(m)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(h).primary,color:t.unref(h).text})},[t.renderSlot(x.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(x.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:s,class:"g-gantt-row-bars-container"},x.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(x.bars,u=>(t.openBlock(),t.createBlock(we,{key:u.ganttBarConfig.id,bar:u},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:u})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),$e="";function Ot(){M.default.extend(Lt),M.default.extend(Gt),M.default.extend(Rt),M.default.extend(Nt),M.default.extend(It),M.default.extend($t),M.default.extend(zt)}const Tt={install(e,p){Ot(),e.component("GGanttChart",Dt),e.component("GGanttRow",Mt)}};T.GGanttChart=Dt,T.GGanttRow=Mt,T.default=Tt,T.extendDayjs=Ot,T.ganttastic=Tt,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,H="top"){if(!T||typeof document>"u")return;const t=document.head,W=document.createElement("style");H==="top"&&t.firstChild?t.insertBefore(W,t.firstChild):t.appendChild(W),W.appendChild(document.createTextNode(T))}injectStyle(`
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
`,"top");
