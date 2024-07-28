import React, { useState } from "react";
import styles from "./reset-password.module.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
  const navigate = useNavigate('');

  const togglePasswordVisibility = (passwordType) => {
    if (passwordType === "password1") {
      setPassword1Visible(!password1Visible);
    } else {
      setPassword2Visible(!password2Visible);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setPasswordsMatch(false);
      return;
    }
    // Reset any error state if passwords match
    setPasswordsMatch(true);
    // Proceed with your submit logic, e.g., navigate to login
    navigate('/login');
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0",
        backgroundColor: "#f0f8ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className={styles.container}>
        <h1>Reset Password</h1>
        <p>
          Set the new password for your account so you can login and access all
          the features.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-input-password"]}>
            <input
              type={password1Visible ? "text" : "password"}
              className={styles["form-input"]}
              placeholder="Enter New Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
            <i
              className={`${styles["form-icon1"]} bx ${
                password1Visible ? "bx-show-alt" : "bx-hide"
              }`}
              onClick={() => togglePasswordVisibility("password1")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles["form-input-password"]}>
            <input
              type={password2Visible ? "text" : "password"}
              className={styles["form-input"]}
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <i
              className={`${styles["form-icon2"]} bx ${
                password2Visible ? "bx-show-alt" : "bx-hide"
              }`}
              onClick={() => togglePasswordVisibility("password2")}
              style={{ cursor: "pointer" }}
            />
          </div>
          {!passwordsMatch && (
            <p style={{ color: "red" }}>Passwords do not match. Please try again.</p>
          )}
          <button type="submit" className={styles["form-button"]}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
