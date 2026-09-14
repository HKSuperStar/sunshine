// Native vector case-study artwork, matching the illustrated-hero visual language
// (navy / gold / mist palette, dashed radial rings, flat line-art icons).
module.exports = function caseArt(slug, alt) {
  const art = {
    eureka: `<svg class="feature-image" viewBox="0 0 1600 900" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg">
<rect width="1600" height="900" fill="#f2f5ed"/>
<circle cx="800" cy="450" r="380" fill="none" stroke="#122c3a" opacity=".08"/>
<circle cx="800" cy="450" r="300" fill="none" stroke="#122c3a" opacity=".06" stroke-dasharray="4 10"/>
<path d="M800 450L490 230" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 450L1110 230" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 450L490 670" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 450L1110 670" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M660 560A160 160 0 0 0 940 560" fill="none" stroke="#e9c982" stroke-width="3" opacity=".5" stroke-dasharray="3 8"/>
<path d="M620 605A210 210 0 0 0 980 605" fill="none" stroke="#e9c982" stroke-width="3" opacity=".3" stroke-dasharray="3 8"/>
<circle cx="800" cy="450" r="130" fill="#122c3a"/>
<circle cx="800" cy="450" r="100" fill="none" stroke="#3a5566"/>
<circle cx="800" cy="382" r="20" fill="#e9c982"/>
<circle cx="760" cy="500" r="7" fill="#e9c982"/>
<circle cx="800" cy="512" r="7" fill="#e9c982"/>
<circle cx="840" cy="500" r="7" fill="#e9c982"/>
<circle cx="490" cy="230" r="62" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(490,230)"><path d="M-16,-22L26,0L-16,22Z" fill="#122c3a"/></g>
<circle cx="1110" cy="230" r="62" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1110,230)"><circle cx="-11" cy="-6" r="13" fill="#122c3a"/><circle cx="11" cy="-6" r="13" fill="#122c3a"/><rect x="-16" y="-10" width="32" height="32" fill="#122c3a" transform="rotate(45 0 6)"/></g>
<circle cx="490" cy="670" r="62" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(490,670)"><path d="M-40,-22H40C46,-22 50,-18 50,-12V12C50,18 46,22 40,22H-2L-22,38V22H-40C-46,22 -50,18 -50,12V-12C-50,-18 -46,-22 -40,-22Z" fill="#122c3a"/><circle cx="-16" cy="0" r="5" fill="#fff"/><circle cx="0" cy="0" r="5" fill="#fff"/><circle cx="16" cy="0" r="5" fill="#fff"/></g>
<circle cx="1110" cy="670" r="62" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1110,670)"><path d="M0,-30L8,-8L30,0L8,8L0,30L-8,8L-30,0L-8,-8Z" fill="#b58a39"/></g>
</svg>`,
    'smart-litter-box': `<svg class="feature-image" viewBox="0 0 1600 900" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg">
<rect width="1600" height="900" fill="#f2f5ed"/>
<circle cx="800" cy="460" r="380" fill="none" stroke="#122c3a" opacity=".08"/>
<circle cx="800" cy="460" r="290" fill="none" stroke="#122c3a" opacity=".06" stroke-dasharray="4 10"/>
<path d="M800 460L471 340" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 460L599 173" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 460L800 110" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 460L1001 173" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 460L1129 340" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 654L800 766" fill="none" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9" opacity=".7"/>
<path d="M548 790L676 742L800 790L924 742L1052 790" fill="none" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M611 465A192 192 0 0 1 989 465" fill="none" stroke="#b58a39" stroke-width="4" stroke-dasharray="6 10"/>
<g transform="translate(989,465) rotate(80)"><path d="M-12,-11L14,0L-12,11Z" fill="#b58a39"/></g>
<path d="M593 402A228 228 0 0 1 1007 402" fill="none" stroke="#e9c982" stroke-width="3" opacity=".5" stroke-dasharray="3 8"/>
<path d="M600,304L609,321L626,330L609,339L600,356L591,339L574,330L591,321Z" fill="#b58a39" opacity=".7"/>
<path d="M990,300L997,313L1010,320L997,327L990,340L983,327L970,320L983,313Z" fill="#b58a39" opacity=".7"/>
<rect x="650" y="572" width="300" height="76" rx="16" fill="#122c3a"/>
<path d="M662,572V498A138 138 0 0 1 938,498V572Z" fill="#122c3a"/>
<path d="M686,566V498A114 114 0 0 1 914,498V566Z" fill="none" stroke="#3a5566"/>
<path d="M672,610H928" fill="none" stroke="#3a5566" stroke-width="3"/>
<rect x="772" y="622" width="56" height="9" rx="4.5" fill="#e9c982"/>
<circle cx="684" cy="591" r="6" fill="#e9c982"/>
<circle cx="704" cy="591" r="4" fill="#3a5566"/>
<circle cx="720" cy="591" r="4" fill="#3a5566"/>
<ellipse cx="800" cy="480" rx="74" ry="80" fill="#f2f5ed" stroke="#e9c982" stroke-width="4"/>
<path d="M774,474L766,436L790,461Z" fill="#122c3a"/>
<path d="M826,474L834,436L810,461Z" fill="#122c3a"/>
<circle cx="800" cy="492" r="32" fill="#122c3a"/>
<circle cx="789" cy="486" r="5" fill="#e9c982"/>
<circle cx="811" cy="486" r="5" fill="#e9c982"/>
<path d="M793,498L807,498L800,506Z" fill="#e9c982"/>
<circle cx="471" cy="340" r="58" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(471,340)" fill="#b58a39"><ellipse cy="14" rx="21" ry="16"/><ellipse cx="-23" cy="-7" rx="7.5" ry="9.5"/><ellipse cx="-8" cy="-20" rx="7.5" ry="9.5"/><ellipse cx="8" cy="-20" rx="7.5" ry="9.5"/><ellipse cx="23" cy="-7" rx="7.5" ry="9.5"/></g>
<circle cx="599" cy="173" r="58" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(599,173)"><rect x="-34" y="-26" width="68" height="52" rx="8" fill="#122c3a"/><circle cx="-16" cy="-10" r="6.5" fill="#e9c982"/><path d="M-28,18L-6,-6L8,8L18,-2L30,18Z" fill="#f2f5ed"/></g>
<circle cx="800" cy="110" r="58" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(800,110)"><rect x="-27" y="-40" width="54" height="80" rx="10" fill="#122c3a"/><rect x="-19" y="-31" width="38" height="54" rx="4" fill="#f2f5ed"/><path d="M-7,-16L13,-4L-7,8Z" fill="#b58a39"/><rect x="-9" y="28" width="18" height="4" rx="2" fill="#e9c982"/></g>
<circle cx="1001" cy="173" r="58" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1001,173)"><rect x="-19" y="-38" width="7" height="14" rx="3.5" fill="#122c3a"/><rect x="12" y="-38" width="7" height="14" rx="3.5" fill="#122c3a"/><rect x="-32" y="-28" width="64" height="56" rx="8" fill="#122c3a"/><path d="M-32,-12H32" fill="none" stroke="#3a5566" stroke-width="3"/><g fill="#f2f5ed"><circle cx="-16" cy="2" r="4"/><circle cy="2" r="4"/><circle cx="16" cy="2" r="4"/><circle cx="-16" cy="17" r="4"/><circle cy="17" r="4"/></g><circle cx="16" cy="17" r="5.5" fill="#e9c982"/></g>
<circle cx="1129" cy="340" r="58" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1129,340)"><rect x="-42" y="-32" width="84" height="58" rx="18" fill="#122c3a"/><path d="M6,24L14,42L30,24Z" fill="#122c3a"/><path d="M0,16C-20,4 -25,-10 -14,-17C-7,-21 -2,-17 0,-13C2,-17 7,-21 14,-17C25,-10 20,4 0,16Z" fill="#e9c982"/></g>
<g fill="#122c3a"><circle cx="548" cy="790" r="21"/><circle cx="676" cy="742" r="21"/><circle cx="924" cy="742" r="21"/><circle cx="1052" cy="790" r="21"/></g>
<g fill="#e9c982"><circle cx="548" cy="790" r="6.5"/><circle cx="676" cy="742" r="6.5"/><circle cx="924" cy="742" r="6.5"/><circle cx="1052" cy="790" r="6.5"/></g>
<circle cx="800" cy="790" r="25" fill="#b58a39"/>
<circle cx="800" cy="790" r="9" fill="#f2f5ed"/>
</svg>`,
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
</svg>`,
    'womens-athleisure': `<svg class="feature-image" viewBox="0 0 1600 900" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg">
<rect width="1600" height="900" fill="#f2f5ed"/>
<circle cx="800" cy="470" r="400" fill="none" stroke="#122c3a" opacity=".08"/>
<circle cx="800" cy="470" r="318" fill="none" stroke="#122c3a" opacity=".06" stroke-dasharray="4 10"/>
<path d="M572 311A278 278 0 0 1 1028 311" fill="none" stroke="#e9c982" stroke-width="3" opacity=".5" stroke-dasharray="3 8"/>
<path d="M532 303A316 316 0 0 1 1068 303" fill="none" stroke="#e9c982" stroke-width="3" opacity=".3" stroke-dasharray="3 8"/>
<path d="M800 470L452 246" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 470L1148 246" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 470L452 694" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<path d="M800 470L1148 694" stroke="#b58a39" stroke-width="3" stroke-dasharray="5 9"/>
<rect x="626" y="386" width="36" height="170" rx="10" fill="#fff" stroke="#cad8cf"/>
<g stroke="#122c3a" stroke-width="2.5"><path d="M638,402H656M646,416H656M646,430H656M638,444H656M646,458H656M638,486H656M646,500H656M646,514H656M638,528H656M646,542H656"/></g>
<rect x="628" y="465" width="32" height="9" rx="4.5" fill="#b58a39"/>
<path d="M662,470H691" stroke="#b58a39" stroke-width="2.5" stroke-dasharray="4 7"/>
<path d="M902,282C934,318 946,378 959,428" fill="none" stroke="#3a5566" stroke-width="2.5"/>
<rect x="946" y="418" width="124" height="104" rx="12" fill="#fff" stroke="#cad8cf"/>
<circle cx="968" cy="438" r="6" fill="#f2f5ed" stroke="#cad8cf"/>
<rect x="986" y="434" width="52" height="8" rx="4" fill="#b58a39"/>
<path d="M958,456H1058" stroke="#cad8cf"/>
<g fill="#122c3a"><rect x="958" y="468" width="54" height="7" rx="3.5"/><rect x="958" y="484" width="42" height="7" rx="3.5"/></g>
<g fill="#b58a39"><rect x="1026" y="468" width="32" height="7" rx="3.5"/><rect x="1038" y="484" width="20" height="7" rx="3.5"/></g>
<g fill="#cad8cf"><rect x="958" y="500" width="48" height="7" rx="3.5"/><rect x="1046" y="500" width="12" height="7" rx="3.5"/></g>
<path d="M704,242Q800,266 896,242C908,300 914,346 912,398C908,470 894,540 878,612C866,672 860,742 856,806H817C816,742 812,672 808,612C804,548 802,500 800,452C798,500 796,548 792,612C788,672 784,742 783,806H744C740,742 734,672 722,612C706,540 692,470 688,398C686,346 692,300 704,242Z" fill="#122c3a"/>
<path d="M704,242Q800,266 896,242C902,268 906,292 909,318H691C694,292 698,268 704,242Z" fill="#3a5566"/>
<path d="M712,254Q800,277 888,254" fill="none" stroke="#e9c982" stroke-width="2.5" opacity=".8"/>
<path d="M692,308H908" fill="none" stroke="#b58a39" stroke-width="3.5"/>
<g fill="none" stroke="#3a5566" stroke-width="3"><path d="M692,314C734,356 766,386 800,398"/><path d="M908,314C866,356 834,386 800,398"/><path d="M800,398L826,426L800,452L774,426Z"/><path d="M704,322C702,410 734,556 758,806"/><path d="M896,322C898,410 866,556 842,806"/></g>
<rect x="856" y="466" width="28" height="82" rx="13" fill="none" stroke="#3a5566" stroke-width="3"/>
<path d="M741,766H784L783,806H744Z" fill="#3a5566"/>
<path d="M859,766H816L817,806H856Z" fill="#3a5566"/>
<g stroke="#b58a39" stroke-width="3"><path d="M741,766H784M816,766H859"/></g>
<path d="M900,690H812" stroke="#b58a39" stroke-width="3" stroke-dasharray="6 8"/>
<circle cx="900" cy="690" r="5" fill="#b58a39"/>
<circle cx="452" cy="246" r="60" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(452,246)"><rect x="-42" y="-18" width="84" height="36" rx="18" fill="#122c3a"/><circle cx="-24" cy="-2" r="9" fill="none" stroke="#e9c982" stroke-width="3.5"/><path d="M-17.5,5L-9,14" stroke="#e9c982" stroke-width="4" stroke-linecap="round"/><rect x="-2" y="-9" width="34" height="5" rx="2.5" fill="#f2f5ed"/><rect x="-2" y="2" width="22" height="5" rx="2.5" fill="#b58a39"/></g>
<circle cx="1148" cy="246" r="60" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1148,246)"><path d="M-46,-30H46C53,-30 58,-25 58,-18V16C58,23 53,28 46,28H4L-18,46V28H-46C-53,28 -58,23 -58,16V-18C-58,-25 -53,-30 -46,-30Z" fill="#122c3a"/><path d="M-13,-13C-13,-26 13,-26 13,-13C13,-5 0,-4 0,6" fill="none" stroke="#e9c982" stroke-width="7.5" stroke-linecap="round"/><circle cx="0" cy="19" r="5" fill="#e9c982"/></g>
<circle cx="452" cy="694" r="60" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(452,694)"><rect x="-46" y="-37" width="92" height="74" rx="12" fill="#122c3a"/><g fill="#e9c982"><circle cx="-25" cy="-17" r="10"/><path d="M-31,-9H-19L-27,7Z"/><circle cx="3" cy="-17" r="10"/><path d="M-3,-9H9L1,7Z"/></g><rect x="-32" y="12" width="64" height="6" rx="3" fill="#f2f5ed"/><rect x="-32" y="23" width="42" height="6" rx="3" fill="#cad8cf"/></g>
<circle cx="1148" cy="694" r="60" fill="#fff" stroke="#cad8cf"/>
<g transform="translate(1148,694)"><rect x="-44" y="-38" width="88" height="76" rx="6" fill="#122c3a"/><g fill="#e9c982"><rect x="-39" y="-33" width="18" height="14"/><rect x="-18" y="-33" width="26" height="14"/><rect x="11" y="-33" width="28" height="14"/></g><g fill="#f2f5ed"><rect x="-39" y="-15" width="18" height="14"/><rect x="-18" y="-15" width="26" height="14"/><rect x="11" y="-15" width="28" height="14"/><rect x="-39" y="3" width="18" height="14"/><rect x="11" y="3" width="28" height="14"/><rect x="-39" y="21" width="18" height="14"/><rect x="-18" y="21" width="26" height="14"/><rect x="11" y="21" width="28" height="14"/></g><rect x="-18" y="3" width="26" height="14" fill="#b58a39"/></g>
<path d="M664,142l10,26 26,10-26,10-10,26-10-26-26-10 26-10Z" fill="#b58a39" opacity=".8"/>
<path d="M944,146l8,21 21,8-21,8-8,21-8-21-21-8 21-8Z" fill="#b58a39" opacity=".55"/>
</svg>`
  };
  return art[slug];
};
