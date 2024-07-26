import React, { useState, useEffect, useRef } from 'react';
import './contact.css';
import ScrollingImages from '../ScrollingImages/ScrollingImages';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FormSponsors from "../FormSponsors/FormSponsors"
import GeneralForm from '../GeneralForm/GeneralForm';



const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const textVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2, 
        ease: "easeInOut" 
      }}}
  return (
    <>
      <section className='light-green-bg flex justify-center items-center flex-col'>
        <div className='h-36 w-full px-10 mt-10 mb-36 '>
          <h1 className='text-[#254336] text-2xl font-semibold bg-white'>Brands That Trusted us</h1>
          <ScrollingImages
            direction="left"
            marginClass="my-5"
          />
          <ScrollingImages
            direction="right"
            marginClass="my-2"
          />
        </div>
        <div className='relative mt-20 border'>
          <div className='text-green-200 size font-semibold' >CONTACT</div>
          <div className='text-green-950 text-7xl absolute top-16 left-36 font-semibold '>
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              variants={textVariants}
            >
              Get In Touch
            </motion.div>
          </div>

        </div>

        <div className="sponsors  mt-10 w-full h-screen p-10">
          <div className="box w-full h-full  rounded-lg mb-20 ">
            <motion.div
              animate={{
                width: isHovered ? '72%' : "63.33%"
              }}
              className=' w-3/5 h-full flex items-center relative bg-[#96BE96]'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="content  gap-4 w-3/5 h-full flex items-center justify-between  ">
                <h3 className='text-3xl'>Explore Sponsorship Opportunities with Us!</h3>
                <span>
                  Your contributions help us foster innovation and learning among aspiring developers. For sponsorship opportunities and collaborations, reach out to us:
                </span>
                <div className="contact-info flex flex-col gap-5 text-black">
                  <div className="phone-info">
                    <h3 className='font-medium text-lg'>Phone Number</h3>
                    <div className="">Giriraj Pradeep Parsewar  - 72407 39968</div>
                    <div className="">Ujjawal Patidar - 7247407613</div>
                  </div>
                  <div className="  mail">
                    <h2 className='font-medium text-lg'>Email Address</h2>
                    <span>androidclub@vitbhopal.ac.in</span>
                  </div>
                </div>
                <div className='font-medium text-lg socials flex-col mt-7 '>
                  <div className="icons flex gap-3">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className='h-7 w-7' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className='h-7 w-7' />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} className='h-7 w-7' />
                    </a>

                  </div>
                </div>

              </div>
              <div
                className=' absolute bg-[#254336] w-3/4 h-90 left-2/3 p-7 flex flex-col gap-10 rounded-xl items-start'>
                <FormSponsors />
              </div>
            </motion.div>
          </div>
        </div>
        <div className=' form flex flex-row  w-full h-screen mt-48 relative '>
          <div className="map overflow-hidden w-full relative m-5 flex-grow">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5357352577967!2d76.8487121738678!3d23.07747641427975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1719466708681!5m2!1sen!2sin"
              className='h-full w-full'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
         
         <GeneralForm/>

        </div>
      </section >

    </>

  );
}

export default ContactUs;

