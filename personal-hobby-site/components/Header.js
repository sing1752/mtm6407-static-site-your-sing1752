import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Create this file for header styles

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/reading">Reading</Link></li>
          <li><Link href="/gaming">Gaming</Link></li>
          <li><Link href="/learning">Learning</Link></li>
          <li><Link href="/workouts">Workouts</Link></li>
          <li><Link href="/meditation">Meditation</Link></li>
          <li><Link href="/cooking">Cooking</Link></li>
        </ul>
      </nav>
    </header>
  );
}
