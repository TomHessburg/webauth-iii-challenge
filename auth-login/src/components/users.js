import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const Users = props => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/users', {headers: {Authorization: localStorage.getItem('token')}})
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    } , [])

    return(
        <div className="users">
            {localStorage.getItem("token") ? null : <Redirect to="login" />}
            <Link 
                className="logBtn"
                onClick={e => {
                localStorage.removeItem("token");
                }}
                to="/login">
                    log out
            </Link>
            <div className="userBoxes">
                {users.map(user => {
                    return <div key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.department}</p>
                    </div>
                })
                }
            </div>
        </div>
    );
}

export default Users;