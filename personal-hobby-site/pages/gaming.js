// pages/gaming.js
import Layout from '../components/Layout';
import styles from '../styles/Gaming.module.css';

export default function Gaming() {
  return (
    <Layout>
      <section className={styles.gamingSection}>
        <h2 className={styles.gamingTitle}>Gaming</h2>
        <p className={styles.gamingDescription}>
          I enjoy various types of video games. Here are some of my favorite genres and titles:
        </p>
        <ul className={styles.gameList}>
          <li className={styles.gameItem}>
            <strong>1. Action-Adventure:</strong> Games like The Legend of Zelda and Red Dead Redemption 2 offer immersive stories and exciting gameplay.
          </li>
          <li className={styles.gameItem}>
            <strong>2. Role-Playing Games (RPGs):</strong> Titles such as The Witcher 3 and Final Fantasy VII allow players to dive into rich worlds and complex narratives.
          </li>
          <li className={styles.gameItem}>
            <strong>3. Strategy Games:</strong> Games like Civilization VI and StarCraft II challenge players to think strategically and manage resources.
          </li>
          <li className={styles.gameItem}>
            <strong>4. Puzzle Games:</strong> Brain teasers like Portal and Tetris are great for sharpening problem-solving skills.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
