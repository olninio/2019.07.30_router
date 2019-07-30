import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Contact from './Contact'
import Home from './Home'
import AboutMe from './AboutMe';
import Projects from './Projects';


const App = () => (
  <BrowserRouter>
  
  <div>
    <Contact />
    <Home />
    <AboutMe />
    <Projects /> 
  </div>
  
  </BrowserRouter>
  
)

export default App;
