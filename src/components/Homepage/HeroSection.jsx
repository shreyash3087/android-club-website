import vid1 from "/src/assets/vid1.mp4";
import video2 from "/src/assets/video2.mp4";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-9 relative border-b border-neutral-800 min-h-[800px]">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">




{/*         
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WELCOME TO THE',
         1000, // wait 1s before replacing "Mice" with "Hamsters"
        '',
         1000,
        // 'THE',
        // 1000, // wait 1s before replacing "Mice" with "Hamsters"


      ]}
      speed={200}
      // fontSize: '2em',
      style={{  display: 'inline-block' }}
      repeat={Infinity}
      //omitDeletionAnimation="false"
    /> */}









        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-gray-800">
          
        {" "}ANDROID CLUB {" "}
        </span> 
        <br/>

        <span className="px-2 py-1 h-6 text-lg font-medium text-green-500 uppercase rounded-full bg-neutral-900">
          VIT BHOPAL
        </span>


         
      </h1>
      <p className="mt-10 max-w-4xl text-lg text-center text-neutral-500">
      The Android Club: a pythonic paradise where tech wizards brew magic! This coven conjures awesome hackathons, fire-breathing guest hydras, and a hex-citing space for all code cadets, from app devkeepers to machine learning muggles. Find your appy place among VIT's happiest software sorcerers!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="px-4 py-3 mx-3 from-green-500 to-green-800 rounded-full border border-green-700 hover:bg-gradient-to-r"
        >
          Explore Events
        </a>
        <a href="#" className="px-4 py-3 mx-3 from-green-500 to-green-800 rounded-full border border-green-700 hover:bg-gradient-to-r">
          Meet The Team!
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-green-700 shadow-sm shadow-green-400"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-green-700 shadow-sm shadow-green-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default HeroSection;
