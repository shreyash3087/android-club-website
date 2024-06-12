import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/TeamPage_Assets/arrow-animation.json';
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
    {/* // larger screens */}

    <section className={`hidden md:flex flex-row h-64 dark-green-bg mb-10 p-5  items-center justify-around ${bgcolor} ${row}`}>
      <img src={admin.image} className='w-38 h-52  rounded-lg' alt='Admin' />
      <Lottie animationData={animationData} className={`w-52 h-32 ${arrow}`} />
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
        className='h-52 border w-96 glass-effect flex flex-col items-center justify-center post-box backdrop-blur-lg bg-white bg-opacity-20 rounded-lg'>
        <h1 className='post text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-none'>
          {admin.name}
        </h1>
        <br />
        <p className='post leading-none font-bold'>({admin.role})</p>
      </motion.div>
    </section>
    {/* smaller devices */}
    <section className={`flex flex-col md:hidden h-auto dark-green-bg mb-10 p-5 gap-5 items-center justify-around ${bgcolor} ${row}`}>
      <img src={admin.image} className='w-48 h-52 sm:w-24 sm:h-36 rounded-lg' alt='Admin' />
      
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
        className='h-36 border w-72 glass-effect flex flex-col items-center justify-center post-box backdrop-blur-lg bg-white bg-opacity-20 rounded-lg'>
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

