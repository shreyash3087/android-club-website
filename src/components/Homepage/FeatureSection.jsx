import { useEffect } from "react";
import { features } from "/src/constants";
import AOS from "aos";
import "aos/dist/aos.css";
const FeatureSection = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 1200,
      });
    }, 100);
    return () => {
      AOS.refreshHard();
    };
  }, []);
  return (
    <div className="pl-20 pr-20 max-md:pr-0 max-md:pl-0 relative border-b border-neutral-800 min-h-[800px] pt-32 pb-10 bg-[#254336]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What we{" "}
        <span className="text-[#3ab680]">
          stand for!
        </span>
      </h2>
        
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 m-0.2" data-aos="fade-up">
            <div className="flex hover:bg-[#0000006a] hover:rounded-3xl hover:border hover:border-neutral-800 p-4">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#3ab680] justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-left">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-400 text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
