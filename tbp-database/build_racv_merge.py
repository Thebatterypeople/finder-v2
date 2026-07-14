#!/usr/bin/env python3
"""
TBP RACV2022 merge — pre-staged 2026-07-14, PAUSED awaiting filled racv_parts.csv.

Inputs (same dir):
  battery-finder-data.current.js  - live JS pulled from github.com/Thebatterypeople/finder-v2 @ main
  racv_rerun_batch_FULL_decompressed.txt                   - CRC-verified re-run batch (40 pages, 1,053 rows)
  code_crossref.csv               - 76 code -> Power Crank SKU mappings
  racv_parts.csv                  - FILLED racv_parts template: racv_part -> specs.
                                    Put the crossref-standard code (e.g. DIN55H, LN3 EFB, S95 (D26 stop-start))
                                    in the `description` column; battery_type must say AGM / EFB / SMF.
Output:
  battery-finder-data.js          - rebuilt file ready to push
  merge_report.txt                - eviction/splice/mapping audit

Rules (per README - Database Workflow):
  - Power Crank only; no match = Call Us (empty brandOptions)
  - AGM-specified vehicles NEVER map to EFB
  - Evict any confidence=guide-REVERIFY rows and any RACV guide rows for pages 100-142
    (verified no-op on 2026-07-14: live JS contains only SuperCharge 2019 + Claude 2026 rows)
"""
import json, csv, re, sys, collections

SKIP = ('===','---','END OF','RACV July','Session date','Columns:','Multiple part')

def load_js(path):
    s = open(path).read()
    return json.loads(s[s.index('{'):s.rstrip().rstrip(';').rindex('}')+1])

def years(y):
    y = y.strip()
    m = re.match(r'^(\d{4})\s*(?:to|-|–)\s*(\d{4})$', y)
    if m: return int(m.group(1)), int(m.group(2))
    m = re.match(r'^(\d{4})\s*onward', y)
    if m: return int(m.group(1)), 9999
    m = re.match(r'^before\s*(\d{4})', y, re.I)
    if m: return 0, int(m.group(1))
    m = re.match(r'^(\d{4})$', y)
    if m: return int(m.group(1)), int(m.group(1))
    return 0, 9999

