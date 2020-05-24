import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postBoard } from '../redux';
import ImageUploader from 'react-images-upload';

class CreateBoardForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            userId: "",
            background_img: "",
            title: "",
        };
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onDrop = picture => {
        this.setState({ background_img: picture[0] })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        let boardObject = {
            user_id: this.props.user.data.id,
            title: this.state.title,
            background_img: this.state.background_img,
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
                                    value={this.state.title}
                                    />
                            </Form.Group>
                            <Form.Group >
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={event => this.onDrop(event)}
                                imgExtension={['.jpg', '.png', '.jpeg']}
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