import React from 'react'
import './card.style.css'


export const Card = (props) => {
    return (
        <div className = 'card-container'>
            <img className = 'img-resize' alt = 'monster' src = {`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2> {props.monster.name} </h2>
            <p> {props.monster.name}</p>
        </div>
    )
}
