import React from "react";
import Styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-start align-content-center vh-100 py-5">
        <h2 className={`${Styles.h2Mod} text-uppercase text-center`}>
          contact section
        </h2>
        <hr className="mx-auto " />
        <div className="container labels">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="first last"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="01"
            />
            <label for="floatingInput">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="btn btn-success my-4">Send Message</button>
        </div>
      </div>
    </>
  );
}
