(window["webpackJsonpmember-details-widget"]=window["webpackJsonpmember-details-widget"]||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide member ID","notAuthenticated":"User is not authenticated."},"entities":{"member":{"id":"ID","name":"entities.member.name","surname":"entities.member.surname","age":"entities.member.age"}}}')},68:function(e,t,n){e.exports=n(87)},78:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(45),o=n(21),i={en:n(56)};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l=Object.keys(i).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(a.a)({},t,{translation:i[t]}))}),{});r.a.use(o.a).init({fallbackLng:"en",resources:l,interpolation:{escapeValue:!1}});n(78);var s=n(37),u=n(38),m=n(46),d=n(27),b=n(39),f=n(62),p=n(0),h=n.n(p),O=n(13),y=n.n(O),E=h.a.createContext(null);var g=n(31),k=n(119),v=n(61),w=n(3),j=n.n(w),P=(j.a.shape({initialized:j.a.bool,authenticated:j.a.bool}),function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null}),D=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},S=n(121),N=(j.a.shape({id:j.a.number,name:j.a.string,surname:j.a.string,age:j.a.number}),n(113)),C=n(117),z=n(116),R=n(114),M=n(115),A=function(e){var t=e.t,n=e.member;return h.a.createElement(N.a,null,h.a.createElement(R.a,null,h.a.createElement(M.a,null,h.a.createElement(z.a,null,t("common.name")),h.a.createElement(z.a,null,t("common.value")))),h.a.createElement(C.a,null,h.a.createElement(M.a,null,h.a.createElement(z.a,null,h.a.createElement("span",null,t("".concat("entities.member.","id")))),h.a.createElement(z.a,null,h.a.createElement("span",null,n.id))),h.a.createElement(M.a,null,h.a.createElement(z.a,null,h.a.createElement("span",null,t("".concat("entities.member.","name")))),h.a.createElement(z.a,null,h.a.createElement("span",null,n.name))),h.a.createElement(M.a,null,h.a.createElement(z.a,null,h.a.createElement("span",null,t("".concat("entities.member.","surname")))),h.a.createElement(z.a,null,h.a.createElement("span",null,n.surname))),h.a.createElement(M.a,null,h.a.createElement(z.a,null,h.a.createElement("span",null,t("".concat("entities.member.","age")))),h.a.createElement(z.a,null,h.a.createElement("span",null,n.age)))))};A.defaultProps={member:[]};var I=Object(o.b)()(A),F=function(e){var t=e.t,n=e.member;return h.a.createElement(S.a,null,h.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Member"})),h.a.createElement(I,{member:n}))};F.defaultProps={member:{}};var L=Object(o.b)()(F),T=n(4),U=n(122),x=n(124),K=n(118),_=n(5),H=n(123),J=n(58),V=n.n(J),B=n(59),G=n.n(B),W=n(57),q=n.n(W),Q=n(60),X=n.n(Q),Y={success:q.a,error:V.a,info:G.a},Z={success:3e3,error:null,info:5e3},$=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,i=t.onClose,c=!!o,l=r||e.INFO,s=Y[l],u=Z[l],m=h.a.createElement("span",{className:a.message},h.a.createElement(s,{className:Object(T.a)(a.icon,a.iconStatus)}),o);return h.a.createElement(U.a,{open:c,onClose:i,autoHideDuration:u},h.a.createElement(x.a,{className:Object(T.a)(a[l],n),message:m,action:[h.a.createElement(H.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},h.a.createElement(X.a,{className:a.icon}))]}))};$.SUCCESS="success",$.ERROR="error",$.defaultProps={message:null,className:"",status:$.INFO="info",onClose:function(){}};var ee=Object(_.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:K.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})($),te=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_DOMAIN;function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){return window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""},oe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loading:!0,member:{},notificationStatus:null,notificationMessage:null},n.theme=Object(v.a)(),n.closeNotification=n.closeNotification.bind(Object(g.a)(n)),n.fetchData=n.fetchData.bind(Object(g.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=this,t=this.props,n=t.id,a=t.onError,r=t.t,o=t.keycloak;o.initialized&&o.authenticated&&(n?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.options,a=re(),r="".concat(te).concat(te.endsWith("/")?"":"/","members/").concat(t),o={headers:new Headers({Authorization:"Bearer ".concat(a),"Content-Type":"application/json"})};return fetch(r,ae({method:"GET"},o,{},n)).then((function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText||e.status))})).then((function(e){return e.json()}))}({id:n}).then((function(t){return e.setState({notificationStatus:null,notificationMessage:null,member:t})})).catch((function(t){a(t),e.setState({notificationStatus:ee.ERROR,notificationMessage:r("common.couldNotFetchData")})})).finally((function(){return e.setState({loading:!1})})):this.setState({loading:!1,notificationStatus:ee.ERROR,notificationMessage:r("common.missingId")}))}},{key:"closeNotification",value:function(){this.setState({notificationStatus:null,notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.member,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,o=this.props,i=o.t,c=o.keycloak;return h.a.createElement(k.a,{theme:this.theme},h.a.createElement(D,{keycloak:c},i("common.notAuthenticated")),h.a.createElement(P,{keycloak:c},r&&i("common.loading"),!r&&h.a.createElement(L,{member:t})),h.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(h.a.Component);oe.defaultProps={onError:function(){}};var ie,ce=(ie=Object(o.b)()(oe),function(e){return h.a.createElement(E.Consumer,null,(function(t){return h.a.createElement(ie,Object.assign({},e,{keycloak:t}))}))});function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(){return window&&window.entando&&window.entando.keycloak&&se({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=ue(),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"connectedCallback",value:function(){var e=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint);var t,n,a=this.getAttribute("locale")||"en";r.a.changeLanguage(a),this.keycloak=se({},ue(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=se({},ue(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute("id"),n=h.a.createElement(ce,{id:t,onError:function(t){var n=new CustomEvent("".concat("member.details.","error"),{details:{error:t}});e.dispatchEvent(n)}});y.a.render(h.a.createElement(E.Provider,{value:this.keycloak},n),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(f.a)(HTMLElement));customElements.define("member-details",me)}},[[68,1,2]]]);
//# sourceMappingURL=main.1f4e26d5.chunk.js.map