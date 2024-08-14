<<<<<<< HEAD
// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Layout({ children, title = 'Personal Hobby Site' }) {
=======
import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children, title = "My Site" }) {
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
  return (
    <>
      <Head>
        <title>{title}</title>
<<<<<<< HEAD
        <meta name="description" content="A personal site about my hobbies and interests." />
      </Head>
      <Header />
      <main className="container mt-4">
        {children}
      </main>
      <Footer />
=======
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">My Hobby Site</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link href="/learning" className="nav-link">Learning</Link></li>
              <li className="nav-item"><Link href="/workouts" className="nav-link">Workouts</Link></li>
              <li className="nav-item"><Link href="/gaming" className="nav-link">Gaming</Link></li>
              <li className="nav-item"><Link href="/meditation" className="nav-link">Meditation</Link></li>
              <li className="nav-item"><Link href="/cooking" className="nav-link">Cooking</Link></li>
              <li className="nav-item"><Link href="/reading" className="nav-link">Reading</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <main className="container my-4">{children}</main>
      <footer className="footer bg-light text-center py-3">
        <p className="mb-0">© 2024 My Hobby Site</p>
      </footer>
>>>>>>> acbd959bd4352e242648b30887716f5447dde8f9
    </>
  );
}
