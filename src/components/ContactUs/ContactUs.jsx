import React, { useState, useEffect, useRef } from 'react';
import './contact.css';
import ScrollingImages from '../ScrollingImages/ScrollingImages';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import GeneralFormA from '../GeneralForm/GeneralFormA';
import GeneralFormB from '../GeneralForm/GenrealFormB';
import { sponsorsIcon } from '../../constants';
import FormSponsors from '../FormSponsors/FormSponsors';



const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  const textVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  // const { ref: ref2, inView: inView2 } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });

  return (
    <>
      <section className='light-green-bg flex justify-center items-center flex-col'>
        <div className=' w-full px-10 mt-10 mb-10'>
          <h1 className='text-[#254336]  sm:text-sm md:text-2xl font-semibold bg-white'>Brands That Trusted us</h1>
          <div className='sm:hidden md:block hide-on-small '>
            <ScrollingImages
              direction="left"
              margin="mt-7"
            />
            <ScrollingImages
              direction="right"
              margin="mt-4"
            />
          </div>
          <div className="sponsors-bar mt-10 h-24 p-4 flex gap-5 justify-center items-center md:hidden sm:block show-on-small">
            <div className='flex gap-5 justify-center items-center'>
              {sponsorsIcon.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <img className='w-28 h-16' src={`${item.logo}`} />
                    {index < sponsorsIcon.length - 1 && (
                      <p className='text-xl text-[#254336] py-5'>&#108;</p>
                    )}
                  </React.Fragment>
                )
              })
              }
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='text-green-200 size size_bg font-semibold ' >CONTACT</div>
          <div className='text-green-950 md:text-7xl size_fg absolute md:top-16 sm:top-10 sm:left-20 md:left-36 font-semibold '>
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

        <div className="sponsors mt-10 w-full h-screen md:p-5 lg:p-10 ">
          {/* sponsors form block to be hidden on small screen below 650px */}
          <div className="hide-on-small box border-2   w-full h-full rounded-lg mb-20 ">
            <motion.div
              animate={{
                width: isHovered ? '72%' : "63.33%"
              }}
              className=' w-3/5 h-full flex items-center relative bg-[#96BE96] py-5'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className=" content md:gap-5  margin_small w-3/5 md:h-full  flex items-center justify-center">
                <h3 className='md:text-2xl md:font-medium sm:text-xl mt-3 '>Explore Sponsorship Opportunities with Us!</h3>
                <span className='sm:text-sm md:text-md mt-7'>
                  Your contributions help us foster innovation and learning among aspiring developers. For sponsorship opportunities and collaborations, reach out to us:
                </span>
                <div className="contact-info mt-5 flex flex-col md:gap-2 lg:gap-5 text-black lg:text-lg md:text-md">
                  <div className="phone-info ">
                    <h3 className='font-medium '>Phone Number</h3>
                    <div className="">Giriraj Pradeep Parsewar  - 72407 39968</div>
                    <div className="">Ujjawal Patidar - 7247407613</div>
                  </div>
                  <div className=" mail">
                    <h2 className='font-medium '>Email Address</h2>
                    <span>androidclub@vitbhopal.ac.in</span>
                  </div>
                </div>
                <div className='font-medium text-lg socials flex-col lg:mt-7 sm:mt-5 social-icon'>
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
                className='sm:block sm:absolute bg-[#254336] w-3/4 h-90 left-[64%] p-7 flex flex-col gap-10 rounded-xl items-start hover:border-[#e6f1e8] hover:border-2'>
                <FormSponsors />
              </div>
            </motion.div>
          </div>
          {/* sponsors form block to be hidden on bigger screen above 650px */}
          <div className='hide-on-bigger sm:hidden text-[#254336]   p-3 flex flex-col justify-center items-center'>
            <h3 className='text-2xl font-medium  mt-3 text-[#254336]'>Explore Sponsorship Opportunities with Us!</h3>
            <span className='sm:text-sm md:text-md mt-7'>
              Your contributions help us foster innovation and learning among aspiring developers. For sponsorship opportunities and collaborations, reach out to us:
            </span>
            <div
              className=' mt-10 sm:block sm:absolute bg-[#254336] w-3/4 h-90 left-[64%] p-7 flex flex-col gap-10 rounded-xl items-start hover:border-[#e6f1e8] hover:border-2'>
              <FormSponsors />
            </div>
            <div className="contact-info mt-5 flex text-black ">
              <div className="phone-info ">
                <h3 className='font-medium '>Phone Number</h3>
                <div className="">Giriraj Pradeep Parsewar  - 72407 39968</div>
                <div className="">Ujjawal Patidar - 7247407613</div>
              </div>
              <div className=" mail">
                <h2 className='font-medium '>Email Address</h2>
                <span>androidclub@vitbhopal.ac.in</span>
              </div>
            </div>
            <div className='font-medium text-lg socials flex-col lg:mt-7 sm:mt-5 social-icon'>
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
        </div>
        <div className='hide-on-small'>
          <div className=' mt-16 text-[#254336] flex flex-col gap-3'>
            <h3 className='text-3xl  font-normal'>We welcome your suggestions and feedback!</h3>
            <p className='text-md'>We’d love to hear from you! Please complete the form below to submit your suggestions or queries.</p>
          </div>
        </div>
       <div className='hide-on-small height-small form flex flex-row w-full sm:h-screen sm:mt-40 relative margin-small col-small'>
          <div className=" hide-on-small map overflow-hidden w-full relative m-5 flex-grow ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5357352577967!2d76.8487121738678!3d23.07747641427975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1719466708681!5m2!1sen!2sin"
              className='h-full w-full'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='hide-on-small'>
          <GeneralFormA/>
          </div>
       </div>
          <div className=' show-on-small mt-[30%] sm:hidden h-full text-[#254336] flex flex-col justify-center items-center gap-3 '>
            <h3 className='text-3xl  font-normal'>We welcome your suggestions and feedback!</h3>
            <p className='text-md'>We’d love to hear from you! Please complete the form below to submit your suggestions or queries.</p>
            <GeneralFormB />
          </div>
      </section >

    </>

  );
}

export default ContactUs;

