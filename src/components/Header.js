import React, { useState } from "react";
import "./stylepage/Header.css";
import img1 from"./images/logo-image1.png";
import img from"./images/menu-image.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state on click
  };

  return (
    <header className="header">
      <div className="header-layout">
        <a href="#default" className="logo">
          <img src={img1} alt="Carbon Foot Print" title="Carbon Foot Print" />
        </a>

        {/* Navigation links */}
        <div className={`header-right ${menuOpen ? "show" : ""}`} id="myTopnav">
          <a className="active" href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#about">API</a>
          <a href="#get A Badge">Get a Badge</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Menu toggle button */}
        <button className="icon" onClick={toggleMenu} aria-label="Toggle menu">
          <img id="menuIcon" src={img} alt="Menu" title="Menu" style={{ display: menuOpen ? "none" : "block" }} />
          <img className="close-icon" id="closeIcon" src="img/close.png" alt="Close" title="Close" style={{ display: menuOpen ? "block" : "none" }} />
        </button>

        {/* Contact Us button */}
        <div className="contact-us">
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
