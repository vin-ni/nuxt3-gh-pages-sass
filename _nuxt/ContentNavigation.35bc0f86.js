import{q as f,h as p,e as v,j as d,u as l}from"./query.ae488aa7.js";import{e as _,_ as g,a as h,t as y,f as w,i as C,b as $,h as r}from"./entry.e36dd3a8.js";import{_ as N}from"./nuxt-link.8c5030ec.js";import{w as m,s as P,u as j,a as T}from"./utils.058a020c.js";/* empty css                      */const b=async n=>{const{content:t}=_().public;typeof(n==null?void 0:n.params)!="function"&&(n=f(n));const a=n.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.fc856a13.js"),["./client-db.fc856a13.js","./entry.e36dd3a8.js","./entry.16e6d9b7.css","./utils.058a020c.js","./query.ae488aa7.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const Q=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await l(`content-navigation-${p(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=$(),{navigation:a}=n,s=o=>r(N,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),c=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{Q as default};
