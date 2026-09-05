const assert = require('node:assert/strict');
const {chromium} = require(process.env.SUNSHINE_PLAYWRIGHT || 'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 try {
 const page=await browser.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 for(const width of [375,768,1440]) {
  await page.setViewportSize({width,height:900});
  for(const language of ['', 'en/']) for(const route of ['','about/','products/','cases/','blog/','faq/','contact/']){
   const response=await page.goto('http://127.0.0.1:4173/'+language+route);
   assert.equal(response.status(),200);
   assert.equal(await page.locator('h1').count(),1);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),language+route+' horizontal overflow '+width);
   assert.equal(await page.locator('.site-nav a').count(),6);
  }
 }
 await page.setViewportSize({width:375,height:812});
 await page.goto('http://127.0.0.1:4173/about/');
 await page.locator('.menu-toggle').click();
 assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
 await page.locator('.site-nav a[href="/products/"]').click();
 assert.ok(page.url().endsWith('/products/'));
 await page.locator('.language-toggle').click(); assert.ok(page.url().endsWith('/en/products/'));
 await page.reload(); assert.equal(await page.locator('html').getAttribute('lang'),'en');
 await page.goto('http://127.0.0.1:4173/faq/');
 await page.locator('summary').first().click(); assert.equal(await page.locator('details').first().getAttribute('open'),'');
 await page.goto('http://127.0.0.1:4173/contact/');
 await page.locator('[name="company"]').fill('Test Company'); await page.locator('[name="email"]').fill('test@example.com'); await page.locator('[name="goal"]').fill('Global growth review');
 await page.locator('button[type="submit"]').click(); assert.ok((await page.locator('#brief-output').inputValue()).includes('Global growth review'));
 await page.goto('http://127.0.0.1:4173/cases/');
 assert.ok(await page.locator('.feature-image').evaluate(e=>e.complete&&e.naturalWidth>0));
 await page.screenshot({path:'/tmp/sunshine-cases-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000}); await page.goto('http://127.0.0.1:4173/about/');
 await page.screenshot({path:'/tmp/sunshine-about-desktop.png',fullPage:true});
 assert.deepEqual(errors,[]);
 console.log('PASS: 42 page/viewport loads, mobile navigation, bilingual navigation & reload, FAQ expansion, brief form, case image, no JS errors or horizontal overflow.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
