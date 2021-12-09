import React, { Fragment } from 'react';
import '../App.css'
import { Introduction } from '../components/Introdution';
import { KenzieProjectsShowCase } from '../components/KenzieProjectsShowCase';
import { PersonalProjectsShowCase } from '../components/PersonalProjects';
import { Route, Switch } from "react-router-dom";



export const Base = () => {
  return (
    <Fragment>
      <div className='intro-container'>
        <div>
      <Introduction />
      </div>
      </div>
      <div className='projects-container'>
        <div>
      <KenzieProjectsShowCase />
      </div>
      <div>
      <PersonalProjectsShowCase />
      </div>
      </div>
    </Fragment>
  );
}
