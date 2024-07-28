import React from "react";
import "./Profiles.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const Profiles = () => {
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
      <div className="header23">
        <div className="subbtn">
          <button className="btn1">Blood Donors</button>
          <button className="btn2">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/blood-bank"
            >
              Blood Banks
            </Link>
          </button>
        </div>
      </div>
      <div className="container23">
        <div className="info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>

          <div>
            <button className="auto-call">
              Auto-Call <i className="bx bxs-phone-call"></i>
            </button>
            <p className="emergency-note">Use in case of emergency</p>
          </div>
        </div>
      </div>
      <div className="profile-cards">
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img src="/prf1.png" alt="Profile" className="profile-pic" />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
            {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/218a/0f43/4fe9788461137eb0fb68b9f2bc2d4bb1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nfu5rfDv0ZLD0kQsQYHoDzLN~ZfPNhW7kxNDwZUw9ScVUd9xIlu1k0g2dfX1sNyDsRvU7nKgXe5WCjjjK6Qw-XA8R4KU7pBJnVYDRZdifEVlcBMgEg73MVFJYWSCVbg8A0tlGNKJi8rOoF0XPMWNbuKmtIdK6dO8lIzoEOyptKuO59NW6daZ5TCqllRdK4s7X9VNjfpMAyrLBaJwDl5gzxsNvlPkZ3ihx~6YP3GLsgiLVFlvauX0nmZAaRqUuAVNPu1KDp6hAI6KlbXl-5rjVFE9FVFsHR~xfnKGokSGm1hGGEHcAfYs1OLSIB72aFMAGjs96gdpCCBNI7cKbRfenw__"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
             {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3933/fc5f/8da44d811e5bba573e0591d8102838b4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCU11d6txVQJjogGWrFtNy5uULI~l9c8Ry~9dRCVhS3m4dT-wjOWXKC3fYfJuk6yMmWTYHHuxgYSBDLk0AbJG0WoxQajP1TK9qsYdM3dVMxQgLCtMgZGxxEkb5JyRGjQDKal~RlFlF2MqgDBSiTozorLo9GUnvTizl9UBnQa01cJ3QV7iRbHhOPEoluiFIQq9ZA5lRg0KbpDxFNEn5Dg2KmvKLrglZDJvKAgrlPTwIpsxV0IJIUFhkrQ-GLiE5svbTQyeQZXrp0h8pczFL-5D9W3ZkyztysTk6UMUM4zALGIfrDhe0LhCY8W8z5GbqPmTDYRgHdXMVGmL5pB6cMVMQ__"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
          {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img src="/prf1.png" alt="Profile" className="profile-pic" />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
            {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/218a/0f43/4fe9788461137eb0fb68b9f2bc2d4bb1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nfu5rfDv0ZLD0kQsQYHoDzLN~ZfPNhW7kxNDwZUw9ScVUd9xIlu1k0g2dfX1sNyDsRvU7nKgXe5WCjjjK6Qw-XA8R4KU7pBJnVYDRZdifEVlcBMgEg73MVFJYWSCVbg8A0tlGNKJi8rOoF0XPMWNbuKmtIdK6dO8lIzoEOyptKuO59NW6daZ5TCqllRdK4s7X9VNjfpMAyrLBaJwDl5gzxsNvlPkZ3ihx~6YP3GLsgiLVFlvauX0nmZAaRqUuAVNPu1KDp6hAI6KlbXl-5rjVFE9FVFsHR~xfnKGokSGm1hGGEHcAfYs1OLSIB72aFMAGjs96gdpCCBNI7cKbRfenw__"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
             {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>
        <div className="profile-card">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="donation">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.8348" cy="19.0716" r="18.5242" fill="#EB638B" />
              <path
                d="M6.79395 26.3623L9.81814 24.5827C10.4015 25.5884 10.9322 26.4399 12.2053 26.4399C13.4255 26.4399 14.1949 25.9754 14.1949 24.1701L17.9088 11.8896V24.2211C17.9088 27.9617 15.6543 29.6645 12.3646 29.6645C9.39363 29.6645 7.66905 28.1682 6.79395 26.3623Z"
                fill="#F4E7EB"
              />
              <path
                d="M16.162 11.4848C17.185 11.4848 18.0144 10.695 18.0144 9.72079C18.0144 8.74656 17.185 7.95679 16.162 7.95679C15.1389 7.95679 14.3096 8.74656 14.3096 9.72079C14.3096 10.695 15.1389 11.4848 16.162 11.4848Z"
                fill="#F4E7EB"
              />
              <path
                d="M29.949 14.9368L26.9246 16.7164C26.3413 15.7104 25.8104 14.8592 24.5374 14.8592C23.3173 14.8592 22.5477 15.3234 22.5477 17.129L18.834 29.4093V17.0781C18.834 13.3375 21.0885 11.6348 24.3782 11.6348C27.3488 11.6348 29.0734 13.1311 29.9487 14.9371"
                fill="#F4E7EB"
              />
            </svg>
            <p>
              <span>08</span>
              <br />
              Donaction
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3933/fc5f/8da44d811e5bba573e0591d8102838b4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCU11d6txVQJjogGWrFtNy5uULI~l9c8Ry~9dRCVhS3m4dT-wjOWXKC3fYfJuk6yMmWTYHHuxgYSBDLk0AbJG0WoxQajP1TK9qsYdM3dVMxQgLCtMgZGxxEkb5JyRGjQDKal~RlFlF2MqgDBSiTozorLo9GUnvTizl9UBnQa01cJ3QV7iRbHhOPEoluiFIQq9ZA5lRg0KbpDxFNEn5Dg2KmvKLrglZDJvKAgrlPTwIpsxV0IJIUFhkrQ-GLiE5svbTQyeQZXrp0h8pczFL-5D9W3ZkyztysTk6UMUM4zALGIfrDhe0LhCY8W8z5GbqPmTDYRgHdXMVGmL5pB6cMVMQ__"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Joeylene Rivera</h2>
          <p className="sub-title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis dignissim donec
            ullamcorper ultricies vulputate quisque. Dui euismodultrices eu.
          </p>
          <button className="whatsapp-button">Whatsapp: 03000000000</button>
          <div className="bottom-color">
          {/* <svg
              width="360"
              height="79"
              viewBox="0 0 502 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M501.081 37.509V5.09154C501.081 2.78964 499.215 0.923584 496.913 0.923584C494.611 0.923584 492.745 2.78964 492.745 5.09154V26.2615C492.745 33.691 489.484 40.7461 483.826 45.5603L474.691 53.3314C466.316 60.4565 455.679 64.3691 444.683 64.3691H55.5646C43.9547 64.3691 32.7684 60.0084 24.2216 52.1509L17.12 45.622C11.8169 40.7466 8.79902 33.8726 8.79902 26.669V5.32309C8.79902 2.89331 6.82929 0.923584 4.39951 0.923584C1.96973 0.923584 0 2.8933 0 5.32308V37.509C0 57.7145 16.3798 74.0944 36.5854 74.0944H464.495C484.701 74.0944 501.081 57.7145 501.081 37.509Z"
                fill="#F4E7EB"
              />
            </svg> */}
          </div>
        </div>

      
      </div>
      <Footer />
    </div>
  );
};

export default Profiles;
