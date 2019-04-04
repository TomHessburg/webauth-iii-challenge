import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [rtPass, setRtPass] = useState('');
  const [success, setSuccess] = useState(false);

    return(
        <div className="login">
          {success ? <Redirect to='/login' /> : null}
          <h2>sign up</h2>
          <form
          onSubmit={e => {
            e.preventDefault();
            if(password === rtPass && username){
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
                  setSuccess(true);
                })
                .catch(err => console.log(err))
            }else{
              console.log('please finish filling out the form')
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