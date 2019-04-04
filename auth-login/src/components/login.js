import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <div className="login">
      {localStorage.getItem("token") ? <Redirect to='/users' /> : null}
      <h2>log in</h2>
      <form
      onSubmit={e => {
        e.preventDefault();
        const user = {
          username,
          password
        }
        axios.post("http://localhost:5000/api/auth/login",user)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            setUsername('');
            setPassword('');
          })
          .catch(err => console.log(err))
      
      }}
      >
        <label>username</label>
        <input 
        type="text"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
        />

        <label>password</label>
        <input 
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        />

        <button type="submit">log in</button>
      </form>
    </div>
  );
}

export default Login;