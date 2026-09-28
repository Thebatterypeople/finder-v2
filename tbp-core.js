/* The Battery People — core range + battery selection (shared by the Battery Finder and the website quote tool).
   ONE source of truth: edit prices, swaps or specs here and both tools update.
   t = [High Volume Trade, Regular (Circuit Rate), Retail (RRP)], all inc GST. Updated 28 Sept 2026. */
(function(){
var CORE = {"NS60LSMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"465","rc":"85","dims":"237 x 128 x 221","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_f90693528ef24127983e31abf115faa3~mv2.jpg"},"NS60ASMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"465","rc":"85","dims":"237 x 128 x 221","w":"24 months private use (conditions apply)","img":""},"NS60ALSMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"465","rc":"85","dims":"237 x 128 x 221","w":"24 months private use (conditions apply)","img":""},"NS50ZSMF":{"t":[125,150,185],"type":"SMF","seg":"Automotive","cca":"620","rc":"95","dims":"230 x 173 x 204","w":"24 months private use (conditions apply)","img":""},"NS50ZLASMF":{"t":[125,150,185],"type":"SMF","seg":"Automotive","cca":"620","rc":"95","dims":"230 x 173 x 204","w":"24 months private use (conditions apply)","img":""},"55D23LSMF":{"t":[130,140,180],"type":"SMF","seg":"Automotive","cca":"620","rc":"110","dims":"231 x 172 x 220","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_9fc289c9ba2c4454a211ff205a4d23b1~mv2.jpg"},"55D23RSMF":{"t":[130,140,220],"type":"SMF","seg":"Automotive","cca":"620","rc":"110","dims":"231 x 172 x 220","w":"24 months private use (conditions apply)","img":""},"EXSNS70SMF":{"t":[150,180,220],"type":"SMF","seg":"Truck","cca":"710","rc":null,"dims":"259 x 173 x 219","w":"24 months private use / 12 months commercial use (conditions apply)","img":""},"EXSNS70LSMF":{"t":[150,180,220],"type":"SMF","seg":"Truck","cca":"710","rc":null,"dims":"259 x 173 x 219","w":"24 months private use / 12 months commercial use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_554e475d57db46b284bbaf0af77daecc~mv2.jpg"},"EXSNX120-7":{"t":[170,220,330],"type":"SMF","seg":"Truck","cca":"1000","rc":"195","dims":"305 x 172 x 221","w":"24 months private use / 12 months commercial use (conditions apply)","img":""},"EXSNX120-7L":{"t":[170,220,330],"type":"SMF","seg":"Truck","cca":"1000","rc":"195","dims":"305 x 172 x 221","w":"24 months private use / 12 months commercial use (conditions apply)","img":""},"DIN44SMF":{"t":[100,120,155],"type":"SMF","seg":"Automotive","cca":"480","rc":"75","dims":"207 x 174 x 174","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_247675c549a347579f3dc4d5c77488cc~mv2.jpg"},"DIN44HSMF":{"t":[110,130,175],"type":"SMF","seg":"Automotive","cca":"500","rc":"83","dims":"207 x 175 x 190","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_94bd3ee2895841efa3d6af0f3dafd8aa~mv2.jpg"},"DIN55SMF":{"t":[130,150,220],"type":"SMF","seg":"Automotive","cca":"600","rc":"95","dims":"243 x 175 x 175","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_be45f4e6788e4f2092626e4394fa711c~mv2.jpg"},"DIN55H":{"t":[140,150,225],"type":"SMF","seg":"Automotive","cca":"625","rc":"115","dims":"242 x 175 x 190","w":"24 months private use (conditions apply)","img":""},"DIN66SMF":{"t":[150,190,240],"type":"SMF","seg":"Automotive","cca":"680","rc":"120","dims":"276 x 174 x 174","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_2317e759419c4c59b2a2049182803436~mv2.jpg"},"DIN66H":{"t":[160,190,240],"type":"SMF","seg":"Automotive","cca":"700","rc":"130","dims":"277 x 175 x 190","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_c656244e629444d5b736bdb39c28f1a6~mv2.jpg"},"DIN77SMF":{"t":[170,200,260],"type":"SMF","seg":"Automotive","cca":"780","rc":"155","dims":"314 x 174 x 174","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_2bb4e2a0854549a4964977115a516793~mv2.jpg"},"DIN77HSMF":{"t":[170,200,250],"type":"SMF","seg":"Automotive","cca":"800","rc":"170","dims":"314 x 174 x 190","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_725490163c264a09bf56c50f7172a068~mv2.jpg"},"DIN100SMF":{"t":[180,210,255],"type":"SMF","seg":"Automotive","cca":"900","rc":"190","dims":"352 x 174 x 189","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_3a1df15ea1ab4b9887c204cef6c6757a~mv2.jpg"},"EFB55D23L-Q85":{"t":[160,210,260],"type":"EFB","seg":"Automotive","cca":"700","rc":"120","dims":"231 x 173 x 219","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_14cf1b063d2342d3855752b40d5cd950~mv2.jpg"},"EFB55D23R-Q85":{"t":[160,210,260],"type":"EFB","seg":"Automotive","cca":"700","rc":"120","dims":"231 x 173 x 219","w":"24 months (conditions apply)","img":""},"EFBNS70L-S95":{"t":[170,250,265],"type":"EFB","seg":"Automotive","cca":"720","rc":"135","dims":"260 x 174 x 220","w":"24 months (conditions apply)","img":""},"EFBNX120-7L-T110L":{"t":[210,270,340],"type":"EFB","seg":"Automotive","cca":"850","rc":"150","dims":"304 x 173 x 220","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_85cfcd6faeb84bf08e3a352cbdd2ed21~mv2.jpg"},"EFBDIN66H":{"t":[200,250,310],"type":"EFB","seg":"Automotive","cca":"795","rc":"140","dims":"278 x 175 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_175de4608486473aa8f4c40d8a886171~mv2.jpg"},"EFBDIN77H":{"t":[210,270,350],"type":"EFB","seg":"Automotive","cca":"850","rc":"150","dims":"315 x 175 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_f3c8067ac1c444feaca24ba2ae9d56da~mv2.jpg"},"EFBDIN100H":{"t":[240,300,375],"type":"EFB","seg":"Automotive","cca":"950","rc":"180","dims":"352 x 175 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_4671ca1d4c2349b3adecda5ed7a7d1d7~mv2.jpg"},"NPCISS55H":{"t":[210,270,375],"type":"AGM","seg":"Automotive","cca":"780","rc":"165","dims":"242 x 174 x 189","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_93e9870ad88d4766979c2e0c8fc2abfa~mv2.jpg"},"NPCISS66H":{"t":[255,320,440],"type":"AGM","seg":"Automotive","cca":"910","rc":"195","dims":"277 x 174 x 189","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_2024256b1c9d40ae9c76e93f950d75bc~mv2.jpg"},"NPCISS77H":{"t":[285,360,485],"type":"AGM","seg":"Automotive","cca":"1000","rc":"220","dims":"314 x 174 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_c056e7ae78ba45208aa6532fb6baabec~mv2.jpg"},"NPCISS100H":{"t":[320,410,535],"type":"AGM","seg":"Automotive","cca":"1050","rc":"255","dims":"351 x 174 x 189","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_6211b806c8c547d289e65820228401ff~mv2.jpg"},"NS70SMF":{"t":[135,170,185],"type":"SMF","seg":"Truck","cca":"675","rc":"130","dims":"259 x 174 x 220","w":"24 months commercial use (conditions apply)","img":""},"NS70LSMF":{"t":[135,170,185],"type":"SMF","seg":"Truck","cca":"675","rc":"130","dims":"259 x 174 x 220","w":"24 months commercial use (conditions apply)","img":""},"N70ZZSMF":{"t":[155,200,200],"type":"SMF","seg":"Truck","cca":"750","rc":"160","dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_ba96b2d136c44bcb8fbe1c010ebcd73e~mv2.jpg"},"N70ZZLSMF":{"t":[155,200,200],"type":"SMF","seg":"Truck","cca":"750","rc":"160","dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":""},"N70ZZXSMF":{"t":[170,220,220],"type":"SMF","seg":"Truck","cca":"800","rc":null,"dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":""},"N70ZZLXSMF":{"t":[175,220,225],"type":"SMF","seg":"Truck","cca":"800","rc":null,"dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":""},"NX120-7SMF":{"t":[155,200,200],"type":"SMF","seg":"Truck","cca":"850","rc":"170","dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_4cb6a3f7a81e405bbd6768dca3690a8b~mv2.jpg"},"NX120-7LSMF":{"t":[155,200,200],"type":"SMF","seg":"Truck","cca":"850","rc":"170","dims":"303 x 173 x 220","w":"24 months commercial use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_8758af85f2f741f9b6c1bb98c881c5c7~mv2.jpg"},"N100SMF":{"t":[220,280,280],"type":"SMF","seg":"Truck","cca":"900","rc":"175","dims":"404 x 172 x 229","w":"24 months commercial use (conditions apply)","img":""},"N120SMF":{"t":[260,330,330],"type":"SMF","seg":"Truck","cca":"1050","rc":"250","dims":"504 x 182 x 231","w":"24 months commercial use (conditions apply)","img":""},"N150SMF":{"t":[315,410,410],"type":"SMF","seg":"Truck","cca":"1150","rc":"320","dims":"504 x 220 x 232","w":"24 months commercial use (conditions apply)","img":""},"N200SMF":{"t":[390,500,500],"type":"SMF","seg":"Truck","cca":"1250","rc":"470","dims":"504 x 263 x 237","w":"24 months commercial use (conditions apply)","img":""},"EXSN100SMF":{"t":[220,280,280],"type":"SMF","seg":"Truck","cca":"950","rc":null,"dims":"404 x 171 x 229","w":"24 months commercial use (conditions apply)","img":""},"EXSN120SMF":{"t":[275,350,350],"type":"SMF","seg":"Truck","cca":"1100","rc":null,"dims":"505 x 181 x 232","w":"24 months commercial use (conditions apply)","img":""},"EXSN150SMF":{"t":[330,420,435],"type":"SMF","seg":"Truck","cca":"1250","rc":null,"dims":"508 x 223 x 226","w":"24 months commercial use (conditions apply)","img":""},"EXSN200SMF":{"t":[390,500,545],"type":"SMF","seg":"Truck","cca":"1400","rc":null,"dims":"513 x 263 x 237","w":"24 months commercial use (conditions apply)","img":""},"EXSN94SMF":{"t":[310,390,410],"type":"SMF","seg":"Truck","cca":"1250","rc":null,"dims":"510 x 222 x 217","w":"24 months commercial use (conditions apply)","img":""},"EFBEXSN94SMF":{"t":[330,420,435],"type":"EFB","seg":"Truck","cca":"1350","rc":null,"dims":"509 x 220 x 218","w":"24 months commercial use (conditions apply)","img":""},"EFBEXSN150SMF":{"t":[330,420,435],"type":"EFB","seg":"Truck","cca":"1350","rc":null,"dims":"509 x 220 x 218","w":"24 months commercial use (conditions apply)","img":""},"EFBEXSN200SMF":{"t":[390,500,545],"type":"EFB","seg":"Truck","cca":"1500","rc":null,"dims":"515 x 274 x 240","w":"24 months commercial use (conditions apply)","img":""},"NS40ZSMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"420","rc":"63","dims":"193 x 127 x 220","w":"24 months private use (conditions apply)","img":""},"NS40ZLSMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"420","rc":"63","dims":"193 x 127 x 220","w":"24 months private use (conditions apply)","img":""},"NS40ZASMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"420","rc":"63","dims":"193 x 127 x 220","w":"24 months private use (conditions apply)","img":""},"NS40ZALSMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"420","rc":"63","dims":"193 x 127 x 220","w":"24 months private use (conditions apply)","img":""},"NS60SMF":{"t":[110,130,160],"type":"SMF","seg":"Automotive","cca":"465","rc":"85","dims":"237 x 128 x 221","w":"24 months private use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_43f5bf0bbbc64ea8925975b2e758118b~mv2.jpg"},"EFBDIN35H":{"t":[120,160,240],"type":"EFB","seg":"Automotive","cca":"400","rc":"60","dims":"175 x 175 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_5a26391c8f624346abfbb7cfa9156554~mv2.jpg"},"EFBDIN55H":{"t":[150,190,250],"type":"EFB","seg":"Automotive","cca":"675","rc":"120","dims":"242 x 175 x 190","w":"24 months (conditions apply)","img":"https://static.wixstatic.com/media/e98477_f4ad773fadb544c3b55db6dae96d616b~mv2.jpg"},"31ASMF":{"t":[220,250,300],"type":"SMF","seg":"Truck","cca":"1100","rc":"195","dims":"330 x 172 x 237","w":"24 months private use / 12 months commercial use (conditions apply)","img":"https://static.wixstatic.com/media/e98477_dceaf6a2f3a34f0f9354c3d2f407fb09~mv2.jpg"},"NPCISS110H":{"t":[320,380,450],"type":"AGM","seg":"Automotive","cca":"1100","rc":"240","dims":"392 x 174 x 189","w":"24 months (conditions apply)","img":""}};
/* Non-core finder SKUs mapped to the stocked core battery (from "Non-core SKU tags", 28 Sept 2026).
   Any SKU not in CORE and not in SWAP is ignored; vehicles left with no core battery show "call us". */
