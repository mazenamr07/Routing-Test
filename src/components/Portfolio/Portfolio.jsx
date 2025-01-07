import React from "react";
import Styles from "./Portfolio.module.css";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-start align-content-center vh-100 py-5">
        <h2 className={`${Styles.h2Mod} text-uppercase text-center`}>
          portfolio component
        </h2>
        <hr className="mx-auto " />
        <div className="container cards px-5 my-2">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port1} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port2} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port3} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port1} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port2} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="img">
                  <img src={port3} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
