import React from "react";
import "./ContactUs.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container24">
        <div
          className="hero-image2"
          style={{ backgroundImage: "url('/contmain.png')" }}
        >
          <div className="hero-img-sub3">
            <h1 style={{ opacity: "0" }}>1</h1>
          </div>
          {/* <img src="/about-hero.jpeg" alt="About Us" className="" /> */}
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <div className="left-section">
            <h2>Contact Us</h2>
            <p>
              We're here to help! If you have any questions about the product
              options, features, or are not sure which plan is right for you,
              schedule a discovery call below!
            </p>
            <div className="calendar">
              <h3>March 2021</h3>
              <p>Time zone</p>
              <select>
                <option>GMT-8:00 America</option>
              </select>
              <div className="date-grid">
                {/* Render dates dynamically if needed */}
                {[...Array(31).keys()].map((i) => (
                  <div key={i} className="date">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right-section">
            <form>
              <div className="form-group">
                <div>
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div>
                  <label htmlFor=""> Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Enter Your Email" />
                </div>
                <div>
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" placeholder="Enter Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="">Subject</label>
                  <input  type="text" placeholder="Enter Your Subject" />
                </div>
              </div>
              <label htmlFor="">Message</label>
              <textarea placeholder="Enter Your Message here..."></textarea>
              <button className="contact-button" type="submit">Send Your Message</button>
            </form>
          </div>
        </div>
        <div className="stats1">
          <div className="stat-item">
            <h3>3250+</h3>
            <p>Appointments Booked</p>
          </div>
          <div className="stat-item">
            <h3>1,100+</h3>
            <p>Closed Deals</p>
          </div>
          <div className="stat-item">
            <h3>$7.1m+</h3>
            <p>Lorem ipsum dollar smitea</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