var SWAP = {"NS50SMF": "NS50ZSMF", "NS50LASMF": "NS50ZLASMF", "55D23LXSMF": "55D23LSMF", "NS60SNLSMF": "NS60LSMF", "DIN88SMF": "DIN100SMF", "EXSNX120-7SMF": "EXSNX120-7", "EXSNX120-7LSMF": "EXSNX120-7L"};
var CONF = {High:3, Medium:2, Low:1};
/* Stop-start batteries only become necessary from 2012 onwards. For earlier years (unless the vehicle is
   flagged stop-start) an EFB/AGM option is swapped for its standard equivalent. Added 28 Sept 2026. */
var SS_FROM_YEAR = 2012;
var TO_STANDARD = {'EFBDIN55H':'DIN55H','NPCISS55H':'DIN55H','EFBDIN66H':'DIN66H','NPCISS66H':'DIN66H',
  'EFBDIN77H':'DIN77HSMF','NPCISS77H':'DIN77HSMF','EFBDIN100H':'DIN100SMF','NPCISS100H':'DIN100SMF',
  'EFB55D23L-Q85':'55D23LSMF','EFB55D23R-Q85':'55D23RSMF','EFBNS70L-S95':'EXSNS70LSMF','EFBNX120-7L-T110L':'EXSNX120-7L',
  'EFBEXSN94SMF':'EXSN94SMF','EFBEXSN150SMF':'EXSN150SMF','EFBEXSN200SMF':'EXSN200SMF'};
