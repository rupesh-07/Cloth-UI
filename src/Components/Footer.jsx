import React from "react";
import "./Footer.css"; // Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Our mission is to provide the best experience in the industry. We
            believe in innovation, quality, and customer satisfaction.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>
              Email: <a href="/">info@company.com</a>
            </li>
            <li>
              Phone: <a href="/">+1 (234) 567-890</a>
            </li>
            <li>Address: 123 Company St, City.</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul className="footer-links">
            <li>
              <a href="/" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="/" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="/" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Sitemap Section */}
        <div className="footer-section sitemap">
          <h3>Sitemap</h3>
          <ul className="footer-links">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
