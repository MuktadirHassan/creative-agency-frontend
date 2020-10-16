import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Customer from './components/Customer/Customer';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/customer">
            <Customer></Customer>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
