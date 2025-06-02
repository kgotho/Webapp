import React from "react";
import AboutUsSession from "../sessions/about-us-session";
import DoctorSession from "../components/doctor";
import HealthCareSolutions from "../components/health-care-solutions";
import Footer from "../components/footer";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-banner">
        <div className="banner-content text-center text-white">
          <h1>About Us</h1>
          <p>Learn more about KG Ortho Clinic</p>
        </div>
      </div>
      <div className="pt-5">
        <AboutUsSession />
      </div>
      <DoctorSession />
      <HealthCareSolutions />
      <Footer />
    </>
  );
};

export default AboutUsPage;
