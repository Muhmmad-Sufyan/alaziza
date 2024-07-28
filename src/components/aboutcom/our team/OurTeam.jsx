import React from "react";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <section className="our-team">
      <div className="t-text">
        <h2>Our Team</h2>
        <p>
        Our team is made up of passionate individuals who believe in the power of community to create positive change. From our dedicated volunteers who help distribute food to those in need, to our staff who work tirelessly to coordinate donations and partnerships, every member of our team is committed to our mission.
        </p>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src="/team-mem-1.png" alt="Volunteer 1" />
        </div>
        <div className="team-member">
          <img src="/team-mem-2.png" alt="Staff 1" />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
