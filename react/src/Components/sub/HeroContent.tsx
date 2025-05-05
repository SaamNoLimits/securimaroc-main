import React from 'react';
import './css/herocontent.css'; // Link to the CSS file

const HeroContent: React.FC = () => {
  return (
    <div className="hero-content-sub"> {/* Use a class for styling */}
      {/* Content based on the design image */}
      <div className="hero-tag">Featured Article</div> {/* Example Tag */}
      <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1> {/* Example Title */}
      {/* Add a brief description or other elements if they are part of this content block */}
      {/* <p>A brief look at the transformative effects of digital tools on modern offices.</p> */}
      {/* Add buttons if they are part of the hero overlay content */}
      {/* <button className="btn-primary">Read Article</button> */}
    </div>
  );
};

export default HeroContent;