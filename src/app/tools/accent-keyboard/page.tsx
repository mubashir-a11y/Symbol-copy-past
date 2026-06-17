"use client";

import { useState, useCallback, useMemo } from "react";
import { copyToClipboard } from "@/lib/clipboard";
import { useToast } from "@/components/ui/Toast";
import styles from "./page.module.css";

const baseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const accentTypes = [
  { id: "acute", label: "´", name: "ACUTE" },
  { id: "grave", label: "`", name: "GRAVE" },
  { id: "circumflex", label: "^", name: "CIRCUMFLEX" },
  { id: "tilde", label: "~", name: "TILDE" },
  { id: "umlaut", label: "¨", name: "UMLAUT" },
  { id: "cedilla", label: "¸", name: "CEDILLA" },
  { id: "ring", label: "°", name: "RING" },
  { id: "caron", label: "ˇ", name: "CARON" },
  { id: "stroke", label: "/", name: "STROKE" },
  { id: "macron", label: "¯", name: "MACRON" },
];

type AccentMap = { [letter: string]: { [accent: string]: { upper: string; lower: string } } };

const accentMap: AccentMap = {
  A: {
    acute: { upper: "Á", lower: "á" }, grave: { upper: "À", lower: "à" },
    circumflex: { upper: "Â", lower: "â" }, tilde: { upper: "Ã", lower: "ã" },
    umlaut: { upper: "Ä", lower: "ä" }, ring: { upper: "Å", lower: "å" },
    macron: { upper: "Ā", lower: "ā" },
  },
  C: {
    cedilla: { upper: "Ç", lower: "ç" }, acute: { upper: "Ć", lower: "ć" },
    caron: { upper: "Č", lower: "č" },
  },
  D: { caron: { upper: "Ď", lower: "ď" }, stroke: { upper: "Đ", lower: "đ" } },
  E: {
    acute: { upper: "É", lower: "é" }, grave: { upper: "È", lower: "è" },
    circumflex: { upper: "Ê", lower: "ê" }, umlaut: { upper: "Ë", lower: "ë" },
    caron: { upper: "Ě", lower: "ě" }, macron: { upper: "Ē", lower: "ē" },
  },
  G: { circumflex: { upper: "Ĝ", lower: "ĝ" } },
  H: { circumflex: { upper: "Ĥ", lower: "ĥ" } },
  I: {
    acute: { upper: "Í", lower: "í" }, grave: { upper: "Ì", lower: "ì" },
    circumflex: { upper: "Î", lower: "î" }, umlaut: { upper: "Ï", lower: "ï" },
    tilde: { upper: "Ĩ", lower: "ĩ" }, macron: { upper: "Ī", lower: "ī" },
  },
  J: { circumflex: { upper: "Ĵ", lower: "ĵ" } },
  L: { stroke: { upper: "Ł", lower: "ł" }, acute: { upper: "Ĺ", lower: "ĺ" }, caron: { upper: "Ľ", lower: "ľ" } },
  N: {
    tilde: { upper: "Ñ", lower: "ñ" }, acute: { upper: "Ń", lower: "ń" },
    caron: { upper: "Ň", lower: "ň" },
  },
  O: {
    acute: { upper: "Ó", lower: "ó" }, grave: { upper: "Ò", lower: "ò" },
    circumflex: { upper: "Ô", lower: "ô" }, tilde: { upper: "Õ", lower: "õ" },
    umlaut: { upper: "Ö", lower: "ö" }, stroke: { upper: "Ø", lower: "ø" },
    macron: { upper: "Ō", lower: "ō" },
  },
  R: { acute: { upper: "Ŕ", lower: "ŕ" }, caron: { upper: "Ř", lower: "ř" } },
  S: { acute: { upper: "Ś", lower: "ś" }, cedilla: { upper: "Ş", lower: "ş" }, caron: { upper: "Š", lower: "š" } },
  T: { caron: { upper: "Ť", lower: "ť" }, cedilla: { upper: "Ţ", lower: "ţ" } },
  U: {
    acute: { upper: "Ú", lower: "ú" }, grave: { upper: "Ù", lower: "ù" },
    circumflex: { upper: "Û", lower: "û" }, umlaut: { upper: "Ü", lower: "ü" },
    ring: { upper: "Ů", lower: "ů" }, macron: { upper: "Ū", lower: "ū" },
  },
  W: { circumflex: { upper: "Ŵ", lower: "ŵ" } },
  Y: { acute: { upper: "Ý", lower: "ý" }, umlaut: { upper: "Ÿ", lower: "ÿ" }, circumflex: { upper: "Ŷ", lower: "ŷ" } },
  Z: { acute: { upper: "Ź", lower: "ź" }, caron: { upper: "Ž", lower: "ž" }, stroke: { upper: "Ƶ", lower: "ƶ" } },
};

