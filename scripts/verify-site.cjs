const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('public');
const all = fs.readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.html'));
assert.equal(all.length,28,'8 pages + 3 case studies + 3 articles, each in two languages');
for (const file of all) {
  const html = fs.readFileSync(path.join(root,file),'utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1,file+' must have a single H1');
  const nav = html.match(/<nav[\s\S]*?<\/nav>/)[0];
  const links = [...nav.matchAll(/href="([^"]+)"/g)].map(x=>x[1]);
  const en = file.startsWith('en/');
  assert.deepEqual(links,['about','products','cases','blog','faq','contact'].map(r=>(en?'/en':'')+'/'+r+'/'),file+' navigation');
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)];
  assert.equal(alternates.length,1,file+' must declare one hreflang alternate');
  assert.deepEqual(alternates[0].slice(1,3),[en?'zh-CN':'en',(en?'':'/en')+'/'+file.replace(/^en\//,'').replace(/index\.html$/,'')],file+' hreflang must point at its counterpart in the other language');
  for (const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if(!url.startsWith('/'))continue;
    const target = path.join(root,url.endsWith('/')?url+'index.html':url);
    assert.ok(fs.existsSync(target),file+' missing '+url);
  }
}
const caseSlugs = ['','en/'].map(prefix=>{
  const dir = prefix+'cases';
  const built = fs.readdirSync(path.join(root,dir),{withFileTypes:true}).filter(entry=>entry.isDirectory()).map(entry=>entry.name).sort();
  const index = fs.readFileSync(path.join(root,dir,'index.html'),'utf8');
  const listed = [...new Set([...index.matchAll(new RegExp('href="/'+prefix+'cases/([^"/]+)/"','g'))].map(m=>m[1]))].sort();
  assert.deepEqual(listed,built,dir+'/index.html must link every case study it ships');
  return built;
});
assert.deepEqual(caseSlugs[0],caseSlugs[1],'both languages must ship the same case studies');
const products=fs.readFileSync(path.join(root,'products/index.html'),'utf8');
for(const industry of ['家电','家居','家具','床垫','玩具','宠物','茶业','户外','健身','建材','汽配','文旅','酒店','灯饰'])assert.ok(products.includes(industry));
assert.ok(!fs.existsSync(path.join(root,'.env.local')));
console.log('PASS: 28 independent bilingual pages, navigation, hreflang pairs, three case studies per language, local assets and links, 14 industries, no environment file in deployment output.');
