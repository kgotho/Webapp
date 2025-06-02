import React from "react";
import Footer from "../components/footer";
import ContactSession from "../sessions/contact-session";

const ContactPage = () => {
  return (
    <>
      <div className="about-banner">
        <div className="banner-content text-center text-white">
          <h1>Contact Us</h1>
          <p>Get in Touch with Us</p>
        </div>
      </div>
      <div className="pt-5">
        <ContactSession />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.668963480512!2d77.68442139999999!3d8.7229504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041124092a261f%3A0x3d83814428bef535!2sKG%20Ortho%20Care!5e0!3m2!1sen!2sin!4v1746639189434!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className=" pb-5"
        title="iframe"
      ></iframe>
      <Footer />
    </>
  );
};

export default ContactPage;
