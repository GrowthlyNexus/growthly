'use client';

import Image from 'next/image';
import bgimg from '../public/header.png'; // Importing the image from the public folder
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen relative">
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

      {/* Text content on top of the background image */}
      <div className="relative z-20 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center"
        >
          Welcome to Growthly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-center font-bold text-lg"
        >
          Empowering businesses through strategic data utilization and process optimization.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
