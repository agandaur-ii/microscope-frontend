import React, { Component } from 'react';
import AuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom"
import { api } from '../api';
import { Button } from 'react-bootstrap';
import BoardGrid from './BoardGrid';
import Icon from './Icon';

class Board extends Component {
    constructor() {
        super();
        this.state ={
            board: {},
            edit: false,
            delete: false,
            deleteCheck: false,
            add_icon: false
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
        this.setState({
            edit: true
        })
    }

    handleDelete = () => {
        this.setState({
            deleteCheck: true
        })
    }

    handleGoBack = () => {
        this.setState({
            deleteCheck: false
        })
    }

    handleActualDelete = () => {
        api.boards.deleteBoard(this.state.board.id)
        .then(data => {
            if (data.message) {
                alert(`${data.message}`)
            } else {
                this.setState({
                    delete: true
                })
            }
        })
    }

    handleIconButton = () => {
        this.setState({
            add_icon: true
        })
    }

    handleDoneEditting = () => {
        this.setState({
            add_icon: false
        })
    }

    render() {
        const {edit} = this.state

        if (edit) {
            return <Redirect to={{
                pathname: `/edit/${this.props.match.params.id}`,
                state: this.state.board
            }}/>
        }

        if (this.state.delete) {
            return <Redirect to="/boards"/>
        }


        return (
            <div>
                <h2>{this.state.board.title}</h2>
                <div>
                    {this.state.add_icon ?
                    <Button variant="info" onClick={this.handleDoneEditting} type="submit">Done Adding Icons</Button>
                    : 
                    <Button variant="info" onClick={this.handleIconButton} type="submit">Add Icon</Button>
                    }
                    {this.state.add_icon ? <div>"Drag Me!"<Icon /></div>: null}
                </div>
                <div>
                    <BoardGrid image={this.state.board.background_img}/>
                </div>
                <div>
                    <Button onClick={this.handleEdit}type="submit ">Edit</Button>
                    {this.state.deleteCheck ? 
                    <>
                        <Button variant="secondary" onClick={this.handleGoBack} type="submit ">Keep this board</Button>
                        <Button variant="danger" onClick={this.handleActualDelete} type="submit ">Confirm Deletion</Button>
                    </>
                    :
                    <Button variant="danger" onClick={this.handleDelete} type="submit ">Delete</Button>
                    }
                </div>
                
            </div>
        )
    }
}

export default AuthHOC(Board);