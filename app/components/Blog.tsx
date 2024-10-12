'use client';

import Image from 'next/image';
import blogImage1 from '../public/blog2.jpg'; // Replace with the correct path to your image
import blogImage2 from '../public/blog1.jpg'; // Replace with the correct path to your image
import blogImage3 from '../public/blog3.jpg'; // Replace with the correct path to your image
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Blog = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const posts = [
    {
      title: "Vision in Growth",
      content: "Before anything exists in reality, it must first be created in the mind. I like to put it this way: you must see it before you can create it. The foundation of creation is vision,often synonymous with imagination.",
      link: "https://web.facebook.com/growthlynexus/posts/pfbid0WcSeUmAUv42okCrqx3ubJ6tT37fbvxJsWfamjobrzVKWbXH9zvz79kHfvjFJ623Ml",
      backgroundImage: blogImage1,
    },
    {
      title: "Growth Brings Wealth",
      content: "Your beliefs and attitudes towards money significantly impact your financial success. Cultivate a positive and abundant mindset, believing in your ability to create wealth.",
      link: "https://web.facebook.com/growthlynexus/posts/pfbid023aWg5qXzt28WjxYPVu5Dp4ShRTGYqJoHzMH2knx6hPuczHZ3AiihS7WQXxfPu54Bl",
      backgroundImage: blogImage2,
    },
    {
      title: "Growth in Economy",
      content: "At today’s Fx rate a liter of petrol is significantly less than a dollar. The problem is that the average income of Nigerians has been steadily sliding for close to a decade now",
      link: "https://x.com/growthlynexus/status/1834277754986266759",
      backgroundImage: blogImage3,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, isInView]);

  return (
    <section ref={sectionRef} id="blog" className="min-h-screen py-16 bg-gray-500">
      <div className="container mx-auto mt-30">
        <h2 className="text-4xl font-bold mb-10 text-black text-center animate-fade-in">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="relative bg-[#005a5a] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[30rem] flex flex-col justify-between overflow-hidden"
              initial={{ opacity: 0, y: 50 }} // Initial position for animation
              animate={controls}
              transition={{ duration: 0.6, ease: 'easeOut' }} // Animation properties
            >
              {/* Background Image for the card */}
              <div className="relative w-full h-48">
                <Image
                  src={post.backgroundImage}
                  alt={`Background image for ${post.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl" // Rounded corners for the top
                />
              </div>

              {/* Content Overlay */}
              <div className="mt-4 z-10 flex-grow"> {/* flex-grow allows content to take available space */}
                <h3 className="text-2xl text-white font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-200 font-semibold mb-6">{post.content}</p>
              </div>

              {/* Read More Button */}
              <div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#005a5a] font-bold px-6 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 w-full text-center" // Use full width and adjust padding
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;





  
  
  