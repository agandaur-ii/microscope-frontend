import React, { Component } from 'react';
import SignUp from './SignUp';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class SplashPage extends Component {
    
    render() {

        if (this.props.token) {
            return(
                <Redirect to='/boards'/>
            )
        }

        return(
            <div>
                <h1>Welcome to Microscope!</h1>
                <SignUp />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        token: state.user.token
    }
}

export default connect(mapStateToProps)(SplashPage);