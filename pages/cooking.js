import Layout from '../components/Layout';
<<<<<<< HEAD
import styles from '../styles/Cooking.module.css';
=======
import styles from '../styles/Page.module.css';
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9

export default function Cooking() {
  return (
    <Layout title="Cooking">
<<<<<<< HEAD
      <section className={styles.cookingSection}>
        <h1 className={styles.cookingTitle}>Cooking</h1>
        <p className={styles.cookingDescription}>
          Cooking is a delightful hobby that allows me to experiment with different flavors and techniques. Here are some
          of my favorite recipes from various cuisines:
        </p>
        <ul className={styles.recipeList}>
          <li className={styles.recipeItem}>
            <strong>1. Italian Pasta Carbonara:</strong> A creamy and rich pasta dish made with eggs, cheese, pancetta, and
            pepper.
          </li>
          <li className={styles.recipeItem}>
            <strong>2. Indian Chicken Curry:</strong> A flavorful curry with spices, tomatoes, and tender chicken, served
            with rice or naan.
          </li>
          <li className={styles.recipeItem}>
            <strong>3. Japanese Ramen:</strong> A savory noodle soup with broth, noodles, pork, and vegetables.
          </li>
          <li className={styles.recipeItem}>
            <strong>4. Mexican Tacos:</strong> Soft tortillas filled with seasoned meat, fresh vegetables, and tangy salsa.
          </li>
=======
      <section className={styles.pageSection}>
        <h1 className={styles.pageTitle}>Cooking</h1>
        <p className={styles.pageDescription}>
          Cooking is a delightful hobby that allows me to experiment with different flavors and techniques. Here are some
          of my favorite recipes from various cuisines:
        </p>
        <ul className="list-group">
          <li className="list-group-item"><strong>1. Italian Pasta Carbonara:</strong> A creamy and rich pasta dish made with eggs, cheese, pancetta, and pepper.</li>
          <li className="list-group-item"><strong>2. Indian Chicken Curry:</strong> A flavorful curry with spices, tomatoes, and tender chicken, served with rice or naan.</li>
          <li className="list-group-item"><strong>3. Japanese Ramen:</strong> A savory noodle soup with broth, noodles, pork, and vegetables.</li>
          <li className="list-group-item"><strong>4. Mexican Tacos:</strong> Soft tortillas filled with seasoned meat, fresh vegetables, and tangy salsa.</li>
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
        </ul>
      </section>
    </Layout>
  );
}
