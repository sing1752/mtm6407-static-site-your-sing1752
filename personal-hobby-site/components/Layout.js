// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export default function Layout({ children, title = 'Personal Hobby Site' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A personal site about my hobbies and interests." />
      </Head>
      <Header />
      <main className="container mt-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
