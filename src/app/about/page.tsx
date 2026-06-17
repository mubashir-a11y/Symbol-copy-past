import styles from "./page.module.css";

export const metadata = {
  title: "About WriteAnything",
  description: "WriteAnything helps you type any symbol, accented letter, or special character instantly. Learn about our mission and tools.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>About <span className="gradient-text">WriteAnything</span></h1>
        <p className={styles.subtitle}>
          Helping millions of people type symbols, accented letters, and special characters — instantly and effortlessly.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.cardText}>
              Every day, millions of people need to type special characters — from the degree symbol in a weather report to accented letters in a French essay. 
              We built WriteAnything to make this process instant and effortless. No software to install, no complex shortcuts to memorize.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <h2 className={styles.cardTitle}>How It Works</h2>
            <p className={styles.cardText}>
              WriteAnything provides three powerful tools: a Copy &amp; Paste Symbols library with 1,220+ characters, an Alt Codes Finder for keyboard shortcuts, 
              and an Accent Keyboard for building accented letters. Click any symbol to copy it instantly.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🌍</div>
            <h2 className={styles.cardTitle}>Universal Compatibility</h2>
            <p className={styles.cardText}>
              All symbols on WriteAnything are standard Unicode characters. They work in every application — Microsoft Word, Google Docs, Excel, 
              social media platforms, email clients, and messaging apps — on every device and operating system.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📚</div>
            <h2 className={styles.cardTitle}>Expert Guides</h2>
            <p className={styles.cardText}>
              Beyond our tools, we publish comprehensive guides explaining every method to type symbols on every platform. 
              Whether you use Windows, Mac, Chromebook, or mobile — we have step-by-step instructions for you.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}><span className={styles.statNum}>1,220+</span><span className={styles.statLabel}>Symbols</span></div>
          <div className={styles.stat}><span className={styles.statNum}>350+</span><span className={styles.statLabel}>Alt Codes</span></div>
          <div className={styles.stat}><span className={styles.statNum}>29</span><span className={styles.statLabel}>Categories</span></div>
          <div className={styles.stat}><span className={styles.statNum}>250+</span><span className={styles.statLabel}>Guides</span></div>
        </div>
      </section>
    </div>
  );
}
