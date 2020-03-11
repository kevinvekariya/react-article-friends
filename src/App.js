import React from 'react';
import './App.css';
import Home from './components/home';
import Friends from './components/friends';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./common/header";

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/friends' component={Friends}/>
          <Redirect from='/' to="/home"/>
        </Switch>
      </Router>
  );
}

export default App;
