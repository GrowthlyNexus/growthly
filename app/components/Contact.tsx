import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-teal-700 text-white px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-lg mb-6 text-center">Feel free to reach out to us via social media or by submitting the form below!</p>

      {/* Two side-by-side divs */}
      <div className="flex flex-col md:flex-row w-full md:space-x-8 space-y-8 md:space-y-0 max-w-6xl mx-auto">
        {/* Left-hand side: Contact Icons and Address */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-6">
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
          {/* Address for the company owner */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold">Our Address</h3>
            <address className="text-lg mt-2 not-italic">
              Email: info@growthlyafrica.com <br />
              Phone: +234 9080910013 <br />
              Elmark House Opp. Psychiatry Hospital Barnawa, Kaduna.
            </address>
          </div>
        </div>

        {/* Right-hand side: Contact Form */}
        <div className="flex-1 bg-white text-teal-700 p-6 rounded-lg shadow-lg w-full md:w-2/3 mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border-2 border-teal-500 rounded-md focus:outline-none focus:border-teal-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border-2 border-teal-500 rounded-md focus:outline-none focus:border-teal-600"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-2 border-2 border-teal-500 rounded-md focus:outline-none focus:border-teal-600"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Note
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border-2 border-teal-500 rounded-md focus:outline-none focus:border-teal-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
