import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section2">
      <div
        className="hero-image"
        style={{ backgroundImage: "url('/about-hero.jpeg')" }}
      >
        <div className="hero-img-sub">
          <h1 style={{ opacity: "0" }}>1</h1>
        </div>
        {/* <img src="/about-hero.jpeg" alt="About Us" className="" /> */}
      </div>
      <div className="about-us1">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cursus pulvinar hacna felis
          sed blandit. Non eget facilisi enim facilisi hac. Cursus arcu odio
          urna ut eget dictum. Amet idam ut facilisi tincidunt porta rutrum.
        </p>
        <p>
          Nunc vel augue aliquet lacus facilisis facilisis orci. Arcu maecenas
          volutpat tellus. Aliquam varius consequat fringilla orci eget mi.
          Pellentesque nisi morbi nunc nulla pharetra. Donec nec aliquet
          ultricies massa. Faucibus metus porta velit ac. Vivamus proin ipsum
          felis. Risus convallis aenean scelerisque vitae. Pellentesque dui id
          dignissim nisl. Sit sagittis volutpat suspendisse arcu diam ut et.
        </p>
        <p>
          At sagittis risus velit et sagittis eget velit volutpat. Et diam sem
          dolor et tortor dolor aliquet eros. Aliquam ultrices orci in in
          gravida. Dignissim lorem purus id dictumst. Amet elit eget id ultrices
          ut vulputate. Tellus urna et sit eget. Nibh purus facilisis tempor
          orci amet lectus. Sed rhoncus suspendisse amet mattis euismod nunc
          diam lacus. Euismod dolor quis mi nunc viverra bibendum vitae
          facilisis tempor. Nullam fermentum tincidunt vel. Cras amet nunc
          integer ac pharetra suspendisse. Amet sed diam aenean ornare. Ornare
          dictum cum vel faucibus pulvinar ultricies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
