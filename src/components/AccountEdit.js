import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editUser } from '../redux';

class AccountEdit extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            fields: {
                id: "",
                first_name: "",
                last_name: "",
                username: ""
            }
        };
    };

    componentDidMount() {
        this.setState({
            fields: {
                id: this.props.user.id,
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                username: this.props.user.username
            }
        })
    }

    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value};
        this.setState({
            fields: newFields
        });
    };
    
    handleSubmit = e => {
        e.preventDefault()
        let userObject = {
            id: this.state.fields.id,
            first_name: this.state.fields.first_name,
            last_name: this.state.fields.last_name,
            username: this.state.fields.username
        }
        this.props.onSubmit(userObject)

        this.setState({
            redirect: true
        })
    };
    

    render() {

        const {redirect} = this.state

        if (redirect) {
            return <Redirect to='/boards'/>
        }

        return(
            <div>
            <Container>
                <Row >
                    <Col xs={5}>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group >
                                <Form.Label>
                                    First Name:
                                </Form.Label>
                                <Form.Control 
                                    name="first_name" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.first_name}
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Last Name:
                                </Form.Label>
                                <Form.Control 
                                    name="last_name" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.last_name}
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Username:
                                </Form.Label>
                                <Form.Control 
                                    name="username" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.username}
                                    />
                            </Form.Group>
                            <Button type="submit" variant="primary">Submit Changes</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user.data.attributes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (userObject) => dispatch(editUser(userObject))
    }
}

export default composedAuthHOC(connect(mapStateToProps, mapDispatchToProps)(AccountEdit));