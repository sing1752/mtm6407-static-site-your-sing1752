import Layout from '../components/Layout';
import styles from '../styles/Gaming.module.css';

export default function Gaming() {
  return (
    <Layout title="Gaming">
      <section className={styles.gamingSection}>
        <h1 className={styles.gamingTitle}>Gaming</h1>
        <p className={styles.gamingDescription}>
          Gaming is an exhilarating way to unwind and have fun. Here are some of my favorite games that keep me
          entertained and challenged:
        </p>
        <ul className={styles.gameList}>
          <li className={styles.gameItem}>
            <strong>1. "The Legend of Zelda: Breath of the Wild":</strong> An open-world adventure that combines beautiful
            landscapes with engaging gameplay.
          </li>
          <li className={styles.gameItem}>
            <strong>2. "The Witcher 3: Wild Hunt":</strong> A rich RPG with a deep story, complex characters, and an
            immersive world.
          </li>
          <li className={styles.gameItem}>
            <strong>3. "Minecraft":</strong> A sandbox game that offers endless creativity and exploration possibilities.
          </li>
          <li className={styles.gameItem}>
            <strong>4. "Overwatch":</strong> A team-based shooter known for its dynamic gameplay and diverse cast of
            characters.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
