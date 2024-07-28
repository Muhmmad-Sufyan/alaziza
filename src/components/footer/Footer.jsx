import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerTop}>
        <form className={styles.formLabel}>
          <label className={styles.lab} htmlFor="newsletter">
            <img src="/t.png" alt="" />
            Sign up to receive our monthly newsletter!
          </label>
          <div className={styles.formInput}>
            <input
              type="email"
              id="newsletter"
              name="newsletter"
              placeholder="Your email address"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.signUpButton}>
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 style={{fontSize:'42px'}}>Alaziz Donors</h3>
          <p style={{marginTop:'14px'}}>&copy; 2024 Example Company. All rights reserved.</p>
          <p style={{marginTop:'90px'}}>Privacy policy . Terms of use</p>
        </div>
        <div className={styles.footerSection}>
          <h5>Contact Us</h5>
          <div>
            <h6>Email:</h6>
            <p>staff.pclighthouse@yahoo.com</p>
          </div>
          <div>

          <h6>Phone:</h6>
          <p>972-748-1415</p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Board members</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4 >Follow Us</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#">
                <img src="./facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./email.png" alt="Email" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
