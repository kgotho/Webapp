import React from "react";
import Footer from "../components/footer";
import HealthCareSolutions from "../components/health-care-solutions";
import ServiceSession from "../sessions/service-session";

const ServicePage = () => {
  return (
    <>
      <div className="about-banner">
        <div className="banner-content text-center text-white">
          <h1>Services</h1>
          <p>Our Expert Orthopedic Services.</p>
        </div>
      </div>
      <ServiceSession />
      <HealthCareSolutions />
      <Footer />
    </>
  );
};

export default ServicePage;
