import React from 'react';
import './about.css';
import { Link } from 'react-router';

const About = () => {
  return (
    <div>

      <div className="container">
        <div className="about-section">
          <div className="about-text">
            <h1>About Blinks Consultant</h1>
            <p>
              Blinks Consultant is your reliable partner for smooth, fast, and professional US company formation. Our mission is to make business registration and growth accessible to entrepreneurs and startups globally. Whether you need an LLC, C-Corp, EIN, ITIN, or Sales Tax compliance, we've got you covered with expert knowledge and support.
            </p>
            <p style={{ marginTop: '15px' }}>
              With over a decade of experience, our team ensures that your company is built on a strong foundation. We don’t just stop at registration – we help you launch with powerful marketing strategies, including website building, branding, and digital outreach.
            </p>
          </div>

          <div className="assets/image.png">
            <img src="assets/office.png" alt="Blinks Consultant Office" />
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Blinks Consultant</h3>
            <p>Your trusted partner for LLC registration, tax guidance, and smart marketing in the USA.</p>
          </div>

           <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: </p>
            <p>Phone: </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Blinks Consultant. All rights reserved. <br />
            <a href="http://www.kaleemify.com/" style={{ color: 'white' }}>Build by Kaleemify Company</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;