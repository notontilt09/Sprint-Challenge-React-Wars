import React from 'react'

const Character = props => {
    return (
        <div className="character-item">
            <h1>{props.character.name}</h1>
        </div>
    );
}

export default Character;