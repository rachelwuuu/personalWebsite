import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import FormPage from "./pages/form";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import{BrowserRouter as Router, Route, Redirect, Switch, Link} from "react-router-dom";
class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/form" exact component={FormPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
