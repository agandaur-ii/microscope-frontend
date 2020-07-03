import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postIcon } from '../redux';
import ImageUploader from 'react-images-upload';

class CreateIconForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            title: "",
            description: "",
            type: "image",
            image: ""
        };
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onDrop = picture => {
        this.setState({ image: picture[0] })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        let iconObject = {
            icon: {
                board_id: this.props.location.state.boardId,
                title: this.state.title,
            },
            body: {
                description: this.state.description,
                body_type: this.state.type,
                image: this.state.image
            }
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
                                    value={this.state.title}
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
                                    value={this.state.description}
                                    />
                            </Form.Group>
                            <Form.Group >
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={event => this.onDrop(event)}
                                imgExtension={['.jpg', '.png', '.jpeg', '.gif']}
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