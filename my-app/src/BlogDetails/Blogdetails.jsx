import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Config/firebase";
import { doc, getDoc } from "firebase/firestore";
import './blogdetails.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Blog not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog: " + err.message);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-message">Loading...</p>
    </div>
  );
  if (error) return <p className="error-message">{error}</p>;
  if (!blog) return null;

  return (
    <div>
      <main>
        <section className="blog-detail-section">
          <h1>Blogs</h1>
          <div className="blog-detail-container">
            <h2>{blog.title}</h2>
            <img src={blog.imageUrl || "https://via.placeholder.com/600x400"} alt={blog.title} className="detail-image" />
            <p>{blog.description}</p>
          </div>
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
            <p>Email:</p>
            <p>Phone:</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Blinks Consultant. All rights reserved. <br />
            <a href="http://www.kaleemify.com/">Build by Kaleemify Company</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;