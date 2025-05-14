import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="containerhero">
        <img
          src="https://storage.googleapis.com/a1aa/image/1d833dac-2b23-47c5-968a-2dba3a7050ee.jpg"
          alt="View looking up at tall skyscrapers with blue tinted overlay"
          className="background-image"
          width="1920"
          height="1080"
        />
        <div className="content">
          <h1>
            Your LLC, Registered with <span className="confidence">CONFIDENCE</span>
          </h1>
          <p>
            Blinks Consultant helps you launch your business with expert-guided LLC registration and full legal compliance.
          </p>
          <Link to="/contact">
            <div className='content-btn'>
              <button type="button">Register My LLC</button>
            </div>
          </Link>
        </div>
      </div>

      <div className="containerquality">
        <div className="card1">
          <i className="fas fa-user-tie"></i>
          <p>Experience: 5 years</p>
        </div>
        <div className="card1">
          <i className="fas fa-building"></i>
          <p>Companies registered: 1500+</p>
        </div>
        <div className="card1">
          <i className="fas fa-globe-americas"></i>
          <p>Countries served: 150</p>
        </div>
        <div className="card1">
          <i className="fas fa-users"></i>
          <p>Clients: 1200+</p>
        </div>
      </div>

      <div className="containerabout">
        <section className="left-section">
          <div>
            <h2>Blinks Consultant</h2>
            <p>
              Welcome to Blinks Consultant — your trusted partner for quick and reliable company formation. We help businesses get started and grow in the US with fast registration, expert tax support, and smart marketing strategies. Let’s bring your business vision to life today!
            </p>
          </div>
          <Link to="/about">
            <button className="explore-btn" type="button">Explore More</button>
          </Link>
        </section>

        <section className="right-section">
          <h2>Our Special Services</h2>
          <p>
            For over ten years, we’ve been providing personalized services that help businesses succeed. From US company formation and sales tax management to effective marketing solutions — including powerful Facebook ads and influencer campaigns — we’ve got you covered.
          </p>
          <Link to="/services" className="view-link">View All Service →</Link>
        </section>
      </div>

      <div className="containerservice">
        <div className="card">
          <h2 className="title">Wyoming</h2>
          <p className="price">$800+ state fee</p>
          <ul className="features">
            <li>Unique Virtual Address</li>
            <li>Article of Organization</li>
            <li>Certificate of Incorporation</li>
            <li>EIN (Employer Identification Number)</li>
            <li>Tax Permit/Reseller</li>
            <li>Certificate</li>
            <li>TransferWise Bank</li>
            <li>Account</li>
            <li>Phone Number</li>
            <li>Professional Website and Webmail</li>
            <li>Amazon Business Account</li>
          </ul>
          <Link to="/contact">
            <button className="btn">Contact us</button>
          </Link>
        </div>

        <div className="card hot">
          <h2 className="title">Montana (State) LLC registration</h2>
          <p className="price">$169+ state fee</p>
          <ul className="features">
            <li>Business Address for 1 year Included</li>
            <li>Mailing Forwarding Service Included</li>
            <li>Registered agent fee Included</li>
            <li>LLC formation with State fee Included</li>
            <li>Articles of Organisation</li>
            <li>Employer Identification Number (EIN)</li>
            <li>USA number</li>
            <li>Business Bank Account</li>
            <li>BOI Report</li>
            <li>Unlimited Name Searches</li>
            <li>Lifetime Customer Support</li>
          </ul>
          <Link to="/contact">
            <button className="btn">Contact us</button>
          </Link>
        </div>

        <div className="card">
          <h2 className="title">Taxes</h2>
          <p className="price">$1000+ state fee</p>
          <ul className="features">
            <li>Unique Virtual Address</li>
            <li>Article of Organization</li>
            <li>Certificate of Incorporation</li>
            <li>EIN (Employer Identification Number)</li>
            <li>Tax Permit/Reseller</li>
            <li>Certificate</li>
            <li>TransferWise Bank</li>
            <li>Account</li>
            <li>Phone Number</li>
            <li>Professional Website and Webmail</li>
            <li>Amazon Business Account</li>
          </ul>
          <Link to="/contact">
            <button className="btn">Contact us</button>
          </Link>
        </div>
      </div>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Blinks Consultant made the entire LLC registration process incredibly smooth and fast. Their team is knowledgeable, responsive, and truly committed to helping entrepreneurs succeed in the U.S. Highly recommended!”
            </p>
            <p className="client-name">– Sarah Khan, Startup Owner</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “I was amazed by how quickly they handled my tax setup and provided a full marketing plan tailored to my business. Their expertise in U.S. regulations and branding is next level.”
            </p>
            <p className="client-name">– Ahmed Raza, E-commerce Seller</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “From business formation to ongoing support, Blinks Consultant has been my trusted partner every step of the way. Their guidance is clear, and their service is always on point. I wouldn't work with anyone else.”
            </p>
            <p className="client-name">– Maria Sheikh, Freelancer</p>
          </div>
        </div>
      </section>

      <div className="containerstep">
        <section className="image-wrapper">
          <img
            alt="Illustration of a man standing in front of a circular arrow diagram with gears and plants around on dark blue background"
            height="280"
            src="https://storage.googleapis.com/a1aa/image/cdd80b22-d59a-4d85-713a-2f15a4f4ba36.jpg"
            width="280"
          />
          <div className="revenue-box">
            <p>Total Revenue</p>
            <p>2.340K</p>
          </div>
        </section>
        <section className="content">
          <p className="highlight-text">TIME TO GET GOING!</p>
          <h1>Set Up Your Company in Three Easy Steps</h1>
          <p className="intro-text">
            Kickstart your business with our simple three-step process — quick, easy, and practical, taking just a few minutes!
          </p>
          <article className="step">
            <div className="icon-circle">
              <i aria-hidden="true" className="fas fa-briefcase"></i>
            </div>
            <div className="step-content">
              <h2>Open the "Blinks Consultant" contact page.</h2>
              <p>First, you need to open the Blinks Consultant contact page.</p>
            </div>
          </article>
          <article className="step">
            <div className="icon-circle">
              <i aria-hidden="true" className="fas fa-info-circle"></i>
            </div>
            <div className="step-content">
              <h2>Enter the details.</h2>
              <p>
                Then you need to enter your name and email, which are required, and send them via Gmail. There are also two optional fields — subject and message. In the message, you can ask about the service you need.
              </p>
            </div>
          </article>
          <article className="step">
            <div className="icon-circle">
              <i aria-hidden="true" className="fas fa-check"></i>
            </div>
            <div className="step-content">
              <h2>Click Send</h2>
              <p>
                When you tap the send button, your Gmail or mail app will open, and the data will already be filled in. You just need to press the send button again.
              </p>
            </div>
          </article>
        </section>
      </div>

      <div className="form-container">
        <h2 className='text'>Contact Us on WhatsApp</h2>
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
          <button type="button" className="btn" onClick={handleSubmit}>Send Message</button>
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
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
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

export default Home;