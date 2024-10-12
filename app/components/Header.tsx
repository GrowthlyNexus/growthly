'use client';

import Image from 'next/image';
import bgimg from '../public/header.png'; // Importing the image from the public folder
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgimg} // Path to the image in the public folder
        alt="Welcome to Growthly" // Descriptive alt text
        fill // Replaces layout="fill"
        style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
        className="absolute top-0 left-0 z-0" // Positions the image behind other content
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Change bg-black to any color you prefer */}

      {/* Text content on top of the background image with border styling */}
      <div className="relative z-20 text-white p-4 sm:p-6 md:p-8 rounded-xl bg-white/10 backdrop-blur-md max-w-xs sm:max-w-md md:max-w-3xl mx-4 md:mx-0 border-t-0 border-r-0 border-2 border-green-400"
           style={{ borderLeftColor: 'white', borderBottomColor: 'white',  }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-green-400"
        >
          Welcome to Growthly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl font-bold text-center text-white"
        >
          Hack Your Growth.
        </motion.p>
      </div>

      {/* Moving Text Animation at the Bottom */}
      <motion.div
        className="absolute bottom-8 w-full flex justify-center whitespace-nowrap text-xl sm:text-2xl md:text-4xl font-bold"
        animate={{ x: '-100vw' }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear'
        }}
      >
        <span className="text-white mr-1 sm:mr-2 md:mr-3">G</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">R</span>
        <span className="text-white mr-1 sm:mr-2 md:mr-3">O</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">W</span>
        <span className="text-white mr-1 sm:mr-2 md:mr-3">T</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">H</span>
        <span className="text-white mr-1 sm:mr-2 md:mr-3">L</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">Y</span>
        <span className="text-white mr-1 sm:mr-2 md:mr-3">N</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">E</span>
        <span className="text-white mr-1 sm:mr-2 md:mr-3">X</span>
        <span className="text-green-400 mr-1 sm:mr-2 md:mr-3">U</span>
        <span className="text-white ml-1 sm:ml-2 md:ml-3">S</span>
      </motion.div>
    </header>
  );
};

export default Header;




