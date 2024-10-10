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
      <div className="relative z-20 container mx-auto text-white font-bold text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span style={{ color: 'white' }}>Our Services</span>
        </h2>
        <p className="text-lg md:text-xl mb-8">Providing strategic data and business solutions.</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Social Research and Publications</h3>
            <p className="font-semibold">Social research systematically explores human behavior and society using various methods. </p> <br />
            <p className="font-semibold"> The resulting publications share new insights that inform both academia and policy.  </p> <br />
            <p className="font-semibold"> Peer review ensures the reliability and credibility of these findings.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Business Documentation Services</h3>
            <p className="font-semibold">They ensure the efficient creation and management of essential business documents.</p> <br />
            <p className="font-semibold">They help organize and store records for easy access while maintaining professional standards.</p> <br />
            <p className="font-semibold">They ensure compliance with industry regulations to avoid legal issues.</p> 
          </div>
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Data Analysis for Government Agencies</h3>
            <p className="font-semibold">It promotes transparency and accountability through public scrutiny of government operations.</p> <br />
            <p className="font-semibold">It aids government agencies in making informed decisions and enhancing public services.</p> <br />
            <p className="font-semibold">It identifies areas for improvement and optimizes resource allocation.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Process Optimization for SMEs</h3>
            <p className="font-semibold">It focuses on identifying inefficiencies and implementing technology solutions to streamline operations.</p> <br />
            <p className="font-semibold">By fostering a culture of continuous improvement, businesses can encourage employee input and adapt to market changes.</p> <br />
            <p className="font-semibold">It enhances productivity and drives innovation.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Academic Support for Research Candidates</h3>
            <p className="font-semibold">Workshops provide essential training in skills like data analysis and academic writing.</p> <br />
            <p className="font-semibold">Access to research resources and funding opportunities further enhances their ability to conduct and finance their projects effectively.</p> <br />
            <p className="font-semibold">Candidates benefit from academic support through mentorship from experienced faculty, which helps refine their research focus.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Consultation Services</h3>
            <p className="font-semibold">Services offer expert advice tailored to clients' specific needs.</p> <br />
            <p className="font-semibold">They help organizations develop customized strategies to address challenges and improve performance.</p> <br />
            <p className="font-semibold">The ultimate goal is to enhance efficiency and achieve better results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;