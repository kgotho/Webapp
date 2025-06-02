import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-color">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <a className="navbar-brand" href="#">
                <img
                  src="./assets/logo.png"
                  height="60x"
                  width="60px"
                  alt="Logo"
                />
              </a>
              <p className="pt-3 text-color">
                Our advanced treatments help you move pain-free and live better.
              </p>
              <h6>Follow us </h6>
              <i class="fa-brands fa-facebook px-2"></i>
              <i class="fa-brands fa-linkedin px-2"></i>
              <i class="fa-brands fa-instagram px-2"></i>
            </div>
            <div className="col-md-2">
              <h5 className="text-color pt-2">Quick Links</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/doctor">
                    Doctor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="text-color pt-2">Our Services</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Fracture Surgery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Joint Replacement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Spine Surgery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Arthroscopy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="text-color pt-2">Consulting Time</h5>
              <ul className="navbar-nav line-height">
                <li className="nav-item">Monday - Saturday</li>
                <li className="nav-item">4.00 p.m - 10.00 p.m</li>
                <li className="nav-item">Sunday Holiday</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-color pt-2">Contact Info</h5>
              <ul className="navbar-nav line-height">
                <li className="nav-item">18-A, South Mount Rd, Town,</li>
                <li className="nav-item">Tirunelveli, Tamil Nadu 627006</li>
                <li className="nav-item">Ph: 9488706323, 9489305423</li>
                <li className="nav-item">Tel: 0462-2334623</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights text-center pt-3 pb-3">
        <span>
          <i class="fa-regular fa-copyright"></i>
        </span>
        <span>2025 All Rights Reserved KG Ortho Clinic</span>
      </div>
    </>
  );
}
export default Footer;
