import{S as j,i as E,s as x,l as v,f as o,E as d,d as i,e as h,t as g,c as f,a as u,g as k,b as _,D as p,h as L,L as N}from"../../chunks/vendor-bd8d0ae1.js";import{b}from"../../chunks/paths-28a87002.js";function y(n,l,r){const t=n.slice();return t[1]=l[r],t}function C(n){let l,r=n[0],t=[];for(let e=0;e<r.length;e+=1)t[e]=w(y(n,r,e));return{c(){l=h("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=f(e,"UL",{class:!0});var a=u(l);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(i),this.h()},h(){_(l,"class","text-white")},m(e,a){o(e,l,a);for(let s=0;s<t.length;s+=1)t[s].m(l,null)},p(e,a){if(a&1){r=e[0];let s;for(s=0;s<r.length;s+=1){const c=y(e,r,s);t[s]?t[s].p(c,a):(t[s]=w(c),t[s].c(),t[s].m(l,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},d(e){e&&i(l),N(t,e)}}}function D(n){let l,r;return{c(){l=h("div"),r=g("No articles are here... yet."),this.h()},l(t){l=f(t,"DIV",{class:!0});var e=u(l);r=k(e,"No articles are here... yet."),e.forEach(i),this.h()},h(){_(l,"class","article-preview")},m(t,e){o(t,l,e),p(l,r)},p:d,d(t){t&&i(l)}}}function w(n){let l,r,t=n[1].title.rendered+"",e,a;return{c(){l=h("li"),r=h("a"),e=g(t),this.h()},l(s){l=f(s,"LI",{});var c=u(l);r=f(c,"A",{href:!0});var m=u(r);e=k(m,t),m.forEach(i),c.forEach(i),this.h()},h(){_(r,"href",a=""+(b+"/clanky/"+n[1].slug))},m(s,c){o(s,l,c),p(l,r),p(r,e)},p(s,c){c&1&&t!==(t=s[1].title.rendered+"")&&L(e,t),c&1&&a!==(a=""+(b+"/clanky/"+s[1].slug))&&_(r,"href",a)},d(s){s&&i(l)}}}function I(n){let l;function r(a,s){return a[0].length===0?D:C}let t=r(n),e=t(n);return{c(){e.c(),l=v()},l(a){e.l(a),l=v()},m(a,s){e.m(a,s),o(a,l,s)},p(a,[s]){t===(t=r(a))&&e?e.p(a,s):(e.d(1),e=t(a),e&&(e.c(),e.m(l.parentNode,l)))},i:d,o:d,d(a){e.d(a),a&&i(l)}}}async function A({page:n,fetch:l,session:r,stuff:t}){const a=await(await l("http://jdtc.xf.cz/wp-json/wp/v2/posts")).json();return console.log(a),{props:{articles:a}}}const U=!1;function S(n,l,r){let{articles:t}=l;return n.$$set=e=>{"articles"in e&&r(0,t=e.articles)},[t]}class V extends j{constructor(l){super();E(this,l,S,I,x,{articles:0})}}export{V as default,A as load,U as router};
