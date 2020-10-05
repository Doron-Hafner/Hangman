import React from 'react'

const Letter = props => {
    const guess = props.class,
        selectLetter = () => props.selectLetter(props.letter, guess)

    return (
        <span style={{ textDecoration: guess ? 'line-through' : 'none' }} onClick={selectLetter}>
            {props.letter}
        </span>
    )
}

export default Letter
