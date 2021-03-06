import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="character-item">
            {/* Render character's name to the screen */}
            <h1 className="character-name">{props.character.name}</h1>
            {/* Create unordered list with some details about the character */}
            <ul className="details">
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Gender: {props.character.gender}</li>
            </ul>
        </div>
    );
};

export default Character;