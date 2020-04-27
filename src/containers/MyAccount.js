import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Col, Button, Container} from 'react-bootstrap';
import { api } from '../api';

class MyAccount extends React.Component {

    populateUserBoards = () => {
        return this.props.myBoards.map(thisBoard => {
            return (<Col><BoardCard key={thisBoard.id} board={thisBoard} /></Col>)
        });
    };

    newBoard = () => {

    }

    render() {
        const { first_name } = this.props.user;

        return(
            <div>
                <h4>Hello {first_name}!</h4>
                <Container>
                    {this.populateUserBoards()}
                </Container>
                <Button onClick={this.newBoard}>Create New Board</Button>
            </div>
        );
    };
};

export default AuthHOC(MyAccount);