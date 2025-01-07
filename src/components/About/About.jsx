import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className="bg d-flex flex-column justify-content-center align-content-center vh-100 py-5">
        <h2 className={`${Styles.h2Mod} text-uppercase text-center`}>
          about component
        </h2>
        <hr className="mx-auto " />
        <div className="container d-flex gap-5 px-5">
          <div className="row">
            <div className="col-md-6">
              <p className={`${Styles.pMod}`}>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className={`${Styles.pMod}`}>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
