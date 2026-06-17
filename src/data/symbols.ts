export interface SymbolData {
  char: string;
  name: string;
  category: string;
  unicode: string;
  htmlEntity: string;
  htmlCode: string;
  altCode: string;
  macShortcut: string;
  keywords: string[];
  popular?: boolean;
}

export const categories = [
  { id: "all", label: "All", icon: "⊞" },
  { id: "accent-letters", label: "Accent Letters", icon: "é" },
  { id: "arrows", label: "Arrows", icon: "→" },
  { id: "currency", label: "Currency", icon: "€" },
  { id: "math", label: "Math", icon: "∑" },
  { id: "greek", label: "Greek", icon: "Ω" },
  { id: "fractions", label: "Fractions", icon: "½" },
  { id: "superscripts", label: "Superscripts", icon: "²" },
  { id: "subscripts", label: "Subscripts", icon: "₂" },
  { id: "punctuation", label: "Punctuation", icon: "…" },
  { id: "legal", label: "Legal", icon: "©" },
  { id: "checkmarks", label: "Checkmarks", icon: "✓" },
  { id: "crosses", label: "Crosses", icon: "✕" },
  { id: "hearts", label: "Hearts", icon: "♥" },
  { id: "stars", label: "Stars", icon: "★" },
  { id: "music", label: "Music", icon: "♪" },
  { id: "cards", label: "Cards", icon: "♠" },
  { id: "shapes", label: "Shapes", icon: "◆" },
  { id: "zodiac", label: "Zodiac", icon: "♈" },
  { id: "gender", label: "Gender", icon: "♀" },
  { id: "misc", label: "Miscellaneous", icon: "☮" },
  { id: "box-drawing", label: "Box Drawing", icon: "╗" },
  { id: "dingbats", label: "Dingbats & Emojis", icon: "☺" },
];

