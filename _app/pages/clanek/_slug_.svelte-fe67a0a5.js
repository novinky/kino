import{S as m,i as v,s as _,e as c,t as h,c as d,a as u,g,d as r,f as x,F as p,h as S,J as f}from"../../chunks/vendor-4a74020b.js";import{a as y}from"../../chunks/constants-4097588e.js";function D(o){let t,s,e=o[0].title+"",a;return{c(){t=c("div"),s=c("div"),a=h(e)},l(n){t=d(n,"DIV",{});var i=u(t);s=d(i,"DIV",{});var l=u(s);a=g(l,e),l.forEach(r),i.forEach(r)},m(n,i){x(n,t,i),p(t,s),p(s,a)},p(n,[i]){i&1&&e!==(e=n[0].title+"")&&S(a,e)},i:f,o:f,d(n){n&&r(t)}}}async function I({page:{params:o}}){return{props:{post:y.find(s=>o.slug==s.slug)}}}function j(o,t,s){let{post:e}=t;return o.$$set=a=>{"post"in a&&s(0,e=a.post)},[e]}class V extends m{constructor(t){super();v(this,t,j,D,_,{post:0})}}export{V as default,I as load};
