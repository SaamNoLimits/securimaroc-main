import React from 'react';
import './css/footer.css'; // Link to the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container"> {/* Use a container for centering and max-width */}
        <div className="footer-columns"> {/* Grid for footer columns */}
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
           <div className="footer-column">
            <h4>Category</h4>
            <ul>
              <li><a href="#">Technology</a></li>
              <li><a href="#">AI & DATASCIENCE</a></li>
              <li><a href="#">Cloud Security</a></li>
              <li><a href="#">Cybersecurity & AI </a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Business</a></li>
              {/* Add more categories */}
            </ul>
          </div>
          <div className="footer-column newsletter-column">
            <h4>Weekly Newsletter</h4>
            <p>Get blog articles and news delivered directly to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          {/* Add more columns if needed based on your design */}
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YourBlog. All rights reserved.</p>
          {/* Add social media links or other bottom info */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;