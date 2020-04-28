import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Col, Button, CardGroup} from 'react-bootstrap';
import { api } from '../api';

class MyAccount extends React.Component {

    populateUserBoards = () => {
        return this.props.myBoards.map(thisBoard => {
            return (<Col xs={3} md={4}>
                        <BoardCard key={thisBoard.id} board={thisBoard} />
                    </Col>
            )
        });
    };

    newBoard = () => {

    }

    render() {
        const { first_name } = this.props.user;

        return(
            <div>
                <h4>Hello {first_name}!</h4>
                <CardGroup fluid>
                    {this.populateUserBoards()}
                </CardGroup>
                <Button variant="info" onClick={this.newBoard}>Create New Board</Button>
            </div>
        );
    };
};

export default AuthHOC(MyAccount);