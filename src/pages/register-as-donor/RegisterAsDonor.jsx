import React from "react";
import "./RegisterAsDonor.css";
import Navbar from "../../components/navbar/Navbar";
const RegisterAsDonor = () => {
  return (
    <div>
      <Navbar />
      <h2 className="top23">Register As Donor</h2>
      <form action="" className="form-contant">
        <div className="input-1">
          <div className="input">
            <label htmlFor="firstnmae">Full Name</label>
            <input type="text" id="firstname" placeholder="First Name" />
          </div>
          <div className="input">
            <label htmlFor="lastnmae" style={{ opacity: "0" }}>
              First Name
            </label>

            <input id="lastname" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="input-p">
          <label htmlFor="pho">Phone Number</label>
          <input id="pho" type="tel" placeholder="Enter Phone Number" />
        </div>
        <div className="input-p">
          <label htmlFor="pho" style={{ paddingRight: "6.5%" }}>
            Email
          </label>
          <input id="pho" type="tel" placeholder="Enter Phone Number" />
        </div>

        <div className="input-2">
          <div className="input-a">
            <label htmlFor="add" style={{ paddingRight: "12%" }}>
              Address
            </label>
            <textarea cols='50' rows='20' name="add" id="" placeholder="Type Here"></textarea>
          </div>
          <div className="input-b">
            <div className="input-ba">
              <label htmlFor="age">Age</label>
              <input id="age" type="number" />
            </div>
            <div className="input-ba">
              <label htmlFor="bg">Blood Group</label>
              <input id="bg" type="text" />
            </div>
          </div>
        </div>
        <div className="input-1">
          <div className="input">
            <label htmlFor="dis" style={{ paddingRight: "5%" }}>
              District
            </label>
            <select name="" id="">
              <option value="">Select...</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="lastnmae" style={{ paddingRight: "7%" }}>
              State
            </label>
            <select name="" id="">
              <option value="">Select...</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="input-1">
          <div className="input">
            <label htmlFor="pin" style={{ paddingRight: "1.5%" }}>
              PinCode
            </label>
            <input type="text" id="pin" placeholder="First Name" />
          </div>
        </div>
        <div className="input-1">
          <div className="input">
            <label htmlFor="dis" >
            Last Donation
            </label>
            <input type="text" placeholder="Month" />
          </div>
          <div className="input">
            <label htmlFor="lastnmae" style={{ paddingRight: "6%" }}>
              Year
            </label>
            <select name="" id="">
              <option value="">Year</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>

        <div className="term">
          
          <input type="checkbox" />
         <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </label>
        </div>
        
          <button type="submit" className="submit-button3">
            Submit <i className='bx bx-check'></i>
          </button>
        
      </form>
    </div>
  );
};

export default RegisterAsDonor;
