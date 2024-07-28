import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="container">
      <div className="left">
        <div className="shapes">
          <div />
          <div />
          <div />
          <div className="triangle" />
        </div>
        <h1 className="logo">Logo</h1>
        <h2 className="welcome">Welcome Back!</h2>
        <p className="description">
          To keep connected with us please login with your personal info
        </p>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "0.9rem",
            marginBottom: 15,
            display: "block",
            textAlign: "right",
          }}
          to="/login"
        >
          <button className="button">Sign In</button>
        </Link>
      </div>
      <div className="right">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form action="#" onSubmit={()=> navigate('/login')}>
            <select className="form-select" required>
              <option value disabled selected>
                Select your blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <input
              type="email"
              className="email"
              placeholder="Email"
              required
            />
            <div className="form-input-password">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-input"
                placeholder="Password"
                required
              />
              <i
                className={`bx ${
                  passwordVisible ? "bx-show-alt" : "bx-hide"
                } form-icon`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <button type="submit" className="form-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
