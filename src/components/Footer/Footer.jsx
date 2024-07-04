import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const homeButton = () => {
    navigate("/");
  };

  return (
    <footer className="bg-[#254336] mt-16 text-white py-6 relative">
      <div className="container w-[80%] mx-auto">
        <div className="flex w-[35%] justify-center absolute -top-8 left-1/2 translate-x-[-50%]">
          <div className="w-full">
            <div className="mb-5">
              <form className="flex rounded-3xl overflow-hidden bg-white py-1 pl-4 pr-1">
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none text-gray-500 pr-2"
                  placeholder="Enter email address"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-[#36614e] hover:bg-[#2b4f3f] text-white py-3 px-4 rounded-3xl cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <div className="flex justify-between text-left">
            <div className="w-1/3 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                <a href="#" onClick={homeButton}>
                  Android Club
                </a>
              </h2>
              <p className="text-white font-thin mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab adipisci ullam harum dolor dolorem soluta tenetur at similique corrupti?
              </p>
              <a href="#" className="text-[#83d1ae]">
                read more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="flex gap-16">
              <div className="border-l-2 border-[#779f8d2d] pl-4">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Discover</h2>
                  <ul className="list-none font-thin">
                    <li>
                      <a href="#" className="block py-1">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-l-2 border-[#779f8d2d] pl-4">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Social</h2>
                  <ul className="list-none font-thin">
                    <li>
                      <a href="#" className="block py-1">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-l-2 border-[#779f8d2d] pl-4 max-w-60">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Contacts</h2>
                  <ul className="list-none font-thin">
                    <li>
                      <a href="#" className="block py-1">
                        androidclub@vitbhopal.ac.in
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                      Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10 mb-5 border-[#779f8d2d]"/>
        <div className="flex flex-wrap items-center">
          
          <div className="w-full lg:w-auto mb-4 lg:mb-0">
            <h3 className="text-sm font-extralight">Our Sponsers :</h3>
          </div>
          <div className="w-full lg:flex-1">
            <p className="text-sm flex flex-wrap gap-4 mb-4 lg:mb-0">
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Unstop
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Notion
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Dainik Bhaskar
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Code-Chef
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Coding Ninjas
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Give My Certificate
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Hacker Earth
              </a>
              <a href="#" className="flex items-center">
                <span className="ion-logo-ionic mr-2"></span>Tech Brain
              </a>
            </p>
          </div>
          <div className="w-full lg:w-auto text-lg-right">
            <p className="mb-0">
              <a
                href="#"
                className="py-2 px-4 rounded text-[#83d1ae]"
              >
                See All <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </div>
        </div>
        <hr className="mt-5 mb-5 border-[#779f8d2d]"/>
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="copyright">
              Copyright
              &copy; {currentYear} {" "}
              All rights reserved | Made with {" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: '#83d1ae' }} /> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                className="text-[#83d1ae]"
              >
                SDC Android Club
              </a>
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <p className="mb-0">
              <a className="mr-3" href="#">
                Terms
              </a>
              <a className="mr-3" href="#">
                Privacy
              </a>
              <a className="mr-3" href="#">
                Compliances
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
