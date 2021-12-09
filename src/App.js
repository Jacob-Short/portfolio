import React, { Fragment } from 'react';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { KenzieProjects } from './views/KenzieProjects';
import { PersonalProjects } from './views/PersonalProjects';
import { Route, Switch } from "react-router-dom";
import { Base } from './views/Base';
import { AboutMe } from './views/AboutMe';



function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Route exact path='/' component={Base} />
      <Switch>
      <Route exact path='/kenzie-projects' component={KenzieProjects} />
      <Route exact path='/personal-projects' component={PersonalProjects} />
      <Route exact path='/about-me' component={AboutMe} />
      </Switch>
    </Fragment>
  );
}

export default App;
