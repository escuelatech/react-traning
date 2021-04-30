import React from 'react';

function SuperHero(props) {
    return (
        <div className="hero-details">
            <img src={props.imgUrl}/>
            <h1>{props.name}</h1>
            <h3>Powers: {props.powers}</h3>
           
        </div>
    );
}

export default SuperHero;   