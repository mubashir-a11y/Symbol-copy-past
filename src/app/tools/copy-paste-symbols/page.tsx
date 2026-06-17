"use client";

import { useState, useCallback, useMemo } from "react";
import { symbols, categories, searchSymbols, type SymbolData } from "@/data/symbols";
import { copyToClipboard, addRecentSymbol } from "@/lib/clipboard";
import { useToast } from "@/components/ui/Toast";
import styles from "./page.module.css";

const ITEMS_PER_PAGE = 120;

const popularSymbols: SymbolData[] = [
  symbols.find(s => s.char === "★")!,
  symbols.find(s => s.char === "♥")!,
  symbols.find(s => s.char === "→")!,
  symbols.find(s => s.char === "✓")!,
  symbols.find(s => s.char === "✕")!,
  symbols.find(s => s.char === "©")!,
  symbols.find(s => s.char === "®")!,
  symbols.find(s => s.char === "™")!,
  symbols.find(s => s.char === "°")!,
  symbols.find(s => s.char === "€")!,
  symbols.find(s => s.char === "£")!,
  symbols.find(s => s.char === "¥")!,
  symbols.find(s => s.char === "∞")!,
  symbols.find(s => s.char === "♪")!,
  symbols.find(s => s.char === "☀")!,
  symbols.find(s => s.char === "⚡")!,
  symbols.find(s => s.char === "☺")!,
  symbols.find(s => s.char === "☁")!,
].filter(Boolean);

const faqItems = [
  { q: "How do I copy a symbol from this page?", a: "Click on any symbol card to instantly copy it to your clipboard. You will see a green confirmation and a toast notification. Then paste it anywhere using Ctrl+V (Windows) or Cmd+V (Mac)." },
  { q: "Will these symbols work in all applications?", a: "Yes. All symbols on this page are Unicode characters, a universal standard supported by virtually every modern application — including Word, Google Docs, Excel, social media platforms, email clients, and messaging apps." },
  { q: "Can I use these symbols on my phone?", a: "Absolutely. Unicode symbols work on iOS, Android, and all modern mobile operating systems. Simply tap the symbol to copy it, then paste it into any app." },
  { q: "Why do some symbols look different on different devices?", a: "Each operating system and application renders Unicode characters using its own fonts. The underlying character is the same, but the visual appearance may vary slightly between Windows, Mac, iOS, and Android." },
  { q: "How can I find a specific symbol?", a: "Use the search bar at the top to search by name, keyword, or Unicode code. You can also filter by category using the filter pills below the search bar." },
  { q: "Are these symbols free to use?", a: "Yes. All symbols are part of the Unicode standard and are free to use for any purpose — personal, educational, or commercial." },
];

