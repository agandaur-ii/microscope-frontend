import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postBoard } from '../redux';

class CreateBoardForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            userId: "",
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
            user_id: this.props.user.data.id,
            title: this.state.fields.title,
            background_img: this.state.fields.background_img,
        }

        this.props.onCreateBoard(boardObject)
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
            <h3>Create a New Board!</h3>
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

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateBoard: (newBoard) => dispatch(postBoard(newBoard)) 
    }
}

export default composedAuthHOC(connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm)); 