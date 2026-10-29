const {chromium}=require('C:/Sites/_tools/pw/node_modules/playwright');
const ok=(c,m)=>console.log((c?'PASS ':'FAIL ')+m);
(async()=>{const b=await chromium.launch({channel:'chrome'});
const p=await b.newPage({viewport:{width:390,height:650},locale:'en-US'});
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto((process.argv[2]||'http://localhost:5500/'));await p.evaluate(()=>document.fonts.ready);
ok(await p.evaluate(()=>document.documentElement.lang)==='en','defaults to EN for en-US');
ok(/\d/.test(await p.textContent('[data-u=d]')),'countdown shows days: '+await p.textContent('[data-u=d]')+' '+await p.textContent('[data-u-l=d]'));
ok(await p.isHidden('#other-wrap'),'other-diet field hidden by default');
ok(await p.isHidden('#done'),'done panel hidden');
const cta=await p.locator('.hero-foot .btn').boundingBox();ok(cta.y+cta.height<=650,'hero Register visible at 390x650 (bottom '+Math.round(cta.y+cta.height)+')');
// tabs
await p.click('#tab-d');ok(await p.locator('.talk.c').first().isHidden(),'Design tab hides code talks');
await p.keyboard.press('ArrowRight');ok(await p.getAttribute('#tab-c','aria-selected')==='true','arrow key moves to Code tab');
// ticket pre-fill
await p.click('[data-tier=vip]');await p.waitForTimeout(800);
ok(await p.isChecked('[name=tier][value=vip]'),'VIP button pre-selects VIP');ok((await p.textContent('#sum-price'))==='€290','summary shows €290');
// validation
await p.click('#form button[type=submit]');
ok(await p.evaluate(()=>document.activeElement.id)==='f-name','focus moves to first error');
ok((await p.textContent('#e-email')).length>0 && (await p.textContent('#e-consent')).length>0,'email + consent errors shown');
await p.fill('#f-email','bad@x');await p.locator('#f-email').blur();ok(await p.getAttribute('#f-email','aria-invalid')==='true','bad email flagged on blur');
await p.selectOption('#f-diet','other');ok(await p.isVisible('#other-wrap'),'Other reveals text field');
// switch to RU mid-form: errors translate, words refit
await p.click('[data-lang=ru]');await p.waitForTimeout(300);
ok((await p.textContent('#e-email')).includes('Введите'),'error re-translated to RU');
ok(await p.evaluate(()=>[...document.querySelectorAll('.word .fit')].every(e=>e.getBoundingClientRect().right<=innerWidth+1)),'RU section words fit the width');
ok((await p.textContent('#sum-tier'))==='VIP','summary keeps tier after switch');
ok(/дн/.test(await p.textContent('[data-u-l=d]')),'RU plural day label: '+await p.textContent('[data-u-l=d]'));
await p.click('[data-lang=en]');ok((await p.textContent('#e-email')).startsWith('Enter'),'back to EN');
ok((await p.textContent('.promise'))==='One Saturday where design and code finally meet.','EN copy restored');
// submit
await p.fill('#f-name','Ann Lee');await p.fill('#f-email','ann@example.com');await p.fill('#f-other','No nuts');await p.check('#f-consent');
await p.click('#form button[type=submit]');
ok(await p.isVisible('#done'),'success panel shown');ok(/Ann Lee.*VIP/.test(await p.textContent('#done-text')),'done text: '+await p.textContent('#done-text'));
ok(/^NLS-[A-Z0-9]{4}$/.test(await p.textContent('#done-ref')),'ref code '+await p.textContent('#done-ref'));
// dock
await p.evaluate(()=>scrollTo(0,1400));await p.waitForTimeout(600);ok(await p.evaluate(()=>document.getElementById('dock').classList.contains('on')),'dock shows mid-page');
await p.evaluate(()=>document.getElementById('register').scrollIntoView({behavior:'instant'}));await p.waitForTimeout(800);ok(await p.evaluate(()=>!document.getElementById('dock').classList.contains('on')),'dock hides at form');
// persistence
await p.click('[data-lang=ru]');await p.reload();await p.waitForTimeout(300);ok(await p.evaluate(()=>document.documentElement.lang)==='ru','RU remembered after reload');
ok(errs.length===0,'no errors '+errs.join('|'));
await b.close();})();
