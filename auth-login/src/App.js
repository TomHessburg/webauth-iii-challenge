import React, { Component } from 'react';
import './App.css';
import SignUp from './components/signup.js'
import Login from './components/login.js'
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <div>
          <Link to="/login">
            login
          </Link>

          <Link to="/signup">
            signup
          </Link>
        </div>
        <Route path="/login" render={props => <Login {...props} />} /> 
        <Route path="/signup" render={props => <SignUp {...props} />} />  
        
      </div>
    );
  }
}

export default App;
