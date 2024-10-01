import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-teal-700 text-white">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-6">Feel free to reach out to us via social media!</p>
      <div className="flex space-x-6">
        <a href="https://facebook.com" className="hover:text-blue-500 transition">
          <FaFacebook size={40} />
        </a>
        <a href="https://instagram.com" className="hover:text-pink-500 transition">
          <FaInstagram size={40} />
        </a>
        <a href="https://wa.me" className="hover:text-green-500 transition">
          <FaWhatsapp size={40} />
        </a>
        <a href="https://linkedin.com" className="hover:text-blue-700 transition">
          <FaLinkedin size={40} />
        </a>
        <a href="https://twitter.com" className="hover:text-blue-400 transition">
          <FaTwitter size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;

