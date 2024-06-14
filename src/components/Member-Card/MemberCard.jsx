import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

const MemberCard = ({ admin, bgcolor, row, arrow }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: ref,
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <>
      {/* Larger screens */}
      <section
        className={`hidden md:flex flex-row h-96 mb-10 p-5 items-center justify-around ${bgcolor} ${row}`}
      >
        <div className='relative w-72 h-72 '>
        <img src={admin.image} className='absolute object-cover object-center h-full rounded-xl' alt='Admin' />
        </div>
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
          }}
          className='h-[80%] p-5 w-[40%] glass-effect flex flex-col items-center justify-center bg-[#96BE96] bg-opacity-20 rounded-lg'
        >
          <h1 className='post text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-none'>
            {admin.name}
          </h1>
          <br />
          <p className='post leading-none font-bold'>({admin.role})</p>
        </motion.div>
      </section>
      
      {/* Smaller devices */}
      <section
        className={`flex flex-col md:hidden h-auto mb-10 p-5 gap-5 items-center justify-around ${bgcolor} ${row}`}
      >
        <img src={admin.image} className='w-48 h-48 sm:w-36 sm:h-36 rounded-lg' alt='Admin' />
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
          }}
          className='h-36 w-72 glass-effect flex flex-col items-center justify-center bg-[#96BE96] bg-opacity-20 rounded-lg'
        >
          <h1 className='post text-2xl font-extrabold leading-none'>
            {admin.name}
          </h1>
          <br />
          <p className='post leading-none font-lg'>({admin.role})</p>
        </motion.div>
      </section>
    </>
  );
};

export default MemberCard;
