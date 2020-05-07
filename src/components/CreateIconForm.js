import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postIcon } from '../redux';

class CreateIconForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            boardId: "",
            fields: {
                title: "",
                description: "",
                type: "image",
                content: ""
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
        let iconObject = {
            board_id: this.props.location.state.boardId,
            title: this.state.fields.title,
            description: this.state.fields.description,
            type: this.state.fields.type,
            content: this.state.fields.content
        }

        this.props.onCreateIcon(iconObject)
        this.setState({
            redirect: true
        })
    };
    

    render() {
        const {redirect} = this.state

        if (redirect) {
            return <Redirect to={{pathname: `/account/board/${this.props.location.state.boardId}`}}/>
        }

        return(
            <div>
            <h3>Create a New Icon!</h3>
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
                                    Description:
                                </Form.Label>
                                <Form.Control 
                                    name="description" 
                                    placeholder="new description" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.description}
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Image Link:
                                </Form.Label>
                                <Form.Control 
                                    name="content" 
                                    placeholder="new image link" 
                                    onChange={this.handleChange}
                                    type="text" 
                                    value={this.state.fields.content}
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

const mapDispatchToProps = dispatch => {
    return {
        onCreateIcon: (newIcon) => dispatch(postIcon(newIcon)) 
    }
}

export default composedAuthHOC(connect(null, mapDispatchToProps)(CreateIconForm));