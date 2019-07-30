import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Button from '@material-ui/core/Button';

import Contact from './Contact'
import Home from './Home'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Project from './Project';
import CustomLink from './CustomLink'




const App = () => (
  <Router>
  <div>
    <ul>
      <li>
        <CustomLink/>
      </li>
      <li>
        <Link to={'/contact'}>contact</Link>
      </li>
      <li>
        <Link to={'/about-me'}>about-me</Link>
      </li>
      <li>
        <Link to={'/projects'}>projects</Link>
      </li>
    </ul>
  </div>
  
  <div>
    <Route path = {'/'} component = {Home} exact />
    <Route path = {'/home'} component = {Home} />
    <Route path = {"/contact"} component = {Contact} />
    <Route path = {'/about-me'} component = {AboutMe} />
    <Route path = {'/projects'} component = {Projects} />
    <Route path = {'/projects/:name'} component = {Project} />
  </div>
  
  </Router>
  
)

export default App;
