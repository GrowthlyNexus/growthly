// app/page.tsx
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define metadata for the page
export const metadata = {
  title: 'Growthly',
  description: 'Your description here.', // Optional: Add a description if needed
  icons: {
    icon: '/favicon.ico', // Link to the favicon
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
