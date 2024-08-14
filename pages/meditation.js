import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Meditation() {
  return (
    <Layout title="Meditation">
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
        </ul>
      </section>
    </Layout>
  );
}
