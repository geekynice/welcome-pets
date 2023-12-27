"use client";

import BtnGrey from "./buttons/btnGrey";
import BtnPrimary from "./buttons/btnPrimary";
import Logo from "./logo";

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Logo/>
          </a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Adopters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guardians
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <BtnGrey text="Login"/>
              <BtnPrimary text="Register"/>
            </div>
          </div>
        </div>
      </nav>
    );
}