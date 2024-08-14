import Layout from '../components/Layout';
<<<<<<< HEAD
import styles from '../styles/Meditation.module.css';
=======
import styles from '../styles/Page.module.css';
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9

export default function Meditation() {
  return (
    <Layout title="Meditation">
<<<<<<< HEAD
      <section className={styles.meditationSection}>
        <h1 className={styles.meditationTitle}>Meditation</h1>
        <p className={styles.meditationDescription}>
          Meditation is an essential part of my daily routine. It helps me stay focused, calm, and balanced. Here are some
          meditation practices I find particularly beneficial:
        </p>
        <ul className={styles.meditationList}>
          <li className={styles.meditationItem}>
            <strong>1. Mindfulness Meditation:</strong> Focusing on the present moment and observing thoughts without
            judgment.
          </li>
          <li className={styles.meditationItem}>
            <strong>2. Guided Meditation:</strong> Using audio guides to lead through visualization and relaxation
            exercises.
          </li>
          <li className={styles.meditationItem}>
            <strong>3. Loving-Kindness Meditation:</strong> Cultivating compassion and kindness towards oneself and others.
          </li>
          <li className={styles.meditationItem}>
            <strong>4. Body Scan Meditation:</strong> Paying close attention to physical sensations and releasing tension
            throughout the body.
          </li>
=======
      <section className={styles.pageSection}>
        <h1 className={styles.pageTitle}>Meditation</h1>
        <p className={styles.pageDescription}>
          Meditation is an essential part of my daily routine. It helps me stay focused, calm, and balanced. Here are some
          meditation practices I find particularly beneficial:
        </p>
        <ul className="list-group">
          <li className="list-group-item"><strong>1. Mindfulness Meditation:</strong> Focusing on the present moment and observing thoughts without judgment.</li>
          <li className="list-group-item"><strong>2. Guided Meditation:</strong> Using audio guides to lead through visualization and relaxation exercises.</li>
          <li className="list-group-item"><strong>3. Loving-Kindness Meditation:</strong> Cultivating compassion and kindness towards oneself and others.</li>
          <li className="list-group-item"><strong>4. Body Scan Meditation:</strong> Paying close attention to physical sensations and releasing tension throughout the body.</li>
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
        </ul>
      </section>
    </Layout>
  );
}
