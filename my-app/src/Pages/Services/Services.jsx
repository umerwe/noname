import React from 'react';
import './services.css';
import { Link } from 'react-router';

const Services = () => {
  return (
    <div>
      <main>
        <h1>Services</h1>
        <div className="services-container">
          <div className="service reveal">
            <h2>EIN</h2>
            <p>$59</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>LLC</h2>
            <p>$259</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>C-Corp Formation</h2>
            <p>$259</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>ITIN</h2>
            <p>$249</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>Reseller Permit</h2>
            <p>$259</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>Sales Tax Compliance</h2>
            <p>$199</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
          <div className="service reveal">
            <h2>Website Building</h2>
            <p>$350</p>
            <a href="contact.html">
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </main>

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

export default Services;