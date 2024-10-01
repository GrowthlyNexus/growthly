
// components/Services.tsx

// const Services = () => {
//     return (
//       <section className="py-20 bg-[#669c9c] text-white">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Our Services</h2>
//           <ul>
//             <li>Social Research and Publications</li>
//             <li>Business Documentation Services</li>
//             <li>Data Analysis for Government Agencies</li>
//             <li>Process Optimization for SMEs</li>
//             <li>Academic Support for Research Candidates</li>
//           </ul>
//         </div>
//       </section>
//     );
//   };
  
//   export default Services;


// components/Services.tsx
// components/Services.tsx
'use client';

import Image from 'next/image';
import bgimg from '../public/service.png'; // Ensure this path is correct

const Services = () => {
  return (
    <section className="relative py-20  min-h-[80vh] lg:min-h-[140vh]">
      {/* Background Image */}
      <Image
        src={bgimg} // Path to the image in the public folder
        alt="Services Background" // Descriptive alt text
        layout="fill" // Makes the image cover the section area
        objectFit="cover" // Ensures the image covers the area without distortion
        className="absolute top-0 left-0 w-full h-full z-0" // Positions the image behind other content
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-white  font-bold text-xl text-center " >
        <h2 className="text-3xl font-bold mb-6 "><span style={{color:'black'}}>Our Services</span></h2>
        <ul>
          <li>Social Research and Publications</li>
          <li>Business Documentation Services</li>
          <li>Data Analysis for <span style={{color:'greenyellow'}}>Government</span> Agencies</li>
          <li>Process Optimization for SMEs</li>
          <li>Academic Support for Research Candidates</li>
        </ul>
        {/* Remove nested <p> */}
        <div>
          <p>Providing strategic data and <span style={{color:'black'}}> business</span> solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;






