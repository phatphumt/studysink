var Yi=Object.defineProperty;var Xi=(t,e,n)=>e in t?Yi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vt=(t,e,n)=>(Xi(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function L(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function Tr(t){return t()}function Bn(){return Object.create(null)}function ge(t){t.forEach(Tr)}function Dt(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let pt;function Fn(t,e){return t===e?!0:(pt||(pt=document.createElement("a")),pt.href=e,t===pt.href)}function Qi(t){return Object.keys(t).length===0}function _n(t,...e){if(t==null){for(const r of e)r(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function we(t){let e;return _n(t,n=>e=n)(),e}function F(t,e,n){t.$$.on_destroy.push(_n(e,n))}function Qe(t,e,n,r){if(t){const i=kr(t,e,n,r);return t[0](i)}}function kr(t,e,n,r){return t[1]&&r?V(n.ctx.slice(),t[1](r(e))):n.ctx}function Ze(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let c=0;c<o;c+=1)s[c]=e.dirty[c]|i[c];return s}return e.dirty|i}return e.dirty}function et(t,e,n,r,i,s){if(i){const o=kr(e,n,r,s);t.p(o,i)}}function tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Et(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Zi(t){return t&&Dt(t.destroy)?t.destroy:L}const es=["",!0,1,"true","contenteditable"];function E(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function re(t){return document.createTextNode(t)}function x(){return re(" ")}function Lt(){return re("")}function Ee(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ts=["width","height"];function Ue(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&ts.indexOf(r)===-1?t[r]=e[r]:A(t,r,e[r])}function ns(t){return Array.from(t.childNodes)}function tn(t,e){e=""+e,t.data!==e&&(t.data=e)}function rs(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function is(t,e,n){~es.indexOf(n)?rs(t,e):tn(t,e)}function ss(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function xn(t,e){return new t(e)}let Ke;function We(t){Ke=t}function nt(){if(!Ke)throw new Error("Function called outside component initialization");return Ke}function Rr(t){nt().$$.on_mount.push(t)}function os(t){nt().$$.on_destroy.push(t)}function Ar(){const t=nt();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=ss(e,n,{cancelable:r});return i.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function ze(t,e){return nt().$$.context.set(t,e),e}function me(t){return nt().$$.context.get(t)}const Oe=[],Hn=[];let Ne=[];const Vn=[],Cr=Promise.resolve();let nn=!1;function Pr(){nn||(nn=!0,Cr.then(Or))}function as(){return Pr(),Cr}function rn(t){Ne.push(t)}const jt=new Set;let Ce=0;function Or(){if(Ce!==0)return;const t=Ke;do{try{for(;Ce<Oe.length;){const e=Oe[Ce];Ce++,We(e),cs(e.$$)}}catch(e){throw Oe.length=0,Ce=0,e}for(We(null),Oe.length=0,Ce=0;Hn.length;)Hn.pop()();for(let e=0;e<Ne.length;e+=1){const n=Ne[e];jt.has(n)||(jt.add(n),n())}Ne.length=0}while(Oe.length);for(;Vn.length;)Vn.pop()();nn=!1,jt.clear(),We(t)}function cs(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rn)}}function ls(t){const e=[],n=[];Ne.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Ne=e}const _t=new Set;let be;function rt(){be={r:0,c:[],p:be}}function it(){be.r||ge(be.c),be=be.p}function b(t,e){t&&t.i&&(_t.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(_t.has(t))return;_t.add(t),be.c.push(()=>{_t.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function sn(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],c=e[s];if(c){for(const a in o)a in c||(r[a]=1);for(const a in c)i[a]||(n[a]=c[a],i[a]=1);t[s]=c}else for(const a in o)i[a]=1}for(const o in r)o in n||(n[o]=void 0);return n}function mt(t){return typeof t=="object"&&t!==null?t:{}}function B(t){t&&t.c()}function M(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),rn(()=>{const s=t.$$.on_mount.map(Tr).filter(Dt);t.$$.on_destroy?t.$$.on_destroy.push(...s):ge(s),t.$$.on_mount=[]}),i.forEach(rn)}function U(t,e){const n=t.$$;n.fragment!==null&&(ls(n.after_update),ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function us(t,e){t.$$.dirty[0]===-1&&(Oe.push(t),Pr(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,r,i,s,o=null,c=[-1]){const a=Ke;We(t);const l=t.$$={fragment:null,ctx:[],props:s,update:L,not_equal:i,bound:Bn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Bn(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(u,h,...m)=>{const f=m.length?m[0]:h;return l.ctx&&i(l.ctx[u],l.ctx[u]=f)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](f),d&&us(t,u)),h}):[],l.update(),d=!0,ge(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=ns(e.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),M(t,e.target,e.anchor),Or()}We(a)}class Z{constructor(){Vt(this,"$$");Vt(this,"$$set")}$destroy(){U(this,1),this.$destroy=L}$on(e,n){if(!Dt(n))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Qi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ds="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ds);const jn=t=>typeof t>"u",Nr=t=>typeof t=="function",Dr=t=>typeof t=="number";function Lr(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Mr(){let t=0;return()=>t++}function hs(){return Math.random().toString(36).substring(2)}const oe=typeof window>"u";function vn(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const Ur=(t,e)=>t?{}:{style:e},on=t=>({"aria-hidden":"true",...Ur(t,"display:none;")}),Pe=[];function fs(t,e){return{subscribe:z(t,e).subscribe}}function z(t,e=L){let n;const r=new Set;function i(c){if(G(t,c)&&(t=c,n)){const a=!Pe.length;for(const l of r)l[1](),Pe.push(l,t);if(a){for(let l=0;l<Pe.length;l+=2)Pe[l][0](Pe[l+1]);Pe.length=0}}}function s(c){i(c(t))}function o(c,a=L){const l=[c,a];return r.add(l),r.size===1&&(n=e(i,s)||L),c(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function ps(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return fs(n,(o,c)=>{let a=!1;const l=[];let d=0,u=L;const h=()=>{if(d)return;u();const f=e(r?l[0]:l,o,c);s?o(f):u=Dt(f)?f:L},m=i.map((f,v)=>_n(f,_=>{l[v]=_,d&=~(1<<v),a&&h()},()=>{d|=1<<v}));return a=!0,h(),function(){ge(m),u(),a=!1}})}const st=t=>`@@svnav-ctx__${t}`,an=st("LOCATION"),$e=st("ROUTER"),$r=st("ROUTE"),ms=st("ROUTE_PARAMS"),gs=st("FOCUS_ELEM"),Br=/^:(.+)/,je=(t,e,n)=>t.substr(e,n),cn=(t,e)=>je(t,0,e.length)===e,_s=t=>t==="",vs=t=>Br.test(t),Fr=t=>t[0]==="*",ys=t=>t.replace(/\*.*$/,""),xr=t=>t.replace(/(^\/+|\/+$)/g,"");function Y(t,e=!1){const n=xr(t).split("/");return e?n.filter(Boolean):n}const Wt=(t,e)=>t+(e?`?${e}`:""),yn=t=>`/${xr(t)}`;function ot(...t){const e=r=>Y(r,!0).join("/"),n=t.map(e).join("/");return yn(n)}const bn=1,Mt=2,Te=3,bs=4,Hr=5,Is=6,Vr=7,ws=8,Es=9,jr=10,Wr=11,Ss={[bn]:"Link",[Mt]:"Route",[Te]:"Router",[bs]:"useFocus",[Hr]:"useLocation",[Is]:"useMatch",[Vr]:"useNavigate",[ws]:"useParams",[Es]:"useResolvable",[jr]:"useResolve",[Wr]:"navigate"},In=t=>Ss[t];function Ts(t,e){let n;return t===Mt?n=e.path?`path="${e.path}"`:"default":t===bn?n=`to="${e.to}"`:t===Te&&(n=`basepath="${e.basepath||""}"`),`<${In(t)} ${n||""} />`}function ks(t,e,n,r){const i=n&&Ts(r||t,n),s=i?`

Occurred in: ${i}`:"",o=In(t),c=Nr(e)?e(o):e;return`<${o}> ${c}${s}`}const zr=t=>(...e)=>t(ks(...e)),Gr=zr(t=>{throw new Error(t)}),St=zr(console.warn),Wn=4,Rs=3,As=2,Cs=1,Ps=1;function Os(t,e){const n=t.default?0:Y(t.fullPath).reduce((r,i)=>{let s=r;return s+=Wn,_s(i)?s+=Ps:vs(i)?s+=As:Fr(i)?s-=Wn+Cs:s+=Rs,s},0);return{route:t,score:n,index:e}}function Ns(t){return t.map(Os).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Kr(t,e){let n,r;const[i]=e.split("?"),s=Y(i),o=s[0]==="",c=Ns(t);for(let a=0,l=c.length;a<l;a++){const{route:d}=c[a];let u=!1;const h={},m=R=>({...d,params:h,uri:R});if(d.default){r=m(e);continue}const f=Y(d.fullPath),v=Math.max(s.length,f.length);let _=0;for(;_<v;_++){const R=f[_],y=s[_];if(!jn(R)&&Fr(R)){const O=R==="*"?"*":R.slice(1);h[O]=s.slice(_).map(decodeURIComponent).join("/");break}if(jn(y)){u=!0;break}const N=Br.exec(R);if(N&&!o){const O=decodeURIComponent(y);h[N[1]]=O}else if(R!==y){u=!0;break}}if(!u){n=m(ot(...s.slice(0,_)));break}}return n||r||null}function qr(t,e){return Kr([t],e)}function Ds(t,e){if(cn(t,"/"))return t;const[n,r]=t.split("?"),[i]=e.split("?"),s=Y(n),o=Y(i);if(s[0]==="")return Wt(i,r);if(!cn(s[0],".")){const l=o.concat(s).join("/");return Wt((i==="/"?"":"/")+l,r)}const c=o.concat(s),a=[];return c.forEach(l=>{l===".."?a.pop():l!=="."&&a.push(l)}),Wt(`/${a.join("/")}`,r)}function zn(t,e){const{pathname:n,hash:r="",search:i="",state:s}=t,o=Y(e,!0),c=Y(n,!0);for(;o.length;)o[0]!==c[0]&&Gr(Te,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),c.shift();return{pathname:ot(...c),hash:r,search:i,state:s}}const Gn=t=>t.length===1?"":t,wn=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),r=e!==-1,i=n!==-1,s=i?Gn(je(t,n)):"",o=i?je(t,0,n):t,c=r?Gn(je(o,e)):"";return{pathname:(r?je(o,0,e):o)||"/",search:c,hash:s}},Ls=t=>{const{pathname:e,search:n,hash:r}=t;return e+n+r};function Ms(t,e,n){return ot(n,Ds(t,e))}function Us(t,e){const n=yn(ys(t)),r=Y(n,!0),i=Y(e,!0).slice(0,r.length),s=qr({fullPath:n},ot(...i));return s&&s.uri}const zt="POP",$s="PUSH",Bs="REPLACE";function Gt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Fs(t){let e=[],n=Gt(t),r=zt;const i=(s=e)=>s.forEach(o=>o({location:n,action:r}));return{get location(){return n},listen(s){e.push(s);const o=()=>{n=Gt(t),r=zt,i([s])};i([s]);const c=vn(t,"popstate",o);return()=>{c(),e=e.filter(a=>a!==s)}},navigate(s,o){const{state:c={},replace:a=!1}=o||{};if(r=a?Bs:$s,Dr(s))o&&St(Wr,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=zt,t.history.go(s);else{const l={...c,_key:hs()};try{t.history[a?"replaceState":"pushState"](l,"",s)}catch{t.location[a?"replace":"assign"](s)}}n=Gt(t),i()}}}function Kt(t,e){return{...wn(e),state:t}}function xs(t="/"){let e=0,n=[Kt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(r,i,s){e++,n=n.slice(0,e),n.push(Kt(r,s))},replaceState(r,i,s){n[e]=Kt(r,s)},go(r){const i=e+r;i<0||i>n.length-1||(e=i)}}}}const Hs=!!(!oe&&window.document&&window.document.createElement),Vs=!oe&&window.location.origin==="null",Jr=Fs(Hs&&!Vs?window:xs()),{navigate:En}=Jr;let te=null,Yr=!0;function js(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const i=n[r],s=Number(i.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}function Ws(t){(!te||t.level>te.level||t.level===te.level&&js(t.routerId,te.routerId))&&(te=t)}function zs(){te=null}function Gs(){Yr=!1}function Kn(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=vn(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Ks(t,e){return Number(t.dataset.svnavRouteEnd)===e}function qs(t){return/^H[1-6]$/i.test(t.tagName)}function qn(t,e=document){return e.querySelector(t)}function Js(t){let n=qn(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Ks(n,t);){if(qs(n))return n;const r=qn("h1,h2,h3,h4,h5,h6",n);if(r)return r;n=n.nextElementSibling}return null}function Ys(t){Promise.resolve(we(t.focusElement)).then(e=>{const n=e||Js(t.id);n||St(Te,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Mt),!Kn(n)&&Kn(document.documentElement)})}const Xs=(t,e,n)=>(r,i)=>as().then(()=>{if(!te||Yr){Gs();return}if(r&&Ys(te.route),t.announcements&&i){const{path:s,fullPath:o,meta:c,params:a,uri:l}=te.route,d=t.createAnnouncement({path:s,fullPath:o,meta:c,params:a,uri:l},we(n));Promise.resolve(d).then(u=>{e.set(u)})}zs()}),Qs="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Zs(t){let e,n,r=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Ur(t[6],Qs)],i={};for(let s=0;s<r.length;s+=1)i=V(i,r[s]);return{c(){e=S("div"),n=re(t[0]),Ue(e,i)},m(s,o){P(s,e,o),E(e,n)},p(s,o){o[0]&1&&is(n,s[0],i.contenteditable)},d(s){s&&C(e)}}}function eo(t){let e,n,r,i,s,o=[on(t[6]),{"data-svnav-router":t[3]}],c={};for(let u=0;u<o.length;u+=1)c=V(c,o[u]);const a=t[22].default,l=Qe(a,t,t[21],null);let d=t[2]&&t[4]&&t[1].announcements&&Zs(t);return{c(){e=S("div"),n=x(),l&&l.c(),r=x(),d&&d.c(),i=Lt(),Ue(e,c)},m(u,h){P(u,e,h),P(u,n,h),l&&l.m(u,h),P(u,r,h),d&&d.m(u,h),P(u,i,h),s=!0},p(u,h){l&&l.p&&(!s||h[0]&2097152)&&et(l,a,u,u[21],s?Ze(a,u[21],h,null):tt(u[21]),null),u[2]&&u[4]&&u[1].announcements&&d.p(u,h)},i(u){s||(b(l,u),s=!0)},o(u){T(l,u),s=!1},d(u){u&&(C(e),C(n),C(r),C(i)),l&&l.d(u),d&&d.d(u)}}}const to=Mr(),Jn="/";function no(t,e,n){let r,i,s,o,c,{$$slots:a={},$$scope:l}=e,{basepath:d=Jn}=e,{url:u=null}=e,{history:h=Jr}=e,{primary:m=!0}=e,{a11y:f={}}=e,{disableInlineStyles:v=!1}=e;const _={createAnnouncement:g=>`Navigated to ${g.uri}`,announcements:!0,...f},R=d,y=yn(d),N=me(an),O=me($e),D=!N,H=to(),I=m&&!(O&&!O.manageFocus),j=z("");F(t,j,g=>n(0,c=g));const ee=O?O.disableInlineStyles:v,W=z([]);F(t,W,g=>n(20,o=g));const Ae=z(null);F(t,Ae,g=>n(18,i=g));let w=!1;const He=D?0:O.level+1,Ve=D?z(zn(oe?wn(u):h.location,y)):N;F(t,Ve,g=>n(17,r=g));const Ht=z(r);F(t,Ht,g=>n(19,s=g));const Ki=Xs(_,j,Ve),$n=g=>K=>K.filter(ce=>ce.id!==g);function qi(g){if(oe){if(w)return;const K=qr(g,r.pathname);if(K)return w=!0,K}else W.update(K=>{const ce=$n(g.id)(K);return ce.push(g),ce})}function Ji(g){W.update($n(g))}return!D&&d!==Jn&&St(Te,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:d}),D&&(Rr(()=>h.listen(K=>{const ce=zn(K.location,y);Ht.set(r),Ve.set(ce)})),ze(an,Ve)),ze($e,{activeRoute:Ae,registerRoute:qi,unregisterRoute:Ji,manageFocus:I,level:He,id:H,history:D?h:O.history,basepath:D?y:O.basepath,disableInlineStyles:ee}),t.$$set=g=>{"basepath"in g&&n(11,d=g.basepath),"url"in g&&n(12,u=g.url),"history"in g&&n(13,h=g.history),"primary"in g&&n(14,m=g.primary),"a11y"in g&&n(15,f=g.a11y),"disableInlineStyles"in g&&n(16,v=g.disableInlineStyles),"$$scope"in g&&n(21,l=g.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&d!==R&&St(Te,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const g=Kr(o,r.pathname);Ae.set(g)}if(t.$$.dirty[0]&655360&&D){const g=!!r.hash,K=!g&&I,ce=!g||r.pathname!==s.pathname;Ki(K,ce)}t.$$.dirty[0]&262144&&I&&i&&i.primary&&Ws({level:He,routerId:H,route:i})},[c,_,D,H,I,j,ee,W,Ae,Ve,Ht,d,u,h,m,f,v,r,i,s,o,l,a]}class Xr extends Z{constructor(e){super(),Q(this,e,no,eo,G,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function at(t,e,n=$e,r=Te){me(n)||Gr(t,s=>`You cannot use ${s} outside of a ${In(r)}.`,e)}const ro=t=>{const{subscribe:e}=me(t);return{subscribe:e}};function Qr(){return at(Hr),ro(an)}function Zr(){const{history:t}=me($e);return t}function ei(){const t=me($r);return t?ps(t,e=>e.base):z("/")}function ti(){at(jr);const t=ei(),{basepath:e}=me($e);return r=>Ms(r,we(t),e)}function ni(){at(Vr);const t=ti(),{navigate:e}=Zr();return(r,i)=>{const s=Dr(r)?r:t(r);return e(s,i)}}const io=t=>({params:t&16,location:t&8}),Yn=t=>({params:oe?we(t[10]):t[4],location:t[3],navigate:t[11]});function Xn(t){let e,n;return e=new Xr({props:{primary:t[1],$$slots:{default:[ao]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,i){const s={};i&2&&(s.primary=r[1]),i&528409&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function so(t){let e;const n=t[18].default,r=Qe(n,t,t[19],Yn);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&524312)&&et(r,n,i,i[19],e?Ze(n,i[19],s,io):tt(i[19]),Yn)},i(i){e||(b(r,i),e=!0)},o(i){T(r,i),e=!1},d(i){r&&r.d(i)}}}function oo(t){let e,n,r;const i=[{location:t[3]},{navigate:t[11]},oe?we(t[10]):t[4],t[12]];var s=t[0];function o(c,a){let l={};for(let d=0;d<i.length;d+=1)l=V(l,i[d]);return a!==void 0&&a&7192&&(l=V(l,sn(i,[a&8&&{location:c[3]},a&2048&&{navigate:c[11]},a&1040&&mt(oe?we(c[10]):c[4]),a&4096&&mt(c[12])]))),{props:l}}return s&&(e=xn(s,o(t))),{c(){e&&B(e.$$.fragment),n=Lt()},m(c,a){e&&M(e,c,a),P(c,n,a),r=!0},p(c,a){if(a&1&&s!==(s=c[0])){if(e){rt();const l=e;T(l.$$.fragment,1,0,()=>{U(l,1)}),it()}s?(e=xn(s,o(c,a)),B(e.$$.fragment),b(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else if(s){const l=a&7192?sn(i,[a&8&&{location:c[3]},a&2048&&{navigate:c[11]},a&1040&&mt(oe?we(c[10]):c[4]),a&4096&&mt(c[12])]):{};e.$set(l)}},i(c){r||(e&&b(e.$$.fragment,c),r=!0)},o(c){e&&T(e.$$.fragment,c),r=!1},d(c){c&&C(n),e&&U(e,c)}}}function ao(t){let e,n,r,i;const s=[oo,so],o=[];function c(a,l){return a[0]!==null?0:1}return e=c(t),n=o[e]=s[e](t),{c(){n.c(),r=Lt()},m(a,l){o[e].m(a,l),P(a,r,l),i=!0},p(a,l){let d=e;e=c(a),e===d?o[e].p(a,l):(rt(),T(o[d],1,1,()=>{o[d]=null}),it(),n=o[e],n?n.p(a,l):(n=o[e]=s[e](a),n.c()),b(n,1),n.m(r.parentNode,r))},i(a){i||(b(n),i=!0)},o(a){T(n),i=!1},d(a){a&&C(r),o[e].d(a)}}}function co(t){let e,n,r,i,s,o=[on(t[7]),{"data-svnav-route-start":t[5]}],c={};for(let u=0;u<o.length;u+=1)c=V(c,o[u]);let a=t[2]&&Xn(t),l=[on(t[7]),{"data-svnav-route-end":t[5]}],d={};for(let u=0;u<l.length;u+=1)d=V(d,l[u]);return{c(){e=S("div"),n=x(),a&&a.c(),r=x(),i=S("div"),Ue(e,c),Ue(i,d)},m(u,h){P(u,e,h),P(u,n,h),a&&a.m(u,h),P(u,r,h),P(u,i,h),s=!0},p(u,[h]){u[2]?a?(a.p(u,h),h&4&&b(a,1)):(a=Xn(u),a.c(),b(a,1),a.m(r.parentNode,r)):a&&(rt(),T(a,1,1,()=>{a=null}),it())},i(u){s||(b(a),s=!0)},o(u){T(a),s=!1},d(u){u&&(C(e),C(n),C(r),C(i)),a&&a.d(u)}}}const lo=Mr();function uo(t,e,n){let r;const i=["path","component","meta","primary"];let s=Et(e,i),o,c,a,l,{$$slots:d={},$$scope:u}=e,{path:h=""}=e,{component:m=null}=e,{meta:f={}}=e,{primary:v=!0}=e;at(Mt,e);const _=lo(),{registerRoute:R,unregisterRoute:y,activeRoute:N,disableInlineStyles:O}=me($e);F(t,N,w=>n(16,o=w));const D=ei();F(t,D,w=>n(17,a=w));const H=Qr();F(t,H,w=>n(3,c=w));const I=z(null);let j;const ee=z(),W=z({});F(t,W,w=>n(4,l=w)),ze($r,ee),ze(ms,W),ze(gs,I);const Ae=ni();return oe||os(()=>y(_)),t.$$set=w=>{n(24,e=V(V({},e),wt(w))),n(12,s=Et(e,i)),"path"in w&&n(13,h=w.path),"component"in w&&n(0,m=w.component),"meta"in w&&n(14,f=w.meta),"primary"in w&&n(1,v=w.primary),"$$scope"in w&&n(19,u=w.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const w=h==="",He=ot(a,h),xt={id:_,path:h,meta:f,default:w,fullPath:w?"":He,base:w?a:Us(He,c.pathname),primary:v,focusElement:I};ee.set(xt),n(15,j=R(xt))}if(t.$$.dirty&98304&&n(2,r=!!(j||o&&o.id===_)),t.$$.dirty&98308&&r){const{params:w}=j||o;W.set(w)}},e=wt(e),[m,v,r,c,l,_,N,O,D,H,W,Ae,s,h,f,j,o,a,d,u]}class ln extends Z{constructor(e){super(),Q(this,e,uo,co,G,{path:13,component:0,meta:14,primary:1})}}function ho(t){let e,n,r,i;const s=t[13].default,o=Qe(s,t,t[12],null);let c=[{href:t[0]},t[2],t[1]],a={};for(let l=0;l<c.length;l+=1)a=V(a,c[l]);return{c(){e=S("a"),o&&o.c(),Ue(e,a)},m(l,d){P(l,e,d),o&&o.m(e,null),n=!0,r||(i=Ee(e,"click",t[4]),r=!0)},p(l,[d]){o&&o.p&&(!n||d&4096)&&et(o,s,l,l[12],n?Ze(s,l[12],d,null):tt(l[12]),null),Ue(e,a=sn(c,[(!n||d&1)&&{href:l[0]},d&4&&l[2],d&2&&l[1]]))},i(l){n||(b(o,l),n=!0)},o(l){T(o,l),n=!1},d(l){l&&C(e),o&&o.d(l),r=!1,i()}}}function fo(t,e,n){let r,i,s,o,c,a;const l=["to","replace","state","getProps"];let d=Et(e,l),u,{$$slots:h={},$$scope:m}=e,{to:f}=e,{replace:v=!1}=e,{state:_={}}=e,{getProps:R=null}=e;at(bn,e);const y=Qr();F(t,y,I=>n(11,u=I));const N=Ar(),O=ti(),{navigate:D}=Zr();function H(I){N("click",I),Lr(I)&&(I.preventDefault(),D(r,{state:_,replace:o||v}))}return t.$$set=I=>{n(19,e=V(V({},e),wt(I))),n(18,d=Et(e,l)),"to"in I&&n(5,f=I.to),"replace"in I&&n(6,v=I.replace),"state"in I&&n(7,_=I.state),"getProps"in I&&n(8,R=I.getProps),"$$scope"in I&&n(12,m=I.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,r=O(f,u)),t.$$.dirty&2049&&n(10,i=cn(u.pathname,r)),t.$$.dirty&2049&&n(9,s=r===u.pathname),t.$$.dirty&2049&&(o=wn(r)===Ls(u)),t.$$.dirty&512&&n(2,c=s?{"aria-current":"page"}:{}),n(1,a=(()=>{if(Nr(R)){const I=R({location:u,href:r,isPartiallyCurrent:i,isCurrent:s});return{...d,...I}}return d})())},e=wt(e),[r,a,c,y,H,f,v,_,R,s,i,u,m,h]}class ri extends Z{constructor(e){super(),Q(this,e,fo,ho,G,{to:5,replace:6,state:7,getProps:8})}}const po=t=>(e,n=En)=>({destroy:vn(e,"click",s=>{const o=t(s);if(o&&o.target===""&&Lr(s)){s.preventDefault();const c=o.pathname+o.search+o.hash;n(c,{replace:o.hasAttribute("replace")})}})}),mo=po(t=>t.currentTarget);function go(t){let e,n,r,i,s,o,c,a,l,d,u,h;return{c(){e=S("div"),n=S("input"),r=x(),i=S("main"),s=S("div"),o=x(),c=S("div"),a=S("label"),l=x(),d=S("ul"),d.innerHTML="<li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li>",A(n,"id","my-drawer"),A(n,"type","checkbox"),A(n,"class","drawer-toggle"),A(s,"class","w-2 h-full"),A(i,"class","drawer-content min-h-[91vh]"),A(a,"for","my-drawer"),A(a,"aria-label","close sidebar"),A(a,"class","drawer-overlay"),A(d,"class","menu p-4 w-80 min-h-full bg-base-200 text-base-content"),A(c,"class","drawer-side"),A(e,"class","drawer")},m(m,f){P(m,e,f),E(e,n),n.checked=t[0],E(e,r),E(e,i),E(i,s),E(e,o),E(e,c),E(c,a),E(c,l),E(c,d),u||(h=[Ee(n,"change",t[1]),Ee(s,"mouseenter",t[2]),Ee(d,"mouseleave",t[3])],u=!0)},p(m,[f]){f&1&&(n.checked=m[0])},i:L,o:L,d(m){m&&C(e),u=!1,ge(h)}}}function _o(t,e,n){let r=!1;function i(){r=this.checked,n(0,r)}return[r,i,()=>n(0,r=!0),()=>n(0,r=!1)]}class vo extends Z{constructor(e){super(),Q(this,e,_o,go,G,{})}}var Qn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},si={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,a=i+2<t.length,l=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|c>>4;let h=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(h=64)),r.push(n[d],n[u],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ii(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||l==null||u==null)throw new bo;const h=s<<2|c>>4;if(r.push(h),l!==64){const m=c<<4&240|l>>2;if(r.push(m),u!==64){const f=l<<6&192|u;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Io=function(t){const e=ii(t);return si.encodeByteArray(e,!0)},oi=function(t){return Io(t).replace(/\./g,"")},ai=function(t){try{return si.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=()=>wo().__FIREBASE_DEFAULTS__,So=()=>{if(typeof process>"u"||typeof Qn>"u")return;const t=Qn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},To=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ai(t[1]);return e&&JSON.parse(e)},Sn=()=>{try{return Eo()||So()||To()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ko=t=>{var e,n;return(n=(e=Sn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ci=()=>{var t;return(t=Sn())===null||t===void 0?void 0:t.config},li=t=>{var e;return(e=Sn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ao(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function Co(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oo(){const t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function No(){try{return typeof indexedDB=="object"}catch{return!1}}function Do(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="FirebaseError";class _e extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lo,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ct.prototype.create)}}class ct{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mo(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new _e(i,c,r)}}function Mo(t,e){return t.replace(Uo,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uo=/\{\$([^}]+)}/g;function $o(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zn(s)&&Zn(o)){if(!Tt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bo(t,e){const n=new Fo(t,e);return n.subscribe.bind(n)}class Fo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xo(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qt),i.error===void 0&&(i.error=qt),i.complete===void 0&&(i.complete=qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class Be{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ro;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jo(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vo(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vo(t){return t===ye?void 0:t}function jo(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ho(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const zo={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Go=k.INFO,Ko={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},qo=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ko[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ui{constructor(e){this.name=e,this._logLevel=Go,this._logHandler=qo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Jo=(t,e)=>e.some(n=>t instanceof n);let er,tr;function Yo(){return er||(er=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xo(){return tr||(tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const di=new WeakMap,un=new WeakMap,hi=new WeakMap,Jt=new WeakMap,Tn=new WeakMap;function Qo(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fe(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&di.set(n,t)}).catch(()=>{}),Tn.set(e,t),e}function Zo(t){if(un.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});un.set(t,e)}let dn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return un.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ea(t){dn=t(dn)}function ta(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yt(this),e,...n);return hi.set(r,e.sort?e.sort():[e]),fe(r)}:Xo().includes(t)?function(...e){return t.apply(Yt(this),e),fe(di.get(this))}:function(...e){return fe(t.apply(Yt(this),e))}}function na(t){return typeof t=="function"?ta(t):(t instanceof IDBTransaction&&Zo(t),Jo(t,Yo())?new Proxy(t,dn):t)}function fe(t){if(t instanceof IDBRequest)return Qo(t);if(Jt.has(t))return Jt.get(t);const e=na(t);return e!==t&&(Jt.set(t,e),Tn.set(e,t)),e}const Yt=t=>Tn.get(t);function ra(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=fe(o);return r&&o.addEventListener("upgradeneeded",a=>{r(fe(o.result),a.oldVersion,a.newVersion,fe(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const ia=["get","getKey","getAll","getAllKeys","count"],sa=["put","add","delete","clear"],Xt=new Map;function nr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xt.get(e))return Xt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ia.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&a.done]))[0]};return Xt.set(e,s),s}ea(t=>({...t,get:(e,n,r)=>nr(e,n)||t.get(e,n,r),has:(e,n)=>!!nr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hn="@firebase/app",rr="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new ui("@firebase/app"),ca="@firebase/app-compat",la="@firebase/analytics-compat",ua="@firebase/analytics",da="@firebase/app-check-compat",ha="@firebase/app-check",fa="@firebase/auth",pa="@firebase/auth-compat",ma="@firebase/database",ga="@firebase/database-compat",_a="@firebase/functions",va="@firebase/functions-compat",ya="@firebase/installations",ba="@firebase/installations-compat",Ia="@firebase/messaging",wa="@firebase/messaging-compat",Ea="@firebase/performance",Sa="@firebase/performance-compat",Ta="@firebase/remote-config",ka="@firebase/remote-config-compat",Ra="@firebase/storage",Aa="@firebase/storage-compat",Ca="@firebase/firestore",Pa="@firebase/firestore-compat",Oa="firebase",Na="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]",Da={[hn]:"fire-core",[ca]:"fire-core-compat",[ua]:"fire-analytics",[la]:"fire-analytics-compat",[ha]:"fire-app-check",[da]:"fire-app-check-compat",[fa]:"fire-auth",[pa]:"fire-auth-compat",[ma]:"fire-rtdb",[ga]:"fire-rtdb-compat",[_a]:"fire-fn",[va]:"fire-fn-compat",[ya]:"fire-iid",[ba]:"fire-iid-compat",[Ia]:"fire-fcm",[wa]:"fire-fcm-compat",[Ea]:"fire-perf",[Sa]:"fire-perf-compat",[Ta]:"fire-rc",[ka]:"fire-rc-compat",[Ra]:"fire-gcs",[Aa]:"fire-gcs-compat",[Ca]:"fire-fst",[Pa]:"fire-fst-compat","fire-js":"fire-js",[Oa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map,pn=new Map;function La(t,e){try{t.container.addComponent(e)}catch(n){ke.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qe(t){const e=t.name;if(pn.has(e))return ke.debug(`There were multiple attempts to register component ${e}.`),!1;pn.set(e,t);for(const n of kt.values())La(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new ct("app","Firebase",Ma);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=Na;function pi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pe.create("bad-app-name",{appName:String(i)});if(n||(n=ci()),!n)throw pe.create("no-options");const s=kt.get(i);if(s){if(Tt(n,s.options)&&Tt(r,s.config))return s;throw pe.create("duplicate-app",{appName:i})}const o=new Wo(i);for(const a of pn.values())o.addComponent(a);const c=new Ua(n,r,o);return kt.set(i,c),c}function $a(t=fn){const e=kt.get(t);if(!e&&t===fn&&ci())return pi();if(!e)throw pe.create("no-app",{appName:t});return e}function De(t,e,n){var r;let i=(r=Da[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ke.warn(c.join(" "));return}qe(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="firebase-heartbeat-database",Fa=1,Je="firebase-heartbeat-store";let Qt=null;function mi(){return Qt||(Qt=ra(Ba,Fa,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Je)}catch(n){console.warn(n)}}}}).catch(t=>{throw pe.create("idb-open",{originalErrorMessage:t.message})})),Qt}async function xa(t){try{const n=(await mi()).transaction(Je),r=await n.objectStore(Je).get(gi(t));return await n.done,r}catch(e){if(e instanceof _e)ke.warn(e.message);else{const n=pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ke.warn(n.message)}}}async function ir(t,e){try{const r=(await mi()).transaction(Je,"readwrite");await r.objectStore(Je).put(e,gi(t)),await r.done}catch(n){if(n instanceof _e)ke.warn(n.message);else{const r=pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ke.warn(r.message)}}}function gi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=1024,Va=30*24*60*60*1e3;class ja{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new za(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Va}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sr(),{heartbeatsToSend:r,unsentEntries:i}=Wa(this._heartbeatsCache.heartbeats),s=oi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sr(){return new Date().toISOString().substring(0,10)}function Wa(t,e=Ha){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),or(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),or(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class za{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return No()?Do().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xa(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ir(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ir(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function or(t){return oi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){qe(new Be("platform-logger",e=>new oa(e),"PRIVATE")),qe(new Be("heartbeat",e=>new ja(e),"PRIVATE")),De(hn,rr,t),De(hn,rr,"esm2017"),De("fire-js","")}Ga("");function kn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _i(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ka=_i,vi=new ct("auth","Firebase",_i());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new ui("@firebase/auth");function qa(t,...e){Rt.logLevel<=k.WARN&&Rt.warn(`Auth (${ut}): ${t}`,...e)}function vt(t,...e){Rt.logLevel<=k.ERROR&&Rt.error(`Auth (${ut}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,...e){throw Rn(t,...e)}function q(t,...e){return Rn(t,...e)}function yi(t,e,n){const r=Object.assign(Object.assign({},Ka()),{[e]:n});return new ct("auth","Firebase",r).create(e,{appName:t.name})}function Ja(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&X(t,"argument-error"),yi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vi.create(t,...e)}function p(t,e,...n){if(!t)throw Rn(e,...n)}function ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vt(e),new Error(e)}function ae(t,e){t||ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ya(){return ar()==="http:"||ar()==="https:"}function ar(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ya()||Co()||"connection"in navigator)?navigator.onLine:!0}function Qa(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ae(n>e,"Short delay should be less than long delay!"),this.isMobile=Ao()||Po()}get(){return Xa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new dt(3e4,6e4);function Cn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xe(t,e,n,r,i={}){return Ii(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=lt(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),bi.fetch()(wi(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Ii(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Za),e);try{const i=new nc(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw gt(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw gt(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yi(t,d,l);X(t,d)}}catch(i){if(i instanceof _e)throw i;X(t,"network-request-failed",{message:String(i)})}}async function tc(t,e,n,r,i={}){const s=await xe(t,e,n,r,i);return"mfaPendingCredential"in s&&X(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wi(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?An(t.config,i):`${t.config.apiScheme}://${i}`}class nc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(q(this.auth,"network-request-failed")),ec.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=q(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,e){return xe(t,"POST","/v1/accounts:delete",e)}async function ic(t,e){return xe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sc(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=Pn(r);p(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ge(Zt(i.auth_time)),issuedAtTime:Ge(Zt(i.iat)),expirationTime:Ge(Zt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zt(t){return Number(t)*1e3}function Pn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vt("JWT malformed, contained fewer than 3 sections"),null;try{const i=ai(n);return i?JSON.parse(i):(vt("Failed to decode base64 JWT payload"),null)}catch(i){return vt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oc(t){const e=Pn(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _e&&ac(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ac({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ge(this.lastLoginAt),this.creationTime=Ge(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ye(t,ic(n,{idToken:r}));p(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dc(s.providerUserInfo):[],c=uc(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ei(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function lc(t){const e=ve(t);await At(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uc(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dc(t){return t.map(e=>{var{providerId:n}=e,r=kn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(t,e){const n=await Ii(t,{},async()=>{const r=lt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wi(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bi.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fc(t,e){return xe(t,"POST","/v2/accounts:revokeToken",Cn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return p(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hc(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xe;return r&&(p(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(p(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(p(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xe,this.toJSON())}_performRefresh(){return ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ei(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ye(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sc(this,e)}reload(){return lc(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await At(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ye(this,rc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,a,l,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(c=n.tenantId)!==null&&c!==void 0?c:void 0,_=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:O,isAnonymous:D,providerData:H,stsTokenManager:I}=n;p(N&&I,e,"internal-error");const j=Xe.fromJSON(this.name,I);p(typeof N=="string",e,"internal-error"),le(u,e.name),le(h,e.name),p(typeof O=="boolean",e,"internal-error"),p(typeof D=="boolean",e,"internal-error"),le(m,e.name),le(f,e.name),le(v,e.name),le(_,e.name),le(R,e.name),le(y,e.name);const ee=new Se({uid:N,auth:e,email:h,emailVerified:O,displayName:u,isAnonymous:D,photoURL:f,phoneNumber:m,tenantId:v,stsTokenManager:j,createdAt:R,lastLoginAt:y});return H&&Array.isArray(H)&&(ee.providerData=H.map(W=>Object.assign({},W))),_&&(ee._redirectEventId=_),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xe;i.updateFromServerResponse(n);const s=new Se({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await At(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Map;function se(t){ae(t instanceof Function,"Expected a class definition");let e=cr.get(t);return e?(ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Si.type="NONE";const lr=Si;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e,n){return`firebase:${t}:${e}:${n}`}class Le{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yt(this.userKey,i.apiKey,s),this.fullPersistenceKey=yt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Le(se(lr),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||se(lr);const o=yt(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const d=await l._get(o);if(d){const u=Se._fromJSON(e,d);l!==s&&(c=u),s=l;break}}catch{}const a=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Le(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Le(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ri(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ti(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ci(e))return"Blackberry";if(Pi(e))return"Webos";if(On(e))return"Safari";if((e.includes("chrome/")||ki(e))&&!e.includes("edge/"))return"Chrome";if(Ai(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ti(t=$()){return/firefox\//i.test(t)}function On(t=$()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ki(t=$()){return/crios\//i.test(t)}function Ri(t=$()){return/iemobile/i.test(t)}function Ai(t=$()){return/android/i.test(t)}function Ci(t=$()){return/blackberry/i.test(t)}function Pi(t=$()){return/webos/i.test(t)}function Ut(t=$()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pc(t=$()){var e;return Ut(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mc(){return Oo()&&document.documentMode===10}function Oi(t=$()){return Ut(t)||Ai(t)||Pi(t)||Ci(t)||/windows phone/i.test(t)||Ri(t)}function gc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t,e=[]){let n;switch(t){case"Browser":n=ur($());break;case"Worker":n=`${ur($())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ut}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t,e={}){return xe(t,"GET","/v2/passwordPolicy",Cn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=6;class bc{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dr(this),this.idTokenSubscription=new dr(this),this.beforeStateQueue=new _c(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=se(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Le.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await At(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ve(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vc(this),n=new bc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ct("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&se(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await Le.create(this,[se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ni(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qa(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $t(t){return ve(t)}class dr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bo(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wc(t){Nn=t}function Ec(t){return Nn.loadJS(t)}function Sc(){return Nn.gapiScript}function Tc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e){const n=fi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tt(s,e??{}))return i;X(i,"already-initialized")}return n.initialize({options:e})}function Rc(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(se);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ac(t,e,n){const r=$t(t);p(r._canInitEmulator,r,"emulator-config-failed"),p(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Di(e),{host:o,port:c}=Cc(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pc()}function Di(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cc(t){const e=Di(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hr(o)}}}function hr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ie("not implemented")}_getIdTokenResponse(e){return ie("not implemented")}_linkToIdToken(e,n){return ie("not implemented")}_getReauthenticationResolver(e){return ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e){return tc(t,"POST","/v1/accounts:signInWithIdp",Cn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="http://localhost";class Re extends Li{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):X("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Re(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Me(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Me(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Me(e,n)}buildRequest(){const e={requestUri:Oc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Dn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends ht{constructor(){super("facebook.com")}static credential(e){return Re._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Re._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ne.credential(n,r)}catch{return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com";ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ht{constructor(){super("github.com")}static credential(e){return Re._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.GITHUB_SIGN_IN_METHOD="github.com";de.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends ht{constructor(){super("twitter.com")}static credential(e,n){return Re._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return he.credential(n,r)}catch{return null}}}he.TWITTER_SIGN_IN_METHOD="twitter.com";he.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Se._fromIdTokenResponse(e,r,i),o=fr(r);return new Fe({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fr(r);return new Fe({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends _e{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ct(e,n,r,i)}}function Mi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ct._fromErrorAndOperation(t,s,e,r):s})}async function Nc(t,e,n=!1){const r=await Ye(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fe._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ye(t,Mi(r,i,e,t),n);p(s.idToken,r,"internal-error");const o=Pn(s.idToken);p(o,r,"internal-error");const{sub:c}=o;return p(t.uid===c,r,"user-mismatch"),Fe._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&X(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(t,e,n=!1){const r="signIn",i=await Mi(t,r,e),s=await Fe._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Mc(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function Uc(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function $c(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function Bc(t){return ve(t).signOut()}const Pt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pt,"1"),this.storage.removeItem(Pt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){const t=$();return On(t)||Ut(t)}const xc=1e3,Hc=10;class $i extends Ui{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fc()&&gc(),this.fallbackToPolling=Oi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$i.type="LOCAL";const Vc=$i;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Ui{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bi.type="SESSION";const Fi=Bi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(n.origin,s)),a=await jc(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const l=Ln("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return window}function zc(t){J().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function Gc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qc(){return xi()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="firebaseLocalStorageDb",Jc=1,Ot="firebaseLocalStorage",Vi="fbase_key";class ft{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ft(t,e){return t.transaction([Ot],e?"readwrite":"readonly").objectStore(Ot)}function Yc(){const t=indexedDB.deleteDatabase(Hi);return new ft(t).toPromise()}function gn(){const t=indexedDB.open(Hi,Jc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ot,{keyPath:Vi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ot)?e(r):(r.close(),await Yc(),e(await gn()))})})}async function pr(t,e,n){const r=Ft(t,!0).put({[Vi]:e,value:n});return new ft(r).toPromise()}async function Xc(t,e){const n=Ft(t,!1).get(e),r=await new ft(n).toPromise();return r===void 0?null:r.value}function mr(t,e){const n=Ft(t,!0).delete(e);return new ft(n).toPromise()}const Qc=800,Zc=3;class ji{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bt._getInstance(qc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gc(),!this.activeServiceWorker)return;this.sender=new Wc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gn();return await pr(e,Pt,"1"),await mr(e,Pt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xc(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ft(i,!1).getAll();return new ft(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ji.type="LOCAL";const el=ji;new dt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){return e?se(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Li{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Me(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Me(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Me(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tl(t){return Lc(t.auth,new Mn(t),t.bypassAuthState)}function nl(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Dc(n,new Mn(t),t.bypassAuthState)}async function rl(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Nc(n,new Mn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tl;case"linkViaPopup":case"linkViaRedirect":return rl;case"reauthViaPopup":case"reauthViaRedirect":return nl;default:X(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new dt(2e3,1e4);async function sl(t,e,n){const r=$t(t);Ja(t,e,Dn);const i=Wi(r,n);return new Ie(r,"signInViaPopup",e,i).executeNotNull()}class Ie extends zi{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=Ln();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(q(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,il.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="pendingRedirect",bt=new Map;class al extends zi{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const r=await cl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cl(t,e){const n=dl(e),r=ul(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ll(t,e){bt.set(t._key(),e)}function ul(t){return se(t._redirectPersistence)}function dl(t){return yt(ol,t.config.apiKey,t.name)}async function hl(t,e,n=!1){const r=$t(t),i=Wi(r,e),o=await new al(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=10*60*1e3;class pl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ml(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(q(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fl&&this.cachedEventUids.clear(),this.cachedEventUids.has(gr(e))}saveEventToCache(e){this.cachedEventUids.add(gr(e)),this.lastProcessedEventTime=Date.now()}}function gr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ml(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t,e={}){return xe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vl=/^https?/;async function yl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gl(t);for(const n of e)try{if(bl(n))return}catch{}X(t,"unauthorized-domain")}function bl(t){const e=mn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vl.test(n))return!1;if(_l.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new dt(3e4,6e4);function _r(){const t=J().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wl(t){return new Promise((e,n)=>{var r,i,s;function o(){_r(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_r(),n(q(t,"network-request-failed"))},timeout:Il.get()})}if(!((i=(r=J().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=J().gapi)===null||s===void 0)&&s.load)o();else{const c=Tc("iframefcb");return J()[c]=()=>{gapi.load?o():n(q(t,"network-request-failed"))},Ec(`${Sc()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw It=null,e})}let It=null;function El(t){return It=It||wl(t),It}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new dt(5e3,15e3),Tl="__/auth/iframe",kl="emulator/auth/iframe",Rl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Al=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cl(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?An(e,kl):`https://${t.config.authDomain}/${Tl}`,r={apiKey:e.apiKey,appName:t.name,v:ut},i=Al.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lt(r).slice(1)}`}async function Pl(t){const e=await El(t),n=J().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:Cl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=q(t,"network-request-failed"),c=J().setTimeout(()=>{s(o)},Sl.get());function a(){J().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nl=500,Dl=600,Ll="_blank",Ml="http://localhost";class vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ul(t,e,n,r=Nl,i=Dl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ol),{width:r.toString(),height:i.toString(),top:s,left:o}),l=$().toLowerCase();n&&(c=ki(l)?Ll:n),Ti(l)&&(e=e||Ml,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[m,f])=>`${h}${m}=${f},`,"");if(pc(l)&&c!=="_self")return $l(e||"",c),new vr(null);const u=window.open(e||"",c,d);p(u,t,"popup-blocked");try{u.focus()}catch{}return new vr(u)}function $l(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="__/auth/handler",Fl="emulator/auth/handler",xl=encodeURIComponent("fac");async function yr(t,e,n,r,i,s){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ut,eventId:i};if(e instanceof Dn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$o(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof ht){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),l=a?`#${xl}=${encodeURIComponent(a)}`:"";return`${Hl(t)}?${lt(c).slice(1)}${l}`}function Hl({config:t}){return t.emulator?An(t,Fl):`https://${t.authDomain}/${Bl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="webStorageSupport";class Vl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fi,this._completeRedirectFn=hl,this._overrideRedirectResult=ll}async _openPopup(e,n,r,i){var s;ae((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yr(e,n,r,mn(),i);return Ul(e,o,Ln())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yr(e,n,r,mn(),i);return zc(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ae(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pl(e),r=new pl(e);return n.register("authEvent",i=>(p(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(en,{type:en},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[en];o!==void 0&&n(!!o),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oi()||On()||Ut()}}const jl=Vl;var br="@firebase/auth",Ir="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gl(t){qe(new Be("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ni(t)},l=new Ic(r,i,s,a);return Rc(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qe(new Be("auth-internal",e=>{const n=$t(e.getProvider("auth").getImmediate());return(r=>new Wl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(br,Ir,zl(t)),De(br,Ir,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=5*60,ql=li("authIdTokenMaxAge")||Kl;let wr=null;const Jl=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ql)return;const i=n==null?void 0:n.token;wr!==i&&(wr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yl(t=$a()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kc(t,{popupRedirectResolver:jl,persistence:[el,Vc,Fi]}),r=li("authTokenSyncURL");if(r){const s=Jl(r);Uc(n,s,()=>s(n.currentUser)),Mc(n,o=>s(o))}const i=ko("auth");return i&&Ac(n,`http://${i}`),n}function Xl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wc({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=q("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Xl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gl("Browser");var Ql="firebase",Zl="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Ql,Zl,"app");const eu=pi({apiKey:"AIzaSyCJ1v3sVQK0_m77IlCsU4A7wXMSXZ8Di3I",authDomain:"studysync-nsc.firebaseapp.com",projectId:"studysync-nsc",storageBucket:"studysync-nsc.appspot.com",messagingSenderId:"489125403611",appId:"1:489125403611:web:f7c742c4e537b8f833e5fe"}),Un=Yl(eu),tu=new ne;function nu(t){let e;return{c(){e=re("Home")},m(n,r){P(n,e,r)},d(n){n&&C(e)}}}function ru(t){let e,n,r;return n=new ri({props:{to:"/login",$$slots:{default:[su]},$$scope:{ctx:t}}}),{c(){e=S("li"),B(n.$$.fragment)},m(i,s){P(i,e,s),M(n,e,null),r=!0},i(i){r||(b(n.$$.fragment,i),r=!0)},o(i){T(n.$$.fragment,i),r=!1},d(i){i&&C(e),U(n)}}}function iu(t){let e,n,r;return{c(){e=S("li"),e.innerHTML="<a>Log out</a>"},m(i,s){P(i,e,s),n||(r=Ee(e,"click",t[3]),n=!0)},i:L,o:L,d(i){i&&C(e),n=!1,r()}}}function su(t){let e;return{c(){e=re("Log in")},m(n,r){P(n,e,r)},d(n){n&&C(e)}}}function ou(t){let e,n,r,i,s,o,c,a,l,d,u,h,m,f;a=new ri({props:{to:"/main",$$slots:{default:[nu]},$$scope:{ctx:t}}});const v=[iu,ru],_=[];function R(y,N){return y[0]?0:1}return d=R(t),u=_[d]=v[d](t),{c(){e=S("div"),n=S("div"),r=S("a"),r.textContent="StudySync",i=x(),s=S("div"),o=S("ul"),c=S("li"),B(a.$$.fragment),l=x(),u.c(),A(r,"href","/"),A(r,"class","btn btn-ghost text-xl"),A(n,"class","flex-1"),A(o,"class","menu menu-horizontal px-1"),A(s,"class","flex-none"),A(e,"class","navbar bg-gradient-to-r from-primary to-gray-900 text-white")},m(y,N){P(y,e,N),E(e,n),E(n,r),E(e,i),E(e,s),E(s,o),E(o,c),M(a,c,null),E(o,l),_[d].m(o,null),h=!0,m||(f=[Zi(mo.call(null,r)),Ee(r,"click",t[2])],m=!0)},p(y,[N]){const O={};N&16&&(O.$$scope={dirty:N,ctx:y}),a.$set(O);let D=d;d=R(y),d!==D&&(rt(),T(_[D],1,1,()=>{_[D]=null}),it(),u=_[d],u||(u=_[d]=v[d](y),u.c()),b(u,1),u.m(o,null))},i(y){h||(b(a.$$.fragment,y),b(u),h=!0)},o(y){T(a.$$.fragment,y),T(u),h=!1},d(y){y&&C(e),U(a),_[d].d(),m=!1,ge(f)}}}function au(t,e,n){const r=Ar();let{isLogin:i}=e;const s=()=>{r("entered")},o=async()=>{await Bc(Un),En("/")};return t.$$set=c=>{"isLogin"in c&&n(0,i=c.isLogin)},[i,r,s,o]}class cu extends Z{constructor(e){super(),Q(this,e,au,ou,G,{isLogin:0})}}function lu(t){let e,n,r,i,s;return{c(){e=S("main"),n=S("button"),r=S("span"),r.textContent="Sign in with Google",A(r,"class","font-semibold text-3xl"),n.disabled=t[0],A(n,"class","active:scale-95 transition-all bg-gradient-to-r text-white from-primary to-secondary px-6 py-4 rounded-lg select-none cursor-pointer flex items-center space-x-2 justify-center"),A(e,"class","min-h-[91vh] flex flex-col justify-center items-center")},m(o,c){P(o,e,c),E(e,n),E(n,r),i||(s=Ee(n,"click",t[1]),i=!0)},p(o,[c]){c&1&&(n.disabled=o[0])},i:L,o:L,d(o){o&&C(e),i=!1,s()}}}function uu(t,e,n){let r=!1;return document.title="StudySync · Login",[r,async()=>{n(0,r=!0);try{await sl(Un,tu)}catch(s){console.log(s)}En("/main")}]}class du extends Z{constructor(e){super(),Q(this,e,uu,lu,G,{})}}const Nt=z({currentUser:null,isLoading:!0});function hu(t){var h,m;let e,n,r=((h=t[0].currentUser)==null?void 0:h.email)+"",i,s,o,c=((m=t[0].currentUser)==null?void 0:m.displayName)+"",a,l,d,u;return{c(){var f;e=S("main"),n=re("Email: "),i=re(r),s=S("br"),o=re(`
  Display Name: `),a=re(c),l=x(),d=S("img"),Fn(d.src,u=(f=t[0].currentUser)==null?void 0:f.photoURL)||A(d,"src",u),A(d,"alt",""),A(d,"width","30"),A(d,"height","30")},m(f,v){P(f,e,v),E(e,n),E(e,i),E(e,s),E(e,o),E(e,a),E(e,l),E(e,d)},p(f,[v]){var _,R,y;v&1&&r!==(r=((_=f[0].currentUser)==null?void 0:_.email)+"")&&tn(i,r),v&1&&c!==(c=((R=f[0].currentUser)==null?void 0:R.displayName)+"")&&tn(a,c),v&1&&!Fn(d.src,u=(y=f[0].currentUser)==null?void 0:y.photoURL)&&A(d,"src",u)},i:L,o:L,d(f){f&&C(e)}}}function fu(t,e,n){let r;return F(t,Nt,i=>n(0,r=i)),document.title="StudySync · Home",[r]}class pu extends Z{constructor(e){super(),Q(this,e,fu,hu,G,{})}}function Er(t){let e;const n=t[2].default,r=Qe(n,t,t[1],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&2)&&et(r,n,i,i[1],e?Ze(n,i[1],s,null):tt(i[1]),null)},i(i){e||(b(r,i),e=!0)},o(i){T(r,i),e=!1},d(i){r&&r.d(i)}}}function mu(t){let e,n,r=t[0].currentUser&&Er(t);return{c(){r&&r.c(),e=Lt()},m(i,s){r&&r.m(i,s),P(i,e,s),n=!0},p(i,[s]){i[0].currentUser?r?(r.p(i,s),s&1&&b(r,1)):(r=Er(i),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(rt(),T(r,1,1,()=>{r=null}),it())},i(i){n||(b(r),n=!0)},o(i){T(r),n=!1},d(i){i&&C(e),r&&r.d(i)}}}function gu(t,e,n){let r;F(t,Nt,c=>n(0,r=c));let{$$slots:i={},$$scope:s}=e;const o=ni();return t.$$set=c=>{"$$scope"in c&&n(1,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&(r.currentUser||o("/login"))},[r,s,i]}class _u extends Z{constructor(e){super(),Q(this,e,gu,mu,G,{})}}const vu=t=>({params:t&32,location:t&8,navigate:t&16}),Sr=t=>({params:t[5],location:t[3],navigate:t[4]});function yu(t){let e;const n=t[1].default,r=Qe(n,t,t[2],Sr);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&60)&&et(r,n,i,i[2],e?Ze(n,i[2],s,vu):tt(i[2]),Sr)},i(i){e||(b(r,i),e=!0)},o(i){T(r,i),e=!1},d(i){r&&r.d(i)}}}function bu(t){let e,n;return e=new _u({props:{$$slots:{default:[yu]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,i){const s={};i&60&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Iu(t){let e,n;return e=new ln({props:{path:t[0],$$slots:{default:[bu,({location:r,navigate:i,params:s})=>({3:r,4:i,5:s}),({location:r,navigate:i,params:s})=>(r?8:0)|(i?16:0)|(s?32:0)]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.path=r[0]),i&60&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function wu(t,e,n){let{$$slots:r={},$$scope:i}=e,{path:s}=e;return t.$$set=o=>{"path"in o&&n(0,s=o.path),"$$scope"in o&&n(2,i=o.$$scope)},[s,r,i]}class Eu extends Z{constructor(e){super(),Q(this,e,wu,Iu,G,{path:0})}}function Su(t){let e,n;return e=new vo({}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Tu(t){let e,n;return e=new du({}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function ku(t){let e,n;return e=new pu({}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Ru(t){let e,n,r,i,s,o,c,a,l,d;return n=new cu({props:{isLogin:t[0].currentUser!==null}}),n.$on("entered",t[1]),s=new ln({props:{path:"/",$$slots:{default:[Su]},$$scope:{ctx:t}}}),c=new ln({props:{path:"/login",$$slots:{default:[Tu]},$$scope:{ctx:t}}}),l=new Eu({props:{path:"/main",$$slots:{default:[ku]},$$scope:{ctx:t}}}),{c(){e=S("header"),B(n.$$.fragment),r=x(),i=S("main"),B(s.$$.fragment),o=x(),B(c.$$.fragment),a=x(),B(l.$$.fragment)},m(u,h){P(u,e,h),M(n,e,null),P(u,r,h),P(u,i,h),M(s,i,null),E(i,o),M(c,i,null),E(i,a),M(l,i,null),d=!0},p(u,h){const m={};h&1&&(m.isLogin=u[0].currentUser!==null),n.$set(m);const f={};h&4&&(f.$$scope={dirty:h,ctx:u}),s.$set(f);const v={};h&4&&(v.$$scope={dirty:h,ctx:u}),c.$set(v);const _={};h&4&&(_.$$scope={dirty:h,ctx:u}),l.$set(_)},i(u){d||(b(n.$$.fragment,u),b(s.$$.fragment,u),b(c.$$.fragment,u),b(l.$$.fragment,u),d=!0)},o(u){T(n.$$.fragment,u),T(s.$$.fragment,u),T(c.$$.fragment,u),T(l.$$.fragment,u),d=!1},d(u){u&&(C(e),C(r),C(i)),U(n),U(s),U(c),U(l)}}}function Au(t){let e,n;return e=new Xr({props:{primary:!1,$$slots:{default:[Ru]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,[i]){const s={};i&5&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function Cu(t,e,n){let r;F(t,Nt,s=>n(0,r=s));const i=()=>{$c(Un,s=>{Nt.set({currentUser:s,isLoading:!1})})};return Rr(i),[r,i]}class Pu extends Z{constructor(e){super(),Q(this,e,Cu,Au,G,{})}}new Pu({target:document.getElementById("app")});
