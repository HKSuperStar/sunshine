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
</svg>`
  };
  return art[slug];
};
