import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container py-3">
          <a class="navbar-brand text-uppercase" href="#">
            Start Framework
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item text-uppercase mx-1">
                <a class="nav-link px-3 active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item text-uppercase mx-1">
                <a class="nav-link px-3" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item text-uppercase mx-1">
                <a class="nav-link px-3" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
