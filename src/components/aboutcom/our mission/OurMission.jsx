import React from "react";
import "./OurMission.css";
const OurMission = () => {
  return (
    <div className="top-1">
      <div>
        <svg className="block"
          style={{ marginBottom: "-52px", padding: "0px" }}
          width="800"
          height="738"
          viewBox="0 0 918 738"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M857.25 0H0V738H257.4C240.48 705.6 315.45 707.7 355.05 712.8C487.17 735.12 554.1 669.3 571.05 633.6L619.65 516.6C632.97 494.64 645.9 431.55 650.7 402.75C660.06 378.63 792.3 308.4 857.25 276.3C967.05 233.82 903 167.1 857.25 139.05C751.41 62.37 813.15 14.4 857.25 0Z"
            fill="#191516"
          />
        </svg>
        <div className="miss-img">
          <img className="img-1" src="/miss1.jpeg" alt="" />
          <div className="miss-img1">
            <img src="/miss2.jpeg" alt="" />
            <img src="/miss3.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="miss-text">
        <div>
          <h2>Our Mission</h2>
          <p>
            We work to connect individuals and businesses with surplus food to
            those in need, providing a sustainable solution to food insecurity.
          </p>
        </div>
        <p className="p">
          We work to connect individuals and businesses with surplus food to
          those in need, providing a sustainable solution to food insecurity
        </p>
      </div>
    </div>
  );
};

export default OurMission;