/* SuperCharge "SS" codes (MF55HSS, MF66HSS, MF77HSS, MF88HSS) are AGM, not EFB. */
var SS_TO_AGM = {'55':'NPCISS55H','66':'NPCISS66H','77':'NPCISS77H','88':'NPCISS100H','100':'NPCISS100H'};
/* Polarity pairs (right-hand / left-hand terminal versions of the same battery).
   Some supplier-sourced fitments carry a JIS code ending in L or R (e.g. MF95D31L) but were mapped to the
   wrong-hand Power Crank battery. Where the source code states the polarity, it wins. Added 28 Sept 2026. */
var PAIR_R_TO_L = {'NS60SMF':'NS60LSMF','NS60ASMF':'NS60ALSMF','NS40ZSMF':'NS40ZLSMF','NS40ZASMF':'NS40ZALSMF',
  '55D23RSMF':'55D23LSMF','NS70SMF':'NS70LSMF','EXSNS70SMF':'EXSNS70LSMF','NX120-7SMF':'NX120-7LSMF',
  'EXSNX120-7':'EXSNX120-7L','N70ZZSMF':'N70ZZLSMF','N70ZZXSMF':'N70ZZLXSMF','EFB55D23R-Q85':'EFB55D23L-Q85'};
var PAIR_L_TO_R = {}; Object.keys(PAIR_R_TO_L).forEach(function(k){ PAIR_L_TO_R[PAIR_R_TO_L[k]] = k; });
function sourcePolarity(f){ var m = String(f.sourceCode||'').match(/\b(?:MF)?\d{2,3}[A-H]\d{2}(L|R)S?\b/); return m ? m[1] : null; }
function fixPolarity(sku, f){
  var p = sourcePolarity(f); if(!p) return sku;
  if(p==='L' && PAIR_R_TO_L[sku]) return PAIR_R_TO_L[sku];
  if(p==='R' && PAIR_L_TO_R[sku]) return PAIR_L_TO_R[sku];
  return sku;
}
function coreSku(sku){ sku=String(sku||'').toUpperCase().trim(); if(CORE[sku]) return sku; if(SWAP[sku]) return SWAP[sku]; return null; }
/* Core options for a set of fitments: Power Crank only, swapped to core, de-duplicated (highest confidence kept). */
function coreOptions(fits, year){
  var m={}, agmOnly=fits.some(function(f){ return f.stopStart==='Y' && /AGM/i.test(f.batteryType||''); });
  fits.forEach(function(f){ (f.brandOptions||[]).forEach(function(o){
    if(o.brand && o.brand!=='Power Crank') return;
    var s=coreSku(o.sku); if(!s) return; s=fixPolarity(s, f);
    var ssm=/SuperCharge/i.test(f.source||'') && String(f.sourceCode||'').match(/MF(\d+)H?SS\b/);
    if(ssm && SS_TO_AGM[ssm[1]] && CORE[s].type!=='SMF') s=SS_TO_AGM[ssm[1]];
    var yr = year || f.yearTo || 9999;
    if(yr < SS_FROM_YEAR && f.stopStart!=='Y' && TO_STANDARD[s]) s=TO_STANDARD[s];
    if(agmOnly && CORE[s].type==='EFB') return;            // AGM stop-start vehicles never get EFB
    var c=CONF[o.matchConfidence]||0;
    if(!m[s] || c>m[s].conf) m[s]={sku:s, conf:c};
  }); });
  return Object.keys(m).map(function(k){ return m[k]; });
}
/* Preferred battery — same rule as the quote tool: highest match confidence; standard SMF preferred
   unless the vehicle is stop-start (then EFB/AGM preferred); then cheapest at Regular (Circuit) price. */
