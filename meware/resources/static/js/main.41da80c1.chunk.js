(window["webpackJsonpconference-table-widget"]=window["webpackJsonpconference-table-widget"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(50),o=n(57),c=n(40),i=n(51),l=n(84),s=n(19),u=n(0),d=n.n(u),f=n(7),p=n.n(f),m=n(69),b=n.n(m),h=n(162),v=n(164),y=n(11),O=d.a.createContext(null);var E=n(32),j=n.n(E),g=n(45),k=n(27),w=n(24),P=n(160),F=n(5),C=n(80),D=n.n(C),S=n(4),N=n.n(S),x=(N.a.shape({initialized:N.a.bool,authenticated:N.a.bool}),function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null}),R=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},I=n(151),A=n(153),U=n(161),z=n(145),T=n(170),L=n(166),W=n(165),H=n(152),M=n(75),q=n.n(M),K=(N.a.shape({field:N.a.string,operator:N.a.string,value:N.a.string}),n(21)),_=["equals","in","specified","unspecified"],J=["contains"],V=[{value:"greaterThan",title:">"},{value:"lessThan",title:"<"},{value:"greaterOrEqualThan",title:">="},{value:"lessOrEqualThan",title:"<="}],B=["name","location","room"],G=["date"],Q=[],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.filter((function(e){return e.field&&e.operator})).reduce((function(e,t){switch(t.operator){case"specified":return[].concat(Object(K.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=true")]);case"unspecified":return[].concat(Object(K.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=false")])}return[].concat(Object(K.a)(e),["".concat(encodeURIComponent("".concat(t.field,".").concat(t.operator)),"=").concat(encodeURIComponent(t.value))])}),[]).join("&"):""},Y=Object(F.a)((function(){return{formControl:{minWidth:120,width:"90%"},icon:{color:"rgba(0, 0, 0, 0.54)"}}}),{withTheme:!0})(Object(w.b)()((function(e){var t,n=e.filter,a=e.t,r=e.update,o=e.remove,c=e.filterId,i=e.classes,l=(t=n.field,[].concat(_,Object(K.a)(B.includes(t)?J:[]),Object(K.a)(G.includes(t)?V:[]),Object(K.a)(Q.includes(t)?V:[]))),u=function(e){r(c,Object(s.a)({},e.target.name,e.target.value))};return d.a.createElement(z.a,{container:!0},d.a.createElement(z.a,{item:!0,xs:5},d.a.createElement(L.a,{className:i.formControl},d.a.createElement(W.a,{id:"".concat(c,"-field-label")},a("filter.value")),d.a.createElement(U.a,{native:!0,labelId:"".concat(c,"-field-label"),id:"".concat(c,"-field"),name:"field",value:n.field,onChange:u},d.a.createElement("option",{value:""}),d.a.createElement("option",{value:"name"},a("entities.conference.name")),d.a.createElement("option",{value:"date"},a("entities.conference.date")),d.a.createElement("option",{value:"location"},a("entities.conference.location")),d.a.createElement("option",{value:"room"},a("entities.conference.room"))))),d.a.createElement(z.a,{item:!0,xs:3},!!n.field&&d.a.createElement(L.a,{className:i.formControl},d.a.createElement(W.a,{id:"".concat(c,"-operator-label")},a("filter.operator")),d.a.createElement(U.a,{native:!0,labelId:"".concat(c,"-operator-label"),id:"".concat(c,"-operator"),name:"operator",value:n.operator,onChange:u},d.a.createElement("option",{value:""}),l.map((function(e){return"string"!==typeof e?d.a.createElement("option",{key:e.value,value:e.value},e.title):d.a.createElement("option",{key:e,value:e},a("filters.operators.".concat(e)))}))))),d.a.createElement(z.a,{item:!0,xs:3},!!n.operator&&!["specified","unspecified"].includes(n.operator)&&d.a.createElement(L.a,{className:i.formControl},d.a.createElement(T.a,{disabled:!n.field,id:"standard-required",name:"value",value:n.value,onChange:u,margin:"normal"}))),d.a.createElement(z.a,{item:!0,xs:1},d.a.createElement(H.a,{"aria-label":"Remove filter",className:i.icon,onClick:function(){o(c)}},d.a.createElement(q.a,null))))}))),Z=function(e){var t=e.classes,n=e.filters,a=e.applyFilter,r=e.update,o=e.remove,c=e.clear,i=e.add,l=e.t,s=n.length>0;return d.a.createElement(I.a,{className:t.root},d.a.createElement(A.a,{variant:"contained",className:t.button,onClick:i},l("filters.addFilter")),s&&d.a.createElement(A.a,{className:t.button,onClick:c},l("filters.clearFilters")),n.map((function(e,t){var n="".concat(e.field).concat(e.operator).concat(t);return d.a.createElement(Y,{key:n,update:r,remove:o,filterId:t,filter:e})})),s&&d.a.createElement(A.a,{variant:"contained",color:"primary",className:t.button,onClick:a},l("filters.filter")))};Z.defaultProps={applyFilter:function(){},add:function(){},update:function(){},remove:function(){},clear:function(){}};var $=Object(F.a)({root:{flexGrow:1,padding:"5px"},paper:{padding:"5px",textAlign:"center",height:"30px"},icon:{padding:"5px",color:"#555555","&:hover":{color:"#000000"}},button:{margin:"5px"}})(Object(w.b)()(Z)),ee=n(156),te=n(158),ne=n(155),ae=n(154),re=n(157),oe=(N.a.shape({id:N.a.number,name:N.a.string,date:N.a.string,location:N.a.string,room:N.a.string}),function(e){var t=e.items,n=e.onSelect,a=e.classes,r=e.t,o=t.map((function(e){return d.a.createElement(ae.a,{hover:!0,className:a.root,key:e.id,onClick:function(){return n(e)}},d.a.createElement(ne.a,null,d.a.createElement("span",null,e.name)),d.a.createElement(ne.a,null,d.a.createElement("span",null,e.date)),d.a.createElement(ne.a,null,d.a.createElement("span",null,e.location)),d.a.createElement(ne.a,null,d.a.createElement("span",null,e.room)))}));return t.length?d.a.createElement(ee.a,null,d.a.createElement(re.a,null,d.a.createElement(ae.a,null,d.a.createElement(ne.a,null,d.a.createElement("span",null,r("entities.conference.name"))),d.a.createElement(ne.a,null,d.a.createElement("span",null,r("entities.conference.date"))),d.a.createElement(ne.a,null,d.a.createElement("span",null,r("entities.conference.location"))),d.a.createElement(ne.a,null,d.a.createElement("span",null,r("entities.conference.room"))))),d.a.createElement(te.a,null,o)):r("entities.conference.noItems")});oe.defaultProps={onSelect:function(){}};var ce=Object(F.a)({root:{cursor:"pointer"}})(Object(w.b)()(oe)),ie=n(3),le=n(167),se=n(168),ue=n(159),de=n(77),fe=n.n(de),pe=n(78),me=n.n(pe),be=n(76),he=n.n(be),ve=n(79),ye=n.n(ve),Oe={success:he.a,error:fe.a,info:me.a},Ee={success:3e3,error:null,info:5e3},je=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,c=t.onClose,i=!!o,l=r||e.INFO,s=Oe[l],u=Ee[l],f=d.a.createElement("span",{className:a.message},d.a.createElement(s,{className:Object(ie.a)(a.icon,a.iconStatus)}),o);return d.a.createElement(le.a,{open:i,onClose:c,autoHideDuration:u},d.a.createElement(se.a,{className:Object(ie.a)(a[l],n),message:f,action:[d.a.createElement(H.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},d.a.createElement(ye.a,{className:a.icon}))]}))};je.SUCCESS="success",je.ERROR="error",je.INFO="info",je.defaultProps={message:null,status:null,className:"",onClose:function(){}};var ge=Object(F.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ue.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(je),ke=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_DOMAIN;function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Fe=function(){var e=Object(g.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return a=e.sent,e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(g.a)(j.a.mark((function e(t){var n,a,r,o,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.filters,a=X(void 0===n?[]:n),r="".concat(ke,"/conferences").concat(a?"?".concat(a):""),o=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:"",c={headers:new Headers({Authorization:"Bearer ".concat(o),"Content-Type":"application/json"})},i=Pe({},c,{method:"GET"}),e.abrupt("return",Fe(r,i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De={formUpdate:"conference.form.update",formCreate:"conference.form.create",formDelete:"conference.form.delete"},Se={select:"conference.table.select",add:"conference.table.add",error:"conference.table.error"};function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re={filters:[],items:[],errorMessage:null,errorStatus:null,loading:!1},Ie=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).state=Re,n.handleError=n.handleError.bind(Object(k.a)(n)),n.closeNotification=n.closeNotification.bind(Object(k.a)(n)),n.fetchData=n.fetchData.bind(Object(k.a)(n)),n.updateFilter=n.updateFilter.bind(Object(k.a)(n)),n.addFilter=n.addFilter.bind(Object(k.a)(n)),n.removeFilter=n.removeFilter.bind(Object(k.a)(n)),n.clearFilters=n.clearFilters.bind(Object(k.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"dispatch",value:function(e){this.setState((function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addFilter":return xe({},e,{filters:[].concat(Object(K.a)(e.filters),[{field:"",operator:"",value:""}])});case"updateFilter":return xe({},e,{filters:e.filters.map((function(e,n){return n===t.payload.filterId?xe({},e,{},t.payload.values):e}))});case"deleteFilter":return xe({},e,{filters:e.filters.filter((function(e,n){return n!==t.payload.filterId}))});case"clearFilters":return xe({},e,{filters:Re.filters});case"readAll":return xe({},e,{items:t.payload});case"error":return xe({},e,{errorMessage:t.payload.message,errorStatus:t.payload.status});case"clearErrors":return xe({},e,{errorMessage:null,errorStatus:null});case"create":case De.formCreate:return xe({},e,{items:[].concat(Object(K.a)(e.items),[t.payload])});case"update":case De.formUpdate:var n=e.items.findIndex((function(e){return e.id===t.payload.id})),a=Object(K.a)(e.items);return a[n]=t.payload,xe({},e,{items:a});case"delete":case De.formDelete:return xe({},e,{items:e.items.filter((function(e){return e.id!==t.payload.id}))});default:return e}}(t,e)}))}},{key:"fetchData",value:function(){var e=Object(g.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.filters,n=this.props.keycloak,!(n.initialized&&n.authenticated)){e.next=14;break}return e.prev=4,e.next=7,Ce({filters:t});case 7:a=e.sent,this.dispatch({type:"readAll",payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateFilter",value:function(e,t){this.dispatch({type:"updateFilter",payload:{values:t,filterId:e}})}},{key:"addFilter",value:function(){this.dispatch({type:"addFilter"})}},{key:"removeFilter",value:function(e){this.dispatch({type:"deleteFilter",payload:{filterId:e}})}},{key:"clearFilters",value:function(){this.dispatch({type:"clearFilters"}),this.fetchData()}},{key:"closeNotification",value:function(){this.dispatch({type:"clearErrors"})}},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.dispatch({type:"error",payload:{message:a("conference.error.dataLoading"),status:ge.ERROR}})}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.errorMessage,a=e.errorStatus,r=e.filters,o=this.props,c=o.classes,i=o.onSelect,l=o.onAdd,s=o.t,u=o.keycloak;return d.a.createElement(d.a.Fragment,null,d.a.createElement(R,{keycloak:u},s("common.notAuthenticated")),d.a.createElement(x,{keycloak:u},d.a.createElement(P.a,{color:"primary","aria-label":"add",className:c.fab,onClick:l},d.a.createElement(D.a,null)),d.a.createElement($,{applyFilter:this.fetchData,add:this.addFilter,update:this.updateFilter,remove:this.removeFilter,clear:this.clearFilters,filters:r}),d.a.createElement(ce,{items:t,onSelect:i})),d.a.createElement(ge,{status:a,message:n,onClose:this.closeNotification}))}}]),t}(u.Component);Ie.defaultProps={onAdd:function(){},onError:function(){},onSelect:function(){}};var Ae,Ue=(Ae=Object(F.a)({fab:{float:"right"}})(Object(w.b)(void 0,{withRef:!0})(Ie)),function(e){return d.a.createElement(O.Consumer,null,(function(t){return d.a.createElement(Ae,Object.assign({},e,{keycloak:t}))}))}),ze=n(60),Te={en:n(83)};function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var We=Object.keys(Te).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",Te[t])))}),{}),He=(ze.a.t,function(e){!function(e,t){ze.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:We,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")}),Me=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}};function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e=function(){return window&&window.entando&&window.entando.keycloak&&Ke({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Je={hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler"},Ve=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).keycloak=_e(),n.onAdd=Me(Se.add),n.onError=Me(Se.error),n.onSelect=Me(Se.select),n.reactRootRef=d.a.createRef(),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.mountPoint&&t!==n){if(!Object.values(Je).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.mountPoint=document.createElement("div");var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.mountPoint),this.jss=Object(y.b)(Ke({},Object(h.a)(),{insertionPoint:this.mountPoint})),this.keycloak=Ke({},_e(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Ke({},_e(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=function(e){var t=e.type,n=e.detail;return{type:t,payload:n.payload,error:n.error,meta:n.meta}}(t);e.reactRootRef.current.dispatch(n)}}},{key:"render",value:function(){if(!("true"===this.getAttribute(Je.hidden))){var e,t,n=this.getAttribute(Je.locale);if(He(n),"true"===this.getAttribute(Je.disableDefaultEventHandler))this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(De),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}p.a.render(d.a.createElement(O.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(Ue,{ref:this.reactRootRef,onAdd:this.onAdd,onSelect:this.onSelect,onError:this.onError}))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Je)}}]),t}(Object(l.a)(HTMLElement));customElements.define("conference-table",Ve)},83:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","notAuthenticated":"User is not authenticated."},"filters":{"value":"Value","addFilter":"Add filter","clearFilters":"Clear filters","filter":"Filter","operator":"Operator","operators":{"equals":"equals","in":"in","specified":"specified","unspecified":"unspecified","contains":"contains"}},"entities":{"conference":{"noItems":"No conferences available","id":"ID","name":"entities.conference.name","date":"entities.conference.date","location":"entities.conference.location","room":"entities.conference.room","error":{"dataLoading":"Error during server connection"}}}}')},96:function(e,t,n){e.exports=n(113)}},[[96,1,2]]]);
//# sourceMappingURL=main.41da80c1.chunk.js.map