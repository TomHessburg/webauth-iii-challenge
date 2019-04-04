import React from 'react';
import { Link } from 'react-router-dom';


const HeadLinks = props => {
    return(
        <div>
            <div style={ localStorage.getItem('token') ? {display: 'none'} : null }>
            <Link to="/login">
                login
            </Link>

            <Link to="/signup">
                signup
            </Link>
            </div>

        </div>
      
    );
}


export default HeadLinks;

