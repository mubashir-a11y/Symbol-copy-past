import Link from "next/link";
import styles from "./Footer.module.css";

const toolLinks = [
  { href: "/tools/copy-paste-symbols", label: "Copy & Paste Symbols" },
  { href: "/tools/alt-codes", label: "Alt Codes Finder" },
  { href: "/tools/accent-keyboard", label: "Accent Keyboard" },
];

const guideLinks = [
  { href: "/blog/degree-symbol-keyboard", label: "Degree Symbol (°)" },
  { href: "/blog/copyright-symbol-keyboard", label: "Copyright Symbol (©)" },
  { href: "/blog/type-division-symbol", label: "Division Symbol (÷)" },
  { href: "/blog/infinity-symbol", label: "Infinity Symbol (∞)" },
  { href: "/blog/e-with-accent", label: "E with Accent (é)" },
  { href: "/blog/letters-with-accents", label: "Letters with Accents" },
];

const resourceLinks = [
  { href: "/blog", label: "All Guides" },
  { href: "/blog/how-to-type-faster", label: "How to Type Faster" },
  { href: "/blog/keyboard-shortcuts-for-symbols", label: "Keyboard Shortcuts" },
  { href: "/blog/symbol-alt-codes-list", label: "Alt Codes List" },
];

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span className={styles.logoText}>
                Write<span className={styles.logoAccent}>Anything</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              Copy symbols, find alt codes, and type accented letters instantly.
              Works on Windows, Mac, and all devices.
            </p>
          </div>

          {/* Tools */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Tools</h3>
            <ul className={styles.linkList}>
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Guides */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Popular Guides</h3>
            <ul className={styles.linkList}>
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Resources</h3>
            <ul className={styles.linkList}>
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className={`${styles.colTitle} ${styles.colTitleSecond}`}>Legal</h3>
            <ul className={styles.linkList}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} WriteAnything. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
