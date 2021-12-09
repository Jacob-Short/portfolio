import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CryptoTrackerPhoto from "../images/CryptoTracker.png";

export const PersonalProjectsShowCase = () => {
  return (
    <Fragment>
      <h4>Personal Projects</h4>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src={CryptoTrackerPhoto}
          className="card-img-top"
          alt="crypto-tracker"
        />
        <div className="card-body">
          <h5 className="card-title">Personal Projects</h5>
          <p className="card-text">
            Some of the projects that I have built in my free time.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cynthia</li>
          <li className="list-group-item">Mama-5-Fitness</li>
          <li className="list-group-item">Crypto Tracker</li>
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
