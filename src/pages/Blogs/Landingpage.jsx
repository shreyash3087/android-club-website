/* eslint-disable react/no-unescaped-entities */
import React from "react";
import img1 from "./OIP-removebg-preview (3).png";
import './animate.css';

const Landingpage = () => {
  const scrollDown = () => {
    window.scrollBy({ top: 590, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#254336]  h-[70vh] flex flex-col md:flex-row items-center justify-between p-6">
      {/* Text Section */}
      <div className="flex flex-col ml-[200px] items-start max-w-lg p-6">
        <h1 className="text-5xl text-left font-extrabold text-[#E6F1E8] mb-4 animate__animated animate__fadeInLeft animate__delay-1s">
          Welcome to Android Club's Blogging Page
        </h1>
        <p className="text-lg text-left text-[#E6F1E8] mb-6 animate__animated animate__fadeInLeft animate__delay-2s">
          Discover the latest trends in Android development, tips, tutorials, and more. Join our community and enhance your Android development skills!
        </p>
        {/* Button Section */}
        <button 
          onClick={scrollDown}
          className="bg-[#48BB78] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 relative overflow-hidden shadow-lg">
          <span className="relative z-10">Dive In</span>
          <div className="absolute inset-0 bg-green-300 opacity-50 rounded-full animate-sparkles"></div>
        </button>
      </div>
      
      {/* Image Section */}
      <div className="absolute left-[850px] top-[80px] animate__animated animate__pulse animate__infinite animate__delay-2s">
        <img src={img1} alt="Android Club" className="rounded-lg w-[500px] h-[500px] animate-dance" />
      </div>
    </div>
  );
};

export default Landingpage;
