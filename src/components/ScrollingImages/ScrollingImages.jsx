import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FastMarquee from 'react-fast-marquee';

const ScrollingImages = (props) => {
  const [scrollSpeed, setScrollSpeed] = useState(70); // Initial scroll speed

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed based on scroll direction
      const newScrollSpeed = 70 + (window.scrollY * 0.05); // Example adjustment based on scrollY
      setScrollSpeed(newScrollSpeed);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        {/* Using FastMarquee from react-fast-marquee */}
        <FastMarquee
          gradient={false}
          autoFill={true}
          direction={props.direction}
          speed={scrollSpeed} // Dynamically adjust speed based on scroll
          className='text-xl  py-5 bg-green-950 my-5 '
        >
          {/* Example images */}
          <motion.img className='h-20 mr-10 w-44 rounded-lg' src='AboutPage_Assets/unStop.avif' alt='image' />
          <motion.img className='h-20 mr-10 w-44 rounded-lg' src='AboutPage_Assets/coding-ninja-logo.jpeg' alt='image' />
          <motion.img className='h-20 mr-10 w-44 rounded-lg' src='AboutPage_Assets/dainikbhaskar.png' alt='image' />
          <motion.img className='h-20 mr-10 w-44 rounded-lg' src='AboutPage_Assets/notion.jpg' alt='image' />
        </FastMarquee>
        </>
  );
};

export default ScrollingImages;
