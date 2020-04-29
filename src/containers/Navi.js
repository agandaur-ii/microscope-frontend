import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Navi(props) {
    // use token value (true || false to determine which links to show.)
    const token = localStorage.getItem("token")

    return(
            <div className="navbar">
                {token ? <Link className="nav-link" to="/account">My Account</Link> : null}
                {token ? <Button variant="outline-danger" onClick={props.onLogout}>Logout</Button> 
                : <LoginForm className="form-group" onAuthenticate={props.onAuthenticate}/>}
            </div>
     )
};

export default Navi;