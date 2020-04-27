import React from "react";
import Card from 'react-bootstrap/Card';



function BoardCard(props) {
    const {title, background_img, id} = props.board

    return (

        //note: fix the link for heroku functionality
        <Card style={{ width: '18rem' }} className="text-center">
            <Card.Title>{title}</Card.Title>
        </Card>
    )
}

export default BoardCard;