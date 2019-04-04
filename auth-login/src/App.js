import React, { Component } from 'react';
import './App.css';
import SignUp from './components/signup.js'
import Login from './components/login.js'
import Users from './components/users.js'
import HeadLinks from './components/HeadLinks.js';
import { Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome!</h1>

        <Route path="/" render={props => <HeadLinks {...props} />} /> 
        <Route path="/login" render={props => <Login {...props} />} /> 
        <Route path="/signup" render={props => <SignUp {...props} />} />  

        <Route path="/users" render={props => <Users {...props} />} /> 
        
      </div>
    );
  }
}

export default App;
