import React, { Component } from 'react'
import Letter from './Letter'
import '../App.css';
export default class Letters extends Component {
    render() {
        const letters = Object.keys(this.props.letterStatus)
        return (
            <>
                Availible Letters
                <br />
                {letters.map(l => <Letter letter={l} class={this.props.letterStatus[l]}
                    selectLetter={this.props.selectLetter} />)}
            </>
        )
    }
}
