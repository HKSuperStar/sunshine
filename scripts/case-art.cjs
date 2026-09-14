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
</svg>`
  };
  return art[slug];
};
