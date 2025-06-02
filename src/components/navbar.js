import React from "react";
import AppointmentBtn from "./apointment-btn";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container navigation">
        <a className="navbar-brand" href="/">
          <img src="./assets/logo.png" height="60x" width="60px" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item nav-text">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item nav-text">
              <a className="nav-link" href="./about-us">
                About
              </a>
            </li>
            <li className="nav-item nav-text">
              <a className="nav-link" href="./service">
                Services
              </a>
            </li>
            <li className="nav-item nav-text">
              <a className="nav-link" href="./doctor">
                Doctor
              </a>
            </li>
            <li className="nav-item nav-text">
              <a className="nav-link" href="./contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <div className="d-flex">
                <AppointmentBtn />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
