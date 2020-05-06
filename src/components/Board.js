import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom"
import { Button } from 'react-bootstrap';
import BoardGrid from './BoardGrid';
import Icon from './Icon';
import { connect } from 'react-redux';
import { deleteBoard } from '../redux';

class Board extends Component {
    constructor() {
        super();
        this.state ={
            edit: false,
            delete: false,
            deleteCheck: false,
            add_icon: false
        }
    };

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
        this.props.onDelete(this.props.match.params.id)
        this.setState({
            delete: true
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
                pathname: `/edit/board/${this.props.match.params.id}`,
                state: this.state.board
            }}/>
        }

        if (this.state.delete) {
            return <Redirect to="/boards"/>
        }

        if (this.props.allBoards.loading) {
            return <h3>Please Hold</h3>
        }

        const thisBoard = this.props.boards.find(board => 
            board.id === this.props.match.params.id
        )

        return (
            <div>
                <h2>{thisBoard.attributes.title}</h2>
                <div>
                    {this.state.add_icon ?
                    <Button variant="info" onClick={this.handleDoneEditting} type="submit">Done Adding Icons</Button>
                    : 
                    <Button variant="info" onClick={this.handleIconButton} type="submit">Add Icon</Button>
                    }
                    {this.state.add_icon ? <div>"Drag Me!"<Icon /></div>: null}
                </div>
                <div>
                    <BoardGrid image={thisBoard.attributes.background_img}/>
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

const mapStateToProps = state => {
    return {
        allBoards: state.boards,
        boards: state.boards.boards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(deleteBoard(id))
    }
}

export default composedAuthHOC(connect(mapStateToProps, mapDispatchToProps)(Board));