def main():
    data = load_js('battery-finder-data.current.js')
    fits = data['fitments']
    n0 = len(fits)

    # 1. EVICT: REVERIFY rows + old RACV guide rows for pages 100-142
    fits = [f for f in fits if 'REVERIFY' not in json.dumps(f)
            and not (f.get('source','').upper().startswith('RACV')
                     and 100 <= int(f.get('page', 0) or 0) <= 142)]
    # also evict ANY pre-existing RACV2022 rows so the script is idempotent
    fits = [f for f in fits if f.get('source') != 'RACV2022']
    evicted = n0 - len(fits)

    # 2. Power Crank catalog from existing brandOptions
    catalog = {}
    for f in fits:
        for b in f['brandOptions']:
            if b['brand'] == 'Power Crank': catalog[b['sku']] = b

    # 3. crossref: any code column -> (sku, confidence)
    xref = {}
    for r in csv.DictReader(open('code_crossref.csv')):
        sku = r['powercrank_sku'].strip()
        conf = r['match_confidence'].strip()
        if not sku or conf.upper().startswith('PENDING'): continue
        for col in ('standard_code','supercharge_code','century_code','yhi_code','other_code'):
            c = r[col].strip()
            if c: xref[c.upper()] = (sku, conf)

    # 4. racv_parts: racv_part -> (crossref code, battery_type)
    parts = {}
    for r in csv.DictReader(open('racv_parts.csv')):
        code = r['racv_part'].strip()
        if code: parts[code] = (r['description'].strip(), r['battery_type'].strip().upper())

    def is_agm_sku(sku, b):
        return 'AGM' in sku.upper() or sku.upper().startswith('NPCISS') or 'AGM' in (b or {}).get('category','').upper()
    def is_efb_sku(sku):
        return sku.upper().startswith('EFB')

    # 4b. Extra catalog: SKUs not yet in live JS (URLs from Jamie 2026-07-14; prices = Mar-25 RRP)
    SHOP='https://powercrank.shop/products/'
    EX={
     'EXSNS70SMF':(286.74,SHOP+'exsns70smf'),'EXSNX120-7SMF':(345.39,SHOP+'1000cca-extreme-series-starting-battery'),
     'EXSNX120-7LSMF':(345.39,SHOP+'exsnx120-7l-4x4-1000-cca-smf'),
     'NS40ZASMF':(144.09,SHOP+'japanese-series-starting-battery-5'),'NS40ZALSMF':(144.09,SHOP+'japanese-series-starting-battery-6'),
     'NS40ZSMF':(144.09,''),'NS40ZLSMF':(144.09,SHOP+'japanese-series-starting-battery-7'),
     'NS60ASMF':(182.98,SHOP+'japanese-series-starting-battery-1'),'NS60ALSMF':(182.98,''),
     'NS60SNLSMF':(182.98,SHOP+'japanese-series-starting-battery-with-hold-down-ledge-1'),
     'EFB55D23R-Q85':(292.54,''),'EFBNS70L-S95':(309.82,''),'55D23RSMF':(224.17,''),'NS50LASMF':(212.10,''),
     'NPCDP12VNS70':(361.20,''),'NPCDP12VNS70L':(361.20,''),'NPCDP12VNX120-7':(429.00,''),'NPCDP12VNX120-7L':(429.00,''),
     'NPCISS110H':(863.65,''),'DIN55H':(247.05,''),'N100SMF':(393.79,''),'78DTSMF':(315.66,''),
     'DIN110SMF':(417.56,''),'EFBDIN110H':(513.19,''),'EFBNS40ZL-K42':(189.22,''),
    }
    for sku,(rrp,url) in EX.items():
        if sku not in catalog:
            catalog[sku]={'brand':'Power Crank','sku':sku,'name':sku,'price':rrp,'url':url,
                'category':'','cca':None,'ah':None,'dimensions':'','matchConfidence':'',
                'imageUrl':'','wixProductSlug':'','pricedFrom':'Mar-25 RRP pricelist'}

    OWNER_NOTE_CODES={'5582','5593','5594'}
    SO_NOTES={'2134':'2134 = Special Order battery (shorter than standard NS60 class; no Power Crank equivalent).',
     '4052':'4052 = Special Order battery (no Power Crank equivalent).',
     '6603':'6603 = Special Order 6-volt battery (potentially D12) - no Power Crank 6V starting range.'}
    OWNER_NOTE='Owner note: EXS SMF alternative listed - TBP prefers non-AGM for under-bonnet fitments.'

    # 5. Build RACV2022 rows
    unmapped_codes, missing_products, agm_blocked = collections.Counter(), collections.Counter(), collections.Counter()
    new_rows = []
    COLS = ['heavy_duty_part','extra_heavy_duty_part','premium_part','agm_efb_part']
    for row in csv.DictReader(open('racv_book_complete.csv')):
        make,model,variant,year = row['make'],row['model'],row['variant'],row['year']
        hd,xhd,prem,agm = row['heavy_duty_part'],row['extra_heavy_duty_part'],row['premium_part'],row['agm_efb_part']
        comments,reg,page = row['comments'],row['reg_required'],row['page']
        quarantined = row['confidence'] != 'guide'
        if quarantined:
            hd=xhd=prem=agm=''  # no part options from suspect transcription
            comments = (comments+' ' if comments else '')+'Guide page pending re-verification - call us to confirm the right battery.'
        yf, yt = years(year)
        c = comments.lower()
        must_agm = 'agm' in c or (agm.strip() and parts.get(agm.split()[0], ('',''))[1] == 'AGM')
        opts, seen = [], set()
        for col, val in (('agm_efb_part',agm),('premium_part',prem),('extra_heavy_duty_part',xhd),('heavy_duty_part',hd)):
            for code in re.split(r'[ /]+', val.strip()):
                if not code: continue
                if code=='3972':  # vehicle-specific per Jamie 2026-07-14
                    std = 'MF44' if 'ECOSPORT' in model.upper() else 'DIN77H EFB (LN4)' if 'RANGER' in model.upper() else ''
                    btype = 'EFB' if 'RANGER' in model.upper() else ''
                    if not std: unmapped_codes[code] += 1; continue
                elif code not in parts or not parts[code][0]:
                    unmapped_codes[code] += 1; continue
                else:
                    std, btype = parts[code]
                hits=[]
                for key in [k.strip() for k in std.split(';') if k.strip()]:
                    h = xref.get(key.upper())
                    if h: hits.append(h)
                if not hits:
                    unmapped_codes[code] += 1; continue
                for sku, conf in hits:
                    b = catalog.get(sku)
                    if (must_agm or btype == 'AGM') and is_efb_sku(sku):
                        agm_blocked[f'{code}->{sku}'] += 1; continue   # AGM never downgrades to EFB
                    if b is None:
                        missing_products[sku] += 1; continue
                    if sku in seen: continue
                    seen.add(sku)
                    o = dict(b); o['matchConfidence'] = conf
                    opts.append(o)
                allcodes=set(re.split(r'[ /]+', (hd+' '+xhd+' '+prem+' '+agm).strip()))
                if allcodes & OWNER_NOTE_CODES and OWNER_NOTE not in comments:
                    comments = (comments+' ' if comments else '')+OWNER_NOTE
                for so,note in SO_NOTES.items():
                    if so in allcodes and note not in comments:
                        comments = (comments+' ' if comments else '')+note
        new_rows.append({'make':make,'model':model,'series':'','yearRange':year,'yearFrom':yf,'yearTo':yt,
            'engineTrim':variant,'fuel':('Diesel' if 'diesel' in variant.lower() else 'Petrol' if 'petrol' in variant.lower() else ''),
            'stopStart':('Y' if 'stop start' in c else ''),
            'batteryType':('AGM' if must_agm and 'efb' not in c else 'EFB' if 'efb' in c else ''),
            'source':'RACV2022','sourceCode':' | '.join(f'{k.split("_")[0]}:{v}' for k,v in zip(['HD','XHD','PREM','AGM'],[hd,xhd,prem,agm]) if v.strip()) or '',
            'page':int(page),'regRequired':reg,'comments':comments,'brandOptions':opts})

    fits.extend(new_rows)
    fits.sort(key=lambda f:(f['make'].upper(), f['model'].upper(), f['yearFrom']))
    data['fitments'] = fits
    data['fitmentCount'] = len(fits)
    data['generatedFrom'] = 'TBP multi-source fitment database + RACV July 2022 guide re-run (2026-07-14)'
    open('battery-finder-data.js','w').write('window.BATTERY_FINDER_DATA = ' + json.dumps(data) + ';\n')

    callus = sum(1 for f in new_rows if not f['brandOptions'])
    rep = [f'evicted from live JS: {evicted}', f'RACV2022 rows spliced: {len(new_rows)}',
           f'rows with >=1 Power Crank option: {len(new_rows)-callus}', f'rows as Call Us: {callus}',
           f'total fitments: {len(fits)}', '', 'UNMAPPED RACV CODES (fill racv_parts/crossref):']
    rep += [f'  {c}: {n} uses' for c,n in unmapped_codes.most_common()]
    rep += ['', 'SKUs in crossref but not in live catalog (pull details from Wix):'] + [f'  {s}: {n}' for s,n in missing_products.most_common()]
    rep += ['', 'AGM-rule blocks (EFB suppressed for AGM-required vehicle):'] + [f'  {k}: {n}' for k,n in agm_blocked.most_common()]
    open('merge_report.txt','w').write('\n'.join(rep)+'\n')
    print('\n'.join(rep[:8]))

if __name__ == '__main__':
    main()
