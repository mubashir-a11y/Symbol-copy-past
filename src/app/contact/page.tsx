import styles from "../about/page.module.css";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the WriteAnything team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Have a question, suggestion, or found a bug? We would love to hear from you.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.formCard}>
          <form action="#" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="contact-name" className={styles.formLabel}>Name</label>
              <input type="text" id="contact-name" className={styles.formInput} placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-email" className={styles.formLabel}>Email</label>
              <input type="email" id="contact-email" className={styles.formInput} placeholder="you@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-subject" className={styles.formLabel}>Subject</label>
              <input type="text" id="contact-subject" className={styles.formInput} placeholder="What is this about?" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.formLabel}>Message</label>
              <textarea id="contact-message" className={styles.formInput} placeholder="Your message..." rows={6} required style={{ resize: "vertical", minHeight: 120, fontFamily: "inherit" }} />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.formSubmit}`}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
