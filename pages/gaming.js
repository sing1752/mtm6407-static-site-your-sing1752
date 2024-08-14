import Layout from '../components/Layout';
<<<<<<< HEAD
import styles from '../styles/Gaming.module.css';
=======
import styles from '../styles/Page.module.css';
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9

export default function Gaming() {
  return (
    <Layout title="Gaming">
<<<<<<< HEAD
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
=======
      <section className={styles.pageSection}>
        <h1 className={styles.pageTitle}>Gaming</h1>
        <p className={styles.pageDescription}>
          I enjoy various types of video games. Here are some of my favorite genres and titles:
        </p>
        <ul className="list-group">
          <li className="list-group-item"><strong>1. Action-Adventure:</strong> Games like The Legend of Zelda and Red Dead Redemption 2 offer immersive stories and exciting gameplay.</li>
          <li className="list-group-item"><strong>2. Role-Playing Games (RPGs):</strong> Titles such as The Witcher 3 and Final Fantasy VII allow players to dive into rich worlds and complex narratives.</li>
          <li className="list-group-item"><strong>3. Strategy Games:</strong> Games like Civilization VI and StarCraft II challenge players to think strategically and manage resources.</li>
          <li className="list-group-item"><strong>4. Puzzle Games:</strong> Brain teasers like Portal and Tetris are great for sharpening problem-solving skills.</li>
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
        </ul>
      </section>
    </Layout>
  );
}
