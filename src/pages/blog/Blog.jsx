import React from "react";
import "./Blog.css";
import Navbar from "../../components/navbar/Navbar";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import GetinTech from "../../components/getintech/GetinTech";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container24">
        <div
          className="hero-image"
          style={{ backgroundImage: "url('/about-hero.jpeg')" }}
        >
          <div className="hero-img-sub">
            <h1 style={{ opacity: "0" }}>1</h1>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-main">
          {[1, 2].map((item, index) => (
            <div key={index} className="blog-card">
              <div className="blog-img">
                <img src="/recpient.jpeg" alt="Blog Post" />
                <span>26 Jan</span>
              </div>
              <h3>Lasts blog post with image</h3>
              <p>
                Posted by admin
                <i className="bx bx-heart"></i>
                12
                <i className="bx bx-show"></i>
                403
              </p>
              <p className="txt-1">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of intoooo classical Latin literature from BC, making it over
                into 2000 years old.into Richard McClintock a Latin professor at
                Sydney College in Virginia latin Sydney College in Virginia
                "Lorem ipsum dolor sit amet.
              </p>
              <p className="txt-1">
                Lorem Ipsum is not simply random text. It has roots in a piece
                ofclassical classical Latin literature from BC, making it over
                into 2000 years old. Lorem ipsum dolor sitt.
              </p>
              <p style={{ color: "#EB638B" }}>Read More</p>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <div className="blog-input">
            <input type="text" placeholder="Search..." />
            <span>
              <i className="bx bx-search"></i>
            </span>
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              <li>Blog Post</li>
              <li>Our Post</li>
            </ul>
          </div>
          <div className="latest-posts">
            <h4>Latest Post</h4>
            <div className="latest-post">
              <img src="/blog 1.jpeg" alt="Post" />
              <p>
                Latest blog post with image <br />
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0951 1.56739C10.8969 1.5658 11.681 1.8212 12.3485 2.3013C13.0159 2.7814 13.5367 3.46464 13.8449 4.26461C14.153 5.06458 14.2348 5.94536 14.0799 6.79556C13.9249 7.64577 13.5401 8.42721 12.9743 9.04108C12.4084 9.65494 11.6868 10.0737 10.9007 10.2443C10.1147 10.4149 9.29946 10.3298 8.55817 9.99962C7.81689 9.66948 7.18283 9.10918 6.73617 8.38956C6.28951 7.66994 6.05032 6.82333 6.04885 5.95679V5.94872C6.04885 4.78812 6.47491 3.67493 7.23352 2.8535C7.99213 2.03207 9.02129 1.56953 10.0951 1.56739ZM10.0951 11.9537C14.6241 11.9537 18.1951 15.2137 18.1951 16.8373V19.1174H1.99512V16.7965C1.99512 15.1729 5.56567 11.9537 10.0951 11.9537Z"
                    stroke="#EB638B"
                    stroke-width="2.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                By Admain
              </p>
             
            </div>
            <div className="latest-post">
              <img src="/blog2.jpeg" alt="Post" />
              <p>
                Latest blog post with image <br />
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0951 1.56739C10.8969 1.5658 11.681 1.8212 12.3485 2.3013C13.0159 2.7814 13.5367 3.46464 13.8449 4.26461C14.153 5.06458 14.2348 5.94536 14.0799 6.79556C13.9249 7.64577 13.5401 8.42721 12.9743 9.04108C12.4084 9.65494 11.6868 10.0737 10.9007 10.2443C10.1147 10.4149 9.29946 10.3298 8.55817 9.99962C7.81689 9.66948 7.18283 9.10918 6.73617 8.38956C6.28951 7.66994 6.05032 6.82333 6.04885 5.95679V5.94872C6.04885 4.78812 6.47491 3.67493 7.23352 2.8535C7.99213 2.03207 9.02129 1.56953 10.0951 1.56739ZM10.0951 11.9537C14.6241 11.9537 18.1951 15.2137 18.1951 16.8373V19.1174H1.99512V16.7965C1.99512 15.1729 5.56567 11.9537 10.0951 11.9537Z"
                    stroke="#EB638B"
                    stroke-width="2.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                By Admain
              </p>
            </div>
            <div className="latest-post">
              <img src="/blog3.png" alt="Post" />
              <p>
                Latest blog post with image <br />
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0951 1.56739C10.8969 1.5658 11.681 1.8212 12.3485 2.3013C13.0159 2.7814 13.5367 3.46464 13.8449 4.26461C14.153 5.06458 14.2348 5.94536 14.0799 6.79556C13.9249 7.64577 13.5401 8.42721 12.9743 9.04108C12.4084 9.65494 11.6868 10.0737 10.9007 10.2443C10.1147 10.4149 9.29946 10.3298 8.55817 9.99962C7.81689 9.66948 7.18283 9.10918 6.73617 8.38956C6.28951 7.66994 6.05032 6.82333 6.04885 5.95679V5.94872C6.04885 4.78812 6.47491 3.67493 7.23352 2.8535C7.99213 2.03207 9.02129 1.56953 10.0951 1.56739ZM10.0951 11.9537C14.6241 11.9537 18.1951 15.2137 18.1951 16.8373V19.1174H1.99512V16.7965C1.99512 15.1729 5.56567 11.9537 10.0951 11.9537Z"
                    stroke="#EB638B"
                    stroke-width="2.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                By Admain
              </p>
            </div>
          </div>
          <div className="archives">
            <h4>Archives</h4>
            <ul>
              <li>January 2023</li>
              <li>February 2023</li>
            </ul>
          </div>
          <div className="keywords">
            <h4>Keywords</h4>
            <div className="keywords-container">
              <span>Child</span>
              <span>Health</span>
              <span>Education</span>
              <span>Unemployment</span>
              <span>Human rights</span>
              <span>+12</span>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <GetinTech />
      <Footer />
    </div>
  );
};

export default Blog;
