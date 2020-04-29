import React from 'react';
import { Card } from "react-bootstrap";
import icon from '../IMG/icon.jpg'
import { useDrag } from "react-dnd"
import { ItemTypes } from '../utils/items';


const Icon = props => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.ICON,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <Card  
        style={{width: '1rem'}}
        ref={drag}
        opacity={isDragging ? '0.5' : '1'}
        >
            <Card.Img src={`${icon}`}/>
        </Card>
    )
}

export default Icon;