function best(fits, year){
  var ss=fits.some(function(f){ return f.stopStart==='Y'; });   // only a true stop-start flag, not an AGM option listed as an alternative
  var opts=coreOptions(fits, year).map(function(o){ var p=CORE[o.sku]; return {sku:o.sku, conf:o.conf, prem:p.type==='SMF'?0:1, price:p.t[1]}; });
  var early = !ss && year && year < SS_FROM_YEAR;   // pre-2012, not stop-start: a standard battery always comes first
  opts.sort(function(a,b){ if(early && a.prem!==b.prem) return a.prem-b.prem; if(b.conf!==a.conf) return b.conf-a.conf; if(a.prem!==b.prem) return ss?b.prem-a.prem:a.prem-b.prem; return a.price-b.price; });
  return {best:opts[0]||null, alts:opts.slice(1), stopStart:ss};
}
/* When a customer can't pick an exact variant: find the preferred battery for each variant separately,
   then recommend the one most variants use (ties go to the cheaper Regular price). Stops one AGM
   variant from pushing every other variant of the model onto AGM. */
function bestMixed(fits, labelOf, year){
  var groups={}; fits.forEach(function(f){ var k=labelOf(f); (groups[k]=groups[k]||[]).push(f); });
  var keys=Object.keys(groups); if(keys.length<=1) return best(fits, year);
  var tally={}, ssAny=false;
  keys.forEach(function(k){ var r=best(groups[k], year); if(r.best){ tally[r.best.sku]=(tally[r.best.sku]||0)+1; } });
  var skus=Object.keys(tally); if(!skus.length) return {best:null, alts:[], stopStart:false};
  skus.sort(function(a,b){ return (tally[b]-tally[a]) || (CORE[a].t[1]-CORE[b].t[1]); });
  var pick=skus[0];
  var ss=CORE[pick].type!=='SMF';
  return {best:{sku:pick}, alts:skus.slice(1).map(function(s){ return {sku:s}; }), stopStart:ss, mixed:true};
}
/* Older SuperCharge-chart entries use model names like "HI LUX - DIESEL". Fold them into the main model
   ("HILUX") with the suffix as the engine / variant, so each vehicle appears once in the dropdowns. */
