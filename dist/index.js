import p from"critters";import{files as c}from"files-pipe";import l from"files-pipe/dist/lib/apply-to.js";import a from"files-pipe/dist/lib/deepmerge.js";import{rm as m,writeFile as u}from"fs/promises";import{join as d}from"path";import{fileURLToPath as g}from"url";import f from"./options/index.js";class h extends p{constructor(e){super(e)}process=e=>super.process(e);pruneSource=async(e,r,s)=>{const n=super.pruneSource(e,r,s),o=e.$$name;if(o){const i=d(this.options.path,o);n?(console.log(`Style is inlined. Removing file: ${i}`),await m(i)):(console.log(`Style is inlined. Pruning file: ${i}`),await u(i,s))}return n}}var j=(t={})=>{for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&t[r]===!0&&(t[r]=f[r]);t=a(f,t);const e=new Set;if(typeof t.path<"u"&&(t.path instanceof Array||t.path instanceof Set))for(const r of t.path)e.add(r);return{name:"astro-critters",hooks:{"astro:build:done":async({dir:r})=>{if(e.size||e.add(r),!!t.critters)for(const s of e){const n=await l(s,i=>i instanceof URL?g(i):i),o=new h(a(t.critters,{path:n instanceof Map?n.keys().next().value:n,logLevel:(()=>{switch(t.logger){case 0:return"silent";case 1:return"silent";case 2:return"info";default:return"info"}})()}));await(await(await(await new c(t.logger).in(s)).by("**/*.html")).not(t.exclude)).pipe(a(f.pipe,{wrote:async i=>o.process(i.buffer.toString())}))}}}}};export{j as default};
