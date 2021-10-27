import React, { Fragment } from 'react';

export const KenzieProjects = () => {
    return (
        <Fragment>
            <h4>Kenzie Projects</h4>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Kenzie Projects</h5>
                    <p className="card-text">Some of the projects that I built at my time at Kenzie that I am proud of.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">GamerZone</li>
                    <li className="list-group-item">Bird Space</li>
                    <li className="list-group-item">MMG</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">See All Projects</a>
                    <a href="#" className="card-link">Github</a>
                </div>
            </div>
        </Fragment>
    )
}