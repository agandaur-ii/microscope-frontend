import React from 'react';
import { Card } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from '../utils/items';

const BoardGrid = props => {

    const[{ isOver }, drop] = useDrop({
        accept: ItemTypes.ICON,
        drop: (item, monitor) => console.log(item),
        collect:  monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <>
            <Card
                ref={drop}
                border={isOver ? 'danger' : 'dark'}
                style={{ width: '70rem', height: '40rem'}}
            >
                <Card.Img 
                src={`${props.image}`}
                />
            </Card>
        </>
    )
}

export default BoardGrid;