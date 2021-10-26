import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavigationBar = (props) => {
    return (
        <Fragment>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Jacobs Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kenzie Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Personal Projects</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <small><i>Created By Jacob</i></small>
                        </span>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};