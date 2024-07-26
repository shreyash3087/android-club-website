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
      <FastMarquee
        gradient={false}
        autoFill={true}
        direction={props.direction}
        speed={scrollSpeed}
        className={` bg-green-950 py-4 ${props.marginClass} `}
      >
        {/* h-16 mr-10 w-36 rounded-xl */}
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/unStop.avif' alt='image' />
        <motion.img className=' h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/coding-ninja-logo.jpeg' alt='image' />
        <motion.img className=' h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/dainikbhaskar.png' alt='image' />
        <motion.img className=' h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/notion.jpg' alt='image' />
      </FastMarquee>
    </>
  );
};

export default ScrollingImages;
