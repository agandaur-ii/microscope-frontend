import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            fields: {
                username: "",
                password: ""
            }
        };
    };

    actualLogin(fields) {
        this.props.onAuthenticate(this.state.fields);
    };

    handleChange = (e) => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value};
        this.setState({
            fields: newFields
        });
    };
    
    handleSubmit(e) {
        e.preventDefault();
        this.actualLogin(this.state.fields);
    }

    showLoginButton() {
        return (
            <div>
                    <form onSubmit={e => this.handleSubmit(e)}> 
                        <label htmlFor="username" />
                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.fields.username}></input>
                        <label htmlFor="password" />
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.fields.password}></input>
                        <Button variant="outline-primary" type="submit">Log In</Button>
                    </form>
                </div>
        )
    }

    render() {
        return(
            <div>
                {this.showLoginButton()}
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (fields) => dispatch(fetchUser(fields))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);