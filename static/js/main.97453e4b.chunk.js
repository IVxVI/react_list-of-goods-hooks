(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o,c=n(7),r=n.n(c),s=n(6),i=n(8),u=n(1),a=n.n(u),l=(n(13),n(14),n(4)),b=n.n(l),h=n(0),j=a.a.memo((function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})})),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Alphabet=0]="Alphabet",t[t.Length=1]="Length",t[t.None=2]="None"}(o||(o={}));var g=function(){var t=Object(u.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(u.useState)(o.None),a=Object(s.a)(r,2),l=a[0],g=a[1],f=function(t,e){var n=Object(i.a)(t);return n.sort((function(t,n){switch(e){case o.Alphabet:return t.localeCompare(n);case o.Length:return t.length-n.length;default:return 0}})),n}(d,l);return n&&f.reverse(),Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:b()("button","is-info",{"is-light":l!==o.Alphabet}),onClick:function(){return g((function(){return o.Alphabet}))},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:b()("button","is-success",{"is-light":l!==o.Length}),onClick:function(){return g((function(){return o.Length}))},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:b()("button","is-warning",{"is-light":!1===n}),onClick:function(){return c((function(t){return!t}))},children:"Reverse"}),(n||l!==o.None)&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g((function(){return o.None})),c((function(){return!1}))},children:"Reset"})]}),Object(h.jsx)(j,{goods:f})]})};r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.97453e4b.chunk.js.map