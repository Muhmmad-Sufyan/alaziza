import React from "react";
import styles from "./GetinTech.module.css";

const GetinTech = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.container}>
        <h5>#Contact</h5>
        <h2>Get in touch</h2>
        <p className="get-p">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has.
        </p>
        <form>
          <div className={styles.formGroup}>
            <input type="text" name="fullname" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <input className="get-s" style={{width:'97%'}} type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="10"></textarea>
          <button className={styles.btn}  type="submit">Get Started</button>
        </form>
      </div>
    </section>
  );
};

export default GetinTech;
