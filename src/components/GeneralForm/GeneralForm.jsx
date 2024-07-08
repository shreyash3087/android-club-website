import React, { useState } from "react";

import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import axios from "axios";

const GeneralForm = ()=>{
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
      });
      const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }};
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isNameClicked, setIsNameClicked] = useState(false);
    const [isEmailClicked, setIsEmailClicked] = useState(false);
    const [isCompanyClicked, setIsCompanyClicked] = useState(false);
    const [isPhoneClicked, setIsPhoneClicked] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);
  
  
    const handleNameClick = () => {
      setIsNameClicked(!isNameClicked);
    };
    const handleEmailClick = () => {
      setIsEmailClicked(!isEmailClicked);
    };
    const handleCompanyClick = () => {
      setIsCompanyClicked(!isCompanyClicked);
    };
    const handlePhoneClick = () => {
      setIsPhoneClicked(!isPhoneClicked);
    };
    const handleMessageClick = () => {
      setIsMessageClicked(!isMessageClicked);
    };
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    };

    const onSubmit = async (data) => {
        try {
          const response = await axios.post('https:api', data);
          console.log('Form submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return(
    <motion.form onSubmit={handleSubmit(onSubmit)} className="form absolute right-10 bottom-32 bg-[#96BE96] flex flex-col border-white border-2 items-start gap-16 p-10 w-4/12 rounded-lg"
    ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={containerVariants}
              >
      <motion.div
        animate={{ y: isNameClicked ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleNameClick}
        variants={itemVariants}
        className="w-full flex"
      >

        <input className=" text-white bg-inherit focus:outline-none  border-b-2 hover:bg-stone-900 rounded-lg placeholder-white  h-7 p-3 w-3/4 focus:border" placeholder='Name' type="text" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </motion.div>
      
        <motion.div
          animate={{ y: isEmailClicked ? -10 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleEmailClick}
          variants={itemVariants}
          className="w-full h-7 flex  "
        >
          <input
            className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white w-3/4 h-7 p-3 focus:border "
            placeholder="Email"
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Please enter a valid email address</span>}
        </motion.div>
    
     
      
      <motion.div
          animate={{ y: isPhoneClicked ? -10 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handlePhoneClick}
          variants={itemVariants}
          className="flex w-full"
        >
          <input
            className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white h-7 p-3 w-3/4  focus:border "
            placeholder="Phone Number"
            type="tel"
            {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
          />
          {errors.phoneNumber?.type === 'required' && <span>This field is required</span>}
          {errors.phoneNumber?.type === 'pattern' && <span>Phone number should be 10 digits</span>}

        </motion.div>
   

      <motion.div
        animate={{ y: isMessageClicked ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleMessageClick}
        variants={itemVariants}
        className='w-full h-32'
      >
        <textarea
          className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white w-full p-3 focus:border"
          placeholder="Message"
          rows={4} // <-- Specify the number of rows for the textarea
          {...register('message', { required: true })}
        />
        {errors.message && <span>This field is required</span>}
      </motion.div>
      <motion.div
                variants={itemVariants} initial="hidden" animate="visible" className='w-full'
              >
                <motion.button whileHover={{ scale: 1.2 }} className='dark-green text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#e6f1e8] rounded-full w-24 '>Submit</motion.button>
            
      </motion.div>
    </motion.form>
  );
}

export default GeneralForm;