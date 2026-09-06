const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('public');
const all = fs.readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.html'));
assert.equal(all.length,22,'8 pages + 3 articles, each in two languages');
for (const file of all) {
  const html = fs.readFileSync(path.join(root,file),'utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1,file+' must have a single H1');
  const nav = html.match(/<nav[\s\S]*?<\/nav>/)[0];
  const links = [...nav.matchAll(/href="([^"]+)"/g)].map(x=>x[1]);
  const en = file.startsWith('en/');
  assert.deepEqual(links,['about','products','cases','blog','faq','contact'].map(r=>(en?'/en':'')+'/'+r+'/'),file+' navigation');
  for (const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if(!url.startsWith('/'))continue;
    const target = path.join(root,url.endsWith('/')?url+'index.html':url);
    assert.ok(fs.existsSync(target),file+' missing '+url);
  }
}
const products=fs.readFileSync(path.join(root,'products/index.html'),'utf8');
for(const industry of ['家电','家居','家具','床垫','玩具','宠物','茶业','户外','健身','建材','汽配','文旅','酒店','灯饰'])assert.ok(products.includes(industry));
assert.ok(!fs.existsSync(path.join(root,'.env.local')));
console.log('PASS: 22 independent bilingual pages, navigation, local assets and links, 14 industries, no environment file in deployment output.');
