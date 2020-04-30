import React, { Component } from 'react';
import AuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { api } from '../api';
import { Container, Row, Col } from 'react-bootstrap';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            fields: {
                title: "",
                background_img: ""
            }
        };
    };

    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value};
        this.setState({
            fields: newFields
        });
    };
    
    handleSubmit = e => {
        e.preventDefault()
        let boardObject = {
            id: this.props.match.params.id,
            title: this.state.fields.title,
            background_img: this.state.fields.background_img,
        }

        api.boards.editBoard(boardObject)
        .then(data => {
            this.setState({
                redirect: true
            })
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
                                    Title:
                                </Form.Label>
                                <Form.Control 
                                    name="title" 
                                    placeholder="new title" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.title}
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Image Link:
                                </Form.Label>
                                <Form.Control 
                                    name="background_img" 
                                    placeholder="new image link" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.background_img}
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

export default AuthHOC(EditForm);