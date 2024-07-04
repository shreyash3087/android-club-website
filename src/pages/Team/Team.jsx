import React, { useState } from "react";
import Department from "../../components/Department/Department";
import "./team.css";
import { departments as departmentData } from "./teamData";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [activeDepartment, setActiveDepartment] = useState("Admin");

  const icon_departments = [
    { name: "Admin", image: "/TeamPage_Assets/admin.png" },
    { name: "Android Team", image: "/TeamPage_Assets/android.png" },
    { name: "SDC", image: "/TeamPage_Assets/sdc.png" },
    { name: "Research & Development", image: "/TeamPage_Assets/rnd.png" },
    { name: "PR & Outreach", image: "/TeamPage_Assets/pr_and_outreach.png" },
    { name: "Event Management Team", image: "/TeamPage_Assets/evm.png" },
    { name: "Finance", image: "/TeamPage_Assets/finance.png" },
    { name: "UI/UX", image: "/TeamPage_Assets/ui_ux.png" },
    { name: "Content Team", image: "/TeamPage_Assets/content.png" },
    { name: "Design Team", image: "/TeamPage_Assets/design.png" },
    { name: "Media Team", image: "/TeamPage_Assets/media.png" },
  ];

  const handleNavClick = (departmentName) => {
    setActiveDepartment(departmentName);
  };

  return (
    <>
      <main className="bg-[#E6F1E8] mt-16">
        <div className="h-[90vh] min-h-[600px] w-full relative team-bg flex justify-center items-center">
          <motion.img
            src="/TeamPage_Assets/main_bg.png"
            className="absolute h-full object-cover"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
          <h1 className="pt-6 self-start flex flex-col text-5xl font-bold">
            Meet Our <span>Team</span>
          </h1>
        </div>
        <section className="z-10 relative">
          <div className="p-2 mb-5 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-wrap lg:flex-nowrap justify-between items-center fade-green-bg">
            {icon_departments.map((department, index) => (
              <Link
                key={index}
                className="w-full sm:w-full md:w-1/3 lg:w-auto h-24 p-0 m-2 flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
                to={department.name.toLowerCase().replace(/ /g, "-")}
                smooth={true}
                duration={500}
                onClick={() => handleNavClick(department.name)}
              >
                <div
                  className="p-0 w-14 h-16 bg-cover bg-center"
                  style={{ backgroundImage: `url(${department.image})` }}
                ></div>
                <p className="link-hover text-white leading-none text-center">
                  {department.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <AnimatePresence>
            {departmentData.map((department) => {
              if (
                (activeDepartment === "Admin" && department.name === "Admin") ||
                (activeDepartment === "Admin" && department.name === "Executive Board") ||
                activeDepartment === department.name
              ) {
                return (
                  <motion.div
                    key={department.name}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Department department={department} />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default Team;
