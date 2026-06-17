import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.relatedSlugs);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];
    let inList = false;
    let listItems: string[] = [];
    let key = 0;

    const flushTable = () => {
      if (tableHeaders.length > 0) {
        elements.push(
          <div key={key++} className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {tableHeaders.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key++} className={styles.list}>
            {listItems.map((item, i) => (
              <li key={i}>{formatInline(item)}</li>
            ))}
          </ul>
        );
      }
      listItems = [];
      inList = false;
    };

    const formatInline = (text: string): React.ReactNode => {
      // Bold
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        // Inline code
        const codeParts = part.split(/(`[^`]+`)/g);
        return codeParts.map((cp, j) => {
          if (cp.startsWith("`") && cp.endsWith("`")) {
            return <code key={`${i}-${j}`} className={styles.inlineCode}>{cp.slice(1, -1)}</code>;
          }
          // Links
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const linkParts: React.ReactNode[] = [];
          let lastIndex = 0;
          let match;
          while ((match = linkRegex.exec(cp)) !== null) {
            if (match.index > lastIndex) {
              linkParts.push(cp.slice(lastIndex, match.index));
            }
            linkParts.push(
              <Link key={`link-${match.index}`} href={match[2]}>
                {match[1]}
              </Link>
            );
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < cp.length) {
            linkParts.push(cp.slice(lastIndex));
          }
          return linkParts.length > 0 ? <span key={`${i}-${j}`}>{linkParts}</span> : cp;
        });
      });
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip the h1 (already shown in hero)
      if (trimmed.startsWith("# ") && !trimmed.startsWith("## ")) continue;

      // Table rows
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        if (inList) flushList();
        const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
        if (cells.every((c) => /^[-:]+$/.test(c))) continue; // separator row
        if (!inTable) {
          inTable = true;
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        flushTable();
      }

      // List items
      if (trimmed.startsWith("- ")) {
        if (inTable) flushTable();
        inList = true;
        listItems.push(trimmed.slice(2));
        continue;
      } else if (inList) {
        flushList();
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmed)) {
        if (inTable) flushTable();
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
        continue;
      }

      // Empty line
      if (!trimmed) continue;

      // Headings
      if (trimmed.startsWith("### ")) {
        elements.push(<h4 key={key++} className={styles.h4}>{trimmed.slice(4)}</h4>);
      } else if (trimmed.startsWith("## ")) {
        elements.push(<h2 key={key++} className={styles.h2} id={trimmed.slice(3).toLowerCase().replace(/[^a-z0-9]+/g, "-")}>{trimmed.slice(3)}</h2>);
      } else {
        elements.push(<p key={key++} className={styles.paragraph}>{formatInline(trimmed)}</p>);
      }
    }

    if (inTable) flushTable();
    if (inList) flushList();

    return elements;
  };

  // Extract h2 headings for TOC
  const tocItems = article.content
    .split("\n")
    .filter((l) => l.trim().startsWith("## "))
    .map((l) => {
      const text = l.trim().slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return { text, id };
    });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: "WriteAnything" },
    publisher: { "@type": "Organization", name: "WriteAnything" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://writeanything.com/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://writeanything.com" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://writeanything.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/blog">Guides</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>{article.title}</span>
      </nav>

      <div className={styles.layout}>
        {/* TOC Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.tocCard}>
            <h3 className={styles.tocTitle}>Table of Contents</h3>
            <nav className={styles.tocNav}>
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
            <div className={styles.articleMeta}>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className={styles.articleContent}>
            {renderContent(article.content)}
          </div>
        </article>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <h2 className="section-title">Related Guides</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <h3 className={styles.relatedTitle}>{r.title}</h3>
                  <p className={styles.relatedExcerpt}>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
