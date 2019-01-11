import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="character-item">
            <h1>{props.character.name}</h1>
            <ul>
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Gender: {props.character.gender}</li>
            </ul>
        </div>
    );
};

export default Character;