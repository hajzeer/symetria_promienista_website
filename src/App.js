import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


import './App.css';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'

const App = () => {


  return (
      <Router>
      <div className="App">
                  <Route path="/" exact component={Home} />
                  <Route path="/portfolio" component={Portfolio} />
      </div>
      </Router>
  );
}

export default App;