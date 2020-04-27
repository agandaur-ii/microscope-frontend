import React, { Component } from 'react';
import { api } from '../api';
import { Container } from 'react-bootstrap';

class Board extends Component {
    constructor() {
        super();
        this.state ={
            board: {},
            icons: [],
            user: ""
        }
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                
                <div>

                </div>
            </div>
        )
    }
}

export default Board;