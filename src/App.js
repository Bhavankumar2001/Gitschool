// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/About';
import Admissions from './components/pages/Admission';
import Academics from './components/pages/Academics';
import Infrastructure from './components/pages/Infrastructure';
import Sports from './components/pages/Sports';
import CampusLife from './components/pages/Campuslife';


function App() {
  return (
    
    <Router>
    <div className='App'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/academics" component={Academics} />
        <Route path="/infrastructure" component={Infrastructure} />
        <Route path="/sports" component={Sports} />
        <Route path="/campus-life" component={CampusLife} />
      </Switch>
      </div>
    </Router>
  
  );
}

export default App;


