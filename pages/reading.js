import Layout from '../components/Layout';
<<<<<<< HEAD
import styles from '../styles/Reading.module.css';
=======
import styles from '../styles/Page.module.css';
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9

export default function Reading() {
  return (
    <Layout title="Reading">
<<<<<<< HEAD
      <section className={styles.readingSection}>
        <h1 className={styles.readingTitle}>Reading</h1>
        <p className={styles.readingDescription}>
          Reading is a cherished hobby of mine. I love getting lost in a good book and exploring different worlds. Here are
          some of my all-time favorite reads:
        </p>
        <ul className={styles.bookList}>
          <li className={styles.bookItem}>
            <strong>1. "To Kill a Mockingbird" by Harper Lee:</strong> A powerful novel that tackles serious issues with
            profound grace. It’s a story of morality, justice, and human nature.
          </li>
          <li className={styles.bookItem}>
            <strong>2. "1984" by George Orwell:</strong> A gripping dystopian novel that explores themes of surveillance,
            freedom, and the nature of reality.
          </li>
          <li className={styles.bookItem}>
            <strong>3. "The Great Gatsby" by F. Scott Fitzgerald:</strong> An iconic work that delves into themes of wealth,
            love, and the American Dream during the Roaring Twenties.
          </li>
          <li className={styles.bookItem}>
            <strong>4. "Sapiens: A Brief History of Humankind" by Yuval Noah Harari:</strong> An insightful exploration of
            human history and evolution.
          </li>
=======
      <section className={styles.pageSection}>
        <h1 className={styles.pageTitle}>Reading</h1>
        <p className={styles.pageDescription}>
          Reading is a cherished hobby of mine. I love getting lost in a good book and exploring different worlds. Here are
          some of my all-time favorite reads:
        </p>
        <ul className="list-group">
          <li className="list-group-item"><strong>1. To Kill a Mockingbird by Harper Lee:</strong> A powerful novel that tackles serious issues with profound grace. It’s a story of morality, justice, and human nature.</li>
          <li className="list-group-item"><strong>2. 1984 by George Orwell:</strong> A gripping dystopian novel that explores themes of surveillance, freedom, and the nature of reality.</li>
          <li className="list-group-item"><strong>3. The Great Gatsby by F. Scott Fitzgerald:</strong> An iconic work that delves into themes of wealth, love, and the American Dream during the Roaring Twenties.</li>
          <li className="list-group-item"><strong>4. Sapiens: A Brief History of Humankind by Yuval Noah Harari:</strong> An insightful exploration of human history and evolution.</li>
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
        </ul>
      </section>
    </Layout>
  );
}
