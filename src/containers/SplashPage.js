import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';

function SplashPage(props) {
    return(
        <div>
            <h1>Welcome to Microscope!</h1>
            <SignUp info={props}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.user.user.token
    }
}

export default connect(mapStateToProps)(SplashPage);