export const symbols: SymbolData[] = [
  // ===== LEGAL & BUSINESS =====
  { char: "©", name: "Copyright Sign", category: "legal", unicode: "U+00A9", htmlEntity: "&copy;", htmlCode: "&#169;", altCode: "Alt + 0169", macShortcut: "Option + G", keywords: ["copyright", "legal", "c circle"], popular: true },
  { char: "®", name: "Registered Sign", category: "legal", unicode: "U+00AE", htmlEntity: "&reg;", htmlCode: "&#174;", altCode: "Alt + 0174", macShortcut: "Option + R", keywords: ["registered", "trademark", "r circle"], popular: true },
  { char: "™", name: "Trademark Sign", category: "legal", unicode: "U+2122", htmlEntity: "&trade;", htmlCode: "&#8482;", altCode: "Alt + 0153", macShortcut: "Option + 2", keywords: ["trademark", "tm"], popular: true },
  { char: "§", name: "Section Sign", category: "legal", unicode: "U+00A7", htmlEntity: "&sect;", htmlCode: "&#167;", altCode: "Alt + 0167", macShortcut: "Option + 6", keywords: ["section", "law", "legal"], popular: false },
  { char: "¶", name: "Pilcrow Sign", category: "legal", unicode: "U+00B6", htmlEntity: "&para;", htmlCode: "&#182;", altCode: "Alt + 0182", macShortcut: "Option + 7", keywords: ["paragraph", "pilcrow"], popular: false },
  { char: "†", name: "Dagger", category: "legal", unicode: "U+2020", htmlEntity: "&dagger;", htmlCode: "&#8224;", altCode: "Alt + 0134", macShortcut: "Option + T", keywords: ["dagger", "cross", "footnote"], popular: false },
  { char: "‡", name: "Double Dagger", category: "legal", unicode: "U+2021", htmlEntity: "&Dagger;", htmlCode: "&#8225;", altCode: "Alt + 0135", macShortcut: "Option + Shift + 7", keywords: ["double dagger", "footnote"], popular: false },

  // ===== CURRENCY =====
  { char: "€", name: "Euro Sign", category: "currency", unicode: "U+20AC", htmlEntity: "&euro;", htmlCode: "&#8364;", altCode: "Alt + 0128", macShortcut: "Option + Shift + 2", keywords: ["euro", "currency", "money", "europe"], popular: true },
  { char: "£", name: "Pound Sign", category: "currency", unicode: "U+00A3", htmlEntity: "&pound;", htmlCode: "&#163;", altCode: "Alt + 0163", macShortcut: "Option + 3", keywords: ["pound", "gbp", "british", "currency"], popular: true },
  { char: "¥", name: "Yen Sign", category: "currency", unicode: "U+00A5", htmlEntity: "&yen;", htmlCode: "&#165;", altCode: "Alt + 0165", macShortcut: "Option + Y", keywords: ["yen", "yuan", "japanese", "currency"], popular: true },
  { char: "¢", name: "Cent Sign", category: "currency", unicode: "U+00A2", htmlEntity: "&cent;", htmlCode: "&#162;", altCode: "Alt + 0162", macShortcut: "Option + 4", keywords: ["cent", "penny", "currency"], popular: false },
  { char: "$", name: "Dollar Sign", category: "currency", unicode: "U+0024", htmlEntity: "&dollar;", htmlCode: "&#36;", altCode: "Alt + 36", macShortcut: "Shift + 4", keywords: ["dollar", "usd", "currency", "money"], popular: true },
  { char: "₹", name: "Indian Rupee", category: "currency", unicode: "U+20B9", htmlEntity: "&#8377;", htmlCode: "&#8377;", altCode: "Alt + 8377", macShortcut: "N/A", keywords: ["rupee", "indian", "inr", "currency"], popular: false },
  { char: "₩", name: "Korean Won", category: "currency", unicode: "U+20A9", htmlEntity: "&#8361;", htmlCode: "&#8361;", altCode: "Alt + 8361", macShortcut: "N/A", keywords: ["won", "korean", "currency"], popular: false },
  { char: "₦", name: "Naira Sign", category: "currency", unicode: "U+20A6", htmlEntity: "&#8358;", htmlCode: "&#8358;", altCode: "Alt + 8358", macShortcut: "N/A", keywords: ["naira", "nigerian", "currency"], popular: false },
  { char: "₺", name: "Turkish Lira", category: "currency", unicode: "U+20BA", htmlEntity: "&#8378;", htmlCode: "&#8378;", altCode: "Alt + 8378", macShortcut: "N/A", keywords: ["lira", "turkish", "currency"], popular: false },
  { char: "₽", name: "Russian Ruble", category: "currency", unicode: "U+20BD", htmlEntity: "&#8381;", htmlCode: "&#8381;", altCode: "Alt + 8381", macShortcut: "N/A", keywords: ["ruble", "russian", "currency"], popular: false },
  { char: "₿", name: "Bitcoin Sign", category: "currency", unicode: "U+20BF", htmlEntity: "&#8383;", htmlCode: "&#8383;", altCode: "N/A", macShortcut: "N/A", keywords: ["bitcoin", "crypto", "btc", "currency"], popular: false },
  { char: "¤", name: "Currency Sign", category: "currency", unicode: "U+00A4", htmlEntity: "&curren;", htmlCode: "&#164;", altCode: "Alt + 0164", macShortcut: "Option + Shift + 3", keywords: ["currency", "generic"], popular: false },

  // ===== MATH =====
  { char: "°", name: "Degree Symbol", category: "math", unicode: "U+00B0", htmlEntity: "&deg;", htmlCode: "&#176;", altCode: "Alt + 0176", macShortcut: "Option + Shift + 8", keywords: ["degree", "temperature", "angle"], popular: true },
  { char: "±", name: "Plus-Minus Sign", category: "math", unicode: "U+00B1", htmlEntity: "&plusmn;", htmlCode: "&#177;", altCode: "Alt + 0177", macShortcut: "Option + Shift + =", keywords: ["plus minus", "tolerance", "math"], popular: true },
  { char: "×", name: "Multiplication Sign", category: "math", unicode: "U+00D7", htmlEntity: "&times;", htmlCode: "&#215;", altCode: "Alt + 0215", macShortcut: "Option + X", keywords: ["multiply", "times", "cross", "math"], popular: true },
  { char: "÷", name: "Division Sign", category: "math", unicode: "U+00F7", htmlEntity: "&divide;", htmlCode: "&#247;", altCode: "Alt + 0247", macShortcut: "Option + /", keywords: ["divide", "division", "math"], popular: true },
  { char: "√", name: "Square Root", category: "math", unicode: "U+221A", htmlEntity: "&radic;", htmlCode: "&#8730;", altCode: "Alt + 251", macShortcut: "Option + V", keywords: ["square root", "radical", "math"], popular: true },
  { char: "∞", name: "Infinity", category: "math", unicode: "U+221E", htmlEntity: "&infin;", htmlCode: "&#8734;", altCode: "Alt + 236", macShortcut: "Option + 5", keywords: ["infinity", "forever", "math"], popular: true },
  { char: "∑", name: "Summation", category: "math", unicode: "U+2211", htmlEntity: "&sum;", htmlCode: "&#8721;", altCode: "Alt + 228", macShortcut: "Option + W", keywords: ["summation", "sigma", "sum", "math"], popular: false },
  { char: "∏", name: "N-Ary Product", category: "math", unicode: "U+220F", htmlEntity: "&prod;", htmlCode: "&#8719;", altCode: "Alt + 8719", macShortcut: "Option + Shift + P", keywords: ["product", "pi", "math"], popular: false },
  { char: "∂", name: "Partial Differential", category: "math", unicode: "U+2202", htmlEntity: "&part;", htmlCode: "&#8706;", altCode: "Alt + 8706", macShortcut: "Option + D", keywords: ["partial", "differential", "calculus", "math"], popular: false },
  { char: "∫", name: "Integral", category: "math", unicode: "U+222B", htmlEntity: "&int;", htmlCode: "&#8747;", altCode: "Alt + 8747", macShortcut: "Option + B", keywords: ["integral", "calculus", "math"], popular: false },
  { char: "∇", name: "Nabla", category: "math", unicode: "U+2207", htmlEntity: "&nabla;", htmlCode: "&#8711;", altCode: "Alt + 8711", macShortcut: "N/A", keywords: ["nabla", "del", "gradient", "math"], popular: false },
  { char: "≈", name: "Approximately Equal", category: "math", unicode: "U+2248", htmlEntity: "&asymp;", htmlCode: "&#8776;", altCode: "Alt + 247", macShortcut: "Option + X", keywords: ["approximately", "equal", "almost", "math"], popular: false },
  { char: "≠", name: "Not Equal To", category: "math", unicode: "U+2260", htmlEntity: "&ne;", htmlCode: "&#8800;", altCode: "Alt + 8800", macShortcut: "Option + =", keywords: ["not equal", "inequality", "math"], popular: false },
  { char: "≤", name: "Less Than or Equal", category: "math", unicode: "U+2264", htmlEntity: "&le;", htmlCode: "&#8804;", altCode: "Alt + 8804", macShortcut: "Option + ,", keywords: ["less than", "equal", "math"], popular: false },
  { char: "≥", name: "Greater Than or Equal", category: "math", unicode: "U+2265", htmlEntity: "&ge;", htmlCode: "&#8805;", altCode: "Alt + 8805", macShortcut: "Option + .", keywords: ["greater than", "equal", "math"], popular: false },
  { char: "≡", name: "Identical To", category: "math", unicode: "U+2261", htmlEntity: "&equiv;", htmlCode: "&#8801;", altCode: "Alt + 240", macShortcut: "N/A", keywords: ["identical", "congruent", "math"], popular: false },
  { char: "∝", name: "Proportional To", category: "math", unicode: "U+221D", htmlEntity: "&prop;", htmlCode: "&#8733;", altCode: "Alt + 8733", macShortcut: "N/A", keywords: ["proportional", "math"], popular: false },
  { char: "∠", name: "Angle", category: "math", unicode: "U+2220", htmlEntity: "&ang;", htmlCode: "&#8736;", altCode: "Alt + 8736", macShortcut: "N/A", keywords: ["angle", "geometry", "math"], popular: false },
  { char: "⊥", name: "Perpendicular", category: "math", unicode: "U+22A5", htmlEntity: "&perp;", htmlCode: "&#8869;", altCode: "Alt + 8869", macShortcut: "N/A", keywords: ["perpendicular", "right angle", "math"], popular: false },
  { char: "∴", name: "Therefore", category: "math", unicode: "U+2234", htmlEntity: "&there4;", htmlCode: "&#8756;", altCode: "Alt + 8756", macShortcut: "N/A", keywords: ["therefore", "proof", "math"], popular: false },
  { char: "∵", name: "Because", category: "math", unicode: "U+2235", htmlEntity: "&#8757;", htmlCode: "&#8757;", altCode: "Alt + 8757", macShortcut: "N/A", keywords: ["because", "math"], popular: false },
  { char: "∈", name: "Element Of", category: "math", unicode: "U+2208", htmlEntity: "&isin;", htmlCode: "&#8712;", altCode: "Alt + 8712", macShortcut: "N/A", keywords: ["element", "member", "set", "math"], popular: false },
  { char: "∉", name: "Not Element Of", category: "math", unicode: "U+2209", htmlEntity: "&notin;", htmlCode: "&#8713;", altCode: "Alt + 8713", macShortcut: "N/A", keywords: ["not element", "not member", "set", "math"], popular: false },
  { char: "∅", name: "Empty Set", category: "math", unicode: "U+2205", htmlEntity: "&empty;", htmlCode: "&#8709;", altCode: "Alt + 8709", macShortcut: "Option + 0", keywords: ["empty set", "null", "math"], popular: false },
  { char: "∃", name: "There Exists", category: "math", unicode: "U+2203", htmlEntity: "&exist;", htmlCode: "&#8707;", altCode: "Alt + 8707", macShortcut: "N/A", keywords: ["exists", "existential", "logic", "math"], popular: false },
  { char: "∀", name: "For All", category: "math", unicode: "U+2200", htmlEntity: "&forall;", htmlCode: "&#8704;", altCode: "Alt + 8704", macShortcut: "N/A", keywords: ["for all", "universal", "logic", "math"], popular: false },
  { char: "∩", name: "Intersection", category: "math", unicode: "U+2229", htmlEntity: "&cap;", htmlCode: "&#8745;", altCode: "Alt + 8745", macShortcut: "N/A", keywords: ["intersection", "set", "math"], popular: false },
  { char: "∪", name: "Union", category: "math", unicode: "U+222A", htmlEntity: "&cup;", htmlCode: "&#8746;", altCode: "Alt + 8746", macShortcut: "N/A", keywords: ["union", "set", "math"], popular: false },
  { char: "⊂", name: "Subset Of", category: "math", unicode: "U+2282", htmlEntity: "&sub;", htmlCode: "&#8834;", altCode: "Alt + 8834", macShortcut: "N/A", keywords: ["subset", "set", "math"], popular: false },
  { char: "⊃", name: "Superset Of", category: "math", unicode: "U+2283", htmlEntity: "&sup;", htmlCode: "&#8835;", altCode: "Alt + 8835", macShortcut: "N/A", keywords: ["superset", "set", "math"], popular: false },
  { char: "∧", name: "Logical And", category: "math", unicode: "U+2227", htmlEntity: "&and;", htmlCode: "&#8743;", altCode: "Alt + 8743", macShortcut: "N/A", keywords: ["logical and", "conjunction", "math"], popular: false },
  { char: "∨", name: "Logical Or", category: "math", unicode: "U+2228", htmlEntity: "&or;", htmlCode: "&#8744;", altCode: "Alt + 8744", macShortcut: "N/A", keywords: ["logical or", "disjunction", "math"], popular: false },
  { char: "¬", name: "Not Sign", category: "math", unicode: "U+00AC", htmlEntity: "&not;", htmlCode: "&#172;", altCode: "Alt + 0172", macShortcut: "Option + L", keywords: ["not", "negation", "logic", "math"], popular: false },
  { char: "∥", name: "Parallel To", category: "math", unicode: "U+2225", htmlEntity: "&#8741;", htmlCode: "&#8741;", altCode: "Alt + 8741", macShortcut: "N/A", keywords: ["parallel", "lines", "math"], popular: false },
  { char: "∤", name: "Does Not Divide", category: "math", unicode: "U+2224", htmlEntity: "&#8740;", htmlCode: "&#8740;", altCode: "Alt + 8740", macShortcut: "N/A", keywords: ["does not divide", "math"], popular: false },
  { char: "∛", name: "Cube Root", category: "math", unicode: "U+221B", htmlEntity: "&#8731;", htmlCode: "&#8731;", altCode: "Alt + 8731", macShortcut: "N/A", keywords: ["cube root", "math"], popular: false },
  { char: "∆", name: "Delta / Change", category: "math", unicode: "U+2206", htmlEntity: "&#8710;", htmlCode: "&#8710;", altCode: "Alt + 30", macShortcut: "Option + J", keywords: ["delta", "change", "difference", "math"], popular: false },
  { char: "ƒ", name: "Function Symbol", category: "math", unicode: "U+0192", htmlEntity: "&fnof;", htmlCode: "&#402;", altCode: "Alt + 0131", macShortcut: "Option + F", keywords: ["function", "f", "math"], popular: false },
  { char: "∓", name: "Minus-Plus Sign", category: "math", unicode: "U+2213", htmlEntity: "&#8723;", htmlCode: "&#8723;", altCode: "Alt + 8723", macShortcut: "N/A", keywords: ["minus plus", "math"], popular: false },
  { char: "‰", name: "Per Mille", category: "math", unicode: "U+2030", htmlEntity: "&permil;", htmlCode: "&#8240;", altCode: "Alt + 0137", macShortcut: "Option + Shift + R", keywords: ["per mille", "thousand", "math"], popular: false },

  // ===== GREEK LETTERS =====
  { char: "α", name: "Alpha", category: "greek", unicode: "U+03B1", htmlEntity: "&alpha;", htmlCode: "&#945;", altCode: "Alt + 224", macShortcut: "N/A", keywords: ["alpha", "greek"], popular: false },
  { char: "β", name: "Beta", category: "greek", unicode: "U+03B2", htmlEntity: "&beta;", htmlCode: "&#946;", altCode: "Alt + 225", macShortcut: "Option + S", keywords: ["beta", "greek"], popular: false },
  { char: "γ", name: "Gamma", category: "greek", unicode: "U+03B3", htmlEntity: "&gamma;", htmlCode: "&#947;", altCode: "Alt + 226", macShortcut: "N/A", keywords: ["gamma", "greek"], popular: false },
  { char: "δ", name: "Small Delta", category: "greek", unicode: "U+03B4", htmlEntity: "&delta;", htmlCode: "&#948;", altCode: "Alt + 235", macShortcut: "Option + J", keywords: ["delta", "greek"], popular: false },
  { char: "ε", name: "Epsilon", category: "greek", unicode: "U+03B5", htmlEntity: "&epsilon;", htmlCode: "&#949;", altCode: "Alt + 238", macShortcut: "N/A", keywords: ["epsilon", "greek"], popular: false },
  { char: "ζ", name: "Zeta", category: "greek", unicode: "U+03B6", htmlEntity: "&zeta;", htmlCode: "&#950;", altCode: "Alt + 950", macShortcut: "N/A", keywords: ["zeta", "greek"], popular: false },
  { char: "η", name: "Eta", category: "greek", unicode: "U+03B7", htmlEntity: "&eta;", htmlCode: "&#951;", altCode: "Alt + 951", macShortcut: "N/A", keywords: ["eta", "greek"], popular: false },
  { char: "θ", name: "Theta", category: "greek", unicode: "U+03B8", htmlEntity: "&theta;", htmlCode: "&#952;", altCode: "Alt + 233", macShortcut: "N/A", keywords: ["theta", "angle", "greek"], popular: true },
  { char: "ι", name: "Iota", category: "greek", unicode: "U+03B9", htmlEntity: "&iota;", htmlCode: "&#953;", altCode: "Alt + 953", macShortcut: "N/A", keywords: ["iota", "greek"], popular: false },
  { char: "κ", name: "Kappa", category: "greek", unicode: "U+03BA", htmlEntity: "&kappa;", htmlCode: "&#954;", altCode: "Alt + 954", macShortcut: "N/A", keywords: ["kappa", "greek"], popular: false },
  { char: "λ", name: "Lambda", category: "greek", unicode: "U+03BB", htmlEntity: "&lambda;", htmlCode: "&#955;", altCode: "Alt + 955", macShortcut: "N/A", keywords: ["lambda", "greek"], popular: false },
  { char: "μ", name: "Mu (Micro)", category: "greek", unicode: "U+03BC", htmlEntity: "&mu;", htmlCode: "&#956;", altCode: "Alt + 230", macShortcut: "Option + M", keywords: ["mu", "micro", "greek"], popular: true },
  { char: "ν", name: "Nu", category: "greek", unicode: "U+03BD", htmlEntity: "&nu;", htmlCode: "&#957;", altCode: "Alt + 957", macShortcut: "N/A", keywords: ["nu", "greek"], popular: false },
  { char: "ξ", name: "Xi", category: "greek", unicode: "U+03BE", htmlEntity: "&xi;", htmlCode: "&#958;", altCode: "Alt + 958", macShortcut: "N/A", keywords: ["xi", "greek"], popular: false },
  { char: "π", name: "Pi", category: "greek", unicode: "U+03C0", htmlEntity: "&pi;", htmlCode: "&#960;", altCode: "Alt + 227", macShortcut: "Option + P", keywords: ["pi", "circle", "math", "greek"], popular: true },
  { char: "ρ", name: "Rho", category: "greek", unicode: "U+03C1", htmlEntity: "&rho;", htmlCode: "&#961;", altCode: "Alt + 961", macShortcut: "N/A", keywords: ["rho", "greek"], popular: false },
  { char: "σ", name: "Sigma", category: "greek", unicode: "U+03C3", htmlEntity: "&sigma;", htmlCode: "&#963;", altCode: "Alt + 229", macShortcut: "N/A", keywords: ["sigma", "greek"], popular: true },
  { char: "Σ", name: "Capital Sigma", category: "greek", unicode: "U+03A3", htmlEntity: "&Sigma;", htmlCode: "&#931;", altCode: "Alt + 228", macShortcut: "Option + W", keywords: ["sigma", "sum", "greek"], popular: false },
  { char: "τ", name: "Tau", category: "greek", unicode: "U+03C4", htmlEntity: "&tau;", htmlCode: "&#964;", altCode: "Alt + 231", macShortcut: "N/A", keywords: ["tau", "greek"], popular: false },
  { char: "υ", name: "Upsilon", category: "greek", unicode: "U+03C5", htmlEntity: "&upsilon;", htmlCode: "&#965;", altCode: "Alt + 965", macShortcut: "N/A", keywords: ["upsilon", "greek"], popular: false },
  { char: "φ", name: "Phi", category: "greek", unicode: "U+03C6", htmlEntity: "&phi;", htmlCode: "&#966;", altCode: "Alt + 237", macShortcut: "N/A", keywords: ["phi", "golden ratio", "greek"], popular: true },
  { char: "χ", name: "Chi", category: "greek", unicode: "U+03C7", htmlEntity: "&chi;", htmlCode: "&#967;", altCode: "Alt + 967", macShortcut: "N/A", keywords: ["chi", "greek"], popular: false },
  { char: "ψ", name: "Psi", category: "greek", unicode: "U+03C8", htmlEntity: "&psi;", htmlCode: "&#968;", altCode: "Alt + 968", macShortcut: "N/A", keywords: ["psi", "psychology", "greek"], popular: false },
  { char: "ω", name: "Small Omega", category: "greek", unicode: "U+03C9", htmlEntity: "&omega;", htmlCode: "&#969;", altCode: "Alt + 969", macShortcut: "Option + Shift + Z", keywords: ["omega", "greek"], popular: false },
  { char: "Ω", name: "Omega", category: "greek", unicode: "U+03A9", htmlEntity: "&Omega;", htmlCode: "&#937;", altCode: "Alt + 234", macShortcut: "Option + Z", keywords: ["omega", "ohm", "resistance", "greek"], popular: true },
  { char: "Δ", name: "Capital Delta", category: "greek", unicode: "U+0394", htmlEntity: "&Delta;", htmlCode: "&#916;", altCode: "Alt + 30", macShortcut: "Option + J", keywords: ["delta", "triangle", "change", "greek"], popular: true },
  { char: "Π", name: "Capital Pi", category: "greek", unicode: "U+03A0", htmlEntity: "&Pi;", htmlCode: "&#928;", altCode: "Alt + 8719", macShortcut: "Option + Shift + P", keywords: ["pi", "product", "greek"], popular: false },
  { char: "Φ", name: "Capital Phi", category: "greek", unicode: "U+03A6", htmlEntity: "&Phi;", htmlCode: "&#934;", altCode: "Alt + 232", macShortcut: "N/A", keywords: ["phi", "golden ratio", "greek"], popular: false },
  { char: "Ψ", name: "Capital Psi", category: "greek", unicode: "U+03A8", htmlEntity: "&Psi;", htmlCode: "&#936;", altCode: "Alt + 936", macShortcut: "N/A", keywords: ["psi", "psychology", "greek"], popular: false },
  { char: "Θ", name: "Capital Theta", category: "greek", unicode: "U+0398", htmlEntity: "&Theta;", htmlCode: "&#920;", altCode: "Alt + 920", macShortcut: "N/A", keywords: ["theta", "angle", "greek"], popular: false },
  { char: "Λ", name: "Capital Lambda", category: "greek", unicode: "U+039B", htmlEntity: "&Lambda;", htmlCode: "&#923;", altCode: "Alt + 923", macShortcut: "N/A", keywords: ["lambda", "greek"], popular: false },

  // ===== ARROWS =====
  { char: "→", name: "Right Arrow", category: "arrows", unicode: "U+2192", htmlEntity: "&rarr;", htmlCode: "&#8594;", altCode: "Alt + 26", macShortcut: "N/A", keywords: ["right arrow", "direction", "next"], popular: true },
  { char: "←", name: "Left Arrow", category: "arrows", unicode: "U+2190", htmlEntity: "&larr;", htmlCode: "&#8592;", altCode: "Alt + 27", macShortcut: "N/A", keywords: ["left arrow", "back", "direction"], popular: true },
  { char: "↑", name: "Up Arrow", category: "arrows", unicode: "U+2191", htmlEntity: "&uarr;", htmlCode: "&#8593;", altCode: "Alt + 24", macShortcut: "N/A", keywords: ["up arrow", "direction"], popular: true },
  { char: "↓", name: "Down Arrow", category: "arrows", unicode: "U+2193", htmlEntity: "&darr;", htmlCode: "&#8595;", altCode: "Alt + 25", macShortcut: "N/A", keywords: ["down arrow", "direction"], popular: true },
  { char: "↔", name: "Left Right Arrow", category: "arrows", unicode: "U+2194", htmlEntity: "&harr;", htmlCode: "&#8596;", altCode: "Alt + 29", macShortcut: "N/A", keywords: ["left right", "horizontal", "arrow"], popular: false },
  { char: "↕", name: "Up Down Arrow", category: "arrows", unicode: "U+2195", htmlEntity: "&#8597;", htmlCode: "&#8597;", altCode: "Alt + 18", macShortcut: "N/A", keywords: ["up down", "vertical", "arrow"], popular: false },
  { char: "⇒", name: "Double Right Arrow", category: "arrows", unicode: "U+21D2", htmlEntity: "&rArr;", htmlCode: "&#8658;", altCode: "Alt + 8658", macShortcut: "N/A", keywords: ["double right", "implies", "arrow"], popular: false },
  { char: "⇐", name: "Double Left Arrow", category: "arrows", unicode: "U+21D0", htmlEntity: "&lArr;", htmlCode: "&#8656;", altCode: "Alt + 8656", macShortcut: "N/A", keywords: ["double left", "arrow"], popular: false },
  { char: "⇑", name: "Double Up Arrow", category: "arrows", unicode: "U+21D1", htmlEntity: "&uArr;", htmlCode: "&#8657;", altCode: "Alt + 8657", macShortcut: "N/A", keywords: ["double up", "arrow"], popular: false },
  { char: "⇓", name: "Double Down Arrow", category: "arrows", unicode: "U+21D3", htmlEntity: "&dArr;", htmlCode: "&#8659;", altCode: "Alt + 8659", macShortcut: "N/A", keywords: ["double down", "arrow"], popular: false },
  { char: "⇔", name: "Double Left Right Arrow", category: "arrows", unicode: "U+21D4", htmlEntity: "&hArr;", htmlCode: "&#8660;", altCode: "Alt + 8660", macShortcut: "N/A", keywords: ["double", "iff", "equivalent", "arrow"], popular: false },
  { char: "↩", name: "Return Arrow", category: "arrows", unicode: "U+21A9", htmlEntity: "&#8617;", htmlCode: "&#8617;", altCode: "Alt + 8629", macShortcut: "N/A", keywords: ["return", "enter", "arrow"], popular: false },

  // ===== PUNCTUATION =====
  { char: "•", name: "Bullet Point", category: "punctuation", unicode: "U+2022", htmlEntity: "&bull;", htmlCode: "&#8226;", altCode: "Alt + 0149", macShortcut: "Option + 8", keywords: ["bullet", "list", "dot"], popular: true },
  { char: "…", name: "Ellipsis", category: "punctuation", unicode: "U+2026", htmlEntity: "&hellip;", htmlCode: "&#8230;", altCode: "Alt + 0133", macShortcut: "Option + ;", keywords: ["ellipsis", "dots", "trailing"], popular: false },
  { char: "—", name: "Em Dash", category: "punctuation", unicode: "U+2014", htmlEntity: "&mdash;", htmlCode: "&#8212;", altCode: "Alt + 0151", macShortcut: "Option + Shift + -", keywords: ["em dash", "long dash"], popular: true },
  { char: "–", name: "En Dash", category: "punctuation", unicode: "U+2013", htmlEntity: "&ndash;", htmlCode: "&#8211;", altCode: "Alt + 0150", macShortcut: "Option + -", keywords: ["en dash", "short dash", "range"], popular: false },
  { char: "¡", name: "Inverted Exclamation", category: "punctuation", unicode: "U+00A1", htmlEntity: "&iexcl;", htmlCode: "&#161;", altCode: "Alt + 0161", macShortcut: "Option + 1", keywords: ["inverted exclamation", "spanish", "upside down"], popular: false },
  { char: "¿", name: "Inverted Question Mark", category: "punctuation", unicode: "U+00BF", htmlEntity: "&iquest;", htmlCode: "&#191;", altCode: "Alt + 0191", macShortcut: "Option + Shift + ?", keywords: ["inverted question", "spanish", "upside down"], popular: true },
  { char: "«", name: "Left Guillemet", category: "punctuation", unicode: "U+00AB", htmlEntity: "&laquo;", htmlCode: "&#171;", altCode: "Alt + 0171", macShortcut: "Option + \\", keywords: ["guillemet", "quote", "french"], popular: false },
  { char: "»", name: "Right Guillemet", category: "punctuation", unicode: "U+00BB", htmlEntity: "&raquo;", htmlCode: "&#187;", altCode: "Alt + 0187", macShortcut: "Option + Shift + \\", keywords: ["guillemet", "quote", "french"], popular: false },
  { char: "‼", name: "Double Exclamation", category: "punctuation", unicode: "U+203C", htmlEntity: "&#8252;", htmlCode: "&#8252;", altCode: "Alt + 8252", macShortcut: "N/A", keywords: ["double exclamation", "emphasis"], popular: false },

  // ===== FRACTIONS =====
  { char: "½", name: "One Half", category: "fractions", unicode: "U+00BD", htmlEntity: "&frac12;", htmlCode: "&#189;", altCode: "Alt + 0189", macShortcut: "N/A", keywords: ["half", "fraction", "1/2"], popular: true },
  { char: "⅓", name: "One Third", category: "fractions", unicode: "U+2153", htmlEntity: "&#8531;", htmlCode: "&#8531;", altCode: "Alt + 8531", macShortcut: "N/A", keywords: ["third", "fraction", "1/3"], popular: false },
  { char: "⅔", name: "Two Thirds", category: "fractions", unicode: "U+2154", htmlEntity: "&#8532;", htmlCode: "&#8532;", altCode: "Alt + 8532", macShortcut: "N/A", keywords: ["two thirds", "fraction", "2/3"], popular: false },
  { char: "¼", name: "One Quarter", category: "fractions", unicode: "U+00BC", htmlEntity: "&frac14;", htmlCode: "&#188;", altCode: "Alt + 0188", macShortcut: "N/A", keywords: ["quarter", "fraction", "1/4"], popular: true },
  { char: "¾", name: "Three Quarters", category: "fractions", unicode: "U+00BE", htmlEntity: "&frac34;", htmlCode: "&#190;", altCode: "Alt + 0190", macShortcut: "N/A", keywords: ["three quarters", "fraction", "3/4"], popular: false },
  { char: "⅕", name: "One Fifth", category: "fractions", unicode: "U+2155", htmlEntity: "&#8533;", htmlCode: "&#8533;", altCode: "Alt + 8533", macShortcut: "N/A", keywords: ["fifth", "fraction", "1/5"], popular: false },
  { char: "⅛", name: "One Eighth", category: "fractions", unicode: "U+215B", htmlEntity: "&#8539;", htmlCode: "&#8539;", altCode: "Alt + 8539", macShortcut: "N/A", keywords: ["eighth", "fraction", "1/8"], popular: false },

  // ===== SUPERSCRIPTS =====
  { char: "¹", name: "Superscript One", category: "superscripts", unicode: "U+00B9", htmlEntity: "&sup1;", htmlCode: "&#185;", altCode: "Alt + 0185", macShortcut: "N/A", keywords: ["superscript", "power", "one", "1"], popular: false },
  { char: "²", name: "Superscript Two", category: "superscripts", unicode: "U+00B2", htmlEntity: "&sup2;", htmlCode: "&#178;", altCode: "Alt + 0178", macShortcut: "N/A", keywords: ["superscript", "squared", "power", "two", "2"], popular: true },
  { char: "³", name: "Superscript Three", category: "superscripts", unicode: "U+00B3", htmlEntity: "&sup3;", htmlCode: "&#179;", altCode: "Alt + 0179", macShortcut: "N/A", keywords: ["superscript", "cubed", "power", "three", "3"], popular: true },
  { char: "⁴", name: "Superscript Four", category: "superscripts", unicode: "U+2074", htmlEntity: "&#8308;", htmlCode: "&#8308;", altCode: "Alt + 8308", macShortcut: "N/A", keywords: ["superscript", "power", "four", "4"], popular: false },
  { char: "⁵", name: "Superscript Five", category: "superscripts", unicode: "U+2075", htmlEntity: "&#8309;", htmlCode: "&#8309;", altCode: "Alt + 8309", macShortcut: "N/A", keywords: ["superscript", "power", "five", "5"], popular: false },
  { char: "⁰", name: "Superscript Zero", category: "superscripts", unicode: "U+2070", htmlEntity: "&#8304;", htmlCode: "&#8304;", altCode: "Alt + 8304", macShortcut: "N/A", keywords: ["superscript", "power", "zero", "0"], popular: false },
  { char: "ⁿ", name: "Superscript N", category: "superscripts", unicode: "U+207F", htmlEntity: "&#8319;", htmlCode: "&#8319;", altCode: "Alt + 8319", macShortcut: "N/A", keywords: ["superscript", "power", "n", "variable"], popular: false },

  // ===== SUBSCRIPTS =====
  { char: "₀", name: "Subscript Zero", category: "subscripts", unicode: "U+2080", htmlEntity: "&#8320;", htmlCode: "&#8320;", altCode: "Alt + 8320", macShortcut: "N/A", keywords: ["subscript", "zero", "0"], popular: false },
  { char: "₁", name: "Subscript One", category: "subscripts", unicode: "U+2081", htmlEntity: "&#8321;", htmlCode: "&#8321;", altCode: "Alt + 8321", macShortcut: "N/A", keywords: ["subscript", "one", "1"], popular: false },
  { char: "₂", name: "Subscript Two", category: "subscripts", unicode: "U+2082", htmlEntity: "&#8322;", htmlCode: "&#8322;", altCode: "Alt + 8322", macShortcut: "N/A", keywords: ["subscript", "two", "2"], popular: false },
  { char: "₃", name: "Subscript Three", category: "subscripts", unicode: "U+2083", htmlEntity: "&#8323;", htmlCode: "&#8323;", altCode: "Alt + 8323", macShortcut: "N/A", keywords: ["subscript", "three", "3"], popular: false },

  // ===== CHECKMARKS =====
  { char: "✓", name: "Check Mark", category: "checkmarks", unicode: "U+2713", htmlEntity: "&#10003;", htmlCode: "&#10003;", altCode: "Alt + 10003", macShortcut: "N/A", keywords: ["check", "tick", "done", "approved"], popular: true },
  { char: "✔", name: "Heavy Check Mark", category: "checkmarks", unicode: "U+2714", htmlEntity: "&#10004;", htmlCode: "&#10004;", altCode: "Alt + 10004", macShortcut: "N/A", keywords: ["check", "heavy", "bold", "done"], popular: true },
  { char: "☑", name: "Ballot Box with Check", category: "checkmarks", unicode: "U+2611", htmlEntity: "&#9745;", htmlCode: "&#9745;", altCode: "Alt + 9745", macShortcut: "N/A", keywords: ["checkbox", "checked", "ballot"], popular: false },
  { char: "☐", name: "Ballot Box", category: "checkmarks", unicode: "U+2610", htmlEntity: "&#9744;", htmlCode: "&#9744;", altCode: "Alt + 9744", macShortcut: "N/A", keywords: ["checkbox", "empty", "unchecked"], popular: false },

  // ===== CROSSES =====
  { char: "✕", name: "Multiplication X", category: "crosses", unicode: "U+2715", htmlEntity: "&#10005;", htmlCode: "&#10005;", altCode: "Alt + 10005", macShortcut: "N/A", keywords: ["x", "cross", "close", "delete"], popular: true },
  { char: "✗", name: "Ballot X", category: "crosses", unicode: "U+2717", htmlEntity: "&#10007;", htmlCode: "&#10007;", altCode: "Alt + 10007", macShortcut: "N/A", keywords: ["x", "cross", "wrong", "reject"], popular: false },
  { char: "☒", name: "Ballot Box with X", category: "crosses", unicode: "U+2612", htmlEntity: "&#9746;", htmlCode: "&#9746;", altCode: "Alt + 9746", macShortcut: "N/A", keywords: ["x", "box", "crossed out"], popular: false },
  { char: "✝", name: "Latin Cross", category: "crosses", unicode: "U+271D", htmlEntity: "&#10013;", htmlCode: "&#10013;", altCode: "Alt + 10013", macShortcut: "N/A", keywords: ["cross", "christian", "religion"], popular: false },

  // ===== HEARTS =====
  { char: "♥", name: "Black Heart", category: "hearts", unicode: "U+2665", htmlEntity: "&hearts;", htmlCode: "&#9829;", altCode: "Alt + 3", macShortcut: "N/A", keywords: ["heart", "love", "card"], popular: true },
  { char: "♡", name: "White Heart", category: "hearts", unicode: "U+2661", htmlEntity: "&#9825;", htmlCode: "&#9825;", altCode: "Alt + 9825", macShortcut: "N/A", keywords: ["heart", "outline", "love"], popular: true },
  { char: "❤", name: "Heavy Black Heart", category: "hearts", unicode: "U+2764", htmlEntity: "&#10084;", htmlCode: "&#10084;", altCode: "Alt + 10084", macShortcut: "N/A", keywords: ["heart", "love", "red"], popular: true },
  { char: "💔", name: "Broken Heart", category: "hearts", unicode: "U+1F494", htmlEntity: "&#128148;", htmlCode: "&#128148;", altCode: "N/A", macShortcut: "N/A", keywords: ["broken heart", "sad", "love"], popular: false },

  // ===== STARS =====
  { char: "★", name: "Black Star", category: "stars", unicode: "U+2605", htmlEntity: "&#9733;", htmlCode: "&#9733;", altCode: "Alt + 9733", macShortcut: "N/A", keywords: ["star", "filled", "rating"], popular: true },
  { char: "☆", name: "White Star", category: "stars", unicode: "U+2606", htmlEntity: "&#9734;", htmlCode: "&#9734;", altCode: "Alt + 9734", macShortcut: "N/A", keywords: ["star", "outline", "rating"], popular: true },
  { char: "✦", name: "Four Pointed Star", category: "stars", unicode: "U+2726", htmlEntity: "&#10022;", htmlCode: "&#10022;", altCode: "N/A", macShortcut: "N/A", keywords: ["star", "sparkle", "diamond"], popular: false },

  // ===== MUSIC =====
  { char: "♪", name: "Eighth Note", category: "music", unicode: "U+266A", htmlEntity: "&#9834;", htmlCode: "&#9834;", altCode: "Alt + 13", macShortcut: "N/A", keywords: ["music", "note", "eighth"], popular: true },
  { char: "♫", name: "Beamed Eighth Notes", category: "music", unicode: "U+266B", htmlEntity: "&#9835;", htmlCode: "&#9835;", altCode: "Alt + 14", macShortcut: "N/A", keywords: ["music", "notes", "double"], popular: true },
  { char: "♩", name: "Quarter Note", category: "music", unicode: "U+2669", htmlEntity: "&#9833;", htmlCode: "&#9833;", altCode: "Alt + 9833", macShortcut: "N/A", keywords: ["music", "note", "quarter"], popular: false },
  { char: "♯", name: "Music Sharp Sign", category: "music", unicode: "U+266F", htmlEntity: "&#9839;", htmlCode: "&#9839;", altCode: "Alt + 9839", macShortcut: "N/A", keywords: ["sharp", "music", "hash"], popular: false },
  { char: "♭", name: "Music Flat Sign", category: "music", unicode: "U+266D", htmlEntity: "&#9837;", htmlCode: "&#9837;", altCode: "Alt + 9837", macShortcut: "N/A", keywords: ["flat", "music"], popular: false },
  { char: "♮", name: "Music Natural Sign", category: "music", unicode: "U+266E", htmlEntity: "&#9838;", htmlCode: "&#9838;", altCode: "Alt + 9838", macShortcut: "N/A", keywords: ["natural", "music"], popular: false },

  // ===== CARDS =====
  { char: "♠", name: "Black Spade", category: "cards", unicode: "U+2660", htmlEntity: "&spades;", htmlCode: "&#9824;", altCode: "Alt + 6", macShortcut: "N/A", keywords: ["spade", "card", "suit"], popular: true },
  { char: "♣", name: "Black Club", category: "cards", unicode: "U+2663", htmlEntity: "&clubs;", htmlCode: "&#9827;", altCode: "Alt + 5", macShortcut: "N/A", keywords: ["club", "clover", "card", "suit"], popular: true },
  { char: "♦", name: "Black Diamond", category: "cards", unicode: "U+2666", htmlEntity: "&diams;", htmlCode: "&#9830;", altCode: "Alt + 4", macShortcut: "N/A", keywords: ["diamond", "card", "suit"], popular: true },
  { char: "♤", name: "White Spade", category: "cards", unicode: "U+2664", htmlEntity: "&#9828;", htmlCode: "&#9828;", altCode: "N/A", macShortcut: "N/A", keywords: ["spade", "outline", "card"], popular: false },
  { char: "♧", name: "White Club", category: "cards", unicode: "U+2667", htmlEntity: "&#9831;", htmlCode: "&#9831;", altCode: "N/A", macShortcut: "N/A", keywords: ["club", "outline", "card"], popular: false },

  // ===== SHAPES =====
  { char: "◆", name: "Black Diamond", category: "shapes", unicode: "U+25C6", htmlEntity: "&#9670;", htmlCode: "&#9670;", altCode: "Alt + 9670", macShortcut: "N/A", keywords: ["diamond", "shape", "filled"], popular: false },
  { char: "◇", name: "White Diamond", category: "shapes", unicode: "U+25C7", htmlEntity: "&#9671;", htmlCode: "&#9671;", altCode: "Alt + 9671", macShortcut: "N/A", keywords: ["diamond", "shape", "outline"], popular: false },
  { char: "○", name: "White Circle", category: "shapes", unicode: "U+25CB", htmlEntity: "&#9675;", htmlCode: "&#9675;", altCode: "Alt + 9675", macShortcut: "N/A", keywords: ["circle", "shape", "outline"], popular: false },
  { char: "●", name: "Black Circle", category: "shapes", unicode: "U+25CF", htmlEntity: "&#9679;", htmlCode: "&#9679;", altCode: "Alt + 9679", macShortcut: "N/A", keywords: ["circle", "shape", "filled", "dot"], popular: false },
  { char: "□", name: "White Square", category: "shapes", unicode: "U+25A1", htmlEntity: "&#9633;", htmlCode: "&#9633;", altCode: "Alt + 9633", macShortcut: "N/A", keywords: ["square", "shape", "outline"], popular: false },
  { char: "■", name: "Black Square", category: "shapes", unicode: "U+25A0", htmlEntity: "&#9632;", htmlCode: "&#9632;", altCode: "Alt + 9632", macShortcut: "N/A", keywords: ["square", "shape", "filled"], popular: false },
  { char: "▲", name: "Black Triangle Up", category: "shapes", unicode: "U+25B2", htmlEntity: "&#9650;", htmlCode: "&#9650;", altCode: "Alt + 30", macShortcut: "N/A", keywords: ["triangle", "up", "arrow"], popular: false },
  { char: "▼", name: "Black Triangle Down", category: "shapes", unicode: "U+25BC", htmlEntity: "&#9660;", htmlCode: "&#9660;", altCode: "Alt + 31", macShortcut: "N/A", keywords: ["triangle", "down", "arrow"], popular: false },
  { char: "◁", name: "White Triangle Left", category: "shapes", unicode: "U+25C1", htmlEntity: "&#9665;", htmlCode: "&#9665;", altCode: "N/A", macShortcut: "N/A", keywords: ["triangle", "left"], popular: false },
  { char: "▷", name: "White Triangle Right", category: "shapes", unicode: "U+25B7", htmlEntity: "&#9655;", htmlCode: "&#9655;", altCode: "N/A", macShortcut: "N/A", keywords: ["triangle", "right", "play"], popular: false },
  { char: "◊", name: "Lozenge", category: "shapes", unicode: "U+25CA", htmlEntity: "&loz;", htmlCode: "&#9674;", altCode: "Alt + 9674", macShortcut: "Option + Shift + V", keywords: ["lozenge", "diamond", "shape"], popular: false },

  // ===== ZODIAC =====
  { char: "♈", name: "Aries", category: "zodiac", unicode: "U+2648", htmlEntity: "&#9800;", htmlCode: "&#9800;", altCode: "Alt + 9800", macShortcut: "N/A", keywords: ["aries", "zodiac", "ram"], popular: false },
  { char: "♉", name: "Taurus", category: "zodiac", unicode: "U+2649", htmlEntity: "&#9801;", htmlCode: "&#9801;", altCode: "Alt + 9801", macShortcut: "N/A", keywords: ["taurus", "zodiac", "bull"], popular: false },
  { char: "♊", name: "Gemini", category: "zodiac", unicode: "U+264A", htmlEntity: "&#9802;", htmlCode: "&#9802;", altCode: "Alt + 9802", macShortcut: "N/A", keywords: ["gemini", "zodiac", "twins"], popular: false },
  { char: "♋", name: "Cancer", category: "zodiac", unicode: "U+264B", htmlEntity: "&#9803;", htmlCode: "&#9803;", altCode: "Alt + 9803", macShortcut: "N/A", keywords: ["cancer", "zodiac", "crab"], popular: false },
  { char: "♌", name: "Leo", category: "zodiac", unicode: "U+264C", htmlEntity: "&#9804;", htmlCode: "&#9804;", altCode: "Alt + 9804", macShortcut: "N/A", keywords: ["leo", "zodiac", "lion"], popular: false },
  { char: "♍", name: "Virgo", category: "zodiac", unicode: "U+264D", htmlEntity: "&#9805;", htmlCode: "&#9805;", altCode: "Alt + 9805", macShortcut: "N/A", keywords: ["virgo", "zodiac"], popular: false },
  { char: "♎", name: "Libra", category: "zodiac", unicode: "U+264E", htmlEntity: "&#9806;", htmlCode: "&#9806;", altCode: "Alt + 9806", macShortcut: "N/A", keywords: ["libra", "zodiac", "scales"], popular: false },
  { char: "♏", name: "Scorpio", category: "zodiac", unicode: "U+264F", htmlEntity: "&#9807;", htmlCode: "&#9807;", altCode: "Alt + 9807", macShortcut: "N/A", keywords: ["scorpio", "zodiac", "scorpion"], popular: false },
  { char: "♐", name: "Sagittarius", category: "zodiac", unicode: "U+2650", htmlEntity: "&#9808;", htmlCode: "&#9808;", altCode: "Alt + 9808", macShortcut: "N/A", keywords: ["sagittarius", "zodiac", "archer"], popular: false },
  { char: "♑", name: "Capricorn", category: "zodiac", unicode: "U+2651", htmlEntity: "&#9809;", htmlCode: "&#9809;", altCode: "Alt + 9809", macShortcut: "N/A", keywords: ["capricorn", "zodiac", "goat"], popular: false },
  { char: "♒", name: "Aquarius", category: "zodiac", unicode: "U+2652", htmlEntity: "&#9810;", htmlCode: "&#9810;", altCode: "Alt + 9810", macShortcut: "N/A", keywords: ["aquarius", "zodiac", "water"], popular: false },
  { char: "♓", name: "Pisces", category: "zodiac", unicode: "U+2653", htmlEntity: "&#9811;", htmlCode: "&#9811;", altCode: "Alt + 9811", macShortcut: "N/A", keywords: ["pisces", "zodiac", "fish"], popular: false },

  // ===== GENDER =====
  { char: "♀", name: "Female Sign", category: "gender", unicode: "U+2640", htmlEntity: "&#9792;", htmlCode: "&#9792;", altCode: "Alt + 12", macShortcut: "N/A", keywords: ["female", "woman", "venus", "gender"], popular: true },
  { char: "♂", name: "Male Sign", category: "gender", unicode: "U+2642", htmlEntity: "&#9794;", htmlCode: "&#9794;", altCode: "Alt + 11", macShortcut: "N/A", keywords: ["male", "man", "mars", "gender"], popular: true },
  { char: "⚥", name: "Male and Female", category: "gender", unicode: "U+26A5", htmlEntity: "&#9893;", htmlCode: "&#9893;", altCode: "N/A", macShortcut: "N/A", keywords: ["male female", "gender", "combined"], popular: false },

  // ===== DINGBATS & MISC =====
  { char: "☺", name: "Smiling Face", category: "dingbats", unicode: "U+263A", htmlEntity: "&#9786;", htmlCode: "&#9786;", altCode: "Alt + 1", macShortcut: "N/A", keywords: ["smiley", "face", "happy", "smile"], popular: true },
  { char: "☻", name: "Black Smiling Face", category: "dingbats", unicode: "U+263B", htmlEntity: "&#9787;", htmlCode: "&#9787;", altCode: "Alt + 2", macShortcut: "N/A", keywords: ["smiley", "face", "dark", "happy"], popular: false },
  { char: "☹", name: "Frowning Face", category: "dingbats", unicode: "U+2639", htmlEntity: "&#9785;", htmlCode: "&#9785;", altCode: "N/A", macShortcut: "N/A", keywords: ["sad", "face", "frown", "unhappy"], popular: false },
  { char: "☀", name: "Sun", category: "dingbats", unicode: "U+2600", htmlEntity: "&#9728;", htmlCode: "&#9728;", altCode: "Alt + 15", macShortcut: "N/A", keywords: ["sun", "weather", "bright", "sunny"], popular: true },
  { char: "☁", name: "Cloud", category: "dingbats", unicode: "U+2601", htmlEntity: "&#9729;", htmlCode: "&#9729;", altCode: "Alt + 9729", macShortcut: "N/A", keywords: ["cloud", "weather", "cloudy"], popular: false },
  { char: "☂", name: "Umbrella", category: "dingbats", unicode: "U+2602", htmlEntity: "&#9730;", htmlCode: "&#9730;", altCode: "Alt + 9730", macShortcut: "N/A", keywords: ["umbrella", "rain", "weather"], popular: false },
  { char: "⚡", name: "High Voltage", category: "dingbats", unicode: "U+26A1", htmlEntity: "&#9889;", htmlCode: "&#9889;", altCode: "Alt + 9889", macShortcut: "N/A", keywords: ["lightning", "bolt", "electric", "power", "voltage"], popular: true },
  { char: "☎", name: "Telephone", category: "dingbats", unicode: "U+260E", htmlEntity: "&#9742;", htmlCode: "&#9742;", altCode: "Alt + 9742", macShortcut: "N/A", keywords: ["phone", "telephone", "call"], popular: false },
  { char: "✉", name: "Envelope", category: "dingbats", unicode: "U+2709", htmlEntity: "&#9993;", htmlCode: "&#9993;", altCode: "Alt + 9993", macShortcut: "N/A", keywords: ["email", "mail", "envelope", "letter"], popular: false },
  { char: "✂", name: "Scissors", category: "dingbats", unicode: "U+2702", htmlEntity: "&#9986;", htmlCode: "&#9986;", altCode: "Alt + 9986", macShortcut: "N/A", keywords: ["scissors", "cut", "snip"], popular: false },
  { char: "✈", name: "Airplane", category: "dingbats", unicode: "U+2708", htmlEntity: "&#9992;", htmlCode: "&#9992;", altCode: "Alt + 9992", macShortcut: "N/A", keywords: ["airplane", "plane", "travel", "flight"], popular: false },
  { char: "☮", name: "Peace Symbol", category: "misc", unicode: "U+262E", htmlEntity: "&#9774;", htmlCode: "&#9774;", altCode: "Alt + 9774", macShortcut: "N/A", keywords: ["peace", "hippie", "symbol"], popular: true },
  { char: "☯", name: "Yin Yang", category: "misc", unicode: "U+262F", htmlEntity: "&#9775;", htmlCode: "&#9775;", altCode: "Alt + 9775", macShortcut: "N/A", keywords: ["yin yang", "balance", "tao"], popular: true },
  { char: "☠", name: "Skull and Crossbones", category: "misc", unicode: "U+2620", htmlEntity: "&#9760;", htmlCode: "&#9760;", altCode: "Alt + 9760", macShortcut: "N/A", keywords: ["skull", "death", "poison", "danger"], popular: false },
  { char: "⚠", name: "Warning Sign", category: "misc", unicode: "U+26A0", htmlEntity: "&#9888;", htmlCode: "&#9888;", altCode: "Alt + 9888", macShortcut: "N/A", keywords: ["warning", "caution", "alert", "danger"], popular: false },
  { char: "☢", name: "Radioactive", category: "misc", unicode: "U+2622", htmlEntity: "&#9762;", htmlCode: "&#9762;", altCode: "N/A", macShortcut: "N/A", keywords: ["radioactive", "nuclear", "radiation"], popular: false },
  { char: "☪", name: "Crescent Moon", category: "misc", unicode: "U+262A", htmlEntity: "&#9770;", htmlCode: "&#9770;", altCode: "N/A", macShortcut: "N/A", keywords: ["crescent", "moon", "islam", "star"], popular: false },
  { char: "✿", name: "Flower", category: "misc", unicode: "U+273F", htmlEntity: "&#10047;", htmlCode: "&#10047;", altCode: "N/A", macShortcut: "N/A", keywords: ["flower", "blossom", "nature"], popular: false },
  { char: "☸", name: "Dharma Wheel", category: "misc", unicode: "U+2638", htmlEntity: "&#9784;", htmlCode: "&#9784;", altCode: "N/A", macShortcut: "N/A", keywords: ["dharma", "wheel", "buddhism"], popular: false },
  { char: "⌛", name: "Hourglass", category: "misc", unicode: "U+231B", htmlEntity: "&#8987;", htmlCode: "&#8987;", altCode: "Alt + 8987", macShortcut: "N/A", keywords: ["hourglass", "time", "wait", "timer"], popular: false },
  { char: "⌚", name: "Watch", category: "misc", unicode: "U+231A", htmlEntity: "&#8986;", htmlCode: "&#8986;", altCode: "Alt + 8986", macShortcut: "N/A", keywords: ["watch", "time", "clock"], popular: false },
  { char: "☘", name: "Shamrock", category: "misc", unicode: "U+2618", htmlEntity: "&#9752;", htmlCode: "&#9752;", altCode: "N/A", macShortcut: "N/A", keywords: ["shamrock", "clover", "irish", "luck"], popular: false },
  { char: "🔱", name: "Trident", category: "misc", unicode: "U+1F531", htmlEntity: "&#128305;", htmlCode: "&#128305;", altCode: "N/A", macShortcut: "N/A", keywords: ["trident", "poseidon", "weapon"], popular: false },
  { char: "👍", name: "Thumbs Up", category: "dingbats", unicode: "U+1F44D", htmlEntity: "&#128077;", htmlCode: "&#128077;", altCode: "N/A", macShortcut: "N/A", keywords: ["thumbs up", "like", "approve", "good"], popular: true },
  { char: "℃", name: "Degree Celsius", category: "misc", unicode: "U+2103", htmlEntity: "&#8451;", htmlCode: "&#8451;", altCode: "N/A", macShortcut: "N/A", keywords: ["celsius", "temperature", "centigrade"], popular: false },
  { char: "℉", name: "Degree Fahrenheit", category: "misc", unicode: "U+2109", htmlEntity: "&#8457;", htmlCode: "&#8457;", altCode: "N/A", macShortcut: "N/A", keywords: ["fahrenheit", "temperature"], popular: false },
  { char: "№", name: "Numero Sign", category: "misc", unicode: "U+2116", htmlEntity: "&#8470;", htmlCode: "&#8470;", altCode: "Alt + 8470", macShortcut: "N/A", keywords: ["numero", "number", "sign"], popular: false },
  { char: "℗", name: "Sound Recording Copyright", category: "misc", unicode: "U+2117", htmlEntity: "&#8471;", htmlCode: "&#8471;", altCode: "N/A", macShortcut: "N/A", keywords: ["sound", "recording", "copyright", "phonogram"], popular: false },
  { char: "℠", name: "Service Mark", category: "legal", unicode: "U+2120", htmlEntity: "&#8480;", htmlCode: "&#8480;", altCode: "N/A", macShortcut: "N/A", keywords: ["service mark", "sm"], popular: false },

  // ===== ACCENT LETTERS — A =====
  { char: "á", name: "A with Acute", category: "accent-letters", unicode: "U+00E1", htmlEntity: "&aacute;", htmlCode: "&#225;", altCode: "Alt + 0225", macShortcut: "Option + E, A", keywords: ["a", "acute", "accent", "spanish"], popular: false },
  { char: "Á", name: "Capital A with Acute", category: "accent-letters", unicode: "U+00C1", htmlEntity: "&Aacute;", htmlCode: "&#193;", altCode: "Alt + 0193", macShortcut: "Option + E, Shift + A", keywords: ["a", "acute", "accent", "capital"], popular: false },
  { char: "à", name: "A with Grave", category: "accent-letters", unicode: "U+00E0", htmlEntity: "&agrave;", htmlCode: "&#224;", altCode: "Alt + 0224", macShortcut: "Option + `, A", keywords: ["a", "grave", "accent", "italian"], popular: false },
  { char: "À", name: "Capital A with Grave", category: "accent-letters", unicode: "U+00C0", htmlEntity: "&Agrave;", htmlCode: "&#192;", altCode: "Alt + 0192", macShortcut: "Option + `, Shift + A", keywords: ["a", "grave", "accent", "capital"], popular: false },
  { char: "â", name: "A with Circumflex", category: "accent-letters", unicode: "U+00E2", htmlEntity: "&acirc;", htmlCode: "&#226;", altCode: "Alt + 0226", macShortcut: "Option + I, A", keywords: ["a", "circumflex", "hat", "french"], popular: false },
  { char: "Â", name: "Capital A with Circumflex", category: "accent-letters", unicode: "U+00C2", htmlEntity: "&Acirc;", htmlCode: "&#194;", altCode: "Alt + 0194", macShortcut: "Option + I, Shift + A", keywords: ["a", "circumflex", "capital"], popular: false },
  { char: "ã", name: "A with Tilde", category: "accent-letters", unicode: "U+00E3", htmlEntity: "&atilde;", htmlCode: "&#227;", altCode: "Alt + 0227", macShortcut: "Option + N, A", keywords: ["a", "tilde", "portuguese"], popular: false },
  { char: "Ã", name: "Capital A with Tilde", category: "accent-letters", unicode: "U+00C3", htmlEntity: "&Atilde;", htmlCode: "&#195;", altCode: "Alt + 0195", macShortcut: "Option + N, Shift + A", keywords: ["a", "tilde", "capital"], popular: false },
  { char: "ä", name: "A with Diaeresis", category: "accent-letters", unicode: "U+00E4", htmlEntity: "&auml;", htmlCode: "&#228;", altCode: "Alt + 0228", macShortcut: "Option + U, A", keywords: ["a", "umlaut", "diaeresis", "german"], popular: true },
  { char: "Ä", name: "Capital A with Diaeresis", category: "accent-letters", unicode: "U+00C4", htmlEntity: "&Auml;", htmlCode: "&#196;", altCode: "Alt + 0196", macShortcut: "Option + U, Shift + A", keywords: ["a", "umlaut", "capital", "german"], popular: false },
  { char: "å", name: "A with Ring Above", category: "accent-letters", unicode: "U+00E5", htmlEntity: "&aring;", htmlCode: "&#229;", altCode: "Alt + 0229", macShortcut: "Option + A", keywords: ["a", "ring", "scandinavian"], popular: false },
  { char: "Å", name: "Capital A with Ring Above", category: "accent-letters", unicode: "U+00C5", htmlEntity: "&Aring;", htmlCode: "&#197;", altCode: "Alt + 0197", macShortcut: "Option + Shift + A", keywords: ["a", "ring", "capital", "angstrom"], popular: false },
  { char: "ā", name: "A with Macron", category: "accent-letters", unicode: "U+0101", htmlEntity: "&#257;", htmlCode: "&#257;", altCode: "N/A", macShortcut: "N/A", keywords: ["a", "macron", "long"], popular: false },

  // ===== ACCENT LETTERS — E =====
  { char: "é", name: "E with Acute", category: "accent-letters", unicode: "U+00E9", htmlEntity: "&eacute;", htmlCode: "&#233;", altCode: "Alt + 0233", macShortcut: "Option + E, E", keywords: ["e", "acute", "accent", "french", "spanish"], popular: true },
  { char: "É", name: "Capital E with Acute", category: "accent-letters", unicode: "U+00C9", htmlEntity: "&Eacute;", htmlCode: "&#201;", altCode: "Alt + 0201", macShortcut: "Option + E, Shift + E", keywords: ["e", "acute", "capital"], popular: false },
  { char: "è", name: "E with Grave", category: "accent-letters", unicode: "U+00E8", htmlEntity: "&egrave;", htmlCode: "&#232;", altCode: "Alt + 0232", macShortcut: "Option + `, E", keywords: ["e", "grave", "accent", "italian", "french"], popular: true },
  { char: "È", name: "Capital E with Grave", category: "accent-letters", unicode: "U+00C8", htmlEntity: "&Egrave;", htmlCode: "&#200;", altCode: "Alt + 0200", macShortcut: "Option + `, Shift + E", keywords: ["e", "grave", "capital"], popular: false },
  { char: "ê", name: "E with Circumflex", category: "accent-letters", unicode: "U+00EA", htmlEntity: "&ecirc;", htmlCode: "&#234;", altCode: "Alt + 0234", macShortcut: "Option + I, E", keywords: ["e", "circumflex", "hat", "french"], popular: false },
  { char: "Ê", name: "Capital E with Circumflex", category: "accent-letters", unicode: "U+00CA", htmlEntity: "&Ecirc;", htmlCode: "&#202;", altCode: "Alt + 0202", macShortcut: "Option + I, Shift + E", keywords: ["e", "circumflex", "capital"], popular: false },
  { char: "ë", name: "E with Diaeresis", category: "accent-letters", unicode: "U+00EB", htmlEntity: "&euml;", htmlCode: "&#235;", altCode: "Alt + 0235", macShortcut: "Option + U, E", keywords: ["e", "umlaut", "diaeresis"], popular: false },
  { char: "Ë", name: "Capital E with Diaeresis", category: "accent-letters", unicode: "U+00CB", htmlEntity: "&Euml;", htmlCode: "&#203;", altCode: "Alt + 0203", macShortcut: "Option + U, Shift + E", keywords: ["e", "umlaut", "capital"], popular: false },
  { char: "ẽ", name: "E with Tilde", category: "accent-letters", unicode: "U+1EBD", htmlEntity: "&#7869;", htmlCode: "&#7869;", altCode: "N/A", macShortcut: "N/A", keywords: ["e", "tilde"], popular: false },

  // ===== ACCENT LETTERS — I =====
  { char: "í", name: "I with Acute", category: "accent-letters", unicode: "U+00ED", htmlEntity: "&iacute;", htmlCode: "&#237;", altCode: "Alt + 0237", macShortcut: "Option + E, I", keywords: ["i", "acute", "accent", "spanish"], popular: false },
  { char: "Í", name: "Capital I with Acute", category: "accent-letters", unicode: "U+00CD", htmlEntity: "&Iacute;", htmlCode: "&#205;", altCode: "Alt + 0205", macShortcut: "Option + E, Shift + I", keywords: ["i", "acute", "capital"], popular: false },
  { char: "ì", name: "I with Grave", category: "accent-letters", unicode: "U+00EC", htmlEntity: "&igrave;", htmlCode: "&#236;", altCode: "Alt + 0236", macShortcut: "Option + `, I", keywords: ["i", "grave", "accent"], popular: false },
  { char: "î", name: "I with Circumflex", category: "accent-letters", unicode: "U+00EE", htmlEntity: "&icirc;", htmlCode: "&#238;", altCode: "Alt + 0238", macShortcut: "Option + I, I", keywords: ["i", "circumflex", "hat"], popular: false },
  { char: "ï", name: "I with Diaeresis", category: "accent-letters", unicode: "U+00EF", htmlEntity: "&iuml;", htmlCode: "&#239;", altCode: "Alt + 0239", macShortcut: "Option + U, I", keywords: ["i", "umlaut", "diaeresis"], popular: false },
  { char: "ī", name: "I with Macron", category: "accent-letters", unicode: "U+012B", htmlEntity: "&#299;", htmlCode: "&#299;", altCode: "N/A", macShortcut: "N/A", keywords: ["i", "macron", "long"], popular: false },
  { char: "ĩ", name: "I with Tilde", category: "accent-letters", unicode: "U+0129", htmlEntity: "&#297;", htmlCode: "&#297;", altCode: "N/A", macShortcut: "N/A", keywords: ["i", "tilde"], popular: false },

  // ===== ACCENT LETTERS — O =====
  { char: "ó", name: "O with Acute", category: "accent-letters", unicode: "U+00F3", htmlEntity: "&oacute;", htmlCode: "&#243;", altCode: "Alt + 0243", macShortcut: "Option + E, O", keywords: ["o", "acute", "accent", "spanish"], popular: false },
  { char: "Ó", name: "Capital O with Acute", category: "accent-letters", unicode: "U+00D3", htmlEntity: "&Oacute;", htmlCode: "&#211;", altCode: "Alt + 0211", macShortcut: "Option + E, Shift + O", keywords: ["o", "acute", "capital"], popular: false },
  { char: "ò", name: "O with Grave", category: "accent-letters", unicode: "U+00F2", htmlEntity: "&ograve;", htmlCode: "&#242;", altCode: "Alt + 0242", macShortcut: "Option + `, O", keywords: ["o", "grave", "accent"], popular: false },
  { char: "ô", name: "O with Circumflex", category: "accent-letters", unicode: "U+00F4", htmlEntity: "&ocirc;", htmlCode: "&#244;", altCode: "Alt + 0244", macShortcut: "Option + I, O", keywords: ["o", "circumflex", "hat"], popular: false },
  { char: "õ", name: "O with Tilde", category: "accent-letters", unicode: "U+00F5", htmlEntity: "&otilde;", htmlCode: "&#245;", altCode: "Alt + 0245", macShortcut: "Option + N, O", keywords: ["o", "tilde", "portuguese"], popular: false },
  { char: "ö", name: "O with Diaeresis", category: "accent-letters", unicode: "U+00F6", htmlEntity: "&ouml;", htmlCode: "&#246;", altCode: "Alt + 0246", macShortcut: "Option + U, O", keywords: ["o", "umlaut", "diaeresis", "german"], popular: true },
  { char: "Ö", name: "Capital O with Diaeresis", category: "accent-letters", unicode: "U+00D6", htmlEntity: "&Ouml;", htmlCode: "&#214;", altCode: "Alt + 0214", macShortcut: "Option + U, Shift + O", keywords: ["o", "umlaut", "capital", "german"], popular: false },
  { char: "ō", name: "O with Macron", category: "accent-letters", unicode: "U+014D", htmlEntity: "&#333;", htmlCode: "&#333;", altCode: "N/A", macShortcut: "N/A", keywords: ["o", "macron", "long", "japanese"], popular: false },
  { char: "ø", name: "O with Stroke", category: "accent-letters", unicode: "U+00F8", htmlEntity: "&oslash;", htmlCode: "&#248;", altCode: "Alt + 0248", macShortcut: "Option + O", keywords: ["o", "stroke", "slash", "scandinavian", "danish"], popular: false },
  { char: "Ø", name: "Capital O with Stroke", category: "accent-letters", unicode: "U+00D8", htmlEntity: "&Oslash;", htmlCode: "&#216;", altCode: "Alt + 0216", macShortcut: "Option + Shift + O", keywords: ["o", "stroke", "capital"], popular: false },

  // ===== ACCENT LETTERS — U =====
  { char: "ú", name: "U with Acute", category: "accent-letters", unicode: "U+00FA", htmlEntity: "&uacute;", htmlCode: "&#250;", altCode: "Alt + 0250", macShortcut: "Option + E, U", keywords: ["u", "acute", "accent", "spanish"], popular: false },
  { char: "Ú", name: "Capital U with Acute", category: "accent-letters", unicode: "U+00DA", htmlEntity: "&Uacute;", htmlCode: "&#218;", altCode: "Alt + 0218", macShortcut: "Option + E, Shift + U", keywords: ["u", "acute", "capital"], popular: false },
  { char: "ù", name: "U with Grave", category: "accent-letters", unicode: "U+00F9", htmlEntity: "&ugrave;", htmlCode: "&#249;", altCode: "Alt + 0249", macShortcut: "Option + `, U", keywords: ["u", "grave", "accent"], popular: false },
  { char: "û", name: "U with Circumflex", category: "accent-letters", unicode: "U+00FB", htmlEntity: "&ucirc;", htmlCode: "&#251;", altCode: "Alt + 0251", macShortcut: "Option + I, U", keywords: ["u", "circumflex", "hat"], popular: false },
  { char: "ü", name: "U with Diaeresis", category: "accent-letters", unicode: "U+00FC", htmlEntity: "&uuml;", htmlCode: "&#252;", altCode: "Alt + 0252", macShortcut: "Option + U, U", keywords: ["u", "umlaut", "diaeresis", "german"], popular: true },
  { char: "Ü", name: "Capital U with Diaeresis", category: "accent-letters", unicode: "U+00DC", htmlEntity: "&Uuml;", htmlCode: "&#220;", altCode: "Alt + 0220", macShortcut: "Option + U, Shift + U", keywords: ["u", "umlaut", "capital", "german"], popular: false },

  // ===== ACCENT LETTERS — N, C, S, ß =====
  { char: "ñ", name: "N with Tilde", category: "accent-letters", unicode: "U+00F1", htmlEntity: "&ntilde;", htmlCode: "&#241;", altCode: "Alt + 0241", macShortcut: "Option + N, N", keywords: ["n", "tilde", "spanish", "enye"], popular: true },
  { char: "Ñ", name: "Capital N with Tilde", category: "accent-letters", unicode: "U+00D1", htmlEntity: "&Ntilde;", htmlCode: "&#209;", altCode: "Alt + 0209", macShortcut: "Option + N, Shift + N", keywords: ["n", "tilde", "capital", "spanish"], popular: false },
  { char: "ç", name: "C with Cedilla", category: "accent-letters", unicode: "U+00E7", htmlEntity: "&ccedil;", htmlCode: "&#231;", altCode: "Alt + 0231", macShortcut: "Option + C", keywords: ["c", "cedilla", "french", "portuguese"], popular: true },
  { char: "Ç", name: "Capital C with Cedilla", category: "accent-letters", unicode: "U+00C7", htmlEntity: "&Ccedil;", htmlCode: "&#199;", altCode: "Alt + 0199", macShortcut: "Option + Shift + C", keywords: ["c", "cedilla", "capital"], popular: false },
  { char: "ß", name: "Sharp S (Eszett)", category: "accent-letters", unicode: "U+00DF", htmlEntity: "&szlig;", htmlCode: "&#223;", altCode: "Alt + 0223", macShortcut: "Option + S", keywords: ["sharp s", "eszett", "german", "ss"], popular: true },

  // ===== LIGATURES =====
  { char: "æ", name: "AE Ligature", category: "accent-letters", unicode: "U+00E6", htmlEntity: "&aelig;", htmlCode: "&#230;", altCode: "Alt + 0230", macShortcut: "Option + '", keywords: ["ae", "ligature", "ash"], popular: false },
  { char: "Æ", name: "Capital AE Ligature", category: "accent-letters", unicode: "U+00C6", htmlEntity: "&AElig;", htmlCode: "&#198;", altCode: "Alt + 0198", macShortcut: "Option + Shift + '", keywords: ["ae", "ligature", "capital"], popular: false },
  { char: "œ", name: "OE Ligature", category: "accent-letters", unicode: "U+0153", htmlEntity: "&oelig;", htmlCode: "&#339;", altCode: "Alt + 0156", macShortcut: "Option + Q", keywords: ["oe", "ligature", "french"], popular: false },
  { char: "Œ", name: "Capital OE Ligature", category: "accent-letters", unicode: "U+0152", htmlEntity: "&OElig;", htmlCode: "&#338;", altCode: "Alt + 0140", macShortcut: "Option + Shift + Q", keywords: ["oe", "ligature", "capital"], popular: false },

  // ===== MISC KEYBOARD SYMBOLS =====
  { char: "|", name: "Pipe / Vertical Bar", category: "punctuation", unicode: "U+007C", htmlEntity: "&vert;", htmlCode: "&#124;", altCode: "Alt + 124", macShortcut: "Shift + \\", keywords: ["pipe", "vertical bar", "line"], popular: false },
  { char: "\\", name: "Backslash", category: "punctuation", unicode: "U+005C", htmlEntity: "&bsol;", htmlCode: "&#92;", altCode: "Alt + 92", macShortcut: "\\", keywords: ["backslash", "reverse slash"], popular: false },
  { char: "/", name: "Forward Slash", category: "punctuation", unicode: "U+002F", htmlEntity: "&sol;", htmlCode: "&#47;", altCode: "Alt + 47", macShortcut: "/", keywords: ["slash", "forward slash", "solidus"], popular: false },
  { char: "~", name: "Tilde", category: "punctuation", unicode: "U+007E", htmlEntity: "&tilde;", htmlCode: "&#126;", altCode: "Alt + 126", macShortcut: "Shift + `", keywords: ["tilde", "wave", "approximately"], popular: false },
  { char: "^", name: "Caret", category: "punctuation", unicode: "U+005E", htmlEntity: "&Hat;", htmlCode: "&#94;", altCode: "Alt + 94", macShortcut: "Shift + 6", keywords: ["caret", "hat", "circumflex", "exponent"], popular: false },
  { char: "_", name: "Underscore", category: "punctuation", unicode: "U+005F", htmlEntity: "&lowbar;", htmlCode: "&#95;", altCode: "Alt + 95", macShortcut: "Shift + -", keywords: ["underscore", "underline", "blank"], popular: false },
  { char: "@", name: "At Sign", category: "punctuation", unicode: "U+0040", htmlEntity: "&commat;", htmlCode: "&#64;", altCode: "Alt + 64", macShortcut: "Shift + 2", keywords: ["at", "email", "at sign"], popular: true },
  { char: "#", name: "Number Sign", category: "punctuation", unicode: "U+0023", htmlEntity: "&num;", htmlCode: "&#35;", altCode: "Alt + 35", macShortcut: "Shift + 3", keywords: ["number", "hash", "pound", "hashtag"], popular: true },
  { char: "&", name: "Ampersand", category: "punctuation", unicode: "U+0026", htmlEntity: "&amp;", htmlCode: "&#38;", altCode: "Alt + 38", macShortcut: "Shift + 7", keywords: ["ampersand", "and", "symbol"], popular: false },
  { char: "%", name: "Percent Sign", category: "punctuation", unicode: "U+0025", htmlEntity: "&percnt;", htmlCode: "&#37;", altCode: "Alt + 37", macShortcut: "Shift + 5", keywords: ["percent", "percentage"], popular: false },
  { char: "!", name: "Exclamation Mark", category: "punctuation", unicode: "U+0021", htmlEntity: "&excl;", htmlCode: "&#33;", altCode: "Alt + 33", macShortcut: "Shift + 1", keywords: ["exclamation", "bang"], popular: false },
  { char: "*", name: "Asterisk", category: "punctuation", unicode: "U+002A", htmlEntity: "&ast;", htmlCode: "&#42;", altCode: "Alt + 42", macShortcut: "Shift + 8", keywords: ["asterisk", "star", "multiply"], popular: false },
  { char: "″", name: "Double Prime (Inch)", category: "punctuation", unicode: "U+2033", htmlEntity: "&Prime;", htmlCode: "&#8243;", altCode: "Alt + 8243", macShortcut: "N/A", keywords: ["inch", "double prime", "seconds"], popular: false },
  { char: "℅", name: "Care Of", category: "misc", unicode: "U+2105", htmlEntity: "&#8453;", htmlCode: "&#8453;", altCode: "N/A", macShortcut: "N/A", keywords: ["care of", "c/o", "address"], popular: false },
];

// Helper function to get popular symbols
export function getPopularSymbols(): SymbolData[] {
  return symbols.filter((s) => s.popular);
}

// Helper function to search symbols
export function searchSymbols(query: string, category?: string): SymbolData[] {
  let filtered = symbols;

  if (category && category !== "all") {
    filtered = filtered.filter((s) => s.category === category);
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(
      (s) =>
        s.char === q ||
        s.name.toLowerCase().includes(q) ||
        s.keywords.some((k) => k.includes(q)) ||
        s.unicode.toLowerCase().includes(q) ||
        s.altCode.toLowerCase().includes(q) ||
        s.htmlEntity.toLowerCase().includes(q)
    );
  }

  return filtered;
}

// Helper to get symbols by category
export function getSymbolsByCategory(categoryId: string): SymbolData[] {
  if (categoryId === "all") return symbols;
  return symbols.filter((s) => s.category === categoryId);
}
