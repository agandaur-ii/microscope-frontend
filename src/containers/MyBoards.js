import React from 'react';
import composedAuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Redirect } from "react-router-dom";
import { Row, Col, Button, CardGroup} from 'react-bootstrap';
import { connect } from 'react-redux';


class MyBoards extends React.Component {

    state = {
        redirect: false,
    }

    myBoards = () => {
        return this.props.allBoards.boards.filter(board => 
            board.attributes.user_id === this.props.user.attributes.id
            // && 
            // board.attributes.parent === null
        )
    }

    populateUserBoards = () => {
        return this.myBoards().map(thisBoard => {
            return (
                <Col key={thisBoard.id}>
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
            return <h5>Please Hold</h5>
        }

        if (this.props.icons.loading) {
            return (
                <h5>Please hold</h5>
            )
        }

        return(
            <div>
                <h4><em>Hello {this.props.user.attributes.first_name}!</em></h4>
                <CardGroup >
                <Row>
                    {this.populateUserBoards()}
                </Row>
                </CardGroup>
                <Button variant="info" onClick={this.newBoard}>Create New Board</Button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allBoards: state.boards,
        user: state.user.user.data,
        icons: state.icons
    }
}


export default composedAuthHOC(connect(mapStateToProps)(MyBoards));