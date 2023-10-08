(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(26),n=c(6),s=(c(36),c(37),c(3)),r=c(4),l=c(0),i=c(10),j=c.n(i),o=c(9),d=c(24),b=c(27);function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];null===n?c.delete(a):Array.isArray(n)?(c.delete(a),n.forEach((function(e){c.append(a,e)}))):c.set(a,n)})),c.toString()}var h=c(1),O=["children","params"],x=function(e){var t=e.children,c=e.params,a=Object(b.a)(e,O),s=Object(n.d)(),l=Object(r.a)(s,1)[0];return Object(h.jsx)(n.b,Object(d.a)(Object(d.a)({to:{search:u(l,c)}},a),{},{children:t}))},m=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0];return Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":t.getAll("century").includes(e)}),params:t.getAll("century").includes(e)?{century:t.getAll("century").filter((function(t){return t!==e}))}:{century:[].concat(Object(o.a)(t.getAll("century")),[e])},children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(x,{"data-cy":"centuryALL",className:j()("button is-success",{"is-outlined":t.getAll("century").length>0}),params:{century:null},children:"All"})})]})})},p=function(){var e=Object(n.d)(),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:c.get("query")||"",onChange:function(e){c.set("query","".concat(e.target.value)),""===c.get("query")&&c.delete("query"),a(c)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})})},f=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0].get("sex");return Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(x,{className:j()({"is-active":null===t}),params:{sex:null},children:"All"}),Object(h.jsx)(x,{className:j()({"is-active":"m"===t}),params:{sex:"m"},children:"Male"}),Object(h.jsx)(x,{className:j()({"is-active":"f"===t}),params:{sex:"f"},children:"Female"})]})},v=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0];return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsx)(f,{}),Object(h.jsx)(p,{}),Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(x,{className:j()("button is-link is-fullwidth",{"is-outlined":t.entries()}),params:{query:null,century:null,sex:null},children:"Reset all filters"})})]})},N=(c(39),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),g=function(e){var t=e.people,c=Object(s.q)().slug,a=Object(n.d)(),l=Object(r.a)(a,1)[0],i=function(e){var c;return t.some((function(t){return t.name===e.motherName}))?Object(h.jsx)(n.b,{className:"has-text-danger",to:"/people/".concat(null===(c=t.find((function(t){return t.name===e.motherName})))||void 0===c?void 0:c.slug,"?").concat(null===l||void 0===l?void 0:l.toString()),children:e.motherName}):e.motherName?e.motherName:"-"},o=function(e){var c;return t.some((function(t){return t.name===e.fatherName}))?Object(h.jsx)(n.b,{to:"/people/".concat(null===(c=t.find((function(t){return t.name===e.fatherName})))||void 0===c?void 0:c.slug,"?").concat(null===l||void 0===l?void 0:l.toString()),children:e.fatherName}):e.fatherName?e.fatherName:"-"};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(h.jsx)("a",{href:"#/people?sort=name",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(h.jsx)("a",{href:"#/people?sort=sex",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(h.jsx)("a",{href:"#/people?sort=born&order=desc",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(h.jsx)("a",{href:"#/people?sort=died",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(n.b,{to:"/people/".concat(e.slug,"?").concat(null===l||void 0===l?void 0:l.toString()),className:j()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:i(e)}),Object(h.jsx)("td",{children:o(e)})]},e.slug)}))})]})},y=c(5),w=c(8),S="https://mate-academy.github.io/react_people-table/api/people.json";function A(e){return new Promise((function(t){return setTimeout(t,e)}))}function k(){return(k=Object(w.a)(Object(y.a)().mark((function e(){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(500).then((function(){return fetch(S)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(l.useState)(!1),b=Object(r.a)(d,2),u=b[0],O=b[1],x=Object(l.useState)(j),m=Object(r.a)(x,2),p=m[0],f=m[1],y=Object(n.d)(),w=Object(r.a)(y,1)[0];return Object(l.useEffect)((function(){a(!0),function(){return k.apply(this,arguments)}().then(o).catch((function(){return O(!0)})).finally((function(){return a(!1)}))}),[]),Object(l.useMemo)((function(){f(j.filter((function(e){var t,c,a,n,s;return e.name.toLowerCase().includes((null===(t=w.get("query"))||void 0===t?void 0:t.toLowerCase())||"")||(null===(c=e.motherName)||void 0===c?void 0:c.toLowerCase().includes((null===(a=w.get("query"))||void 0===a?void 0:a.toLowerCase())||""))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLowerCase().includes((null===(s=w.get("query"))||void 0===s?void 0:s.toLowerCase())||""))})).filter((function(e){return w.get("sex")?e.sex===w.get("sex"):e.sex})).filter((function(e){return w.getAll("century").length>0?w.getAll("century").includes(Math.floor(e.born/100).toString()):e})))}),[w,j]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[j.length>0&&!c&&Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(v,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[c&&Object(h.jsx)(N,{}),Object(h.jsxs)(h.Fragment,{children:[u&&!c&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),0===j.length&&!c&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),0===p.length&&Object(h.jsx)("p",{children:"There are no people matching the current search criteria"})]}),j.length>0&&Object(h.jsx)(g,{people:p})]})})]})})]})},q=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(n.c,{className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},to:"/",children:"Home"}),Object(h.jsx)(n.c,{"aria-current":"page",className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},to:"/people",children:"People"})]})})})},C=(c(40),function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),F=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(q,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)(C,{})}),Object(h.jsx)(s.b,{path:"/home",element:Object(h.jsx)(s.a,{to:"/",replace:!0})}),Object(h.jsx)(s.b,{path:"/people/",element:Object(h.jsx)(L,{})}),Object(h.jsx)(s.b,{path:"/people/:slug",element:Object(h.jsx)(L,{})}),Object(h.jsx)(s.b,{path:"/*",element:Object(h.jsx)(F,{})})]})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(h.jsx)(n.a,{children:Object(h.jsx)(P,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.340dd384.chunk.js.map