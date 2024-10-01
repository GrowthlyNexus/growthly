// /// components/Navbar.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-[#005a5a] text-white py-4">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">Growthly</Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* Full Navigation on Larger Screens */}
//         <ul className={`hidden md:flex space-x-8 items-center`}>
//           <li className="group relative">
//             <Link href="/" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
//               Home
//               <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
//             </Link>
//           </li>
//           <li className="group relative">
//             <button onClick={toggleDropdown} className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
//               Services
//               <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
//             </button>
//             {isDropdownOpen && (
//               <ul className="absolute bg-white text-[#005a5a] mt-2 rounded shadow-lg z-20">
//                 <li><Link href="#social-research" className="block px-4 py-2 hover:bg-[#669c9c]">Social Research</Link></li>
//                 <li><Link href="#business-docs" className="block px-4 py-2 hover:bg-[#669c9c]">Business Documentation</Link></li>
//                 <li><Link href="#data-analysis" className="block px-4 py-2 hover:bg-[#669c9c]">Data Analysis</Link></li>
//                 <li><Link href="#process-optimization" className="block px-4 py-2 hover:bg-[#669c9c]">Process Optimization</Link></li>
//                 <li><Link href="#academic-support" className="block px-4 py-2 hover:bg-[#669c9c]">Academic Support</Link></li>
//               </ul>
//             )}
//           </li>
//           <li className="group relative">
//             <Link href="#about" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
//               About
//               <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
//             </Link>
//           </li>
//           <li className="group relative">
//             <Link href="#contact" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
//               Contact
//               <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <ul className="md:hidden absolute bg-white text-[#005a5a] right-0 mt-8 py-5 w-full shadow-lg z-20">
//             <li><Link href="/" className="block px-4 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>Home</Link></li>
//             <li>
//               <button onClick={toggleDropdown} className="block px-4 py-2 hover:bg-[#eefbf5]">Services</button>
//               {isDropdownOpen && (
//                 <ul className="pl-4  mt-10">
//                   <li><Link href="#social-research" className="block px-4 py-2 hover:bg-[#669c9c]">Social Research</Link></li>
//                   <li><Link href="#business-docs" className="block px-4 py-2 hover:bg-[#669c9c]">Business Documentation</Link></li>
//                   <li><Link href="#data-analysis" className="block px-4 py-2 hover:bg-[#669c9c]">Data Analysis</Link></li>
//                   <li><Link href="#process-optimization" className="block px-4 py-2 hover:bg-[#669c9c]">Process Optimization</Link></li>
//                   <li><Link href="#academic-support" className="block px-4 py-2 hover:bg-[#669c9c]">Academic Support</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li><Link href="#about" className="block px-4 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>About</Link></li>
//             <li><Link href="#contact" className="block px-4 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>Contact</Link></li>
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// original

'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-[#005a5a] text-white py-4">
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
        <ul className={`hidden md:flex space-x-8 items-center`}>
          <li className="group relative">
            <Link href="/" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
              Home
              <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </li>
          <li className="group relative">
            <button onClick={toggleDropdown} className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
              Services
              <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-[#005a5a] mt-2 rounded shadow-lg z-20">
                <li><Link href="#social-research" className="block px-4 py-2 hover:bg-[#669c9c]">Social Research</Link></li>
                <li><Link href="#business-docs" className="block px-4 py-2 hover:bg-[#669c9c]">Business Documentation</Link></li>
                <li><Link href="#data-analysis" className="block px-4 py-2 hover:bg-[#669c9c]">Data Analysis</Link></li>
                <li><Link href="#process-optimization" className="block px-4 py-2 hover:bg-[#669c9c]">Process Optimization</Link></li>
                <li><Link href="#academic-support" className="block px-4 py-2 hover:bg-[#669c9c]">Academic Support</Link></li>
              </ul>
            )}
          </li>
          <li className="group relative">
            <Link href="#about" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
              About
              <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="#contact" className="relative py-2 hover:text-[#93e9be] transition-all duration-300">
              Contact
              <span className="absolute inset-x-0 bottom-0 block h-[3px] w-full bg-[#93e9be] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden absolute bg-white text-[#005a5a] right-0 mt-20 py-5 w-full shadow-lg z-20">
            <li><Link href="/" className="block px-4 mt-10 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>Home</Link></li>
            <li>
              <button onClick={toggleDropdown} className="block px-4 py-2 mt-0 hover:bg-[#eefbf5]">Services</button>
              {isDropdownOpen && (
                <ul className="pl-4">
                  <li><Link href="#social-research" className="block px-4 py-2 hover:bg-[#669c9c]">Social Research</Link></li>
                  <li><Link href="#business-docs" className="block px-4 py-2 hover:bg-[#669c9c]">Business Documentation</Link></li>
                  <li><Link href="#data-analysis" className="block px-4 py-2 hover:bg-[#669c9c]">Data Analysis</Link></li>
                  <li><Link href="#process-optimization" className="block px-4 py-2 hover:bg-[#669c9c]">Process Optimization</Link></li>
                  <li><Link href="#academic-support" className="block px-4 py-2 hover:bg-[#669c9c]">Academic Support</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="#about" className="block px-4 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>About</Link></li>
            <li><Link href="#contact" className="block px-4 py-2 hover:bg-[#eefbf5]" onClick={closeMenu}>Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

