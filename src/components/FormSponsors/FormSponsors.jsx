import React, { useState } from "react";

import { useForm } from 'react-hook-form';
import axios from "axios";
import { motion } from "framer-motion";
import './FormSponsors.css'

const FormSponsors = () => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hide-on-small flex h-90 flex-col w-full gap-8 items-start ">
      <motion.div
        animate={{ y: isNameClicked ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleNameClick}
        variants={itemVariants}
        className=""
      >

        <input className=" text-white bg-inherit focus:outline-none  border-b-2 hover:bg-stone-900 rounded-lg placeholder-white  h-7 p-3 focus:border" placeholder='Name' type="text" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </motion.div>
      <div className=' contact-info flex lg:flex-row sm:flex-col sm:gap-7 lg:gap-12 '>
        <motion.div
          animate={{ y: isCompanyClicked ? -10 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleCompanyClick}
          variants={itemVariants}
          className=""
        >
          <input
            className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white h-7 p-3 focus:border"
            placeholder="Company"
            type="text"
            {...register('company', { required: true })}
          />
          {errors.company && <span>This field is required</span>}
        </motion.div>
        <motion.div

          animate={{ y: isPhoneClicked ? -10 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handlePhoneClick}
          variants={itemVariants}
          className=" w-full"
        >
          <input
            className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white h-7 p-3 w-full focus:border "
            placeholder="Phone Number"
            type="tel"
            {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
          />
          {errors.phoneNumber?.type === 'required' && <span>This field is required</span>}
          {errors.phoneNumber?.type === 'pattern' && <span>Phone number should be 10 digits</span>}

        </motion.div>
      </div>
      <motion.div
        animate={{ y: isEmailClicked ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleEmailClick}
        variants={itemVariants}
        className="md:w-[133%] sm:w-[130%] h-7 flex email   "
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
        animate={{ y: isMessageClicked ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleMessageClick}
        variants={itemVariants}
        className='w-full h-32'
        // initial="hidden"
      >
        <textarea
          className="text-white bg-inherit focus:outline-none border-b-2 hover:bg-stone-900 rounded-lg placeholder-white w-full p-3 focus:border"
          placeholder="Message"
          rows={4}
          {...register('message', { required: true })}
        />
        {errors.message && <span>This field is required</span>}
      </motion.div>
      <motion.div
        variants={itemVariants} initial="hidden" animate="visible" className='w-full'
      >
        <motion.button whileHover={{ scale: 1.2 }} className='bg-[#96BE96] text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#e6f1e8] rounded-full w-24' type="submit">Submit</motion.button>
      </motion.div>
    </form>
  );
}

export default FormSponsors;