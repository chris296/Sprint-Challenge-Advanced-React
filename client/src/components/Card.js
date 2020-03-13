import React from 'react';

const Card = props => {

    return(
        <div>
            <h1>{props.data.name}</h1>
            <h2>{props.data.country}</h2>
            <p>{props.data.searches} searches</p>
        </div>
    )
}

export default Card;