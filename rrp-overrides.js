/* The Battery People - official RRP enforcement.
   Pins finder prices for products on the RRP price list (12 June 2026).
   Load AFTER battery-finder-data.js. To update a price, edit the number here. */
(function(){
  var O = {
  "55D23LSMF": 180,
  "55D23RSMF": 220,
  "DIN100SMF": 255,
  "DIN44HSMF": 175,
  "DIN44SMF": 155,
  "DIN55H": 225,
  "DIN55SMF": 220,
  "DIN66H": 240,
  "DIN66SMF": 240,
  "DIN77HSMF": 250,
  "DIN77SMF": 260,
  "EFB55D23L-Q85": 260,
  "EFB55D23R-Q85": 260,
  "EFBDIN100H": 375,
  "EFBDIN66H": 310,
  "EFBDIN77H": 350,
  "EFBNS70L-S95": 265,
  "EFBNX120-7L-T110L": 340,
  "EXSNS70LSMF": 220,
  "EXSNS70SMF": 220,
  "EXSNX120-7LSMF": 330,
  "EXSNX120-7SMF": 330,
  "N100SMF": 280,
  "N70ZZSMF": 200,
  "NPCISS100H": 535,
  "NPCISS55H": 375,
  "NPCISS66H": 440,
  "NPCISS77H": 485,
  "NS60ALSMF": 160,
  "NS60ASMF": 160,
  "NS60LSMF": 160,
  "NX120-7LSMF": 200,
  "NX120-7SMF": 200
};
  var D = (window.BATTERY_FINDER_DATA && window.BATTERY_FINDER_DATA.fitments) || [];
  D.forEach(function(f){ (f.brandOptions||[]).forEach(function(b){ if(O[b.sku]!=null) b.price=O[b.sku]; }); });
})();
