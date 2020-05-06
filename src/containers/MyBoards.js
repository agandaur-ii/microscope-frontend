import React from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Redirect } from "react-router-dom";
import { Col, Button, CardGroup} from 'react-bootstrap';
import { connect } from 'react-redux';


class MyBoards extends React.Component {

    state = {
        redirect: false,
    }

    myBoards = () => {
        return this.props.allBoards.boards.filter(board => 
            board.attributes.user_id === this.props.user.attributes.id
            && 
            board.attributes.parent === null
        )
    }

    populateUserBoards = () => {
        return this.myBoards().map(thisBoard => {
            return (<Col xs={3} md={4} key={thisBoard.id}>
                        <BoardCard board={thisBoard} />
                    </Col>
            )
        });
    };

    newBoard = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to='/board/create'/>
        }

        if (this.props.allBoards.loading) {
            return <h3>Please Hold</h3>
        }

        return(
            <div>
                <h4>Hello {this.props.user.first_name}!</h4>
                <CardGroup >
                    {this.populateUserBoards()}
                </CardGroup>
                <Button variant="info" onClick={this.newBoard}>Create New Board</Button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allBoards: state.boards,
        user: state.user.user.data
    }
}


export default composedAuthHOC(connect(mapStateToProps)(MyBoards));