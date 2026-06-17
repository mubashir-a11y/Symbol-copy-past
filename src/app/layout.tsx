import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "WriteAnything — Type Any Symbol Instantly",
    template: "%s | WriteAnything",
  },
  description:
    "Copy symbols with one click or find keyboard shortcuts for Windows, Mac, Word, and Google Docs. 1,220+ symbols, alt codes, and accented letters. No installation needed.",
  keywords: [
    "symbols",
    "copy paste",
    "alt codes",
    "keyboard shortcuts",
    "special characters",
    "accented letters",
    "unicode",
    "emoji",
  ],
  authors: [{ name: "WriteAnything" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WriteAnything",
    title: "WriteAnything — Type Any Symbol Instantly",
    description:
      "Copy symbols with one click or find keyboard shortcuts for Windows, Mac, Word, and Google Docs.",
  },
  verification: {
    google: "arqqUux276T0lBX3HHjMWSocV-8h-4dL7JA58N6UHrM",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WriteAnything",
  url: "https://writeanything.com",
  description:
    "Copy symbols with one click or find keyboard shortcuts for Windows, Mac, Word, and Google Docs.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://writeanything.com/tools/copy-paste-symbols?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider>
          <ToastProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
