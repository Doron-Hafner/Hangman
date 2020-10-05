import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        const score = this.props.score
        const scoreClass = score > 80 ? 'high-score' : score > 50 ? 'medium-score' : 'low-score'
        return (
            <div className={scoreClass} >
                {score}
            </div>
        )
    }
}
