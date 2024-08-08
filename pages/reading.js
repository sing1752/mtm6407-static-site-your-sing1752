import Layout from '../components/Layout';
import styles from '../styles/Reading.module.css';

export default function Reading() {
  return (
    <Layout title="Reading">
      <section className={styles.readingSection}>
        <h1 className={styles.readingTitle}>Reading</h1>
        <p className={styles.readingDescription}>
          Reading is a cherished hobby of mine. I love getting lost in a good book and exploring different worlds. Here are
          some of my all-time favorite reads:
        </p>
        <ul className={styles.bookList}>
          <li className={styles.bookItem}>
            <strong>1. To Kill a Mockingbird by Harper Lee:</strong> A powerful novel that tackles serious issues with
            profound grace. Its a story of morality, justice, and human nature.
          </li>
          <li className={styles.bookItem}>
            <strong>2. 1984 by George Orwell:</strong> A gripping dystopian novel that explores themes of surveillance,
            freedom, and the nature of reality.
          </li>
          <li className={styles.bookItem}>
            <strong>3. The Great Gatsby by F. Scott Fitzgerald:</strong> An iconic work that delves into themes of wealth,
            love, and the American Dream during the Roaring Twenties.
          </li>
          <li className={styles.bookItem}>
            <strong>4. Sapiens: A Brief History of Humankind by Yuval Noah Harari:</strong> An insightful exploration of
            human history and evolution.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
