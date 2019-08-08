import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import LandingPage from './landingpage';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';



const Main = () => (
  
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  
  </Switch>
)

export default Main;