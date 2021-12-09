import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const KenzieProjects = () => {
  const [projects, setProjects] = useState([{}]);

  return (
    <Fragment>
      <h4>Kenzie Projects</h4>
      {projects.map((project) => (
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      ))}
    </Fragment>
  );
};
