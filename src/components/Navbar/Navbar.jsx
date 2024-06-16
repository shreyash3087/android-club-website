import { Menu, X } from "lucide-react";
import logo1 from "/src/assets/logo1.png";
import { navItems } from "/src/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login_popup from "../LoginPopUp/Login_popup";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const toggleNavbar = () => {
    if (!mobileDrawerOpen) {
      setLoginPopupVisible(false); 
    }
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleLoginPopup = (shouldSignIn = true) => {
    if (!loginPopupVisible) {
      setMobileDrawerOpen(false);
    }
    setSignIn(shouldSignIn);
    setLoginPopupVisible(!loginPopupVisible);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
      <div className="relative px-4 mx-auto lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-30" src={logo1} alt="Logo" />
            <span className="text-xl tracking-tight hover:text-green-500">
              {/* name here */}
              ANDROID CLUB
            </span>
          </div>
          <ul className="hidden ml-14 space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <span className="px-2 py-1 h-6 text-lg max-xl:px-0 font-medium text-gray-500 uppercase rounded-lg hover:bg-neutral-600/50 hover:text-green-400">
                  <a href={item.href}>{item.label}</a>
                </span>
              </li>
            ))}
          </ul>
          <div className="hidden justify-center items-center space-x-12 max-xl:space-x-4 lg:flex">
            <button onClick={() => toggleLoginPopup(true)} className="px-3 py-2 rounded-md border">
              Sign In
            </button>
            <button onClick={() => toggleLoginPopup(false)} className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-800 rounded-md">
              Create an account
            </button>
          </div>
          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="flex fixed right-0 z-20 flex-col justify-center items-center p-12 w-full bg-neutral-900 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button onClick={() => toggleLoginPopup(true)} className="px-3 py-2 rounded-md border">
                Sign In
              </button>
              <button onClick={() => toggleLoginPopup(false)} className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-800 rounded-md">
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
      {loginPopupVisible && <Login_popup closePopup={() => setLoginPopupVisible(false)} initialSignIn={signIn} />}
    </nav>
  );
};

export default Navbar;
