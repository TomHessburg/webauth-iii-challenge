import React from 'react';
import { Link } from 'react-router-dom';


const HeadLinks = props => {
    return(
        <div className="headLinks">
            <div style={ localStorage.getItem('token') ? {display: 'none'} : null }>
            <Link className="logBtn" to="/login">
                login
            </Link>

            <Link className="logBtn" to="/signup">
                signup
            </Link>
            </div>

        </div>
      
    );
}


export default HeadLinks;

