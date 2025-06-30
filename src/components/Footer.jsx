import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="drift-footer">
      <div className="footer-container">

       
        <div className="footer-left">
          
          <p><i className="bi bi-telephone"></i> +91 6381475573</p>
          <p><i className="bi bi-clock"></i> Monday - Saturday</p>
          <p><i className="bi bi-envelope"></i> <a href="mailto:driftmarktechnology@gmail.com">driftmarktechnology@gmail.com</a></p>
          <p><i className="bi bi-globe"></i> www.driftmarktech.com</p>
        </div>

      
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => handleLinkClick("/")}>Home</li>
            <li onClick={() => handleLinkClick("/about")}>About</li>
            <li onClick={() => handleLinkClick("/services")}>Services</li>
            <li onClick={() => handleLinkClick("/contact")}>Contact</li>
            <li onClick={() => handleLinkClick("/client-enquiry")}>Client Enquiry</li>
          </ul>
        </div>

      
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/company/driftmark-technology/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/driftmarktechnology/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1ETaAQHKDg/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://x.com/DriftmarkTech" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2023 - 2025 Driftmark Technology Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
