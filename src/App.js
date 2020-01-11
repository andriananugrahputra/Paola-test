import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './Pages/About'
import Test from './test'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/'>
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
