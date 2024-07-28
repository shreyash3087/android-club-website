import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FastMarquee from 'react-fast-marquee';
import { sponsorsLogo } from '../../constants';
const ScrollingImages = (props) => {
  const [scrollSpeed, setScrollSpeed] = useState(40); // Initial scroll speed

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed based on scroll direction
      const newScrollSpeed = 40 + (window.scrollY * 0.05); // Example adjustment based on scrollY
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
        speed={scrollSpeed} // Dynamically adjust speed based on scroll
        className={`py-3 bg-green-950 ${props.margin}`}
      >
        {/* Example images */}
        {sponsorsLogo.map((item,index)=>{
          return(
            <React.Fragment key={index}>
              <motion.img className='h-16 mr-10 w-36 rounded-md' src={`${item.logo}`} alt='image' />
            </React.Fragment>
          )
        })}
      </FastMarquee>
    </>
  );
};

export default ScrollingImages;
