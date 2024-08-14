import Layout from '../components/Layout';
import styles from '../styles/Learning.module.css';

export default function Learning() {
  return (
    <Layout title="Learning New Things">
      <section className={styles.learningSection}>
        <h1 className={styles.learningTitle}>Learning New Things</h1>
        <p className={styles.learningDescription}>
          Lifelong learning is important to me. I am always eager to expand my knowledge and skills. Here are some areas
          I’m currently exploring:
        </p>
        <ul className={styles.learningList}>
          <li className={styles.learningItem}>
            <strong>1. Web Development:</strong> Enhancing my skills in JavaScript frameworks, responsive design, and
            web optimization.
          </li>
          <li className={styles.learningItem}>
            <strong>2. Digital Marketing:</strong> Learning about SEO, social media strategies, and content marketing to
            promote my projects.
          </li>
          <li className={styles.learningItem}>
            <strong>3. Data Analysis:</strong> Exploring data visualization tools and techniques to interpret and present
            data effectively.
          </li>
          <li className={styles.learningItem}>
            <strong>4. Photography:</strong> Improving my skills in capturing and editing high-quality images.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
