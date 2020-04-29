import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { api } from '../api';
import { Container, Row, Col } from 'react-bootstrap';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            errors: false,
            fields: {
                id: "",
                title: "",
                background_img: "",
                parent_id: null
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
            id: this.state.fields.id,
            title: this.state.fields.title,
            background_img: this.state.fields.background_img,
            parent_id: this.state.fields.parent_id,
            password: this.state.fields.password
        }

        api.boards.editBoard(boardObject)
        .then(data => {
            console.log(data)
        })
    };
    

    render() {
        return(
            <>
            <Container>
                <Row >
                    <Col xs={5}>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group >
                                <Form.Label>
                                    Title:
                                </Form.Label>
                                <Form.Control 
                                    name="first_name" 
                                    placeholder="title" 
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
                                    name="last_name" 
                                    placeholder="image link" 
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
            </>
        )
    }
}

export default EditForm;