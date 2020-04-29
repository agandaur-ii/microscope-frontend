import React, { Component } from 'react';
import AuthHOC from '../HOC/AuthHOC';
import { api } from '../api';
import { Col, Button } from 'react-bootstrap';
import BoardGrid from './BoardGrid';
import Icon from './Icon';

class Board extends Component {
    constructor() {
        super();
        this.state ={
            board: {},
            edit: false
        }
    };

    componentDidMount() {
        this.getBoard(this.props)
    }

    getBoard = (props) => {
        api.boards.getBoard(props.match.params.id)
        .then(data => {
            this.setState({
                board: data.data.attributes
            })
        })
    }

    handleEdit = () => {
        console.log("EDIT")
        // this.setState({
        //     edit: true
        // })
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }

    handleDelete = () => {
        console.log("DELETE")
    }

    render() {
        return (
            <div>
                <h2>{this.state.board.title}</h2>
                <div>
                    {this.state.edit ? <Icon /> : null}
                </div>
                <div>
                    <BoardGrid image={this.state.board.background_img}/>
                </div>
                <div>
                    <Button onClick={this.handleEdit}type="submit ">Edit</Button>
                    <Button variant="danger" onClick={this.handleDelete} type="submit ">Delete</Button>
                </div>
                
            </div>
        )
    }
}

export default AuthHOC(Board);