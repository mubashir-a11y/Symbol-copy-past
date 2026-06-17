import styles from "../about/page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "WriteAnything privacy policy. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          Your privacy matters. Here is how WriteAnything handles your data.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.legalContent}>
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>Information We Collect</h2>
          <p>WriteAnything is designed with privacy in mind. We collect minimal data:</p>
          <ul>
            <li><strong>Usage analytics:</strong> Anonymous page view counts and feature usage to improve our tools</li>
            <li><strong>Local storage data:</strong> Your theme preference, favorite symbols, and recently copied symbols are stored locally in your browser — never sent to our servers</li>
            <li><strong>Contact form submissions:</strong> If you contact us, we store your name, email, and message to respond to your inquiry</li>
          </ul>

          <h2>What We Do Not Collect</h2>
          <ul>
            <li>We do not track what you copy from our tools</li>
            <li>We do not use cookies for advertising or tracking</li>
            <li>We do not sell or share personal data with third parties</li>
            <li>We do not require account creation or login</li>
          </ul>

          <h2>Local Storage</h2>
          <p>
            WriteAnything uses your browser&apos;s localStorage to save preferences such as dark/light theme, favorite symbols,
            and recently copied symbols. This data never leaves your device and is not accessible to us or any third party.
            You can clear this data at any time through your browser settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use privacy-respecting analytics services to understand aggregate usage patterns. These services do not
            use cookies and do not collect personally identifiable information.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical measures to protect any data we process. Our website is served over HTTPS
            to ensure secure connections.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated
            revision date. Continued use of the website after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy or your data, please contact us through our contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
