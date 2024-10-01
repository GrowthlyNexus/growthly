// components/YourComponent.js
'use client'; // This makes the component a Client Component

import { motion } from 'framer-motion';

const YourComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Welcome to Growthly
    </motion.div>
  );
};

export default YourComponent;
