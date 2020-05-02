import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import BoardCard from '../components/BoardCard';
import { Redirect } from "react-router-dom";
import { Col, Button, CardGroup} from 'react-bootstrap';
import { connect } from 'react-redux';


class MyBoards extends React.Component {

    state = {
        redirect: false,
    }

    componentDidMount() {
        console.log(this.props.user)
        console.log("props from My Boards ^^")
    }


    // myBoards={this.state.allBoards.filter(b => 
    //     b.user_id === this.state.auth.user.user_id 
    //     && b.attributes.parent === null
    //     )
    //   } 

    //filter boards before getting here

    // populateUserBoards = () => {
    //     return this.props.myBoards.map(thisBoard => {
    //         return (<Col xs={3} md={4}>
    //                     <BoardCard key={thisBoard.id} board={thisBoard} />
    //                 </Col>
    //         )
    //     });
    // };

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


        return(
            <div>
                <h4>Hello {this.props.user.first_name}!</h4>
                <CardGroup >
                    {/* {this.populateUserBoards()} */}
                </CardGroup>
                <Button variant="info" onClick={this.newBoard}>Create New Board</Button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        myBoards: state.boards
    }
}

export default AuthHOC(connect(mapStateToProps)(MyBoards));