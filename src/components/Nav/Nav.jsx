import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-relative z-n1">
        <div className="container py-3">
          <Link className="navbar-brand text-uppercase" to="">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-uppercase mx-1">
                <NavLink
                  className="nav-link px-3"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item text-uppercase mx-1">
                <NavLink className="nav-link px-3" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item text-uppercase mx-1">
                <NavLink className="nav-link px-3" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg fixed-top z-5">
        <div className="container py-3">
          <Link className="navbar-brand text-uppercase" to="">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-uppercase mx-1">
                <NavLink
                  className="nav-link px-3"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item text-uppercase mx-1">
                <NavLink className="nav-link px-3" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item text-uppercase mx-1">
                <NavLink className="nav-link px-3" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
