const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('public');
const all = fs.readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.html'));
// The one palette every case illustration is drawn from. Each round's plan has required
// this and each round it was checked by eye, so robot-lawn-mower shipped an eighth colour
// (#0d2029) that no plan authorised and nothing caught. Case pages carry no other hex
// colours -- the stylesheet is external and a bitmap case page has none at all -- so
// scanning the whole page is exact.
const palette = new Set(['#122c3a','#3a5566','#b58a39','#e9c982','#f2f5ed','#cad8cf','#fff','#ffffff']);
assert.equal(all.length,34,'8 pages + 5 case studies + 1 case playbook + 3 articles, each in two languages');
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
  // summary is the only case field that reaches the list card and never the detail page,
  // so an entry that omits it prints "undefined" here, where the per-case loop below never looks.
  assert.ok(!index.includes('undefined'),dir+'/index.html renders "undefined": a case entry is missing a field its card needs');
  for (const slug of built) {
    const page = fs.readFileSync(path.join(root,dir,slug,'index.html'),'utf8');
    // caseArt() returns art[slug], so a slug it does not know renders the literal string
    // "undefined" where the illustration belongs and every other check here still passes.
    // A content field left out of the case entry lands in the page the same way.
    assert.equal((page.match(/class="feature-image"/g)||[]).length,1,dir+'/'+slug+' must render exactly one case illustration');
    assert.ok(!page.includes('undefined'),dir+'/'+slug+' renders "undefined": a missing content field, or a slug with no case art');
    const offPalette = [...new Set([...page.matchAll(/#[0-9a-fA-F]{3,6}/g)].map(m=>m[0].toLowerCase()))].filter(c=>!palette.has(c));
    assert.deepEqual(offPalette,[],dir+'/'+slug+' illustration uses colours outside the case palette: '+offPalette.join(', '));
    // A case may carry a deeper playbook page nested under it. It is reachable only from
    // its own case page -- it is deliberately not a sixth card on the index -- so nothing
    // else would notice if the builder stopped emitting the link, or emitted the page
    // without the link. Both directions are asserted here.
    for (const nested of fs.readdirSync(path.join(root,dir,slug),{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name)) {
      const href = '/'+prefix+'cases/'+slug+'/'+nested+'/';
      assert.ok(page.includes('href="'+href+'"'),dir+'/'+slug+' ships '+nested+' but never links to it');
      const deep = fs.readFileSync(path.join(root,dir,slug,nested,'index.html'),'utf8');
      assert.ok(!deep.includes('undefined'),href+' renders "undefined": a missing content field');
      assert.ok(deep.includes('href="'+'/'+prefix+'cases/'+slug+'/"'),href+' must link back to the case study it belongs to');
    }
  }
  return built;
});
assert.deepEqual(caseSlugs[0],caseSlugs[1],'both languages must ship the same case studies');
const products=fs.readFileSync(path.join(root,'products/index.html'),'utf8');
for(const industry of ['家电','家居','家具','床垫','玩具','宠物','茶业','户外','健身','建材','汽配','文旅','酒店','灯饰'])assert.ok(products.includes(industry));
assert.ok(!fs.existsSync(path.join(root,'.env.local')));
console.log('PASS: 34 independent bilingual pages, navigation, hreflang pairs, five case studies per language each with one illustration drawn from the case palette and no undefined field, every nested playbook linked from and back to its case study, local assets and links, 14 industries, no environment file in deployment output.');
