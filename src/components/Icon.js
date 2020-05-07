import React, { Component } from 'react';
import { connect } from 'react-redux';
import composedAuthHOC from '../HOC/AuthHOC';
import { deleteIcon } from '../redux';
import { Card, Button } from "react-bootstrap";


class Icon extends Component {
    state = {
        reveal: false,
        hover: false
    }
    

    handleClick = () => {
        this.setState({
            reveal: !this.state.reveal
        })
    }

    handleHoverOver = () => {
        this.setState({
            hover: true
        })
    }

    handleHoverAway = () => {
        this.setState({
            hover: false
        })
    }
    
    handleDelete = () => {
        this.props.onDelete(this.props.thisIcon.attributes.id)
    }

    render() {
        const {bodies} = this.props.thisIcon.attributes
        return (
            <Card
                className="border-secondary mb-3" 
                onClick={this.handleClick} 
                onMouseEnter={this.handleHoverOver} 
                onMouseLeave={this.handleHoverAway}
                style={{ width: '3rem' }}
            >
                <Card.Header>{this.props.thisIcon.attributes.title}</Card.Header>
                <Card.Text>{bodies[0].description}</Card.Text>
                {this.state.reveal ?
                <> 
                    <Card.Img src={bodies[0].content}/>
                    <Button variant="info" type="submit">View</Button>
                </>    
                :
                null
                }
                {this.state.reveal && this.state.hover ?
                <> 
                    <Button variant="outline-danger" onClick={this.handleDelete}type="submit">Delete</Button>
                </>    
                :
                null
                }
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(deleteIcon(id))
    }
}

export default composedAuthHOC(connect(null, mapDispatchToProps)(Icon));