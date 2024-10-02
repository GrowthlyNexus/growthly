'use client';

import Image from 'next/image';
import bgimg from '../public/service.png'; // Ensure this path is correct

const Services = () => {
  return (
    <section className="relative py-20 min-h-[80vh] lg:min-h-[140vh]">
      {/* Background Image */}
      <Image
        src={bgimg} // Path to the image in the public folder
        alt="Services Background" // Descriptive alt text
        fill // Replaces layout="fill"
        style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0" // Positions the image behind other content
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Change bg-black to any color you prefer */}

      {/* Content */}
      <div className="relative z-20 container mx-auto text-white font-bold text-xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span style={{ color: 'black' }}>Our Services</span>
        </h2>
        <ul>
          <li>Social Research and Publications</li>
          <li>Business Documentation Services</li>
          <li>Data Analysis for Governmen Agencies</li>
          <li>Process Optimization for SMEs</li>
          <li>Academic Support for Research Candidates</li>
        </ul>
        
        {/* Strategic data and business solutions section */}
        <div>
          <p>
            Providing strategic data and business solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
