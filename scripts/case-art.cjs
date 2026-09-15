// Native vector case-study artwork, matching the illustrated-hero visual language
// (navy / gold / mist palette, dashed radial rings, flat line-art icons).
// Only robot-lawn-mower is drawn now: every other case ships a photograph, and the
// builder falls back here only when a case has no image, so the other three entries
// had become unreachable.
module.exports = function caseArt(slug, alt) {
  const art = {
    'robot-lawn-mower': `<svg class="feature-image" viewBox="0 0 1600 900" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg">
<rect width="1600" height="900" fill="#f2f5ed"/>
<path d="M500 194A560 560 0 0 1 1100 194" fill="none" stroke="#e9c982" stroke-width="3" opacity=".4" stroke-dasharray="3 8"/>
<path d="M540 766A420 420 0 0 0 1060 766" fill="none" stroke="#e9c982" stroke-width="3" opacity=".3" stroke-dasharray="3 8"/>
<rect x="450" y="230" width="700" height="476" rx="30" fill="#fff" opacity=".6"/>
<g opacity=".55" fill="#cad8cf">
<rect x="454" y="262" width="692" height="26" rx="6"/>
<rect x="454" y="310" width="692" height="26" rx="6"/>
<rect x="454" y="358" width="692" height="26" rx="6"/>
<rect x="454" y="406" width="692" height="26" rx="6"/>
<rect x="454" y="454" width="692" height="26" rx="6"/>
<rect x="454" y="502" width="692" height="26" rx="6"/>
<rect x="454" y="550" width="692" height="26" rx="6"/>
<rect x="454" y="598" width="692" height="26" rx="6"/>
<rect x="454" y="646" width="692" height="26" rx="6"/>
</g>
<g transform="translate(880,430) rotate(-14)">
<path d="M-180,-80H-423L-463,80H-180Z" fill="#f2f5ed"/>
<path d="M-180,-80H-423L-463,80H-180Z" fill="#cad8cf" opacity=".34"/>
<g fill="#cad8cf" opacity=".34">
<rect x="-423" y="-80" width="243" height="16"/>
<rect x="-431" y="-48" width="251" height="16"/>
<rect x="-439" y="-16" width="259" height="16"/>
<rect x="-447" y="16" width="267" height="16"/>
<rect x="-455" y="48" width="275" height="16"/>
</g>
<path d="M-423,-80H-180M-463,80H-180" fill="none" stroke="#cad8cf" stroke-width="3" opacity=".8"/>
</g>
<rect x="450" y="230" width="700" height="476" rx="30" fill="none" stroke="#b58a39" stroke-width="4" stroke-dasharray="14 12"/>
<circle cx="450" cy="468" r="10" fill="#b58a39"/>
<circle cx="1150" cy="468" r="10" fill="#b58a39"/>
<circle cx="800" cy="230" r="10" fill="#b58a39"/>
<g transform="translate(880,430) rotate(-14)">
<g fill="#3a5566">
<rect x="-152" y="-134" width="86" height="56" rx="28"/>
<rect x="-152" y="78" width="86" height="56" rx="28"/>
<rect x="14" y="-100" width="60" height="42" rx="21"/>
<rect x="14" y="58" width="60" height="42" rx="21"/>
</g>
<g stroke="#122c3a" stroke-width="3">
<path d="M-124,-128V-84M-109,-128V-84M-94,-128V-84"/>
<path d="M-124,84V128M-109,84V128M-94,84V128"/>
<path d="M38,-94V-64M50,-94V-64"/>
<path d="M38,64V94M50,64V94"/>
</g>
<path d="M-160,-92L52,-66Q100,-58 118,-32Q128,-16 128,0Q128,16 118,32Q100,58 52,66L-160,92Q-180,92 -180,74L-180,-74Q-180,-92 -160,-92Z" fill="#122c3a"/>
<g fill="none" stroke="#3a5566" stroke-width="3">
<path d="M-148,-78L44,-54"/>
<path d="M-148,78L44,54"/>
<path d="M76,-42L76,42"/>
</g>
<rect x="-174" y="-42" width="16" height="84" rx="8" fill="#3a5566"/>
<rect x="-148" y="-32" width="86" height="64" rx="12" fill="#3a5566"/>
<rect x="-142" y="-24" width="52" height="26" rx="6" fill="#122c3a"/>
<path d="M-134,-16H-100M-134,-7H-112" fill="none" stroke="#cad8cf" stroke-width="2.5" opacity=".85"/>
<rect x="-142" y="10" width="38" height="7" rx="3.5" fill="#cad8cf" opacity=".75"/>
<circle cx="-76" cy="6" r="11" fill="#e9c982"/>
<circle cx="4" cy="-38" r="9" fill="#e9c982"/>
</g>
<path d="M1022 394L1070 382" fill="none" stroke="#b58a39" stroke-width="4" stroke-dasharray="7 9"/>
<path d="M1096,376L1077,392L1072,370Z" fill="#b58a39"/>
<circle cx="1030" cy="610" r="52" fill="none" stroke="#b58a39" stroke-width="3" stroke-dasharray="8 10"/>
<path d="M1006,592Q1030,578 1052,592Q1064,608 1054,626Q1030,640 1010,630Q996,612 1006,592Z" fill="#3a5566"/>
<g fill="#e9c982"><circle cx="1019" cy="603" r="5"/><circle cx="1039" cy="601" r="5"/><circle cx="1030" cy="620" r="5"/></g>
<rect x="540" y="678" width="120" height="54" rx="16" fill="#122c3a"/>
<rect x="572" y="658" width="14" height="22" rx="7" fill="#e9c982"/>
<rect x="614" y="658" width="14" height="22" rx="7" fill="#e9c982"/>
<rect x="560" y="694" width="80" height="8" rx="4" fill="#3a5566"/>
<circle cx="600" cy="716" r="7" fill="#e9c982"/>
<path d="M366 300H442" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M1158 300H1234" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M366 640H442" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M1158 640H1234" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<circle cx="300" cy="300" r="58" fill="#fff" stroke="#cad8cf"/>
<circle cx="300" cy="300" r="20" fill="#e9c982"/>
<g stroke="#b58a39" stroke-width="3" stroke-linecap="round">
<path d="M300 266v-12M300 346v12M266 300h-12M346 300h12M276 276l-9-9M324 324l9 9M324 276l9-9M276 324l-9 9"/>
</g>
<circle cx="1300" cy="300" r="58" fill="#fff" stroke="#cad8cf"/>
<path d="M1300 268c16 22 24 34 24 44a24 24 0 0 1-48 0c0-10 8-22 24-44Z" fill="#3a5566"/>
<g stroke="#b58a39" stroke-width="4" stroke-linecap="round"><path d="M1266 270v18M1334 270v18"/></g>
<circle cx="300" cy="640" r="58" fill="#fff" stroke="#cad8cf"/>
<path d="M300 596A44 44 0 1 1 256 640" fill="none" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 8"/>
<path d="M316,596L298,604L298,588Z" fill="#b58a39"/>
<circle cx="300" cy="640" r="28" fill="#122c3a"/>
<rect x="268" y="634" width="64" height="12" rx="6" fill="#e9c982" transform="rotate(24 300 640)"/>
<circle cx="300" cy="640" r="7" fill="#b58a39"/>
<circle cx="1300" cy="640" r="58" fill="#fff" stroke="#cad8cf"/>
<path d="M1282 610l36 24-36 24Z" fill="#122c3a"/>
<rect x="1276" y="680" width="48" height="8" rx="4" fill="#cad8cf"/>
<rect x="1276" y="680" width="21" height="8" rx="4" fill="#e9c982"/>
<path d="M650 168l10 26 26 10-26 10-10 26-10-26-26-10 26-10Z" fill="#b58a39" opacity=".8"/>
<path d="M1000 180l8 21 21 8-21 8-8 21-8-21-21-8 21-8Z" fill="#b58a39" opacity=".55"/>
</svg>`
  };
  return art[slug];
};