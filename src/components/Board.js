import React, { Component } from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import { Redirect } from "react-router-dom"
import { Button, Col, Row, Container } from 'react-bootstrap';
import BoardGridDrag from './BoardGridDrag';
import IconContainer from '../containers/IconContainer';
import { connect } from 'react-redux';
import { deleteBoard } from '../redux';
import { fetchIcons } from '../redux';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            delete: false,
            deleteCheck: false,
            add_icon: false
        }
    };

    componentDidMount() {
        this.props.getIcons()
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

    render() {
        const {edit} = this.state

        if (edit) {
            return <Redirect to={{
                pathname: `/edit/board/${this.props.match.params.id}`,
                state: this.state.board
            }}/>
        }

        if (this.state.add_icon) {
            return <Redirect to={{
                pathname: "/icon/create",
                state: {boardId: this.props.match.params.id}
            }}/>
        }

        if (this.state.delete) {
            return <Redirect to="/boards"/>
        }

        if (this.props.allBoards.loading) {
            return <h5>Please Hold</h5>
        }

        if (this.props.icons.loading) {
            return <h5>Please Hold</h5>
        }

        const thisBoard = this.props.boards.find(board => 
            board.id === this.props.match.params.id
        ) 

        return (
            <Container >
            <Row>
                <Col md={9}>
                    <h2>{thisBoard.attributes.title}</h2>
                    <BoardGridDrag image={thisBoard.links.custom_url}/>
                <div>
                    <Button variant="outline-primary" onClick={this.handleEdit}type="submit ">Edit</Button>
                    {this.state.deleteCheck ? 
                    <>
                        <Button variant="secondary" onClick={this.handleGoBack} type="submit ">Keep this board</Button>
                        <Button variant="danger" onClick={this.handleActualDelete} type="submit ">Confirm Deletion</Button>
                    </>
                    :
                    <Button variant="outline-danger" onClick={this.handleDelete} type="submit ">Delete</Button>
                    }
                </div>
                </Col>
                <Col md={3}>
                    <IconContainer thisBoard={thisBoard}/>
                <div>
                    <Button variant="info" onClick={this.handleIconButton} type="submit">Add Icon</Button>
                </div>
                </Col>
            </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        allBoards: state.boards,
        boards: state.boards.boards,
        icons: state.icons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(deleteBoard(id)),
        getIcons: () => dispatch(fetchIcons())
    }
}

export default composedAuthHOC(connect(mapStateToProps, mapDispatchToProps)(Board));