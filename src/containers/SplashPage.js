import React, { Component } from 'react';
import SignUp from './SignUp';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class SplashPage extends Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        if (this.props.token) {
            this.setState({
                redirect: true
            })
        }
    }
    
    render() {

        if (this.state.redirect) {
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