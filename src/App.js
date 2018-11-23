import React, { Component } from 'react';
import GuessWord from './GuessWord'
import Keyboard from './Keyboard'
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }

  state = {
    wordToFind: 'test',
    attempt: new Set(),
    guesses: 0,
    life: 10,
    score: 0,
  };

  handleKeyClick(char) {
    console.log("clicked ",char);
    //TODO bahaviour on good choise
    //TODO beahaviour on bad choise
    //TODO bahaviour on already choosed letter

    this.setState({
      attempt: this.state.attempt.add(char),
      guesses: this.state.guesses + 1,
    })
    console.log(this.state)
  }

  render() {
    const {wordToFind, attempt, guesses} = this.state
    return (
      <div>
        <GuessWord
          wordToFind = {wordToFind}
          attempt =  {attempt}
          guesses = {guesses}
        />
        <Keyboard
          handleKeyClick={this.handleKeyClick}
        />
      </div>
    )
  }
}

export default App;
