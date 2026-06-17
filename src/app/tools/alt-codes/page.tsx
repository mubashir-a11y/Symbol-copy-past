"use client";

import { useState, useMemo, useCallback } from "react";
import { symbols, categories, searchSymbols, type SymbolData } from "@/data/symbols";
import { copyToClipboard, addRecentSymbol } from "@/lib/clipboard";
import { useToast } from "@/components/ui/Toast";
import styles from "./page.module.css";

const altCodeCategories = [
  { id: "all", label: "All" },
  { id: "accent-letters", label: "Accents" },
  { id: "arrows", label: "Arrows" },
  { id: "currency", label: "Currency" },
  { id: "fractions", label: "Fractions" },
  { id: "greek", label: "Greek" },
  { id: "legal", label: "Legal" },
  { id: "math", label: "Math" },
  { id: "punctuation", label: "Punctuation" },
  { id: "superscripts", label: "Superscripts" },
  { id: "checkmarks", label: "Checkmarks" },
  { id: "hearts", label: "Hearts" },
  { id: "stars", label: "Stars" },
  { id: "music", label: "Music" },
  { id: "cards", label: "Cards" },
  { id: "shapes", label: "Shapes" },
  { id: "zodiac", label: "Zodiac" },
  { id: "dingbats", label: "Dingbats" },
  { id: "misc", label: "Misc" },
];

const mostSearched = [
  "©", "™", "®", "°", "€", "£", "¥", "±",
  "÷", "×", "½", "¼", "→", "♥", "★", "✓",
  "ñ", "•", "…", "§", "∞", "²",
];

const faqItems = [
  { q: "Why aren't alt codes working on my laptop?", a: "Many laptops lack a dedicated numeric keypad. To use alt codes on a laptop, press Fn + NumLock to enable the hidden numeric keypad, then use the keys with numbers printed on them (usually U, I, O, J, K, L, M) while holding Alt." },
  { q: "What's the difference between Alt codes and Alt X codes?", a: "Standard Alt codes use the numeric keypad (Alt + number). Alt X codes work in Microsoft Office — type the Unicode hex code, then press Alt+X to convert it. For example, type 00A9 then Alt+X to get ©." },
  { q: "How do I type special characters on Mac?", a: "Mac uses Option key combinations instead of Alt codes. For example, Option+G for ©, Option+2 for ™, Option+R for ®. You can also press and hold a letter key to see accent options." },
  { q: "Can I use alt codes in any program?", a: "Alt codes work in most Windows applications that accept text input. However, some programs (especially web-based ones) may intercept the Alt key. In those cases, use the copy-paste method from this page instead." },
  { q: "What are the most useful alt codes to memorize?", a: "The most commonly needed alt codes are: Alt+0169 (©), Alt+0174 (®), Alt+0153 (™), Alt+0176 (°), Alt+0128 (€), Alt+0163 (£), Alt+0177 (±), and Alt+0247 (÷)." },
  { q: "Why do some alt codes have a leading zero?", a: "Alt codes with a leading zero (like Alt+0169) access the Windows-1252 character set, while codes without (like Alt+169) access the older IBM PC Code Page 437. The Windows set (with leading zero) includes more useful symbols for modern documents." },
];

