import React from "react";
import Styles from "./home.module.css";
import homeImg from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="bg d-flex flex-column justify-content-center align-content-center vh-100 py-5">
        <div className="img text-center my-5">
          <img src={homeImg} alt="home image" className="w-25" />
        </div>
        <h2 className={`${Styles.h2Mod} text-uppercase text-center`}>
          start framework
        </h2>
        <hr className="mx-auto" />
        <p className="text-capitalize text-center">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
