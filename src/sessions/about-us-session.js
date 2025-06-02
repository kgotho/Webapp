import React from "react";
import CustomBtn from "../components/custom-button";

function AboutUsSession() {
  return (
    <>
      <div className="container-fluid about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="./assets/kg-hospital.jpeg"
                  alt="About KG Ortho Clinic"
                  className="rounded img-h-w"
                />
              </div>
            </div>
            <div className="col-md-6 center">
              <h1 className="text-color text-center pt-2">Who We are</h1>
              <h4 className=" pt-2 text-center">
                Advanced Orthopedic Care You Can Trust
              </h4>
              <p className=" pt-3 line-height justify-center">
                At KG Ortho Clinic, we are committed to providing world-class
                orthopedic care with compassion, precision, and a patient-first
                approach. Well of highly skilled orthopedic specialists ensures
                that every patient receives personalized treatment for faster
                recovery and better outcomes.{" "}
              </p>
              <h4 className=" pt-2">Why Choose Us? </h4>

              <ul className="navbar-nav pt-3 line-height">
                <li className="nav-item">
                  <i class="fa-solid fa-diamond text-color px-3"></i>Experienced
                  Surgeons
                </li>
                <li className="nav-item">
                  <i class="fa-solid fa-diamond text-color px-3"></i>Advanced
                  Technology
                </li>
                <li className="nav-item">
                  <i class="fa-solid fa-diamond text-color px-3"></i>
                  Personalized Care
                </li>
                <li className="nav-item">
                  <i class="fa-solid fa-diamond text-color px-3"></i>Affordable
                  Treatment Plans
                </li>
              </ul>
              <div className="pt-3">
                <CustomBtn link="./about-us" btnname="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUsSession;
