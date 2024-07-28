import React from "react";
import "./DonorProfile.css";
import Navbar from "../../components/navbar/Navbar";
const DonorProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="main253">
          <div className="profile-header">
            <div className="profile-div">
              <img src="/pr1.png" alt="Profile" className="profile-pic" />
              <h1>Dinoy Raj K</h1>
            </div>
            <div className="profile-info">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0991 11.5004C23.0991 9.35214 22.3089 7.29187 20.9024 5.77283C19.4959 4.25378 17.5882 3.40039 15.5991 3.40039C13.61 3.40039 11.7023 4.25378 10.2958 5.77283C8.8893 7.29187 8.09912 9.35214 8.09912 11.5004C8.09912 20.9504 4.34912 23.6504 4.34912 23.6504H26.8491C26.8491 23.6504 23.0991 20.9504 23.0991 11.5004Z"
                  stroke="black"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.762 29.0498C17.5422 29.459 17.2268 29.7986 16.8473 30.0347C16.4678 30.2708 16.0375 30.395 15.5995 30.395C15.1615 30.395 14.7312 30.2708 14.3517 30.0347C13.9722 29.7986 13.6568 29.459 13.437 29.0498"
                  stroke="black"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <button className="edit-profile-btn">
                <i className="bx bx-edit"></i> Edit Profile
              </button>
            </div>
          </div>
          <div className="donation-history">
            <div className="donation-history-sub">
              <h2>Donation History</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Blood Units</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>13 Dec 2020</td>
                    <td>1.2</td>
                  </tr>
                  <tr>
                    <td>28 Nov 2020</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>04 Nov 2020</td>
                    <td>1.3</td>
                  </tr>
                  <tr>
                    <td>15 Oct 2020</td>
                    <td>1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="donation-history-sub">
              <h2>December 2020</h2>
              <table className="calendar-table">
      <thead>
        <tr>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
          <th>Su</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
        </tr>
        <tr>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
        </tr>
        <tr>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
        </tr>
        <tr>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
            </div>
          </div>
        </div>
        <div className="profile-content">
          <div className="about-section">
            <h2>About</h2>
            <ul>
              <li>
                <span>Full Name:</span> Dinoy Raj K
              </li>
              <li>
                <span>Email:</span> dinoyraj@gmail.com
              </li>
              <li>
                <span>District:</span> Kozhikode
              </li>
              <li>
                <span>Phone Number:</span> 7386185930
              </li>
              <li>
                <span>Pincode:</span> 673014
              </li>
              <li>
                <span>Age:</span> 21
              </li>
              <li>
                <span>Blood Group:</span> A+
              </li>
              <li>
                <span>Address:</span> Kuniyil Peeyangayethan House...
              </li>
              <li>
                <span>Last Donation Date:</span> 11-10-2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;
