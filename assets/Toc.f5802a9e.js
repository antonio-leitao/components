import{S as A,i as G,s as L,O as T,P as Z,c as C,m as I,Q as P,R as Q,j as p,k as g,n as O,T as S,z as x,J as ee,a as w,b as $,f as k,B as le,C as te,D as ne,l as v,e as y,t as q,u as D,I as E,g as M,v as ue,h as oe,w as B,x as F,o as z,E as re,M as ce,G as j,L as fe}from"./index.0c0366de.js";import{q as se,f as ae}from"./index.030f4f20.js";function _e(a){let e,n,l;const r=a[1].default,t=x(r,a,a[2],null);return{c(){e=ee("polyline"),n=w(),t&&t.c(),$(e,"points","6 9 12 15 18 9")},m(o,s){k(o,e,s),k(o,n,s),t&&t.m(o,s),l=!0},p(o,s){t&&t.p&&(!l||s&4)&&le(t,r,o,o[2],l?ne(r,o[2],s,null):te(o[2]),null)},i(o){l||(p(t,o),l=!0)},o(o){g(t,o),l=!1},d(o){o&&v(e),o&&v(n),t&&t.d(o)}}}function me(a){let e,n;const l=[{name:"chevron-down"},a[0]];let r={$$slots:{default:[_e]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)r=T(r,l[t]);return e=new Z({props:r}),{c(){C(e.$$.fragment)},m(t,o){I(e,t,o),n=!0},p(t,[o]){const s=o&1?P(l,[l[0],Q(t[0])]):{};o&4&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function de(a,e,n){let{$$slots:l={},$$scope:r}=e;return a.$$set=t=>{n(0,e=T(T({},e),S(t))),"$$scope"in t&&n(2,r=t.$$scope)},e=S(e),[e,l,r]}class he extends A{constructor(e){super(),G(this,e,de,me,L,{})}}function pe(a){let e,n,l;const r=a[1].default,t=x(r,a,a[2],null);return{c(){e=ee("polyline"),n=w(),t&&t.c(),$(e,"points","18 15 12 9 6 15")},m(o,s){k(o,e,s),k(o,n,s),t&&t.m(o,s),l=!0},p(o,s){t&&t.p&&(!l||s&4)&&le(t,r,o,o[2],l?ne(r,o[2],s,null):te(o[2]),null)},i(o){l||(p(t,o),l=!0)},o(o){g(t,o),l=!1},d(o){o&&v(e),o&&v(n),t&&t.d(o)}}}function ge(a){let e,n;const l=[{name:"chevron-up"},a[0]];let r={$$slots:{default:[pe]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)r=T(r,l[t]);return e=new Z({props:r}),{c(){C(e.$$.fragment)},m(t,o){I(e,t,o),n=!0},p(t,[o]){const s=o&1?P(l,[l[0],Q(t[0])]):{};o&4&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ke(a,e,n){let{$$slots:l={},$$scope:r}=e;return a.$$set=t=>{n(0,e=T(T({},e),S(t))),"$$scope"in t&&n(2,r=t.$$scope)},e=S(e),[e,l,r]}class ve extends A{constructor(e){super(),G(this,e,ke,ge,L,{})}}function J(a,e,n){const l=a.slice();return l[4]=e[n],l[6]=n,l}function be(a){let e,n;return e=new he({}),{c(){C(e.$$.fragment)},m(l,r){I(e,l,r),n=!0},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function $e(a){let e,n;return e=new ve({}),{c(){C(e.$$.fragment)},m(l,r){I(e,l,r),n=!0},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function R(a){let e,n,l=a[2],r=[];for(let o=0;o<l.length;o+=1)r[o]=H(J(a,l,o));const t=o=>g(r[o],1,1,()=>{r[o]=null});return{c(){e=y("ul");for(let o=0;o<r.length;o+=1)r[o].c();$(e,"class","svelte-4u59g9")},m(o,s){k(o,e,s);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,s){if(s&4){l=o[2];let c;for(c=0;c<l.length;c+=1){const d=J(o,l,c);r[c]?(r[c].p(d,s),p(r[c],1)):(r[c]=H(d),r[c].c(),p(r[c],1),r[c].m(e,null))}for(B(),c=l.length;c<r.length;c+=1)t(c);F()}},i(o){if(!n){for(let s=0;s<l.length;s+=1)p(r[s]);n=!0}},o(o){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)g(r[s]);n=!1},d(o){o&&v(e),z(r,o)}}}function Me(a){let e,n=a[4].name+"",l,r;return{c(){e=y("p"),l=q(n),$(e,"class","svelte-4u59g9")},m(t,o){k(t,e,o),M(e,l)},p(t,o){a=t,o&4&&n!==(n=a[4].name+"")&&oe(l,n)},i(t){r||re(()=>{r=ce(e,ae,{y:-20,duration:300,delay:a[6]*50,easing:se}),r.start()})},o:j,d(t){t&&v(e)}}}function ye(a){let e,n,l,r;const t=[a[4]];let o={};for(let s=0;s<t.length;s+=1)o=T(o,t[s]);return n=new ie({props:o}),{c(){e=y("div"),C(n.$$.fragment),$(e,"class","svelte-4u59g9")},m(s,c){k(s,e,c),I(n,e,null),r=!0},p(s,c){a=s;const d=c&4?P(t,[Q(a[4])]):{};n.$set(d)},i(s){r||(p(n.$$.fragment,s),l||re(()=>{l=ce(e,ae,{y:-20,duration:300,delay:a[6]*50,easing:se}),l.start()}),r=!0)},o(s){g(n.$$.fragment,s),r=!1},d(s){s&&v(e),O(n)}}}function H(a){let e,n,l,r,t;const o=[ye,Me],s=[];function c(d,u){return d[4].children?0:1}return n=c(a),l=s[n]=o[n](a),{c(){e=y("li"),l.c(),r=w(),$(e,"class","svelte-4u59g9")},m(d,u){k(d,e,u),s[n].m(e,null),M(e,r),t=!0},p(d,u){let f=n;n=c(d),n===f?s[n].p(d,u):(B(),g(s[f],1,1,()=>{s[f]=null}),F(),l=s[n],l?l.p(d,u):(l=s[n]=o[n](d),l.c()),p(l,1),l.m(e,r))},i(d){t||(p(l),t=!0)},o(d){g(l),t=!1},d(d){d&&v(e),s[n].d()}}}function we(a){let e,n,l,r,t,o,s,c,d,u;const f=[$e,be],h=[];function _(i,b){return i[0]?0:1}r=_(a),t=h[r]=f[r](a);let m=a[0]&&R(a);return{c(){e=y("span"),n=q(a[1]),l=w(),t.c(),o=w(),m&&m.c(),s=D(),$(e,"class","svelte-4u59g9"),E(e,"expanded",a[0])},m(i,b){k(i,e,b),M(e,n),M(e,l),h[r].m(e,null),k(i,o,b),m&&m.m(i,b),k(i,s,b),c=!0,d||(u=ue(e,"click",a[3]),d=!0)},p(i,[b]){(!c||b&2)&&oe(n,i[1]);let N=r;r=_(i),r!==N&&(B(),g(h[N],1,1,()=>{h[N]=null}),F(),t=h[r],t||(t=h[r]=f[r](i),t.c()),p(t,1),t.m(e,null)),(!c||b&1)&&E(e,"expanded",i[0]),i[0]?m?(m.p(i,b),b&1&&p(m,1)):(m=R(i),m.c(),p(m,1),m.m(s.parentNode,s)):m&&(B(),g(m,1,1,()=>{m=null}),F())},i(i){c||(p(t),p(m),c=!0)},o(i){g(t),g(m),c=!1},d(i){i&&v(e),h[r].d(),i&&v(o),m&&m.d(i),i&&v(s),d=!1,u()}}}function Te(a,e,n){let{expanded:l=!1}=e,{name:r}=e,{children:t}=e;function o(){n(0,l=!l)}return a.$$set=s=>{"expanded"in s&&n(0,l=s.expanded),"name"in s&&n(1,r=s.name),"children"in s&&n(2,t=s.children)},[l,r,t,o]}class ie extends A{constructor(e){super(),G(this,e,Te,we,L,{expanded:0,name:1,children:2})}}function K(a,e,n){const l=a.slice();return l[2]=e[n],l}function U(a,e,n){const l=a.slice();return l[5]=e[n],l}function V(a,e,n){const l=a.slice();return l[8]=e[n],l}function W(a){let e,n,l,r,t=a[8].name+"",o,s,c;return n=new fe({props:{name:a[8].icon,size:"20"}}),{c(){e=y("li"),C(n.$$.fragment),l=w(),r=y("p"),o=q(t),s=w(),$(r,"class","svelte-1a7ckhr"),$(e,"class","featured-item svelte-1a7ckhr")},m(d,u){k(d,e,u),I(n,e,null),M(e,l),M(e,r),M(r,o),M(e,s),c=!0},p:j,i(d){c||(p(n.$$.fragment,d),c=!0)},o(d){g(n.$$.fragment,d),c=!1},d(d){d&&v(e),O(n)}}}function Be(a){let e,n=a[5].name+"",l;return{c(){e=y("p"),l=q(n),$(e,"class","svelte-1a7ckhr")},m(r,t){k(r,e,t),M(e,l)},p:j,i:j,o:j,d(r){r&&v(e)}}}function Fe(a){let e,n;return e=new ie({props:{name:a[5].name,children:a[5].children,expanded:!1}}),{c(){C(e.$$.fragment)},m(l,r){I(e,l,r),n=!0},p:j,i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function X(a){let e,n,l,r;const t=[Fe,Be],o=[];function s(c,d){return Object.hasOwn(c[5],"children")?0:1}return e=s(a),n=o[e]=t[e](a),{c(){n.c(),l=D()},m(c,d){o[e].m(c,d),k(c,l,d),r=!0},p(c,d){n.p(c,d)},i(c){r||(p(n),r=!0)},o(c){g(n),r=!1},d(c){o[e].d(c),c&&v(l)}}}function Y(a){let e,n=a[2].name+"",l,r,t,o,s=a[2].children,c=[];for(let u=0;u<s.length;u+=1)c[u]=X(U(a,s,u));const d=u=>g(c[u],1,1,()=>{c[u]=null});return{c(){e=y("div"),l=q(n),r=w();for(let u=0;u<c.length;u+=1)c[u].c();t=D(),$(e,"class","chapter svelte-1a7ckhr")},m(u,f){k(u,e,f),M(e,l),k(u,r,f);for(let h=0;h<c.length;h+=1)c[h].m(u,f);k(u,t,f),o=!0},p(u,f){if(f&1){s=u[2].children;let h;for(h=0;h<s.length;h+=1){const _=U(u,s,h);c[h]?(c[h].p(_,f),p(c[h],1)):(c[h]=X(_),c[h].c(),p(c[h],1),c[h].m(t.parentNode,t))}for(B(),h=s.length;h<c.length;h+=1)d(h);F()}},i(u){if(!o){for(let f=0;f<s.length;f+=1)p(c[f]);o=!0}},o(u){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)g(c[f]);o=!1},d(u){u&&v(e),u&&v(r),z(c,u),u&&v(t)}}}function Ce(a){let e,n,l,r,t,o,s=a[1].featured,c=[];for(let _=0;_<s.length;_+=1)c[_]=W(V(a,s,_));const d=_=>g(c[_],1,1,()=>{c[_]=null});let u=a[0],f=[];for(let _=0;_<u.length;_+=1)f[_]=Y(K(a,u,_));const h=_=>g(f[_],1,1,()=>{f[_]=null});return{c(){e=y("div"),n=y("nav"),l=y("ul");for(let _=0;_<c.length;_+=1)c[_].c();r=w(),t=y("nav");for(let _=0;_<f.length;_+=1)f[_].c();$(l,"class","svelte-1a7ckhr"),$(n,"class","featured"),$(t,"class","main"),$(e,"class","tocspace svelte-1a7ckhr")},m(_,m){k(_,e,m),M(e,n),M(n,l);for(let i=0;i<c.length;i+=1)c[i].m(l,null);M(e,r),M(e,t);for(let i=0;i<f.length;i+=1)f[i].m(t,null);o=!0},p(_,[m]){if(m&2){s=_[1].featured;let i;for(i=0;i<s.length;i+=1){const b=V(_,s,i);c[i]?(c[i].p(b,m),p(c[i],1)):(c[i]=W(b),c[i].c(),p(c[i],1),c[i].m(l,null))}for(B(),i=s.length;i<c.length;i+=1)d(i);F()}if(m&1){u=_[0];let i;for(i=0;i<u.length;i+=1){const b=K(_,u,i);f[i]?(f[i].p(b,m),p(f[i],1)):(f[i]=Y(b),f[i].c(),p(f[i],1),f[i].m(t,null))}for(B(),i=u.length;i<f.length;i+=1)h(i);F()}},i(_){if(!o){for(let m=0;m<s.length;m+=1)p(c[m]);for(let m=0;m<u.length;m+=1)p(f[m]);o=!0}},o(_){c=c.filter(Boolean);for(let m=0;m<c.length;m+=1)g(c[m]);f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)g(f[m]);o=!1},d(_){_&&v(e),z(c,_),z(f,_)}}}function Ie(a){const e=[{name:"API",children:[{name:"Folder1",children:[{name:"Module1.1"},{name:"Module1.2"},{name:"Module1.3"},{name:"Folder1.4",children:[{name:"Module1.4.1"},{name:"Module1.4.2"},{name:"Module1.4.3"}]}]},{name:"Folder2",children:[{name:"Module2.1"},{name:"Module2.2"},{name:"Module2.3"},{name:"this module has a hugely long name problematic"}]}]},{name:"Testing",children:[{name:"Module1.1"},{name:"Module1.2"},{name:"Folder1",children:[{name:"Module1.1"},{name:"Module1.2"},{name:"Module1.3"}]}]}];return[e,{featured:[{name:"Getting Started",icon:"play"},{name:"Tutorials",icon:"info"},{name:"FAQ",icon:"list"}],content:e}]}class qe extends A{constructor(e){super(),G(this,e,Ie,Ce,L,{})}}export{qe as default};