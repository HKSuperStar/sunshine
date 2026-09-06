const assert=require('node:assert/strict');
const {chromium}=require(process.env.SUNSHINE_PLAYWRIGHT||'playwright');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});try{
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const lang of ['', 'en/'])for(const width of [375,768,1440]){
  await page.setViewportSize({width,height:900});
  const r=await page.goto('http://127.0.0.1:4173/'+lang+'global-trade/');assert.equal(r.status(),200);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('.trade-hero .button').click();assert.equal(new URL(page.url()).hash,'#trade-form');
  for(const [name,value] of Object.entries({company:'Trade test',email:'buyer@example.com',product:'Wire mesh',market:'Germany',goal:'Improve qualified inquiries'}))await page.locator('#trade-form [name="'+name+'"]').fill(value);
  await page.locator('#trade-form select').selectOption({index:1});
  await page.locator('#trade-form button').click();
  const text=await page.locator('#trade-output').inputValue();for(const value of ['Trade test','buyer@example.com','Wire mesh','Germany','Improve qualified inquiries'])assert.ok(text.includes(value));
  assert.ok(await page.locator('#trade-result').isVisible());
  await page.screenshot({path:'/tmp/sunshine-trade-'+(lang?'en':'zh')+'-'+width+'.png',fullPage:true});
 }
 for(const route of ['','products/','cases/','contact/']) {await page.goto('http://127.0.0.1:4173/'+route);assert.ok(await page.locator('a[href="/global-trade/"]').count());}
 assert.deepEqual(errors,[]);console.log('PASS: bilingual trade page at 3 widths, all six brief fields, entry links, no overflow or JS errors.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1);});
