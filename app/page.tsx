// app/page.tsx
import Head from 'next/head';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Growthly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}





