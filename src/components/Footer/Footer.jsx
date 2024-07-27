import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const homeButton = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setPopupMessage("Email address is required.");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return;
    }

    if (!emailPattern.test(email)) {
      setPopupMessage("Please enter a valid email address.");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return;
    }

    setPopupMessage("Thanks for Subscribing, We will contact you soon!");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#254336] mt-16 text-white py-6 relative">
      <div className="container w-[80%] mx-auto">
        <div className="flex w-[35%] justify-center absolute -top-8 left-1/2 translate-x-[-50%] max-lg:w-2/3">
          <div className="w-full">
            <div className="mb-5">
              <form
                className="flex rounded-3xl overflow-hidden bg-white py-1 pl-4 pr-1"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none text-gray-500 pr-2"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex justify-between text-left max-lg:flex-col ">
            <div className="w-1/3 mb-6 lg:mb-0 max-lg:w-full max-lg:text-center">
              <h2 className="text-2xl font-bold mb-4">
                <a href="#" onClick={homeButton}>
                  Android Club
                </a>
              </h2>
              <p className="text-white font-thin mb-2">
                Imagine a place where every concept is embraced, every issue is
                creatively addressed, and everyone learns from one another and
                works collectively to become more capable individuals. The
                Android Club is about wearing your thinking caps and unleashing
                your creativity to develop apps that make a difference.
              </p>
              <a href="#" className="text-[#83d1ae]">
                read more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="flex gap-16 max-lg:justify-center max-lg:flex-col max-lg:gap-3">
              <div className="border-l-2 border-[#779f8d2d] max-lg:border-none max-lg:text-center pl-4">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Discover</h2>
                  <ul className="list-none font-thin max-lg:mt-3 max-lg:flex max-lg:gap-5 max-lg:justify-center">
                    <li>
                      <a href="/" className="block py-1">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/events" className="block py-1">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="/blogs" className="block py-1">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="block py-1">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-l-2 border-[#779f8d2d] max-lg:border-none max-lg:text-center pl-4">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Social</h2>
                  <ul className="list-none font-thin max-lg:mt-3 max-lg:flex max-lg:gap-5 max-lg:justify-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/android-club-vit-bhopal/"
                        className="block py-1"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/AndroidClubVitb" className="block py-1">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@androidclub-vitb-wi4qe" className="block py-1">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/androidclub.vitb/"
                        className="block py-1"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-l-2 border-[#779f8d2d] max-lg:border-none max-lg:text-center pl-4 max-w-60 max-lg:max-w-full">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-light">Contacts</h2>
                  <ul className="list-none font-thin">
                    <li>
                      <a
                        href="mailto:androidclub@vitbhopal.ac.in"
                        className="block py-1"
                      >
                        androidclub@vitbhopal.ac.in
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="block py-1 cursor-default">
                        Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya
                        Pradesh 466114
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10 mb-5 border-[#779f8d2d]" />
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 text-center lg:text-left">
            <h3 className="text-sm font-extralight">Our Sponsors :</h3>
          </div>
          <div className="w-full lg:flex-1 text-center lg:text-left">
            <p className="text-sm flex flex-wrap gap-4 mb-4 lg:mb-0 justify-center lg:justify-start">
              <a
                href="https://unstop.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Unstop
              </a>
              <a
                href="https://www.notion.so/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Notion
              </a>
              <a
                href="https://www.bhaskar.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Dainik Bhaskar
              </a>
              <a
                href="https://www.codechef.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Code-Chef
              </a>
              <a
                href="https://www.codingninjas.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Coding Ninjas
              </a>
              <a
                href="https://givemycertificate.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Give My Certificate
              </a>
              <a
                href="https://www.hackerearth.com/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Hacker Earth
              </a>
              <a
                href="https://www.techbrain.com.au/"
                className="flex items-center"
                target="__blank"
              >
                <span className="ion-logo-ionic mr-2"></span>Tech Brain
              </a>
            </p>
          </div>
          <div className="w-full lg:w-auto text-lg-right text-center lg:text-right">
            <p className="mb-0">
              <a href="#" className="py-2 px-4 rounded text-[#83d1ae]">
                See All <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </div>
        </div>
        <hr className="mt-5 mb-5 border-[#779f8d2d]" />
        <div className="flex flex-wrap mt-10 justify-center lg:justify-between">
          <div className="w-full lg:w-2/3 text-center lg:text-left mb-4 lg:mb-0">
            <p className="copyright">
              Copyright &copy; {currentYear} All rights reserved | Made with{" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: "#83d1ae" }} /> by{" "}
              <a href="" target="_blank" className="text-[#83d1ae]">
                SDC Android Club
              </a>
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <p className="mb-0">
              <a className="mr-3" href="">
                Terms
              </a>
              <a className="mr-3" href="">
                Privacy
              </a>
              <a className="mr-3" href="">
                Compliances
              </a>
            </p>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center text-black">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
