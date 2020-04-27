import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Col, Button } from 'react-bootstrap';
import { api } from '../api';

class MyAccount extends React.Component {

    state = {
        quizClick: false,
        scoreClick: false,
        scores: {},
    }

    componentDidMount() {
        this.populateUserBoards()
    };

    populateUserBoards = () => {
        return this.props.myBoards.map((thisBoard) => {
                return (<Col><BoardCard key={thisBoard.id} quiz={thisBoard} /></Col>)
        });
    };

    
    render() {
        const { first_name } = this.props.user;

        return(
            <div>
                <h4>Hello {first_name}!</h4>
                
            </div>
        );
    };
};

export default AuthHOC(MyAccount);