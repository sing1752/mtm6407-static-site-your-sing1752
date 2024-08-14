import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home">
      <div className={`${styles.hero} text-center p-5`}>
        <h1 className={styles.heroTitle}>Welcome to My Hobby Site</h1>
        <p className={styles.heroSubtitle}>Explore my passions, interests, and activities!</p>
      </div>
      <section className={styles.intro}>
        <h2>About Me</h2>
        <p>
          Hello! I am Devjeet Singh, and this site is a reflection of my hobbies and interests.
          From reading captivating books to exploring new video games, learning new skills, working out, meditating,
          and cooking diverse cuisines, this site covers it all. Feel free to navigate through the pages to learn more
          about each of my passions!
        </p>
      </section>
    </Layout>
  );
}
