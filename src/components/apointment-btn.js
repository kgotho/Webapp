import React from "react";

const AppointmentBtn = () => {
  return (
    <div className="pt-2" style={{ width: "100%" }}>
      <a href="tel:+919488706323" style={{ textDecoration: "none" }}>
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#318295	",
            color: "#fff",
            border: "none",
            fontSize: "18px",
          }}
        >
          Book Appointment
        </button>
      </a>
    </div>
  );
};

export default AppointmentBtn;
