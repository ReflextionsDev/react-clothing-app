import React from 'react'

export default function Item(props) {
    return (
        <div>
            <h2>{props.type}</h2>
            <img src={props.image}></img>
            <h3>{props.desc}</h3>
        </div>
    )
}