const languages = [
  { id: "all", label: "All" },
  { id: "french", label: "French" },
  { id: "spanish", label: "Spanish" },
  { id: "german", label: "German" },
  { id: "portuguese", label: "Portuguese" },
  { id: "italian", label: "Italian" },
  { id: "polish", label: "Polish" },
  { id: "czech", label: "Czech" },
];

const languageChars: { [lang: string]: string[] } = {
  french: ["À","à","Â","â","Ç","ç","É","é","È","è","Ê","ê","Ë","ë","Î","î","Ï","ï","Ô","ô","Ù","ù","Û","û","Ü","ü","Ÿ","ÿ","Œ","œ","Æ","æ"],
  spanish: ["Á","á","É","é","Í","í","Ó","ó","Ú","ú","Ñ","ñ","Ü","ü","¡","¿"],
  german: ["Ä","ä","Ö","ö","Ü","ü","ß"],
  portuguese: ["Á","á","Â","â","Ã","ã","À","à","Ç","ç","É","é","Ê","ê","Í","í","Ó","ó","Ô","ô","Õ","õ","Ú","ú"],
  italian: ["À","à","È","è","É","é","Ì","ì","Ò","ò","Ù","ù"],
  polish: ["Ą","ą","Ć","ć","Ę","ę","Ł","ł","Ń","ń","Ó","ó","Ś","ś","Ź","ź","Ż","ż"],
  czech: ["Á","á","Č","č","Ď","ď","É","é","Ě","ě","Í","í","Ň","ň","Ó","ó","Ř","ř","Š","š","Ť","ť","Ú","ú","Ů","ů","Ý","ý","Ž","ž"],
};

// Build all accented chars for the quick copy keyboard
function getAllAccentedChars(): string[] {
  const chars = new Set<string>();
  for (const letter of Object.keys(accentMap)) {
    for (const accent of Object.keys(accentMap[letter])) {
      chars.add(accentMap[letter][accent].upper);
      chars.add(accentMap[letter][accent].lower);
    }
  }
  // Add some extras
  ["ß","Æ","æ","Œ","œ","Ą","ą","Ę","ę","Ż","ż"].forEach(c => chars.add(c));
  return Array.from(chars).sort();
}

const allAccentedChars = getAllAccentedChars();

const faqItems = [
  { q: "How do I type accented letters on Windows?", a: "Use Alt codes with the numeric keypad (e.g., Alt+0233 for é), or use the Windows Character Map. Our tool lets you copy any accent with one click." },
  { q: "How do I type accented letters on Mac?", a: "Hold Option + a modifier key, then type the letter. For example, Option+E then E gives é. Or simply hold down a letter key to see accent options." },
  { q: "What are the most common accented letters?", a: "The most commonly used are: é (acute), è (grave), ê (circumflex), ë (umlaut), ñ (tilde), ç (cedilla), ü (umlaut), and ö (umlaut)." },
  { q: "How do I type Spanish ñ?", a: "On Windows: Alt+0241 (lowercase) or Alt+0209 (uppercase). On Mac: Option+N, then N. Or copy it from our tool!" },
  { q: "How do I type French accents?", a: "French uses acute (é), grave (à, è, ù), circumflex (â, ê, î, ô, û), cedilla (ç), and umlaut (ë, ï, ü). Use our keyboard to copy any of these." },
  { q: "How do I type German umlauts?", a: "German uses ä, ö, ü and ß. On Windows: Alt+0228 (ä), Alt+0246 (ö), Alt+0252 (ü), Alt+0223 (ß). On Mac: Option+U, then the vowel." },
];

