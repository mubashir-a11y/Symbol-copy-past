import Link from "next/link";
import { articles } from "@/data/articles";
import styles from "./page.module.css";

export const metadata = {
  title: "Guides & Tutorials",
  description: "Learn how to type symbols, use alt codes, and master keyboard shortcuts. Step-by-step guides for Windows, Mac, Word, and Google Docs.",
};

const categoryList = [
  { id: "all", label: "All Guides" },
  { id: "symbols", label: "Symbols" },
  { id: "alt-codes", label: "Alt Codes" },
  { id: "accents", label: "Accents" },
  { id: "keyboard", label: "Keyboard" },
  { id: "math", label: "Math" },
  { id: "word", label: "Word & Docs" },
];

export default function BlogPage() {
  const featured = articles[0];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Guides &amp; Tutorials</h1>
        <p className={styles.subtitle}>
          Step-by-step guides for typing symbols, using alt codes, and mastering keyboard shortcuts.
        </p>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className="container">
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredGradient} />
              <div className={styles.featuredContent}>
                <span className={styles.featuredBadge}>{featured.category}</span>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <span className={styles.featuredCta}>Read guide →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className="container">
          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className={styles.articleCard}>
                <div className={styles.articleGradient} data-category={article.category} />
                <div className={styles.articleBody}>
                  <div className={styles.articleMeta}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                    <span className={styles.readTime}>{article.readTime}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
