import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import {Card, Button } from 'react-bootstrap';



class BoardCard extends Component {
    state = {
        redirect: false
    }

    handleClick = () => {
        this.setState({
            redirect: true
        })
        
    }

    render() {
        const {redirect} = this.state

        if (redirect) {
            return <Redirect to={{
                pathname: `/account/board/${this.props.board.id}`,
                state: this.props.board
            }}/>
        }

        return (
            <>
                <Card className="text-center" border="dark" style={{ width: '24 rem'}} >
                    <Card.Header>{this.props.board.attributes.title}</Card.Header>
                    <Card.Img src={`${this.props.board.attributes.background_img}`} className="card-image"/>
                </Card>
                <Button
                    onClick={this.handleClick} 
                    variant="outline-primary" 
                    size="lg" 
                    type="submit"
                    block
                >View</Button>
            </>
        )
    }
}

export default BoardCard;