export default function AccentKeyboardPage() {
  const { showToast } = useToast();
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [selectedAccent, setSelectedAccent] = useState<string | null>(null);
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [collectorText, setCollectorText] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("all");
  const [activeLetter, setActiveLetter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentAccents = accentMap[selectedLetter] || {};
  const resultChar = selectedAccent && currentAccents[selectedAccent]
    ? currentAccents[selectedAccent]
    : null;

  const handleCopy = useCallback(async (char: string) => {
    const success = await copyToClipboard(char);
    if (success) {
      setCopiedChar(char);
      showToast(`Copied ${char}`, "success");
      setTimeout(() => setCopiedChar(null), 1500);
    }
  }, [showToast]);

  const addToCollector = (char: string) => {
    setCollectorText((prev) => prev + char);
  };

  const copyCollector = async () => {
    if (collectorText) {
      const success = await copyToClipboard(collectorText);
      if (success) showToast("Copied all text!", "success");
    }
  };

  const filteredChars = useMemo(() => {
    let chars = activeLanguage === "all" ? allAccentedChars : (languageChars[activeLanguage] || []);
    if (activeLetter !== "all") {
      chars = chars.filter(c => c.toUpperCase().normalize("NFD")[0] === activeLetter);
    }
    return chars;
  }, [activeLanguage, activeLetter]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Accent Letters Keyboard &amp; Symbol Builder</h1>
        <p className={styles.subtitle}>
          Create and copy any accented letter. Select a base letter and accent type, or use the quick-copy keyboard below.
        </p>
      </section>

      {/* Accent Builder */}
      <section className={styles.builderSection}>
        <div className="container">
          <div className={styles.builder}>
            {/* Step 1: Choose Letter */}
            <div className={styles.builderStep}>
              <h3 className={styles.stepLabel}>1. CHOOSE BASE LETTER</h3>
              <div className={styles.letterGrid}>
                {baseLetters.map((l) => (
                  <button
                    key={l}
                    className={`${styles.letterBtn} ${selectedLetter === l ? styles.letterActive : ""} ${accentMap[l] ? "" : styles.letterDisabled}`}
                    onClick={() => { setSelectedLetter(l); setSelectedAccent(null); }}
                    disabled={!accentMap[l]}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Accent */}
            <div className={styles.builderStep}>
              <h3 className={styles.stepLabel}>2. CHOOSE ACCENT TYPE</h3>
              <div className={styles.accentGrid}>
                {accentTypes.map((at) => {
                  const available = !!currentAccents[at.id];
                  return (
                    <button
                      key={at.id}
                      className={`${styles.accentBtn} ${selectedAccent === at.id ? styles.accentActive : ""} ${!available ? styles.accentDisabled : ""}`}
                      onClick={() => available && setSelectedAccent(at.id)}
                      disabled={!available}
                    >
                      <span className={styles.accentSymbol}>{at.label}</span>
                      <span className={styles.accentName}>{at.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Result */}
            <div className={styles.builderStep}>
              <h3 className={styles.stepLabel}>3. COPY YOUR LETTER</h3>
              <div className={styles.resultArea}>
                <div className={styles.resultCards}>
                  <div className={`${styles.resultCard} ${copiedChar === resultChar?.upper ? styles.resultCopied : ""}`}>
                    <span className={styles.resultChar}>{resultChar?.upper || "?"}</span>
                    <span className={styles.resultLabel}>Uppercase</span>
                  </div>
                  <div className={`${styles.resultCard} ${copiedChar === resultChar?.lower ? styles.resultCopied : ""}`}>
                    <span className={styles.resultChar}>{resultChar?.lower || "?"}</span>
                    <span className={styles.resultLabel}>Lowercase</span>
                  </div>
                </div>
                <div className={styles.resultActions}>
                  <button
                    className="btn btn-primary"
                    disabled={!resultChar}
                    onClick={() => resultChar && handleCopy(resultChar.upper)}
                  >
                    📋 Copy Uppercase
                  </button>
                  <button
                    className="btn btn-primary"
                    disabled={!resultChar}
                    onClick={() => resultChar && handleCopy(resultChar.lower)}
                  >
                    📋 Copy Lowercase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Copy Keyboard */}
      <section className={styles.keyboardSection}>
        <div className="container">
          <h2 className="section-title">Quick Copy Keyboard</h2>
          <p className="section-subtitle">Click any letter to copy it. Use the filters to find specific characters.</p>

          {/* Text collector */}
          <div className={styles.collector}>
            <textarea
              className={styles.collectorInput}
              value={collectorText}
              onChange={(e) => setCollectorText(e.target.value)}
              placeholder="Click letters below to build your text..."
              rows={3}
            />
            <div className={styles.collectorActions}>
              <button className="btn btn-ghost" onClick={() => setCollectorText("")}>Clear</button>
              <button className="btn btn-primary" onClick={copyCollector} disabled={!collectorText}>Copy All</button>
            </div>
          </div>

          {/* Language filter */}
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>LANGUAGE</span>
            <div className={styles.filterPills}>
              {languages.map((lang) => (
                <button key={lang.id} className={`pill ${activeLanguage === lang.id ? "active" : ""}`} onClick={() => setActiveLanguage(lang.id)}>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Letter filter */}
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>LETTER</span>
            <div className={styles.filterPills}>
              <button className={`pill ${activeLetter === "all" ? "active" : ""}`} onClick={() => setActiveLetter("all")}>All</button>
              {baseLetters.map((l) => (
                <button key={l} className={`pill ${activeLetter === l ? "active" : ""}`} onClick={() => setActiveLetter(l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Accented chars grid */}
          <div className={styles.charGrid}>
            {filteredChars.map((char, i) => (
              <button
                key={`${char}-${i}`}
                className={`${styles.charBtn} ${copiedChar === char ? styles.charCopied : ""}`}
                onClick={() => { handleCopy(char); addToCollector(char); }}
                title={`Click to copy ${char}`}
              >
                {char}
              </button>
            ))}
          </div>
          {filteredChars.length === 0 && (
            <p className={styles.noChars}>No accented characters found for this filter combination.</p>
          )}
        </div>
      </section>

      {/* How to Use */}
      <section className={styles.howTo}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 className="section-title">How to Use This Tool</h2>
          <div className={styles.steps}>
            <div className={styles.step}><span className={styles.stepNum}>1</span><div><h3>Use the Accent Builder</h3><p>Select a base letter (A-Z) and an accent type (acute, grave, tilde, etc.) to create any accented character.</p></div></div>
            <div className={styles.step}><span className={styles.stepNum}>2</span><div><h3>Click to Copy</h3><p>Click any accented letter to instantly copy it to your clipboard. Build multiple characters using the collector.</p></div></div>
            <div className={styles.step}><span className={styles.stepNum}>3</span><div><h3>Paste Anywhere</h3><p>Use Ctrl+V (Windows) or Cmd+V (Mac) to paste the accented letter into any application.</p></div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about typing accented letters.</p>
          <div className={styles.faqGrid}>
            {faqItems.map((item, i) => (
              <div key={i} className={styles.faqCard}>
                <div className={styles.faqIcon}>💡</div>
                <h3 className={styles.faqQuestion}>{item.q}</h3>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
