import React from "react";
import DoctorSession from "../components/doctor";
import HealthCareSolutions from "../components/health-care-solutions";
import Footer from "../components/footer";
import ContactSession from "../sessions/contact-session";
import AboutUsSession from "../sessions/about-us-session";
import ServiceSession from "../sessions/service-session";
import AppointmentButton from "../components/appointment";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid home-height home-bg">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-white">
            <h6>Move Better. Live Better</h6>
            <h2>Moving You Forward with Advanced Orthopedic Solutions</h2>
            <p>
              We are dedicated to helping you move better, feel stronger, and
              live pain-free. Well experienced orthopedic specialists offers
              personalized treatment plans, advanced surgical and non-surgical
              options, and compassionate care to get you back to doing what you
              love.
            </p>
            <AppointmentButton />
          </div>
        </div>
      </div>
      <div className="contact">
        <ContactSession />
      </div>
      <AboutUsSession />
      <ServiceSession />
      <DoctorSession />
      <HealthCareSolutions />
      <Footer />
    </>
  );
};

export default HomePage;
