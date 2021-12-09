import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavigationBar = (props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <b>
              <i>Jacob Shorts Portfolio</i>
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" style={{ color: "gold" }}>
                Home
              </Link>
              <li className="nav-item">
                <Link to="/kenzie-projects" style={{ color: "gold" }}>
                  Kenzie Projects
                </Link>
              </li>
              <Link to="/personal-projects" style={{ color: "gold" }}>
                Personal Projects
              </Link>
              <Link to="/about-me" style={{ color: "gold" }}>
                About Me
              </Link>
            </ul>
            <span className="navbar-text" style={{ color: "gold" }}>
              <small>
                <i>Created By Jacob</i>
              </small>
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
