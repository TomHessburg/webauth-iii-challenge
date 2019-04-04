import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
            <Link 
                onClick={e => {
                localStorage.removeItem("token");
                }}
                to="/login">
                    log out
            </Link>
            {users.map(user => {
                return <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>{user.department}</p>
                </div>
            })
            }
        </div>
    );
}

export default Users;