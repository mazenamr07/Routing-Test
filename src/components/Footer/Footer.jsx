import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="links py-5">
          <div className="container py-3">
            <div className="row">
              <div className="col-md-4">
                <div className="inner d-flex flex-column align-items-center">
                  <p className="header text-uppercase">location</p>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner d-flex flex-column align-items-center">
                  <p className="header text-uppercase">around the web</p>
                  <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner d-flex flex-column align-items-center">
                  <p className="header text-uppercase">about freelancer</p>
                  <p className="text-center">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-footer text-center">
          <p className="py-3">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
