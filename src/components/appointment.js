import React from "react";

const AppointmentButton = () => {
  return (
    <div className="pt-2" style={{ width: "100%" }}>
      <a href="tel:+919488706323" style={{ textDecoration: "none" }}>
        <button
          type="button"
          class="btn btn-outline-light text-white outline-button"
        >
          Book Appointment
        </button>
      </a>
    </div>
  );
};

export default AppointmentButton;
