"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools/copy-paste-symbols", label: "Copy Paste Symbols" },
  { href: "/tools/alt-codes", label: "Alt Codes Finder" },
  { href: "/tools/accent-keyboard", label: "Accent Keyboard" },
  { href: "/blog", label: "Guides" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      id="site-header"
    >
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="WriteAnything Home">
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>
            Write<span className={styles.logoAccent}>Anything</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ""}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ""}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileBackdrop} onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
