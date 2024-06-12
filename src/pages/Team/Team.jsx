import React, { useState, useEffect } from "react";
import Department from '../../components/Department/Department';
import "./team.css";
import { departments as department } from './teamData';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';


// things to do : declutter make responsive and then push the code and then add new animations

const Team = () => {
  const [activeDepartment, setActiveDepartment] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const text = "MEET THE TEAM.";

  useEffect(() => {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      currentText += text[index];
      setDisplayedText(currentText);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here
    return () => clearInterval(interval);
  }, [text]);

  const icon_departments = [
    { name: "Android Team", image: "/TeamPage_Assets/android.png" },
    { name: "SDC", image: "/TeamPage_Assets/sdc.png" },
    { name: "Research & Development", image: "/TeamPage_Assets/sdc.png" },
    { name: "PR & Outreach", image: "/TeamPage_Assets/pr_and_outreach.png" },
    { name: "Event Management Team", image: "/TeamPage_Assets/evm.png" },
    { name: "Finance", image: "/TeamPage_Assets/finance.png" },
    { name: "UI/UX", image: "/TeamPage_Assets/sdc.png" },
    { name: "Content Team", image: "/TeamPage_Assets/content.png" },
    { name: "Design Team", image: "/TeamPage_Assets/design.png" },
    { name: "Media Team", image: "/TeamPage_Assets/media.png" }
  ];

  const handleNavClick = (departmentName) => {
    setActiveDepartment(departmentName);
  };

  return (
    <>
      <main>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start "
          style={{ backgroundImage: 'url("/TeamPage_Assets/main_bg.png")' }}
        >
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: displayedText.length * 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-4 sm:ml-6 md:ml-8 lg:ml-11 inline-block whitespace-nowrap overflow-hidden"
          >
            {displayedText}
            <span className="animate-blink">|</span>
          </motion.h1>
        </div>
        <section>
          <div className="p-2 mb-5 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-wrap lg:flex-nowrap justify-between items-center dark-green-bg">
            {icon_departments.map((department, index) => (
              <Link
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-auto h-24 p-0 m-2 flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
                to={department.name.toLowerCase().replace(/ /g, '-')}
                smooth={true}
                duration={500}
                onClick={() => handleNavClick(department.name)}
              >
                <div
                  className="p-0 w-14 h-16 bg-cover bg-center"
                  style={{ backgroundImage: `url(${department.image})` }}
                ></div>
                <p className="link-hover text-white leading-none text-center">{department.name}</p>
              </Link>
            ))}
          </div>
        </section>


        {department.map((department, index) => (
          <Department
            key={index}
            department={department}
            row={index % 2 !== 0}
            slideInFromRight={activeDepartment === department.name}
          />
        ))}



      </main>

    </>
  );
};

export default Team;
