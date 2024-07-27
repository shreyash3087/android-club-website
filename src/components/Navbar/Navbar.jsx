import { Menu, X } from "lucide-react";
import logo2 from "/src/assets/logo2.png";
import { navItems } from "/src/constants";
import React, { useState, useContext } from "react";
import Login_popup from "../LoginPopUp/Login_popup";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import profile_icon from "/src/assets/profile_icon.png";

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

  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const homeButton=()=>{
    navigate("/")
  };
  
  return (
    <nav className="fixed top-0 z-50 w-full py-3 px-12 border-b backdrop-blur-lg border-neutral-700/80 bg-[#254336]">
      <div className="relative mx-auto lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={homeButton}>
            <img className="mr-2 h-10 w-30" src={logo2} alt="Logo" />
            <span className="text-xl tracking-tight hover:text-[#3ab680]">
              ANDROID CLUB
            </span>
          </div>
          <ul className="hidden ml-14 space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <span className="px-2 py-1 h-6 text-lg max-xl:px-0 font-medium text-white uppercase rounded-xl hover:bg-gray-100 hover:text-[#254336]">
                  <a href={item.href}>{item.label}</a>
                </span>
              </li>
            ))}
          </ul>

          {!token ? (
            <div className="hidden justify-center items-center space-x-12 max-xl:space-x-4 lg:flex">
              <button
                onClick={() => toggleLoginPopup(true)}
                className="px-3 py-2 rounded-md border"
              >
                Sign In
              </button>
              <button
                onClick={() => toggleLoginPopup(false)}
                className="px-3 py-2 bg-gradient-to-r from-[#47856a] to-[#02562f] rounded-md"
              >
                Create an account
              </button>
            </div>
          ) : (
            <div className="navbar-profile">
              <img src={profile_icon} onClick={logout} alt="" />
            </div>
          )}

          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="flex fixed right-0 z-20 flex-col justify-center items-center p-12 w-full bg-[#13221c] lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={() => toggleLoginPopup(true)}
                className="px-3 py-2 rounded-md border"
              >
                Sign In
              </button>
              <button
                onClick={() => toggleLoginPopup(false)}
                className="px-3 py-2 bg-gradient-to-r from-[#47856a] to-[#02562f] rounded-md"
              >
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
      {loginPopupVisible && (
        <Login_popup
          closePopup={() => setLoginPopupVisible(false)}
          initialSignIn={signIn}
        />
      )}
    </nav>
  );
};

export default Navbar;
