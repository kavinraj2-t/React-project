import React from "react";
import "./Footer.css";
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="footer-container">
      
      <div className="footer-left">
        <img
          src="/logo-cutmain.png" 
          alt="Company Logo"
          className="footer-logo"
        />
        <h2 className="footer-name">RATHINAVEL LOGISTICS</h2>

        <div className="footer-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p className="address">⚲ Address</p>
        <p>Sudharsanam Towers,2nd Floor,
        <br/>
        New No.6 & 8, Old No.176, Coral Merchant Street,
        <br/>
        Near Maadi Poonga, Mannady,Chennai 600001<br/>India</p>
        <p>✆ +91 9884554400</p>
        <p>✉ parthibansrinivasan@velslogistics.com</p>
      </div>
      <div className="footer-copyrights">
        <p>© 2026 RATHINAVEL Logistics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
