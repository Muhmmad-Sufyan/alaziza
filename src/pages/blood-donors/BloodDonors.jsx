import React from "react";
import "./BloodDonors.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const BloodDonors = () => {
  return (
    <div>
      <Navbar />
      <div className="header23">
        <div className="subbtn">
          <button className="btn1">Blood Donors</button>
          <button className="btn2">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/blood-bank"
            >
              Blood Banks
            </Link>
          </button>
        </div>
      </div>
      <div className="container23">
        <div className="info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>

          <div>
            <button className="auto-call">
              Auto-Call <i className="bx bxs-phone-call"></i>
            </button>
            <p className="emergency-note">Use in case of emergency</p>
          </div>
        </div>

        <div className="contact-list1">
          <div className="sub253">
            <ul>
              <li>
                ABC <br />
                XXXXXXXXXX
              </li>
              <li>
                DEF <br /> XXXXXXXXXX
              </li>
              <li>
                GHI <br />
                XXXXXXXXXX
              </li>
              <li>
                LMN <br />
                XXXXXXXXXX
              </li>
              <li>
                XYZ <br />
                XXXXXXXXXX
              </li>
            </ul>
            <button className="refresh">
              Refresh <i className="bx bx-refresh"></i>
            </button>
          </div>
          <p className="note">
            <svg
              width="25"
              height="18"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1981)">
                <path
                  d="M12.3496 4.74779L2.18564 21.6866C1.97608 22.0489 1.8652 22.4597 1.86402 22.878C1.86285 23.2963 1.97143 23.7077 2.17895 24.0712C2.38647 24.4346 2.68571 24.7375 3.04689 24.9496C3.40806 25.1618 3.8186 25.2759 4.23764 25.2804H24.5656C24.9847 25.2759 25.3952 25.1618 25.7564 24.9496C26.1176 24.7375 26.4168 24.4346 26.6243 24.0712C26.8318 23.7077 26.9404 23.2963 26.9392 22.878C26.9381 22.4597 26.8272 22.0489 26.6176 21.6866L16.4536 4.74779C16.2397 4.39572 15.9385 4.10464 15.5791 3.90263C15.2196 3.70061 14.8141 3.59448 14.4016 3.59448C13.9892 3.59448 13.5836 3.70061 13.2242 3.90263C12.8648 4.10464 12.5636 4.39572 12.3496 4.74779V4.74779Z"
                  stroke="black"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.4008 10.9053V15.697"
                  stroke="black"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.4008 20.4885H14.4122"
                  stroke="black"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1981">
                  <rect
                    width="28.8"
                    height="28.7505"
                    fill="white"
                    transform="translate(0 0.123535)"
                  />
                </clipPath>
              </defs>
            </svg>
            Call Main Coordinator If The Above Contacts Are Not Available
          </p>

          <div className="main-coordinator">
            <p>NAME</p>
            <p>Place</p>
            <p>Contact Number: XXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonors;
