import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CapstoneHomePhoto from "../images/CapstoneHome.png";

export const KenzieProjectsShowCase = () => {
  return (
    <Fragment>
      <Link to="/kenzie-projects">
        <h4>Kenzie Projects</h4>
      </Link>
      <div className="card" style={{ width: 60 + "rem" }}>
        <img
          src={CapstoneHomePhoto}
          className="card-img-top"
          alt="capstone-project"
        />
        <div className="card-body">
          <h5 className="card-title">Kenzie Projects</h5>
          <p className="card-text">
            Some of the projects that I built at my time at Kenzie that I am
            proud of.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <a href="https://github.com/Jacob-Short/Q4-Capstone">
            <li className="list-group-item">GamerZone</li>
          </a>
          <li className="list-group-item">Bird Space</li>
          <li className="list-group-item">MMG</li>
        </ul>
        <div className="card-body">
          <Link to="#" className="card-link">
            See All Projects
          </Link>
          <a href="https://github.com/Jacob-Short" className="card-link">
            Github
          </a>
        </div>
      </div>
    </Fragment>
  );
};
