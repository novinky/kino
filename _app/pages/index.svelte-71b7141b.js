import{S as v,i as b,s as k,e as h,t as x,c as f,a as u,g as S,d as c,b as r,f as _,F as j,h as y,J as d,K as E}from"../chunks/vendor-4a74020b.js";import{a as q}from"../chunks/constants-4097588e.js";import{b as p}from"../chunks/paths-28a87002.js";function m(o,a,l){const t=o.slice();return t[1]=a[l],t}function g(o){let a,l=o[1].title+"",t,s;return{c(){a=h("a"),t=x(l),this.h()},l(n){a=f(n,"A",{class:!0,href:!0});var e=u(a);t=S(e,l),e.forEach(c),this.h()},h(){r(a,"class","block bg-red-900"),r(a,"href",s=""+(p+"/clanek/"+o[1].slug))},m(n,e){_(n,a,e),j(a,t)},p(n,e){e&1&&l!==(l=n[1].title+"")&&y(t,l),e&1&&s!==(s=""+(p+"/clanek/"+n[1].slug))&&r(a,"href",s)},d(n){n&&c(a)}}}function A(o){let a,l=o[0],t=[];for(let s=0;s<l.length;s+=1)t[s]=g(m(o,l,s));return{c(){a=h("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){a=f(s,"DIV",{class:!0});var n=u(a);for(let e=0;e<t.length;e+=1)t[e].l(n);n.forEach(c),this.h()},h(){r(a,"class","space-y-2")},m(s,n){_(s,a,n);for(let e=0;e<t.length;e+=1)t[e].m(a,null)},p(s,[n]){if(n&1){l=s[0];let e;for(e=0;e<l.length;e+=1){const i=m(s,l,e);t[e]?t[e].p(i,n):(t[e]=g(i),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=l.length}},i:d,o:d,d(s){s&&c(a),E(t,s)}}}async function J(o){return{props:{posts:q}}}function C(o,a,l){let{posts:t}=a;return o.$$set=s=>{"posts"in s&&l(0,t=s.posts)},[t]}class K extends v{constructor(a){super();b(this,a,C,A,k,{posts:0})}}export{K as default,J as load};
