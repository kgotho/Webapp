import React from "react";
import DetailCard from "../components/card";

function ContactSession() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <DetailCard
              icon="fa-solid fa-user-doctor text-color icon-size"
              title="Services"
              content_line1="Fracture Surgery"
              content_line2="Joint Replacement"
              content_line3="Spine Surgery"
              content_line4="Arthroscopy"
            />
          </div>
          <div className="col-md-4">
            <DetailCard
              icon="fa-solid fa-clock text-color icon-size"
              title="Consulting Time"
              content_line1="Monday - Saturday"
              content_line2="4.00 p.m - 10.00 p.m"
              content_line3="Sunday Holiday"
            />
          </div>
          <div className="col-md-4">
            <DetailCard
              icon="fa-solid fa-address-book text-color icon-size"
              title="Contact Us"
              content_line1="18-A, South Mount Rd, Town"
              content_line2="Tirunelveli, Tamil Nadu 627006"
              content_line3="Ph: 9488706323, 9489305423"
              content_line4="Tel: 0462-2334623"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
export default ContactSession;
