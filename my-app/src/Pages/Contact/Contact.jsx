import React from 'react';
import './contact.css';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div>
      <section className="contact-info">
        <div className="contact-info-container">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Us</h4>
              <p></p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              <h4>Call/WhatsApp</h4>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <div className="form-container">
        <h2>Contact Us on WhatsApp</h2>
        <div id="whatsappForm">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required />
            <div id="nameError" className="error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
            <div id="emailError" className="error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="button" className="btn">Send Message</button>
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

export default Contact;