import React from 'react';
import {Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const AuthHOC = (WrappedComponent, ) => {
    return class AuthHOC extends React.Component {
        isAuthorized = () => {
            if (this.props.token) {
                return true
            } else {
                return false
            }
        }

        render() {
            return (
                <> 
                    {this.isAuthorized()
                    ?<WrappedComponent {...this.props} />
                    :<Redirect to="/" />}
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token
    }
}

const composedAuthHOC = compose(
    connect(mapStateToProps, null),
    AuthHOC
)

export default composedAuthHOC;