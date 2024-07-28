import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/aboutcom/Hero";
import GetinTech from "../../components/getintech/GetinTech";
import Testimonials from "../../components/testimonials/Testimonials";
import OurTeam from "../../components/aboutcom/our team/OurTeam";
import OurStory from "../../components/aboutcom/our story/OurStory";
import OurMission from "../../components/aboutcom/our mission/OurMission";
import WhyItWorks from "../../components/aboutcom/Why it Works/WhyItWorks";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurMission />
      <OurStory />
      <OurTeam />
      <WhyItWorks />
      <Testimonials />
      <GetinTech />
      <Footer />
    </div>
  );
};

export default About;
