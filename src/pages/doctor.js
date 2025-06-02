import React from "react";
import Footer from "../components/footer";
import DoctorSession from "../components/doctor";

const DoctorPage = () => {
  return (
    <>
      <div className="about-banner">
        <div className="banner-content text-center text-white">
          <h1>Doctor</h1>
          <p>Meet Our Expert Orthopedic Specialists</p>
        </div>
      </div>
      <DoctorSession />
      <Footer />
    </>
  );
};

export default DoctorPage;
