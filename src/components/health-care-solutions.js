import React from "react";

function HealthCareSolutions() {
  return (
    <>
      <div className="about-us">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <h1>One-Stop Health Care Solutions</h1>
            </div>
            <div className="col-md-6">
              <h5>Complete Care, Close to Home</h5>
              <div className="line"></div>
              <p className="pt-3">
                Diagnostics, Rehabilitation & Pharmacy at KG Ortho Clinic
              </p>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-md-4">
              <div className="icon-box">
                <i class="fa-solid fa-person-rays"></i>
              </div>
              <h3 className=" pt-3">X-Ray</h3>
              <h6 className="text-color">Fast & Precise Diagnostics</h6>
              <p>
                Get accurate imaging results in minutes with our advanced X-ray
                technology, ensuring timely and effective treatment.
              </p>
            </div>

            <div className="col-md-4">
              <div className="icon-box">
                <i class="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className=" pt-3">Physiotherapy</h3>
              <h6 className="text-color">Personalized Recovery Plans</h6>
              <p>
                Our expert physiotherapists design tailored rehab programs to
                relieve pain, restore mobility, and speed up healing.
              </p>
            </div>

            <div className="col-md-4">
              <div className="icon-box">
                <i class="fa-solid fa-prescription-bottle-medical"></i>{" "}
              </div>
              <h3 className=" pt-3">Pharmacy</h3>
              <h6 className="text-color">Instant Access to Medicines</h6>
              <p>
                Skip the wait—our in-house pharmacy stocks genuine medications
                for quick prescriptions and seamless care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HealthCareSolutions;
