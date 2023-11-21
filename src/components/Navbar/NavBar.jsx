import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./NavBar.css";
import ThaparShar from "../../assets/ThaparShar.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='headerNav'>
      <div className='container'>
        <img src={ThaparShar} width={400} height={90} alt='logo' />

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to='upload' smooth='true' duration={500}>
              Upload
            </Link>
          </li>
          <li>
            <Link to='about' smooth='true' duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='videodemonstration' smooth='true' duration={1000}>
              Video Demonstration
            </Link>
          </li>
          <li>
            <Link to='faq' smooth='true' duration={500}>
              Faq
            </Link>
          </li>
          <li>
            <Link to='newsletter' smooth='true' duration={500}>
              Newsletter
            </Link>
          </li>
          <li>
            <a href='#'>Github</a>
          </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
