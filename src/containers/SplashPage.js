import React from 'react';
import SignUp from './SignUp';

function SplashPage(props) {
    return(
        <div>
            <h1>Welcome to Microscope!</h1>
            <SignUp info={props}/>
        </div>
    );
};

export default SplashPage;