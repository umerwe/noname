import React, { useState, useEffect } from "react";
import { db } from "../../Config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import './blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Create a query to order by 'createdAt' in ascending order
        const blogsQuery = query(collection(db, "blogs"), orderBy("createdAt", "asc"));
        const querySnapshot = await getDocs(blogsQuery);
        const blogList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs: " + err.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-message">Loading...</p>
    </div>
  );
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div>
      <main>
        <section className="blogs-section">
          <h1>Blinks Consultant Services - Latest News & Updates</h1>
          <p>Get updates about tax filing and LLC guidance through our up-to-date blog articles</p>
          {blogs.length === 0 ? (
            <div className="no-blogs">
              <h2>No Blogs Available</h2>
              <p>We're currently working on new content. Please check back later or <a href="/contact.html">contact us</a> for the latest updates!</p>
            </div>
          ) : (
            <div className="blog-cards">
              {blogs.map((blog) => (
                <Link key={blog.id} to={`/blogs/${blog.id}`} className="post">
                  <img src={blog.imageUrl || "https://via.placeholder.com/300x200"} alt={blog.title} />
                  <div className="post-content">
                    <h3>{blog.title.slice(0, 45)}<span>...</span></h3>
                    <p>{blog.description.slice(0, 70)}<span>...</span></p>
                    <small>Read more...</small>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
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
            <p>Email: info@blinksconsultant.com</p>
            <p>Phone: +1-123-456-7890</p>
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

export default Blogs;