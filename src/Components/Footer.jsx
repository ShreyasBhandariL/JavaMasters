import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 TheJavaMasters. All Rights Reserved.</p>
        </div>
        <div className="footer-center">
          <p>Follow us on our social media channels for updates.</p>
        </div>
        <div className="footer-right"><a href="mailto:prathikshajain0007@gmail.com" className="footer-link">
            Contact Us
          </a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
