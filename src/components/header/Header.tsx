import React, { useState } from "react";
import "./headerStyle.css";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt, FaBars } from "react-icons/fa";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <div className="container flexSB">
        <nav className="flexSB">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <ul className={!mobile ? "flexSB menu_nav" : " nav_menu_mobile"}>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""}>Series</Link>
            </li>
            <li>
              <Link to={""}>Movies</Link>
            </li>
            <li>
              <Link to={""}>Pages</Link>
            </li>
            <li>
              <Link to={""}>Pricing</Link>
            </li>
            <li>
              <Link to={""}>Contact</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!mobile)}>
          
            <i>
              <FaBars />
            </i>
          </button>
        </nav>
        <div className="account flexSB">
          <i>
            <ImSearch />
          </i>
          <i>
            <IoIosNotifications />
          </i>
          <i>
            <FaUserAlt />
          </i>
          <button className="btn">Subiscribe Now</button>
        </div>
      </div>
    </header>
  );
};
