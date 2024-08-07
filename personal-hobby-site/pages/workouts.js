import Layout from '../components/Layout';
import styles from '../styles/Workouts.module.css';

export default function Workouts() {
  return (
    <Layout title="Workouts">
      <section className={styles.workoutsSection}>
        <h1 className={styles.workoutsTitle}>Workouts</h1>
        <p className={styles.workoutsDescription}>
          Staying fit and healthy is a priority for me. I focus on bodyweight exercises and calisthenics to build strength
          and endurance. Here are some of my favorite workouts:
        </p>
        <ul className={styles.workoutList}>
          <li className={styles.workoutItem}>
            <strong>1. Push-ups:</strong> A classic bodyweight exercise that targets the chest, shoulders, and triceps.
          </li>
          <li className={styles.workoutItem}>
            <strong>2. Pull-ups:</strong> A challenging exercise for the back and biceps, improving upper body strength.
          </li>
          <li className={styles.workoutItem}>
            <strong>3. Squats:</strong> Effective for building leg strength and improving lower body mobility.
          </li>
          <li className={styles.workoutItem}>
            <strong>4. Planks:</strong> A core-strengthening exercise that also engages the shoulders and glutes.
          </li>
        </ul>
      </section>
    </Layout>
  );
}