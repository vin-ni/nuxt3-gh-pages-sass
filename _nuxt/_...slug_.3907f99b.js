import r from"./ContentDoc.eb08e073.js";import{u as i,q as l}from"./query.0b0e0107.js";import{q as m,Q as u,l as o,u as p,W as d,V as h,R as _,o as s}from"./entry.236b73c4.js";import"./ContentRenderer.592a5975.js";import"./ContentRendererMarkdown.0c63e9dc.js";import"./index.a6ef77ff.js";import"./ContentQuery.0ce4cf05.js";import"./utils.6b4ac345.js";const f={class:"news-single"},y={key:0,class:"content-container"},g=_("h1",null,"TestTitle",-1),w=_("p",null,null,-1),T={__name:"[...slug]",async setup(x){let t,e;const{path:n}=m(),{data:a}=([t,e]=u(()=>i(`content-${n}`,()=>l().where({_path:n}).findOne())),t=await t,e(),t);return(C,V)=>{const c=r;return s(),o("main",f,[p(a)?(s(),o("div",y,[g,w,d(c)])):h("",!0)])}}};export{T as default};
