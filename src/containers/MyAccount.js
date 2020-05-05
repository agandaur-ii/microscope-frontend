import React from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import { api } from '../api';
import { Button, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../redux';

class MyAccount extends React.Component {

    state = {
        edit: false,
        deleteCheck: false,
        deleted: false
    }

    handleEdit = () => {
        this.setState({
            edit: true
        })
    }

    handleDelete = () => {
        this.setState({
            deleteCheck: true
        })
    }

    handleGoBack = () => {
        this.setState({
            deleteCheck: false
        })
    }

    handleActualDelete = () => {
        api.user.deleteUser(this.props.user.id)
        .then(data => {
            if (data.message) {
                alert(`${data.message}`)
            } else {
                this.props.onLogout()
                this.setState({
                    deleted: true
                })
            }
        })
    }

    render() {
        const {edit, deleted} = this.state;

        if (edit) {
            return <Redirect to={`/account_edit/${this.props.user.id}`}/>
        }

        if (deleted) {
            return <Redirect to='/'/>
        }

        return(
            <div>
                <h4>Account Info</h4>
                <h5>First Name: {this.props.user.first_name}</h5>
                <h5>Last Name: {this.props.user.last_name}</h5>
                <h5>Username: {this.props.user.username}</h5>
                <Button onClick={this.handleEdit}type="submit">Edit</Button>
                {this.state.deleteCheck ? 
                    <>
                        <Button variant="secondary" onClick={this.handleGoBack} type="submit ">Keep account</Button>
                        <Button variant="danger" onClick={this.handleActualDelete} type="submit ">Confirm Deletion</Button>
                    </>
                    :
                    <Button variant="danger" onClick={this.handleDelete} type="submit ">Delete</Button>
                    }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logoutUser())
    }
}

export default composedAuthHOC(connect(mapStateToProps, mapDispatchToProps)(MyAccount));