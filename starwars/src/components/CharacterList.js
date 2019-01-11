import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return (
        <div>
            <h1>Page: {props.page}</h1>
            {/* Map over characters array from state and display new Character component for each item in array */}
            {props.characters.map(character => 
            <Character key={Math.random()} character={character} />)}
        </div>   
    )
};

export default CharacterList;