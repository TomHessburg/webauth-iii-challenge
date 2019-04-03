import React, { useState } from 'react';
import axios from 'axios';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [rtPass, setRtPass] = useState('');

    return(
        <div className="signup">
          <h2>sign up</h2>
          <form
          onSubmit={e => {
            e.preventDefault();
            if(password === rtPass){
              const newAcc = {
                username,
                department,
                password
              }
              axios.post('http://localhost:5000/api/auth/register', newAcc)
                .then(res => {
                  console.log(res)
                  setUsername("");
                  setPassword("");
                  setRtPass("");
                  setDepartment("");
                })
                .catch(err => console.log(err))

            }

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

            <label>department</label>
            <input 
            type="text"
            value={department}
            onChange={e => {
              setDepartment(e.target.value);
            }}
            />

            <label>password</label>
            <input 
            type="text"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            />
            <label>retype password</label>
            <input 
            type="text"
            value={rtPass}
            onChange={e => {
              setRtPass(e.target.value);
            }}
            />

            <button type="submit">sign up</button>
          </form>
        </div>
    );
}

export default SignUp;