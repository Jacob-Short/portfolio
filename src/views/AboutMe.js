import React, { Fragment } from 'react';
import '../App.css';

export const AboutMe = () => {
    return (
        <Fragment>
            <div className='about-me-container'>
                <div>
                    <h2>About Me</h2>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li><h4>Southern New Hampshire University</h4></li>
                        <li><h4>Kenzie Academy</h4></li>
                        <li><h4>Glencoe High School</h4></li>
                    </ul>
                </div>
                <br></br>
                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        <li><h4>Kenzie Academy -- Position</h4></li>
                        <li><h4>Singaore Math -- Position</h4></li>
                        <li><h4>Local 737 -- Position</h4></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}