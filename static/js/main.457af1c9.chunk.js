(this["webpackJsonpassign-prototype"]=this["webpackJsonpassign-prototype"]||[]).push([[0],{118:function(e,t,n){},121:function(e,t,n){},232:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(10),l=n.n(c),r=(n(118),n(100)),i=n(5),o=n(32),d=(n(121),n(122),n(123),n(124),n(125),n(101)),u=n(3),j=n(11),b=n(102),h=n(18),O=n(50),m=n(51),f=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,[{key:"getClients",value:function(){return fetch("data/clients.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsSmall",value:function(){return fetch("data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}(),x=n(52),p=n.n(x),g=n(9),v=n.n(g),S=n(2),y=function(e,t,n){return v()(t)?e:v()(e)?"":e.toLowerCase().replace(t.toLowerCase(),'<span class="'.concat(n,'">').concat(t,"</span>"))},N=function(e){var t=e.value,n=e.highlight,s=void 0===n?"":n,a=e.highlightClassName,c=void 0===a?"highlight":a;return v()(t)?null:Object(S.jsx)("span",{dangerouslySetInnerHTML:{__html:y(t,s,c)}})},w=n(103),C=n.n(w),T=n(29),E=function(e){var t=e.search,n=e.setSearch,s=e.label;return Object(S.jsx)("div",{className:p.a.dataTableHeader,children:Object(S.jsxs)("span",{className:"p-input-icon-left",children:[Object(S.jsx)("i",{className:"pi pi-search"}),Object(S.jsx)(T.a,{type:"search",value:t,onChange:function(e){return n(e.target.value)},placeholder:s})]})})},z=function(e){var t=e.selectedClients,n=e.setSelectedClients,a=Object(s.useState)([]),c=Object(u.a)(a,2),l=c[0],r=c[1],i=new f,o=Object(s.useState)(""),d=Object(u.a)(o,2),j=d[0],O=d[1];Object(s.useEffect)((function(){i.getClients().then((function(e){return r(e)}))}),[]);var m=Object(s.useRef)(null),x=Object(S.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(S.jsx)(E,{search:j,setSearch:O,label:"User search"})}),g=function(e,t){var n=null===e||void 0===e?void 0:e[t.field||""];return Object(S.jsx)(N,{value:n,highlight:j,highlightClassName:p.a.highlight})},v=Object(s.useMemo)((function(){return l.filter((function(e){return!C()(t,{id:null===e||void 0===e?void 0:e.id})}))}),[t,l]);return Object(S.jsxs)(b.a,{scrollable:!0,scrollHeight:"50vh",ref:m,header:x,globalFilter:j,value:v,selection:t,onSelectionChange:function(e){return n(e.value)},stripedRows:!0,dataKey:"id",frozenValue:t,emptyMessage:function(e){return e?"No User Selected":"No clients found"},children:[Object(S.jsx)(h.a,{selectionMode:"multiple",headerStyle:{width:"3em"}}),Object(S.jsx)(h.a,{field:"id",header:"id",sortable:!0,body:g}),Object(S.jsx)(h.a,{field:"name",header:"Name",sortable:!0,body:g})]})},D=n(14),U=n(22),R=n.n(U),k=function(e){var t=e.userName,n=void 0===t?"User Name":t,a=e.assignments,c=Object(s.useState)(!1),l=Object(u.a)(c,2),r=l[0],i=l[1];return Object(S.jsx)(D.a,{legend:n,toggleable:!0,collapsed:r,onToggle:function(){return i(!r)},style:{display:"flex",flexFlow:"column",alignItems:"start"},children:R()(a,(function(e){var t=e.type,n=e.name;return Object(S.jsx)("p",{children:"Assigned to ".concat(t," ").concat(n)},"assignment-".concat(n))}))})},M=n(104),P=n.n(M),A=[{name:"Selected Users",children:[{name:"Client1",children:[{name:"Engagement"},{name:"Project Name 2",children:[{name:"id"},{name:"description"},{name:"slug"},{name:"products",children:[{name:"items",children:[{name:"id"},{name:"name"}]}]}]}]}]}],H={width:"100%",height:"20rem"},I={shape:"rect",shapeProps:{width:20,height:20,x:-10,y:-10}},K=function(){var e=Object(s.useRef)(null),t=Object(s.useState)({x:0,y:0}),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){var t,n=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();c({x:n.width/10,y:n.width/3})}),[]),Object(S.jsx)("div",{style:H,ref:e,children:Object(S.jsx)(P.a,{data:A,translate:a,orientation:"horizontal",nodeSvgShape:I,circleRadius:5})})},L=n(57),_=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,[{key:"getTreeTableNodes",value:function(){return fetch("data/treetablenodes.json").then((function(e){return e.json()})).then((function(e){return e.root}))}},{key:"getTreeNodes",value:function(){return fetch("data/treenodes.json").then((function(e){return e.json()})).then((function(e){return e.root}))}},{key:"getRolesTree",value:function(){return fetch("data/rolestree.json").then((function(e){return e.json()})).then((function(e){return e.root}))}}]),e}(),B=n(53),F=n(54),W=n.n(F),J=n(55),V=function(e){var t=e.isDataTree,n=e.setIsDataTree,a=e.setHasSelection,c=Object(s.useState)([]),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(s.useState)(""),d=Object(u.a)(o,2),j=d[0],b=d[1],h=Object(s.useState)(null),O=Object(u.a)(h,2),m=O[0],f=O[1],x=Object(s.useRef)(null);Object(s.useEffect)((function(){a(!1),(new _).getTreeNodes().then((function(e){return i(e)}))}),[]);console.log(">",m);var p=Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(S.jsx)(J.a,{checked:t,onChange:function(){return n(!t)}}),Object(S.jsx)(E,{search:j,setSearch:b,label:"Search"})]});return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L.a,{ref:x}),Object(S.jsx)(B.a,{header:p,showHeader:!0,className:W.a.container,value:r,selectionMode:"checkbox",selectionKeys:m,onSelectionChange:function(e){f(e.value),a(!!e.value)},onSelect:function(e){var t;null===(t=x.current)||void 0===t||t.show({severity:"success",summary:"Node Selected",detail:null===e||void 0===e?void 0:e.label,life:3e3})},onUnselect:function(e){var t;null===(t=x.current)||void 0===t||t.show({severity:"success",summary:"Node Unselected",detail:null===e||void 0===e?void 0:e.label,life:3e3})}})]})},$=n(56),q=function(e){var t=e.isDataTree,n=e.setIsDataTree,a=e.setHasSelection,c=Object(s.useState)([]),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(s.useState)(""),d=Object(u.a)(o,2),j=d[0],b=d[1],O=Object(s.useState)(null),m=Object(u.a)(O,2),f=m[0],x=m[1],p=Object(s.useRef)(null),g=new _;Object(s.useEffect)((function(){a(!1),g.getTreeNodes().then((function(e){return i(e)}))}),[]);var v=Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(S.jsx)(J.a,{checked:t,onChange:function(){return n(!t)}}),Object(S.jsx)(E,{search:j,setSearch:b,label:"Search"})]});return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L.a,{ref:p}),Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)($.a,{header:v,value:r,selectionMode:"checkbox",selectionKeys:f,onSelectionChange:function(e){x(e.value),a(!!e.value)},onSelect:function(e){var t,n;null===(t=p.current)||void 0===t||t.show({severity:"success",summary:"Node Selected",detail:null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.label,life:3e3})},onUnselect:function(e){var t,n;null===(t=p.current)||void 0===t||t.show({severity:"success",summary:"Node Unselected",detail:null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.label,life:3e3})},resizableColumns:!0,columnResizeMode:"fit",children:[Object(S.jsx)(h.a,{field:"name",header:"Name",expander:!0,sortable:!0,style:{width:"60%"}}),Object(S.jsx)(h.a,{field:"type",header:"Type",sortable:!0,style:{width:"40%"}})]})})]})},G=[{userName:"Donald Crabtree",userId:"51338-85845",assignments:[{type:"Engagement",id:"101",name:"Super 100"},{type:"Project",id:"101",name:" Some project namr"}]},{userName:"Carl McKay",userId:"00818-11481",assignments:[{type:"User",id:"101",name:"Cris Dove 42343-23421"},{type:"Engagement",id:"101",name:"Pepsi UE"}]}],Q=function(){Object(s.useState)();var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(s.useState)(!0),d=Object(u.a)(o,2),b=d[0],h=d[1],O=Object(s.useState)(!0),m=Object(u.a)(O,2),f=m[0],x=m[1],p=Object(s.useState)(!0),g=Object(u.a)(p,2),y=g[0],N=g[1];return Object(S.jsxs)(j.a,{children:[Object(S.jsx)(j.b,{style:{height:"80vh"},size:25,minSize:10,children:Object(S.jsx)(z,{selectedClients:n,setSelectedClients:function(e){return a(e)}})}),Object(S.jsxs)(j.b,{size:40,minSize:20,children:[r&&!v()(n)&&Object(S.jsx)(D.a,{legend:"New assignment",toggleable:!0,collapsed:y,onToggle:function(){return N(!y)},children:Object(S.jsx)(K,{})}),!v()(n)&&Object(S.jsx)(D.a,{legend:"Existed assignment",toggleable:!0,collapsed:f,onToggle:function(){return x(!f)},children:R()(G,(function(e){return Object(S.jsx)(k,{userName:null===e||void 0===e?void 0:e.userName,assignments:null===e||void 0===e?void 0:e.assignments},"assign-item-".concat(null===e||void 0===e?void 0:e.userName))}))})]}),Object(S.jsx)(j.b,{size:35,minSize:10,children:b?Object(S.jsx)(V,{isDataTree:b,setIsDataTree:h,setHasSelection:i}):Object(S.jsx)(q,{isDataTree:b,setIsDataTree:h,setHasSelection:i})})]})},X=function(e){var t=e.roles,n=e.selectedRolesKeys,a=e.setSelectedRolesKeys,c=Object(s.useState)(""),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(S.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(S.jsx)(E,{search:r,setSearch:i,label:"Search"})});return Object(S.jsx)(B.a,{header:o,showHeader:!0,className:W.a.container,value:t,selectionMode:"checkbox",selectionKeys:n,onSelectionChange:function(e){a(e.value),console.log(">>e",e)}})},Y=[{userName:"Donald Crabtree",userId:"51338-85845",assignments:[{type:"Engagement",id:"101",name:"Super 100"},{type:"Project",id:"101",name:" Some project namr"}]},{userName:"Carl McKay",userId:"00818-11481",assignments:[{type:"User",id:"101",name:"Cris Dove 42343-23421"},{type:"Engagement",id:"101",name:"Pepsi UE"}]}],Z=function(){Object(s.useState)();var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(s.useState)(!0),d=Object(u.a)(o,2),b=d[0],h=d[1],O=Object(s.useState)(!0),m=Object(u.a)(O,2),f=m[0],x=m[1],p=Object(s.useState)(!0),g=Object(u.a)(p,2),y=g[0],N=g[1],w=Object(s.useState)([]),C=Object(u.a)(w,2),T=C[0],E=C[1],U=Object(s.useState)(null),M=Object(u.a)(U,2),P=M[0],A=M[1],H=new _;return Object(s.useEffect)((function(){H.getRolesTree().then((function(e){return E(e)}))}),[]),Object(S.jsxs)(j.a,{children:[Object(S.jsx)(j.b,{style:{height:"80vh"},size:25,minSize:10,children:Object(S.jsx)(z,{selectedClients:n,setSelectedClients:function(e){return a(e)}})}),Object(S.jsx)(j.b,{size:20,minSize:10,children:Object(S.jsx)(X,{roles:T,selectedRolesKeys:P,setSelectedRolesKeys:A})}),Object(S.jsx)(j.b,{size:35,minSize:10,children:b?Object(S.jsx)(V,{isDataTree:b,setIsDataTree:h,setHasSelection:i}):Object(S.jsx)(q,{isDataTree:b,setIsDataTree:h,setHasSelection:i})}),Object(S.jsx)(j.b,{size:20,minSize:20,children:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[r&&!v()(n)&&Object(S.jsx)(D.a,{legend:"New assignment",toggleable:!0,collapsed:y,onToggle:function(){return N(!y)},children:Object(S.jsx)(K,{})}),!v()(n)&&Object(S.jsx)(D.a,{legend:"Existed assignment",toggleable:!0,collapsed:f,onToggle:function(){return x(!f)},children:R()(Y,(function(e){return Object(S.jsx)(k,{userName:null===e||void 0===e?void 0:e.userName,assignments:null===e||void 0===e?void 0:e.assignments},"assign-item-".concat(null===e||void 0===e?void 0:e.userName))}))})]})})]})},ee=n(105),te=(n(232),n(106)),ne=function(e){var t=e.data,n=Object(s.useState)([]),a=Object(u.a)(n,2),c=a[0];a[1];return Object(S.jsx)("div",{className:"organizationchart-demo",children:Object(S.jsx)(te.a,{style:{maxWidth:"50vw",width:"100%"},children:Object(S.jsx)("div",{className:"card",children:Object(S.jsx)(ee.a,{value:t,nodeTemplate:function(e){return"person"===e.type?Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"node-header",children:e.label}),Object(S.jsx)("div",{className:"node-content",children:Object(S.jsx)("div",{children:e.data.name})})]}):"department"===e.type?e.label:void 0},selection:c,selectionMode:"multiple"})})})})},se=function(e){var t=e.list,n=e.selectedAssignees,a=e.setSelectedAssignees,c=Object(s.useState)(""),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(S.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(S.jsx)(E,{search:r,setSearch:i,label:"Search"})});return Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)($.a,{header:o,value:t,selectionMode:"checkbox",selectionKeys:n,onSelectionChange:function(e){a(e.value)},resizableColumns:!0,columnResizeMode:"fit",children:[Object(S.jsx)(h.a,{field:"name",header:"Name",expander:!0,sortable:!0,style:{width:"60%"}}),Object(S.jsx)(h.a,{field:"type",header:"Type",sortable:!0,style:{width:"40%"}})]})})},ae=[{label:"Users",type:"person",className:"p-person",expanded:!1,data:{name:"Donald Crabtree"}}],ce=[{label:"Users",type:"person",className:"p-person",expanded:!0,data:{name:"Donald Crabtree"},children:[{label:"Role",type:"person",className:"p-person",expanded:!0,data:{name:"CEM Admin"}},{label:"Role",type:"person",className:"p-person",expanded:!0,data:{name:"ETL User"}}]}],le=[{label:"Users",type:"person",className:"p-person",expanded:!0,data:{name:"Donald Crabtree"},children:[{label:"Role",type:"person",className:"p-person",expanded:!0,data:{name:"CEM Admin  ETL User"},children:[{label:"Client Pepsi Co",className:"department-cfo",expanded:!0,children:[{label:"Engagement Pepsi US",className:"department-cfo",expanded:!0},{label:"Engagement Pepsi PL",className:"department-cfo",expanded:!0}]}]}]}],re=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),l=Object(u.a)(c,2),r=l[0],i=l[1],o=Object(s.useState)(null),d=Object(u.a)(o,2),b=d[0],h=d[1],O=new _,m=Object(s.useState)([]),f=Object(u.a)(m,2),x=f[0],p=f[1],g=Object(s.useState)(null),y=Object(u.a)(g,2),N=y[0],w=y[1];Object(s.useEffect)((function(){O.getRolesTree().then((function(e){return i(e)})),O.getTreeNodes().then((function(e){return p(e)}))}),[]);var C=v()(n)?[{expanded:!1}]:v()(b)?ae:v()(N)?ce:le;return Object(S.jsxs)(j.a,{children:[Object(S.jsxs)(j.b,{size:60,minSize:10,children:[Object(S.jsx)(D.a,{legend:v()(n)?"Select Users":Object(S.jsx)("div",{children:R()(n,(function(e){return Object(S.jsx)("div",{children:e.name||"unknown"})}))}),toggleable:!0,collapsed:!1,children:Object(S.jsx)(z,{selectedClients:n,setSelectedClients:function(e){return a(e)}})}),Object(S.jsx)(D.a,{legend:v()(b)?"Select Roles":"CEM Admin, ETL User",toggleable:!0,collapsed:!0,children:Object(S.jsx)(X,{roles:r,selectedRolesKeys:b,setSelectedRolesKeys:h})}),Object(S.jsx)(D.a,{legend:"Business Entities",toggleable:!0,collapsed:!0,children:Object(S.jsx)(se,{list:x,selectedAssignees:N,setSelectedAssignees:w})})]}),Object(S.jsx)(j.b,{size:40,minSize:10,children:Object(S.jsx)(ne,{data:C})})]})},ie=[{label:"CEM"},{label:"Users"},{label:"List"},{label:"Assignments"}],oe={icon:"pi pi-home",url:"https://www.primefaces.org/primereact"};var de=function(){var e=Object(S.jsx)(r.a,{model:ie,home:oe});return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(d.a,{left:e}),Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{path:"/",exact:!0,children:Object(S.jsxs)("div",{className:"flex flex-column",children:[Object(S.jsx)(o.b,{className:"p-1",to:"/1",children:" Demo 1 "}),Object(S.jsx)(o.b,{className:"p-1",to:"/2",children:" Demo 2 "}),Object(S.jsx)(o.b,{className:"p-1",to:"/3",children:" Demo 3 "})]})}),Object(S.jsx)(i.a,{path:"/1",exact:!0,children:Object(S.jsx)(Q,{})}),Object(S.jsx)(i.a,{path:"/2",exact:!0,children:Object(S.jsx)(Z,{})}),Object(S.jsx)(i.a,{path:"/3",exact:!0,children:Object(S.jsx)(re,{})})]})]})},ue=n(108),je=Object(ue.a)({reducer:{counter:function(){return null}}}),be=n(107);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(be.a,{store:je,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(de,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,n){e.exports={dataTableHeader:"UsersList_dataTableHeader__5Sl2p",highlight:"UsersList_highlight__2A3JP"}},54:function(e,t,n){e.exports={container:"AssigneeList_container__3LwAp"}}},[[238,1,2]]]);
//# sourceMappingURL=main.457af1c9.chunk.js.map