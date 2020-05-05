import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { logoutUser } from '../redux';

function Navi(props) {
    const token = props.user.token

    return(
            <div className="navbar">
                {token ? <Link className="nav-link" to="/account">My Account</Link> : null}
                {token ? <Link className="nav-link" to="/boards">My Boards</Link> : null}
                {token ? <Button variant="outline-danger" onClick={props.onLogout}>Logout</Button> 
                : <LoginForm className="form-group" />}
            </div>
     )
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi); 