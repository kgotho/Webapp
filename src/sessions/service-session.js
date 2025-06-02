import React from "react";
import ServiceCard from "../components/service-card";

function ServiceSession() {
  return (
    <>
      <div className="bg-color mt-5">
        <div className="container py-5">
          <h1 className="text-center">Our Services</h1>
          <div className="row pt-5">
            <div className="col-md-3">
              <ServiceCard
                title="Fracture Surgery"
                subTitle="Expert Fracture Care"
                content="From simple breaks to complex trauma injuries, we ensure fast and effective recovery."
              />
            </div>
            <div className="col-md-3">
              <ServiceCard
                title="Joint Replacement"
                subTitle="Pain-Free Mobility"
                content="Say goodbye to chronic joint pain and get back to an active life."
              />{" "}
            </div>
            <div className="col-md-3">
              <ServiceCard
                title="Spine Surgery"
                subTitle="Specialized Spine Solutions"
                content="We treat slipped discs, spinal stenosis, and more with the latest surgical methods."
              />{" "}
            </div>
            <div className="col-md-3">
              <ServiceCard
                title="Arthroscopy"
                subTitle="Minimally Invasive Surgery"
                content="Quick recovery with less pain. Ideal for joint diagnosis and repair."
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceSession;
