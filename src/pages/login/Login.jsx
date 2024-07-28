import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>

    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles["form-container"]}>
          <h2>Sign in</h2>
          <form action="#" onSubmit={() => navigate('/')}>
            <input
              type="email"
              className={styles.email}
              placeholder="Email"
              required
              size="50"
            />
            <div className={styles["form-input-password"]}>
              <input
                type={passwordVisible ? "text" : "password"}
                className={styles["form-input"]}
                placeholder="Password"
                required
              />
              <i
                className={`bx ${
                  passwordVisible ? "bx-show-alt" : "bx-hide"
                } ${styles["form-icon"]}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <Link
              to="/forget-password"
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                marginBottom: 15,
                display: "block",
                textAlign: "right",
              }}
            >
              Forget Password?
            </Link>
            <button  type="submit" className={styles["form-button"]}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.shapes}>
          <div />
          <div />
          <div />
          <div className={styles.triangle} />
        </div>
        <h1 className={styles.logo}>Logo</h1>
        <h2 className={styles.welcome}>Hello Friend!</h2>
        <p className={styles.description}>
          Enter your personal details and start your journey with us
        </p>
        <Link style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                marginBottom: 15,
                display: "block",
                textAlign: "right",
              }} to="/sign-up">
          <button className={styles.button} >Sign Up</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