export default function AltCodesPage() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const filtered = useMemo(() => {
    return searchSymbols(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const handleCopy = useCallback(async (char: string, name: string) => {
    const success = await copyToClipboard(char);
    if (success) {
      addRecentSymbol(char);
      setCopiedChar(char);
      showToast(`Copied ${char} — ${name}`, "success");
      setTimeout(() => setCopiedChar(null), 1500);
    }
  }, [showToast]);

  const visibleCategories = showMoreCategories ? altCodeCategories : altCodeCategories.slice(0, 9);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Alt Codes",
    description: "Type special symbols on Windows using numeric keypad alt codes.",
    step: [
      { "@type": "HowToStep", name: "Enable Num Lock", text: "Make sure Num Lock is turned on (the light should be on)" },
      { "@type": "HowToStep", name: "Hold Alt Key", text: "Press and hold the Alt key on your keyboard" },
      { "@type": "HowToStep", name: "Type the Code", text: "Using the numeric keypad, type the alt code number" },
      { "@type": "HowToStep", name: "Release Alt", text: "Release the Alt key and the symbol will appear" },
    ],
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Windows Alt Codes &amp; Mac Shortcuts: {symbols.length}+ Special Symbols</h1>
        <p className={styles.subtitle}>
          Find Windows alt codes and Mac keyboard shortcuts for any symbol. Click to copy the symbol.
        </p>
      </section>

      {/* Search */}
      <section className={styles.searchSection}>
        <div className="search-input-wrapper" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search all codes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="altcode-search"
          />
        </div>
      </section>

      {/* Category Filters */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersScroll}>
          {visibleCategories.map((cat) => (
            <button
              key={cat.id}
              className={`pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          {!showMoreCategories && (
            <button className="pill" onClick={() => setShowMoreCategories(true)}>
              Show more ▾
            </button>
          )}
        </div>
      </section>

      {/* Alt Code Cards Grid */}
      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.altGrid}>
            {filtered.map((s, i) => (
              <button
                key={`${s.unicode}-${i}`}
                className={`${styles.altCard} ${copiedChar === s.char ? styles.altCardCopied : ""}`}
                onClick={() => handleCopy(s.char, s.name)}
                title={`Click to copy ${s.name}`}
              >
                <div className={styles.altCardHeader}>
                  <span className={styles.altCardSymbol}>{s.char}</span>
                  <span className={styles.altCardName}>{s.name}</span>
                </div>
                <div className={styles.altCardInfo}>
                  <div className={styles.altRow}>
                    <span className={styles.altPlatform}>WINDOWS</span>
                    <span className={styles.altValue}>{s.altCode}</span>
                  </div>
                  <div className={styles.altRow}>
                    <span className={styles.altPlatform}>MAC</span>
                    <span className={styles.altValue}>{s.macShortcut}</span>
                  </div>
                  <div className={styles.altRow}>
                    <span className={styles.altPlatform}>HTML</span>
                    <span className={styles.altValue}>{s.htmlEntity}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              <p>No alt codes found for &quot;{searchQuery}&quot;</p>
              <button className="btn btn-secondary" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Most Searched */}
      <section className={styles.mostSearched}>
        <div className="container">
          <h2 className="section-title">Most Searched Alt Codes</h2>
          <p className="section-subtitle">Click any symbol to copy it instantly</p>
          <div className={styles.mostSearchedGrid}>
            {mostSearched.map((char) => {
              const s = symbols.find((sym) => sym.char === char);
              if (!s) return null;
              return (
                <button
                  key={s.unicode}
                  className={`${styles.mostSearchedCard} ${copiedChar === s.char ? "copied" : ""}`}
                  onClick={() => handleCopy(s.char, s.name)}
                >
                  <span className={styles.msChar}>{s.char}</span>
                  <span className={styles.msName}>{s.name}</span>
                  <span className={styles.msCode}>{s.altCode}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use Alt Codes */}
      <section className={styles.howTo}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 className="section-title">How to Use Alt Codes</h2>
          <div className={styles.steps}>
            <div className={styles.step}><span className={styles.stepNum}>1</span><div><h3>Enable Num Lock</h3><p>Make sure Num Lock is turned on (the light should be on)</p></div></div>
            <div className={styles.step}><span className={styles.stepNum}>2</span><div><h3>Hold Alt Key</h3><p>Press and hold the Alt key on your keyboard</p></div></div>
            <div className={styles.step}><span className={styles.stepNum}>3</span><div><h3>Type the Code</h3><p>Using the numeric keypad, type the alt code number</p></div></div>
            <div className={styles.step}><span className={styles.stepNum}>4</span><div><h3>Release Alt</h3><p>Release the Alt key and the symbol will appear</p></div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title">Alt Codes FAQ</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <div key={i} className={`accordion-item ${openFaq === i ? "open" : ""}`}>
                <button className="accordion-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
