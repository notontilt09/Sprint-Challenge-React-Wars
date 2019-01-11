import React from 'react'
import Character from './Character'

const CharacterList = props => {
    return (
        props.characters.map(character => 
        <Character key={Math.random()} character={character} />
        )
    );
}

export default CharacterList;