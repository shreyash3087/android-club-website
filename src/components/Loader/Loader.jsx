import React, { useState, useEffect } from 'react';

function Loader({ slideUp }) {
  const [viewBoxWidth, setViewBoxWidth] = useState(1350);

  useEffect(() => {
    const updateViewBoxWidth = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setViewBoxWidth(600);
      } else if (width < 768) {
        setViewBoxWidth(900);
      } else if (width < 1024) {
        setViewBoxWidth(1200);
      } else {
        setViewBoxWidth(1350);
      }
    };
    updateViewBoxWidth();
    window.addEventListener('resize', updateViewBoxWidth);
    return () => {
      window.removeEventListener('resize', updateViewBoxWidth);
    };
  }, []);

  return (
    <div className={`z-[100] fixed w-full top-0 flex justify-center items-center flex-col h-screen duration-1000 bg-[#1c3428] ${slideUp ? 'translate-y-[-100%]' : ''}`}>
      <div className="p-1.5 rounded-full bg-white">
        <img src="/Logo.png" alt="Logo" className='w-9'/>
      </div>
      <svg viewBox={`0 0 ${viewBoxWidth} 150`} className=''>
        <text x="50%" y="50%" fill="transparent" textAnchor="middle" className='stroke-white text-7xl font-bold stroke-2 textanim2'>
          Android Club
        </text>
      </svg>
      <div className="text-white text-2xl max-sm:text-xl relative -top-12 textanim max-sm:-top-3"> -- VIT BHOPAL -- </div>
    </div>
  );
}

export default Loader;
