import React, { Fragment } from 'react';
import './App.css';
import { Introduction } from './components/Introdution';
import { NavigationBar } from './components/NavigationBar';
import { KenzieProjects } from './views/KenzieProjects';
import { PersonalProjects } from './views/PersonalProjects';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <div className='intro-container'>
        <div>
      <Introduction />
      </div>
      </div>
      <div className='projects-container'>
        <div>
      <KenzieProjects />
      </div>
      <div>
      <PersonalProjects />
      </div>
      </div>
    </Fragment>
  );
}

export default App;