function normalize(D){
  D = applyOverrides(D);
  var norm=function(s){ return String(s).toUpperCase().replace(/[^A-Z0-9]/g,''); };
  var ENGINE=/^(\d+(\.\d+)?(L|LT|T|DT|TD|I|V|CI|D)?,?|DIESEL|PETROL|TURBO|TD|TDI|TSI|V6|V8|V12|4WD|2WD|AWD|4X4|HYBRID|WITH|WITHOUT|START|STOP|AUTO|MANUAL|SEDAN|WAGON|HATCH|HATCHBACK|CONVERTIBLE|COUPE|UTE|VAN|ALL|GDI|MPI|LPG|SPORT)$/i;
  var mains={}; D.forEach(function(f){ if(!/SuperCharge/i.test(f.source||'')){ (mains[f.make]=mains[f.make]||{})[norm(f.model)]=f.model; } });
  function title(s){ return s.charAt(0)+s.slice(1).toLowerCase(); }
  return D.map(function(f){
    if(!/SuperCharge/i.test(f.source||'')) return f;
    var model=f.model, extra='';
    var i=model.indexOf(' - '); if(i>=0){ extra=model.slice(i+3); model=model.slice(0,i); }
    var mm=mains[f.make]||{};
    if(!mm[norm(model)]){
      // 1) longest main model name that the old name starts with
      var words=model.split(/\s+/), hit=null;
      for(var n=words.length-1;n>=1 && !hit;n--){ var pre=words.slice(0,n).join(' '); if(mm[norm(pre)]) hit={model:mm[norm(pre)], rest:words.slice(n).join(' ')}; }
      // 2) otherwise cut at the first engine / body word after the first word
      if(!hit){ for(var k=1;k<words.length;k++){ if(ENGINE.test(words[k])){ hit={model:words.slice(0,k).join(' ').replace(/[,\/]+$/,''), rest:words.slice(k).join(' ')}; break; } } }
      if(hit){ model=hit.model; extra=[hit.rest, extra].filter(Boolean).join(' '); }
    } else { model=mm[norm(model)]; }
    if(model===f.model) return f;
    var g={}; for(var p in f) g[p]=f[p];
    g.model=model; if(extra && !f.engineTrim) g.engineTrim=title(extra); g.legacy=true;
    return g;
  });
}
/* Fixed vehicle overrides (Jamie's instructions, 28 Sept 2026). These replace the data for the matching entry. */
var OVERRIDES = [
  { make:'TOYOTA', model:'COROLLA', engineTrim:'1.8/2.0 Hybrid', yearFrom:2018,
    replaceWith:[
      { engineTrim:'1.8/2.0 Hybrid, battery in engine bay', stopStart:'', batteryType:'Standard', sku:'NS60LSMF' },
      { engineTrim:'1.8/2.0 Hybrid, battery in boot',       stopStart:'Y', batteryType:'EFB',     sku:'EFBDIN55H' } ] }
];
function applyOverrides(D){
  var out=[];
  D.forEach(function(f){
    var o=OVERRIDES.filter(function(x){ return x.make===f.make && x.model===f.model && x.engineTrim===f.engineTrim && (!x.yearFrom || f.yearFrom===x.yearFrom); })[0];
    if(!o){ out.push(f); return; }
    o.replaceWith.forEach(function(r){
      var g={}; for(var p in f) g[p]=f[p];
      g.engineTrim=r.engineTrim; g.stopStart=r.stopStart; g.batteryType=r.batteryType; g.source='TBP override'; g.sourceCode='';
      g.brandOptions=[{brand:'Power Crank', sku:r.sku, matchConfidence:'High'}];
      out.push(g);
    });
  });
  return out;
}
/* When both the main (RACV) data and the older SuperCharge chart match, use the main data. */
function prefer(c){ var m=c.filter(function(f){ return !f.legacy; }); return m.length ? m : c; }
window.TBP = {CORE:CORE, bestMixed:bestMixed, normalize:normalize, prefer:prefer, SWAP:SWAP, coreSku:coreSku, coreOptions:coreOptions, best:best,
  circuit:function(s){ s=coreSku(s); return s?CORE[s].t[1]:null; },
  rrp:function(s){ s=coreSku(s); return s?CORE[s].t[2]:null; },
  /* Website price = delivered and fitted: the higher of Retail (RRP) and Regular + $30 delivery and fitting,
     so the price quoted on the call is never higher than the website, and usually lower. */
  shown:function(s){ s=coreSku(s); return s?Math.max(CORE[s].t[2], CORE[s].t[1]+30):null; }};
})();
