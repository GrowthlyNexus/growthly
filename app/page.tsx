// app/page.tsx
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';


// Define metadata for the page
export const metadata = {
  title: 'GrowthlyNexus',
  description: 'Helping businesses grow through strategic data utilization and process optimization.', // Updated description
  icons: {
    icon: '/favicon.ico', // Ensure this path is correct
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

