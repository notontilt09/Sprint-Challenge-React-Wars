import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return (
        <div>
            <h1>Page: {props.page}</h1>
            {props.characters.map(character => 
            <Character key={Math.random()} character={character} />)}
        </div>   
    )
};

export default CharacterList;