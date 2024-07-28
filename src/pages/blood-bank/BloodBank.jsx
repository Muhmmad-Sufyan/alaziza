import React from "react";
import "./BloodBank.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const BloodBank = () => {
  return (
    <div>
      <Navbar />
      <div className="header235">
        <div className="subbtn">
          <button className="btn2">
            {" "}
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/blood-donors"
            >
              Blood Donors
            </Link>
          </button>
          <button className="btn1">Blood Banks</button>
        </div>
      </div>
      <div className="container245">
        <div className="info1">
          <div>
            <h1>NAME OF THE BLOOD BANK</h1>
            <p>
              ABC Hospital Building, XYZ Road, Place, District <br />
              Pincode <br />
              <br />
              Contact Number : XXXXXXXXXX
            </p>
          </div>

          <div>
            <button className="auto-call1">View Location</button>
          </div>
        </div>
        <div className="info1">
          <div>
            <h1>NAME OF THE BLOOD BANK</h1>
            <p>
              ABC Hospital Building, XYZ Road, Place, District <br />
              Pincode <br />
              <br />
              Contact Number : XXXXXXXXXX
            </p>
          </div>

          <div>
            <button className="auto-call1">View Location</button>
          </div>
        </div>
        <div className="info1">
          <div>
            <h1>NAME OF THE BLOOD BANK</h1>
            <p>
              ABC Hospital Building, XYZ Road, Place, District <br />
              Pincode <br />
              <br />
              Contact Number : XXXXXXXXXX
            </p>
          </div>

          <div>
            <button className="auto-call1">View Location</button>
          </div>
        </div>
        <div className="info1">
          <div>
            <h1>NAME OF THE BLOOD BANK</h1>
            <p>
              ABC Hospital Building, XYZ Road, Place, District <br />
              Pincode <br />
              <br />
              Contact Number : XXXXXXXXXX
            </p>
          </div>

          <div>
            <button className="auto-call1">View Location</button>
          </div>
        </div>
        <div className="info1">
          <div>
            <h1>NAME OF THE BLOOD BANK</h1>
            <p>
              ABC Hospital Building, XYZ Road, Place, District <br />
              Pincode <br />
              <br />
              Contact Number : XXXXXXXXXX
            </p>
          </div>

          <div>
            <button className="auto-call1">View Location</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
