import React from 'react';
import Icon from "../components/Icon";
import { connect } from 'react-redux';
import { CardGroup} from 'react-bootstrap';

class IconContainer extends React.Component {

    state = {
        noIcons: false
    }

    // componentDidMount() {
    //     const test = this.props.icons.filter(icon => 
    //         icon.attributes.board_id === this.props.thisBoard.attributes.id
    //     )
    //     console.log(test)
    // }
    
    thisBoardIcons = () => {
        return this.props.icons.filter(icon => 
            icon.attributes.board_id === this.props.thisBoard.attributes.id
        )
    }

    populateIcons = () => {
        return this.thisBoardIcons().map(currentIcon => {
            return (
                <CardGroup key={currentIcon.id}>
                    <Icon
                     thisIcon={currentIcon} />
                </CardGroup>
            )
        })
    }

    render() {

        if (this.state.noIcons) {
            return (
                <div></div>
            )
        }

        return (
            <div>
                {this.populateIcons()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        iconLoad: state.icons,
        icons: state.icons.icons
    }
}

export default connect(mapStateToProps)(IconContainer);