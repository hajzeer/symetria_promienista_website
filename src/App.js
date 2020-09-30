import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


import './App.css';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {


  return (
      <Router>
          <ScrollToTop>
        <div className="App">
          <Switch>
                  <Route  path="/" exact component={Home} />
                  <Route  path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
          </ScrollToTop>
      </Router>
  );
}

export default App;