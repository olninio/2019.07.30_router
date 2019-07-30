import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Contact from './Contact'
import Home from './Home'
import AboutMe from './AboutMe';
import Projects from './Projects';


const App = () => (
  <Router>
  
  <div>
    <Route path = {'/'} component = {Home} exact />
    <Route path = {'/home'} component = {Home} />
    <Route path = {"/contact"} component = {Contact} />
    <Route path = {'/about-me'} component = {AboutMe} />
    <Route path = {'/projects'} component = {Projects} />
  </div>
  
  </Router>
  
)

export default App;
