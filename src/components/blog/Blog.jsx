import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog-container">
      <h4 style={{ textAlign: "center",color:'white', padding: "40px 0px 0px 0px" }}>
        Our
        <span
          style={{ color: "#EB638B", paddingLeft: "8px" }}
          className="highlight"
        >
          #Blog
        </span>
      </h4>
      <h1 style={{ textAlign: "center", padding: "10px 0px", color: "white" }}>
        Look our latest articles
      </h1>
      <div className="blog-cards">
        <div className="blob-1">
            <img src="/blog1.png" alt="" />
        <div className="blog-card">
          <p className="blo-t">Education</p>
          <h3>How Azar become doctor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
          <p className="blo-b">
            Know more
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_460)">
                <path
                  d="M18.0684 6.94247L24.8057 13.6799C25.2709 14.145 25.2709 14.8991 24.8057 15.3642L18.0684 22.1017C17.6033 22.5668 16.8491 22.5668 16.384 22.1017C15.9188 21.6366 15.9188 20.8824 16.384 20.4174L21.0882 15.7131H5.31602C4.65824 15.7131 4.125 15.1798 4.125 14.522C4.125 13.8642 4.65824 13.331 5.31602 13.331H21.0882L16.384 8.62683C15.9188 8.1617 15.9188 7.40759 16.384 6.94247C16.8491 6.47735 17.6033 6.47735 18.0684 6.94247Z"
                  fill="#EB638B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_460">
                  <rect
                    width="28.5845"
                    height="28.5845"
                    fill="white"
                    transform="translate(0.550781 0.230103)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
        </div>
        <div className="blob-1">
            <img src="/blog2.png" alt="" />
        <div className="blog-card">
          <p className="blo-t">Education</p>
          <h3>How Azar become doctor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
          <p className="blo-b">
            Know more
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_460)">
                <path
                  d="M18.0684 6.94247L24.8057 13.6799C25.2709 14.145 25.2709 14.8991 24.8057 15.3642L18.0684 22.1017C17.6033 22.5668 16.8491 22.5668 16.384 22.1017C15.9188 21.6366 15.9188 20.8824 16.384 20.4174L21.0882 15.7131H5.31602C4.65824 15.7131 4.125 15.1798 4.125 14.522C4.125 13.8642 4.65824 13.331 5.31602 13.331H21.0882L16.384 8.62683C15.9188 8.1617 15.9188 7.40759 16.384 6.94247C16.8491 6.47735 17.6033 6.47735 18.0684 6.94247Z"
                  fill="#EB638B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_460">
                  <rect
                    width="28.5845"
                    height="28.5845"
                    fill="white"
                    transform="translate(0.550781 0.230103)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
        </div>
        <div className="blob-1">
            <img style={{height:'150px',marginBottom:'-3px'}}  src="/blog2.jpeg" alt="" />
        <div className="blog-card">
          <p className="blo-t">Education</p>
          <h3>How Azar become doctor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
          <p className="blo-b">
            Know more
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_460)">
                <path
                  d="M18.0684 6.94247L24.8057 13.6799C25.2709 14.145 25.2709 14.8991 24.8057 15.3642L18.0684 22.1017C17.6033 22.5668 16.8491 22.5668 16.384 22.1017C15.9188 21.6366 15.9188 20.8824 16.384 20.4174L21.0882 15.7131H5.31602C4.65824 15.7131 4.125 15.1798 4.125 14.522C4.125 13.8642 4.65824 13.331 5.31602 13.331H21.0882L16.384 8.62683C15.9188 8.1617 15.9188 7.40759 16.384 6.94247C16.8491 6.47735 17.6033 6.47735 18.0684 6.94247Z"
                  fill="#EB638B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_460">
                  <rect
                    width="28.5845"
                    height="28.5845"
                    fill="white"
                    transform="translate(0.550781 0.230103)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
