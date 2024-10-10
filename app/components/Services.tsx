'use client';

import Image from 'next/image';
import bgimg from '../public/service.png'; // Ensure this path is correct

const Services = () => {
  return (
    <section id="services" className="relative py-20 min-h-[80vh] lg:min-h-[140vh]">
      {/* Background Image */}
      <Image
        src={bgimg}
        alt="Services Background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto text-white font-bold text-center px-4">
        <h2 className="text-3xl  font-xl md:text-4xl font-bold mb-6">
          Our Services
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Providing strategic data and business solutions.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Social Research and Publications",
              points: [
                "Explores human behavior and society using various methods.",
                "Publications share insights for academia and policy.",
                "Peer review ensures reliability and credibility."
              ]
            },
            {
              title: "Business Documentation Services",
              points: [
                "Efficiently creates and manages essential documents.",
                "Organizes records for easy access and professional standards.",
                "Ensures compliance with industry regulations."
              ]
            },
            {
              title: "Data Analysis for Government Agencies",
              points: [
                "Promotes transparency through public scrutiny.",
                "Aids in informed decision-making and service enhancement.",
                "Optimizes resource allocation for improvement."
              ]
            },
            {
              title: "Process Optimization for SMEs",
              points: [
                "Identifies inefficiencies and implements tech solutions.",
                "Encourages a culture of continuous improvement.",
                "Boosts productivity and drives innovation."
              ]
            },
            {
              title: "Academic Support for Research Candidates",
              points: [
                "Workshops offer training in data analysis and writing.",
                "Provides access to resources and funding opportunities.",
                "Mentorship helps refine research focus."
              ]
            },
            {
              title: "Consultation Services",
              points: [
                "Offers tailored expert advice.",
                "Develops strategies to address challenges.",
                "Enhances efficiency and achieves better results."
              ]
            },
          ].map((service, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-[10px] shadow-lg shadow-[#93e9be] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              {service.points.map((point, idx) => (
                <p key={idx} className="font-bold font-l mb-2">{point}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;










