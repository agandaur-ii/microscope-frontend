import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import { api } from '../api';
import { Col, Button, } from 'react-bootstrap';


class MyAccount extends React.Component {

    state = {
        redirect: false,
        deleteCheck: false,
        delete: false
    }

    handleEdit = () => {
        console.log("EDIT")
        // this.setState({
        //     redirect: true
        // })
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
        console.log("DELETE")
        // api.boards.deleteBoard(this.state.board.id)
        // .then(data => {
        //     if (data.message) {
        //         alert(`${data.message}`)
        //     } else {
        //         this.setState({
        //             delete: true
        //         })
        //     }
        // })
    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
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

export default AuthHOC(MyAccount);