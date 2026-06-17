"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { getPopularSymbols, searchSymbols } from "@/data/symbols";
import { copyToClipboard, addRecentSymbol } from "@/lib/clipboard";
import { useToast } from "@/components/ui/Toast";
import styles from "./page.module.css";

const quickFilters = ["Omega", "Degree", "Copyright", "Check mark", "Arrow", "Euro", "Heart", "Pi"];

const popularSymbols = getPopularSymbols().slice(0, 24);

const tools = [
  {
    title: "Copy and Paste Symbols",
    description: "1,220+ symbols to copy with one click.",
    features: ["Arrows, stars, hearts, checkmarks", "Browse by category", "Instant copy to clipboard"],
    href: "/tools/copy-paste-symbols",
    icon: "⊞",
  },
  {
    title: "Alt Codes Finder",
    description: "Find Windows Alt codes and typing shortcuts.",
    features: ["Search by symbol or name", "Windows Alt codes", "Word/Mac tips"],
    href: "/tools/alt-codes",
    icon: "⌨",
  },
  {
    title: "Accent Keyboard",
    description: "Type and copy accented letters (é, ñ, ü, ç…).",
    features: ["French + Spanish basics", "Click-to-copy", "Works on any keyboard"],
    href: "/tools/accent-keyboard",
    icon: "Â",
  },
];

const guides = [
  { label: "Degree Symbol on Keyboard (°)", href: "/blog/degree-symbol-keyboard" },
  { label: "Copyright Symbol on Keyboard (©)", href: "/blog/copyright-symbol-keyboard" },
  { label: "Type Bullet Points (•)", href: "/blog/bullet-point" },
  { label: "Type Em Dash in Word & Docs (—)", href: "/blog/em-dash-in-word" },
  { label: "Type Registered Symbol (®)", href: "/blog/type-registered-r-circle-symbol" },
  { label: "Keyboard Shortcuts for Symbols", href: "/blog/keyboard-shortcuts-for-symbols" },
  { label: "Alt Codes on Mac", href: "/blog/alt-codes-on-mac" },
  { label: "Type Letters with Accents", href: "/blog/letters-with-accents" },
  { label: "Math Symbols on Keyboard", href: "/blog/math-symbols-on-keyboard-alt-codes" },
];

export default function HomePage() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof popularSymbols>([]);
  const [showResults, setShowResults] = useState(false);
  const [copiedChar, setCopiedChar] = useState<string | null>(null);

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    if (value.trim().length > 0) {
      const results = searchSymbols(value).slice(0, 20);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, []);

  const handleCopy = async (char: string, name: string) => {
    const success = await copyToClipboard(char);
    if (success) {
      addRecentSymbol(char);
      setCopiedChar(char);
      showToast(`Copied ${char} (${name})`, "success");
      setTimeout(() => setCopiedChar(null), 1500);
    }
  };

  const handleQuickFilter = (filter: string) => {
    setSearchQuery(filter);
    handleSearch(filter);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span className="animated-gradient-text">Type Any Symbol Instantly</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Copy symbols with one click or find keyboard shortcuts for Windows, Mac,
            Word, and Google Docs. No installation needed.
          </p>

          {/* Search */}
          <div className={styles.searchWrapper}>
            <div className="search-input-wrapper">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="search-input"
                placeholder="Search symbols… (omega, degree, check mark, euro)"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => { if (searchQuery.trim()) setShowResults(true); }}
                id="hero-search"
                aria-label="Search symbols"
              />
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className={styles.searchResults}>
                <div className={styles.searchResultsGrid}>
                  {searchResults.map((s) => (
                    <button
                      key={s.unicode}
                      className={`symbol-card ${copiedChar === s.char ? "copied" : ""}`}
                      onClick={() => handleCopy(s.char, s.name)}
                      title={`Copy ${s.name}`}
                    >
                      <span className="symbol-char">{s.char}</span>
                      <span className="symbol-name">{s.name}</span>
                    </button>
                  ))}
                </div>
                {searchResults.length === 0 && (
                  <p className={styles.noResults}>No symbols found. Try a different search.</p>
                )}
              </div>
            )}
          </div>

          {/* Quick Filters */}
          <div className={styles.quickFilters}>
            {quickFilters.map((f) => (
              <button
                key={f}
                className="pill"
                onClick={() => handleQuickFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <Link href="/tools/copy-paste-symbols" className="btn btn-primary">
              <span>⊞</span> Copy and Paste Symbols
            </Link>
            <Link href="/tools/alt-codes" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Find Alt Codes &amp; Shortcuts
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Copy Symbols */}
      <section className={`section ${styles.quickCopySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionLabel}>QUICK COPY SYMBOLS</h2>
            <Link href="/tools/copy-paste-symbols" className={styles.viewAll}>
              View all →
            </Link>
          </div>
          <div className="symbol-grid">
            {popularSymbols.map((s, i) => (
              <button
                key={s.unicode}
                className={`symbol-card stagger-item ${copiedChar === s.char ? "copied" : ""}`}
                style={{ animationDelay: `${i * 30}ms` }}
                onClick={() => handleCopy(s.char, s.name)}
                title={`Copy ${s.name}`}
              >
                <span className="symbol-char">{s.char}</span>
                <span className="symbol-name">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1,220+</span>
              <span className={styles.statLabel}>Symbols</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>350+</span>
              <span className={styles.statLabel}>Alt Codes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>29</span>
              <span className={styles.statLabel}>Categories</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>All</span>
              <span className={styles.statLabel}>Devices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typing Tools */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Typing Tools</h2>
          <p className="section-subtitle">
            Use these tools to type and copy symbols, find Windows Alt codes, open
            emoji shortcuts, and type accented letters on any keyboard.
          </p>
          <div className="tools-grid">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className={styles.toolCard}>
                <div className={styles.toolIcon}>{tool.icon}</div>
                <h3 className={styles.toolTitle}>{tool.title}</h3>
                <p className={styles.toolDesc}>{tool.description}</p>
                <ul className={styles.toolFeatures}>
                  {tool.features.map((f) => (
                    <li key={f}>
                      <span className={styles.featureCheck}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <span className={styles.toolCta}>Open tool →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How-To Guides */}
      <section className={styles.guidesSection}>
        <div className="container">
          <h2 className="section-title">How-To Guides</h2>
          <div className="guides-grid">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className={styles.guideCard}>
                <span className={styles.guideArrow}>→</span>
                <span>{guide.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
