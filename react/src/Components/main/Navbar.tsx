import React from 'react';
import './css/navbar.css'; // We will create this CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* Replace with your logo */}
          <a href="/">SecureMaroc</a>
        </div>
        <ul className="navbar-links">
          <li><a href="hero">Home</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/profile">Profile</a></li>


          {/* Add more links as needed */}
        </ul>
        {/* Add search or user icons here */}
      </div>
    </nav>
  );
};

export default Navbar;