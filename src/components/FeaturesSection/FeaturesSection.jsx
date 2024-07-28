import React, { useEffect, useState } from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature-card feature-card1">
        <img src="./Heart.png" alt="Feature 1" />
      </div>
      <div className="feature-card feature-card2">
        <img src="./blood.jpg" alt="Feature 2" />
      </div>
      <div className="support-card">
        <div className="div1">
          <div>
          <span style={{opacity:'0'}}>1</span>
          </div>
        
        </div>
        <div className="div2">
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate meceenas ultrices
            tellus vitae urna facilisis. Nibh vitae commodo odio turpis.
            Interdum.
          </p>
        </div>
      </div>
      <div className="promote-card">
      <div className="div2">

        <h3>Promote</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pulvinar sed ornare nullam
          nulla proin. Nec sodales aenean augue praesent. Mollis.
        </p>
      </div>
      <div className="div1">
          <div>
          <span style={{opacity:'0'}}>1</span>
          </div>
        
        </div>
      </div>
      <div className=" feature-card5">
        <img src="./Rectangle.png" alt="Feature 4" />
      </div>
    </div>
  );
};

export default FeaturesSection;
