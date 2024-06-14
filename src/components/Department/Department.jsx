import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MemberCard from '../Member-Card/MemberCard';
import AdmCard from '../AdminCard/AdmCard'
import "./department.css";

const Department = ({ department, slideInFromRight }) => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.01 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, x: slideInFromRight ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
  
    <motion.section
      id={department?.name.toLowerCase().replace(/ /g, '-') || ''}
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h1 className="text-4xl lg:text-5xl font-bold pt-5 pb-10 text-[#254336]">{department && department.name}</h1>
      {department && department.admins && department.admins.map((person, index) => (

        <React.Fragment key={index}>

          {person.role === "President" || person.role === "Vice President" || person.role === "General Secretary" ? (
            <AdmCard
              key={index}
              admin={person}
              row={index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
         
            />
          ) : (
            <MemberCard
              key={index}
              admin={person}
              bgcolor={index % 2 === 0 ? 'dark-green-bg' : 'fade-green-bg'}
              row={index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              arrow={index % 2 === 0 ? '' : 'transform -scale-x-100'}
         
            />
          )}
        </React.Fragment>
      ))}
    </motion.section>

  );
};

export default Department;
