import React, { Component } from 'react'

export default class EndGame extends Component {

    gameStatus() {
        if (this.props.gameStatus === 'loose') {
            return <div>Answer is {this.props.word}</div>
        } else return <div>Congretulations!</div>
    }
    render() {
        return (
            <> {this.gameStatus()} <button onClick={this.props.reset} > Reset Game</button></>
        )
    }
}
