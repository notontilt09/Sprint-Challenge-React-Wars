import React from 'react'
import Character from './Character'

const CharacterList = props => {
    return (
        props.characters.map(character => 
        <Character key={Math.random()} name={props.characters.name} />
        )
    );
}

export default CharacterList;