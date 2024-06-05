import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link
            onClick={() => setMenu("home")}
            to="/"
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenu("events")}
            to="/events"
            className={menu === "events" ? "active" : ""}
          >
            events
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenu("team")}
            to="/team"
            className={menu === "team" ? "active" : ""}
          >
            team
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenu("contact-us")}
            to="/contact-us"
            className={menu === "contact-us" ? "active" : ""}
          >
            conatct-us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
