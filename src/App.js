import React, { Component } from 'react';
import './App.css';
import EndGame from './component/EndGame';
import Letters from './component/Letters';
import Score from './component/Score';
import Solution from './component/Solution';
import { randomQuestion } from './component/Questions'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      guessSum: 0,
      solution: randomQuestion(),
      score: 100,
    }
  }

  generateLetterStatuses = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let letterStatus = {}
    letters.map(l => letterStatus[l] = false)
    return letterStatus
  }

  selectLetter = (letter, guess) => {
    if (!guess) {
      const newLetterStat = { ...this.state.letterStatus },
        word = this.state.solution.word,
        score = this.state.score
      newLetterStat[letter] = true
      this.setState({
        letterStatus: newLetterStat,
        score: word.includes(letter) ? score + 5 : score - 20
      })
      this.updateGuessSum(letter)
    }
  }

  updateGuessSum = (letter) => {
    let word = this.state.solution.word.split(''),
      sum = this.state.guessSum
    word.forEach(l => {
      if (l === letter) sum++
    })
    this.setState({ guessSum: sum })
  }

  gameStatus = () => {
    return this.state.score <= 0 ? 'loose' :
      this.state.solution.word.length === this.state.guessSum ? 'win' : null
  }

  gameReset = () => {
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      guessSum: 0,
      solution: randomQuestion(),
      score: 100,
    })
  }

  render() {
    const letterStatus = this.state.letterStatus,
      solution = this.state.solution,
      score = this.state.score,
      status = this.gameStatus()

    return (
      <div className="App">
        {status ?
          <EndGame gameStatus={status} word={this.state.solution.word} reset={this.gameReset} />
          : <>
            <Score score={score} />
            <Solution letterStatus={letterStatus} solution={solution} />
            <Letters letterStatus={letterStatus} selectLetter={this.selectLetter} />
          </>
        }
      </div>
    )
  }
}

