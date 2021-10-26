import React, { Fragment } from 'react';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { KenzieProjects } from './views/KenzieProjects';
import { PersonalProjects } from './views/PersonalProjects';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <KenzieProjects />
      <PersonalProjects />

    </Fragment>
  );
}

export default App;
