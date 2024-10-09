'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when main menu toggles
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#005a5a] text-white py-4" ref={navContainerRef}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">Growthly</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Full Navigation on Larger Screens */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link href="/" className="relative py-2 border-b-2 border-transparent hover:border-b-2 hover:border-[#93e9be] transition-all duration-300">Home</Link>
          </li>
          <li className="relative">
            <button onClick={toggleDropdown} className="relative py-2 border-b-2 border-transparent hover:border-b-2 hover:border-[#93e9be] transition-all duration-300">Services</button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-[#005a5a] mt-2 rounded shadow-lg z-20">
                <li><Link href="#social-research" className="block px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Social Research</Link></li>
                <li><Link href="#business-docs" className="block px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Business Documentation</Link></li>
                <li><Link href="#data-analysis" className="block px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Data Analysis</Link></li>
                <li><Link href="#process-optimization" className="block px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Process Optimization</Link></li>
                <li><Link href="#academic-support" className="block px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Academic Support</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="#about" className="relative py-2 border-b-2 border-transparent hover:border-b-2 hover:border-[#93e9be] transition-all duration-300">About</Link>
          </li>
          <li>
            <Link href="#blog" className="relative py-2 border-b-2 border-transparent hover:border-b-2 hover:border-[#93e9be] transition-all duration-300">Blog</Link>
          </li>
          <li>
            <Link href="#contact" className="relative py-2 border-b-2 border-transparent hover:border-b-2 hover:border-[#93e9be] transition-all duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden absolute bg-cover bg-center bg-no-repeat bg-white text-xl text-[#005a5a] right-0 top-0 h-[50%] w-full shadow-lg z-20 pt-20 overflow-y-auto">
            <li><Link href="/" className="block px-4 py-2 font-bold hover:bg-[#eefbf5] transition-all duration-300" onClick={closeMenu}>Home</Link></li>
            <li>
              <button onClick={toggleDropdown} className="block px-4 font-bold py-2 hover:bg-[#eefbf5] transition-all duration-300">Services</button>
              {isDropdownOpen && (
                <ul className="pl-4">
                  <li><Link href="#social-research" className="block font-bold px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Social Research</Link></li>
                  <li><Link href="#business-docs" className="block font-bold px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Business Documentation</Link></li>
                  <li><Link href="#data-analysis" className="block font-bold px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Data Analysis</Link></li>
                  <li><Link href="#process-optimization" className="block font-bold px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Process Optimization</Link></li>
                  <li><Link href="#academic-support" className="block font-bold px-4 py-2 hover:bg-[#669c9c] transition-all duration-300">Academic Support</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="#about" className="block px-4 py-2 font-bold hover:bg-[#eefbf5] transition-all duration-300" onClick={closeMenu}>About</Link></li>
            <li><Link href="#blog" className="block px-4 py-2 font-bold hover:bg-[#eefbf5] transition-all duration-300" onClick={closeMenu}>Blog</Link></li>
            <li><Link href="#contact" className="block px-4 py-2 font-bold hover:bg-[#eefbf5] transition-all duration-300" onClick={closeMenu}>Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




