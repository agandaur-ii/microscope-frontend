import React from "react";
import {Card, Button } from 'react-bootstrap';



function BoardCard(props) {
    const { id } = props.board.id
    const {title, background_img} = props.board.attributes

    return (
        <Card border="dark" style={{ width: '18rem' }} >
            <Card.Header>{title}</Card.Header>
            <Card.Img src={`${background_img}`} className="card-image"/>
        </Card>
    )
}

export default BoardCard;