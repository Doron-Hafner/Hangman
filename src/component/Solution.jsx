import React, { Component } from 'react'
import Letter from './Letter'

export default class Solution extends Component {
    render() {
        const word = this.props.solution.word.split("")
        const hint = this.props.solution.hint
        const letterStatus = this.props.letterStatus
        return (
            <div>
                {word.map(letter => <Letter letter={letterStatus[letter] ? letter : ' __ '} />)}
                <div> {hint} </div>
            </div>
        )
    }
}