export default function CopyPasteSymbolsPage() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [copiedChar, setCopiedChar] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolData | null>(null);

  const filteredSymbols = useMemo(() => {
    return searchSymbols(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const visibleSymbols = filteredSymbols.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSymbols.length;

  const handleCopy = useCallback(async (char: string, name: string) => {
    const success = await copyToClipboard(char);
    if (success) {
      addRecentSymbol(char);
      setCopiedChar(char);
      showToast(`Copied ${char} — ${name}`, "success");
      setTimeout(() => setCopiedChar(null), 1500);
    }
  }, [showToast]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

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
    name: "How to Copy and Paste Symbols",
    description: "Copy paste symbols are special characters that can be copied from this page and pasted into any application.",
    step: [
      { "@type": "HowToStep", name: "Find Your Symbol", text: "Browse categories or use the search box to find the symbol you need" },
      { "@type": "HowToStep", name: "Click to Copy", text: "Click on any symbol to instantly copy it to your clipboard" },
      { "@type": "HowToStep", name: "Paste Anywhere", text: "Use Ctrl+V (Windows) or Cmd+V (Mac) to paste the symbol" },
    ],
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Copy Paste Symbols</h1>
        <p className={styles.subtitle}>
          Browse {symbols.length.toLocaleString()}+ symbols organized by category. Click any symbol to copy it instantly.
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
            placeholder="Search symbols by name or keyword..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
            id="symbol-search"
          />
        </div>
      </section>

      {/* Category Filters */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersScroll}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.id === "all" ? `⊞ ${cat.label}` : `${cat.icon} ${cat.label}`}
            </button>
          ))}
        </div>
      </section>

      {/* Symbol Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <p className={styles.resultCount}>
            {filteredSymbols.length} symbol{filteredSymbols.length !== 1 ? "s" : ""} found
          </p>
          <div className="symbol-grid">
            {visibleSymbols.map((s, i) => (
              <button
                key={`${s.unicode}-${i}`}
                className={`symbol-card ${copiedChar === s.char ? "copied" : ""}`}
                onClick={() => handleCopy(s.char, s.name)}
                onContextMenu={(e) => { e.preventDefault(); setSelectedSymbol(s); }}
                title={`${s.name} — Click to copy, right-click for details`}
              >
                <span className="symbol-char">{s.char}</span>
                <span className="symbol-name">{s.name}</span>
              </button>
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMore}>
              <button
                className="btn btn-primary"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              >
                Load More Symbols ({filteredSymbols.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {filteredSymbols.length === 0 && (
            <div className={styles.emptyState}>
              <p>No symbols found for &quot;{searchQuery}&quot;</p>
              <button className="btn btn-secondary" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Most Popular */}
      <section className={styles.popularSection}>
        <div className="container">
          <h2 className="section-title">Most Popular Symbols</h2>
          <p className="section-subtitle">Click any symbol to copy it instantly</p>
          <div className={styles.popularGrid}>
            {popularSymbols.map((s) => (
              <button
                key={s.unicode}
                className={`${styles.popularCard} ${copiedChar === s.char ? styles.popularCopied : ""}`}
                onClick={() => handleCopy(s.char, s.name)}
                title={`Copy ${s.name}`}
              >
                <span className={styles.popularChar}>{s.char}</span>
                <span className={styles.popularName}>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className={styles.howToSection}>
        <div className="container">
          <h2 className="section-title">How to Use Copy Paste Symbols</h2>
          <p className="section-subtitle">
            Copy paste symbols are special characters that can be copied from this page and pasted into any application.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div>
                <h3 className={styles.stepTitle}>Find Your Symbol</h3>
                <p className={styles.stepDesc}>Browse categories or use the search box to find the symbol you need</p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div>
                <h3 className={styles.stepTitle}>Click to Copy</h3>
                <p className={styles.stepDesc}>Click on any symbol to instantly copy it to your clipboard</p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div>
                <h3 className={styles.stepTitle}>Paste Anywhere</h3>
                <p className={styles.stepDesc}>Use Ctrl+V (Windows) or Cmd+V (Mac) to paste the symbol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <div key={i} className={`accordion-item ${openFaq === i ? "open" : ""}`}>
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbol Detail Modal */}
      {selectedSymbol && (
        <>
          <div className="modal-backdrop" onClick={() => setSelectedSymbol(null)} />
          <div className="modal" role="dialog" aria-label="Symbol details">
            <button className={styles.modalClose} onClick={() => setSelectedSymbol(null)}>✕</button>
            <div className={styles.modalSymbol}>{selectedSymbol.char}</div>
            <h3 className={styles.modalName}>{selectedSymbol.name}</h3>
            <div className={styles.modalInfo}>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Unicode</span>
                <span className={styles.modalValue}>{selectedSymbol.unicode}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>HTML Entity</span>
                <span className={styles.modalValue}>{selectedSymbol.htmlEntity}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>HTML Code</span>
                <span className={styles.modalValue}>{selectedSymbol.htmlCode}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Windows</span>
                <span className={styles.modalValue}>{selectedSymbol.altCode}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Mac</span>
                <span className={styles.modalValue}>{selectedSymbol.macShortcut}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>CSS</span>
                <span className={styles.modalValue}>{selectedSymbol.unicode.replace("U+", "\\")}</span>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button className="btn btn-primary" onClick={() => handleCopy(selectedSymbol.char, selectedSymbol.name)}>
                Copy Symbol
              </button>
              <button className="btn btn-secondary" onClick={() => { copyToClipboard(selectedSymbol.htmlEntity); showToast("Copied HTML entity", "success"); }}>
                Copy HTML
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
