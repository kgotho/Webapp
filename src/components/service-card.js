import React from "react";
import AppointmentBtn from "./apointment-btn";

function ServiceCard(props) {
  return (
    <>
      <div className="detail-box">
        <h3 className="text-color pt-2">{props.title}</h3>
        <h6 className="pt-2">{props.subTitle}</h6>
        <p className="pt-2">{props.content}</p>
        <AppointmentBtn />
      </div>
    </>
  );
}
export default ServiceCard;
