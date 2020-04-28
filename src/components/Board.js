import React, { Component } from 'react';
import { api } from '../api';
import { Container, Button } from 'react-bootstrap';

class Board extends Component {
    constructor() {
        super();
        this.state ={
            board: {},
            icons: []
        }
    };

    componentDidMount() {
        this.getBoard(this.props)
    }

    getBoard = (props) => {
        if (props.match.params !== undefined) {
            console.log("Inside if statement")
            api.boards.getBoard(props.match.params.id)
            .then(data => {
                this.setState({
                    board: [],
                    icons: [],
                    user: ""
                }, console.log(data))
            })
        } else {
            console.log("SKIPPED")
        }
    }

    render() {
        return (
            <div>
                <h2>Board Page</h2>
                
                <div>

                </div>
            </div>
        )
    }
}

export default Board;