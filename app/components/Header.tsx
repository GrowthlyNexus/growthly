// components/Header.tsx
'use client';


import Image from 'next/image';
import bgimg from '../public/header.png'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen relative">
      <Image
        src={bgimg} // Path to the image in the public folder
        alt="Welcome to Growthly" // Descriptive alt text
        layout="fill" // Makes the image cover the header area
        objectFit="cover" // Ensures the image covers the area without distortion
        className="absolute top-0 left-0 z-0" // Positions the image behind other content
      />
      <div className="relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-light text-center"
        >
          Welcome to Growthly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-center font-light text-lg"
        >
          <p style={{color:'white'}}>Empowering businesses through strategic data utilization and process optimization.</p>
        </motion.p>
      </div>
    </header>
  );
};

export default Header;




















  
  