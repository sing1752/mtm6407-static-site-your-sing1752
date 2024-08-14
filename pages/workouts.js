import Layout from '../components/Layout';
import styles from '../styles/Page.module.css';

export default function Workouts() {
  return (
    <Layout title="Workouts">
      <section className={styles.pageSection}>
        <h1 className={styles.pageTitle}>Workouts</h1>
        <p className={styles.pageDescription}>
          Staying fit and healthy is a priority for me. I focus on bodyweight exercises and calisthenics to build strength
          and endurance. Here are some of my favorite workouts:
        </p>
        <ul className="list-group">
          <li className="list-group-item"><strong>1. Push-ups:</strong> A classic bodyweight exercise that targets the chest, shoulders, and triceps.</li>
          <li className="list-group-item"><strong>2. Pull-ups:</strong> A challenging exercise for the back and biceps, improving upper body strength.</li>
          <li className="list-group-item"><strong>3. Squats:</strong> Effective for building leg strength and improving lower body mobility.</li>
          <li className="list-group-item"><strong>4. Planks:</strong> A core-strengthening exercise that also engages the shoulders and glutes.</li>
        </ul>
      </section>
    </Layout>
  );
}
