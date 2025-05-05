import React from 'react';
import './css/hero.css'; // Link to the CSS file
// import heroImage from '../../assets/hero-bg.jpg'; // Import your actual hero image

// Replace with a placeholder or your actual image path
const heroImage = 'https://via.placeholder.com/1920x600?text=Hero+Image';


const Hero: React.FC = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"> {/* Overlay for darkening the image */}
        <div className="hero-content"> {/* Content container */}
          {/* Content based on the design image */}
          <div className="hero-tag">Featured Article</div>
          <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
          {/* Add more content like a summary or button if needed */}
        </div>
      </div>
    </div>
  );
};

export default Hero;