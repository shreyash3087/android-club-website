import { useState, useEffect } from "react";
import vid1 from "/src/assets/vid1.mp4";
import vid2 from "/src/assets/vid2.mp4";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const [splineError, setSplineError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const handleWebGLError = (event) => {
      if (event.message.includes("GL_INVALID_VALUE")) {
        setSplineError(true);
        setErrorMessage(event.message);
      }
    };
    window.addEventListener("error", handleWebGLError);

    return () => {
      window.removeEventListener("error", handleWebGLError);
    };
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <div>
      <div className="h-screen">
      <img
          src="/Loader.png"
          alt="Loading..."
          className={`absolute right-4 top-[100px] z-50 w-[640px] transition-opacity duration-500 ease-in-out max-xl:opacity-0 ${
            splineLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <Spline
          scene="/scene.splinecode"
          onLoad={handleSplineLoad}
          className={`absolute z-30 transition-opacity duration-500 ease-in-out max-lg:opacity-0 ${
            splineLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="flex flex-col items-center justify-center pt-20 w-[40%] h-screen absolute top-8 left-48 transition-all duration-500 max-xl:left-24 max-[1100px]:left-16 max-lg:w-full max-lg:left-0">
          <h1 className="text-5xl tracking-wide text-center sm:text-6xl lg:text-7xl">
            <span className="text-[#254336] font-bold max-[1100px]:text-1xl">
              ANDROID CLUB
            </span>
            <br />
            <span className="px-2 py-1 h-6 text-lg font-medium text-[#254336] uppercase rounded-full bg-gray-100">
              VIT BHOPAL
            </span>
          </h1>
          <p className="mt-10 max-w-4xl text-lg text-center text-[#254336] max-sm:px-4">
            The Android Club: a pythonic paradise where tech wizards brew magic!
            This coven conjures awesome hackathons, fire-breathing guest hydras,
            and a hex-citing space for all code cadets, from app devkeepers to
            machine learning muggles. Find your appy place among VIT's happiest
            software sorcerers!
          </p>
          <div className="flex justify-center my-10">
            <a
              href="/events"
              className="px-4 py-3 mx-3 rounded-full font-bold border bg-[#254336] border-[#254336] z-40"
            >
              Explore Events
            </a>
            <a
              href="/team"
              className="px-4 py-3 mx-3 rounded-full font-bold border bg-[#254336] border-[#254336] z-40"
            >
              Meet The Team!
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10 pl-52 pr-52 max-sm:flex-col max-lg:pl-20 max-lg:pr-20 max-md:pl-10 max-md:pr-10 bg-[#254336]">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 max-sm:w-full rounded-lg border border-green-900 shadow-sm shadow-green-400"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 max-sm:w-full rounded-lg border border-green-900 shadow-sm shadow-green-400"
        >
          <source src={vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HeroSection;
