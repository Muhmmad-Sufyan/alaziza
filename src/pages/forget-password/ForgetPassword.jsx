import React from "react";
import styles from "./forget-password.module.css";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate('');
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "#f0f8ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className={styles.container}>
        <h1>Verification</h1>
        <p>
          Enter your email, phone, and we'll send you a link to get back into
          your account.
        </p>
        <form onSubmit={() => navigate('/reset-password')}>
          <input type="email" placeholder="Email/Phone" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
