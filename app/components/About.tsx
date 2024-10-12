'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import visionImg from '../public/vision.jpg'; // Correct path to the images
import missionImg from '../public/mission.jpg'; // Correct path to the images

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2; // Trigger when 80% of the section is visible

      if (sectionPosition < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="relative bg-gray-500 py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen">
      <div className="relative z-20 text-center mb-10">
        <h2 className={`text-3xl md:text-4xl text-green font-bold mb-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>About Us</h2>
        <p className={`text-lg font-bold md:text-xl text-gray-800 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          We are committed to help businesses, researchers, and government agencies leverage data to optimize processes and achieve significant growth.
        </p>
      </div>

      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-6 md:space-y-0 md:space-x-6">
        {/* Vision Statement */}
        <div className={`relative bg-white shadow-md rounded-md w-full md:w-1/2 lg:w-1/2 flex flex-col h-80 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            {/* Background Image for Vision */}
            <Image
              src={visionImg}
              alt="Vision Background"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute top-0 left-0 w-full h-full"
            />
            {/* Overlay for Vision */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
            {/* Text on top of the image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Vision</h3>
              <p className="text-gray-200 text-center font-l font-bold">
               To Empower individuals, government agencies, private organizations, and researchers to make informed decisions and achieve growth through strategic data utilization and process optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`relative bg-white shadow-md rounded-md w-full md:w-1/2 lg:w-1/2 flex flex-col h-80 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            {/* Background Image for Mission */}
            <Image
              src={missionImg}
              alt="Mission Background"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute top-0 left-0 w-full h-full"
            />
            {/* Overlay for Mission */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Text on top of the image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Mission</h3>
              <p className="text-gray-200 font-l text-center font-bold">
               To Accelerate clients' progress by harnessing the power of modern technologies, including Artificial Intelligence/Business Intelligence and advanced data analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.9s forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
