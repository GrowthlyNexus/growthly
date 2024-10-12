'use client';

import Image from 'next/image';
import cont from '../public/bgcont.jpg'; // Ensure this path is correct
import formbg from '../public/contact.png'; // Ensure this path is correct
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 min-h-[80vh] lg:min-h-[140vh]"
    >
      {/* Background Image */}
      <Image
        src={cont}
        alt="Contact Background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto text-white font-bold text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">Feel free to reach out to us via social media or by submitting the form below!</p>

        <div className="flex flex-col md:flex-row w-full md:space-x-8 space-y-8 md:space-y-0 max-w-6xl mx-auto">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com/@growthlynexus" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaFacebook size={40} />
              </a>
              <a href="https://twitter.com/@growthlynexus" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <FaTwitter size={40} />
              </a>
              <a href="#"  rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaInstagram size={40} />
              </a>
              <a href="#"  rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaWhatsapp size={40} />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                <FaLinkedin size={40} />
              </a> */}
              
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold">Our Address</h3>
              <address className="text-lg mt-2 not-italic">
                Email: info@growthlyafrica.com <br />
                Phone: +234 9080910013 <br />
                Elmark House Opp. Psychiatry Hospital Barnawa, Kaduna.
              </address>
            </div>
          </div>

          {/* Contact Form with Background Image */}
          <motion.form
            className="relative bg-white bg-opacity-90 text-teal-700 p-3 rounded-xl border-4 border-white border-double shadow-lg w-full md:w-1/2 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image for Form */}
            <div className="absolute inset-0">
              <Image
                src={formbg}
                alt="Form Background"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-30"
              />
            </div>

            <div className="p-6 space-y-3 relative z-20">
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
                  rows={3}
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
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
