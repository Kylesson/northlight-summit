// Fiverr portfolio exports (EN): full-page PNGs at 1440 and 390, og.jpg 1200x630, scroll video frames.
// Needs the server on :5500. Then: ffmpeg -framerate 30 -i portfolio/frames/%04d.jpg ... (see NOTES.md)
const {chromium}=require('C:/Sites/_tools/pw/node_modules/playwright');
const fs=require('fs');
const URL='http://localhost:5500/', OUT='portfolio';
fs.mkdirSync(OUT+'/frames',{recursive:true});
fs.readdirSync(OUT+'/frames').forEach(f=>fs.unlinkSync(OUT+'/frames/'+f));

(async()=>{
  const b=await chromium.launch({channel:'chrome'});
  async function open(w,h,scale=1){
    const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:scale,locale:'en-US'});
    await p.goto(URL);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(1600); // hero intro ends ~1.2s
    return p;
  }
  for(const [w,h] of [[1440,900],[390,844]]){
    const p=await open(w,h,w<500?2:1);
    await p.addStyleTag({content:'.dock{display:none!important}'}); // fixed dock would land mid-page in a full-page shot
    await p.screenshot({path:`${OUT}/northlight-${w}.png`,fullPage:true});
    await p.close();
  }
  const og=await open(1200,630);
  await og.screenshot({path:'og.jpg',type:'jpeg',quality:88});
  await og.close();

  // ~22 s at 30 fps: 1.5 s hold on the hero, eased scroll to the footer, 1 s hold
  const v=await open(1440,900);
  const max=await v.evaluate(()=>document.documentElement.scrollHeight-innerHeight);
  const hold=45, run=570, ease=t=>t<.5?2*t*t:1-(-2*t+2)**2/2;
  let n=0;const shot=()=>v.screenshot({path:`${OUT}/frames/${String(n++).padStart(4,'0')}.jpg`,type:'jpeg',quality:90});
  for(let i=0;i<hold;i++)await shot();
  for(let i=1;i<=run;i++){await v.evaluate(y=>scrollTo({top:y,behavior:'instant'}),Math.round(max*ease(i/run)));await shot();}
  for(let i=0;i<30;i++)await shot();
  console.log('frames',n,'scroll',max);
  await b.close();
})();
