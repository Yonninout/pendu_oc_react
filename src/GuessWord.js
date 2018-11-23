import React from 'react';
import PropTypes from 'prop-types'
import './css/GuessWord.css';

const GuessWord = ({wordToFind, attempt, guesses}) => (

      <div className="GuessWord">
        {computeDisplay(wordToFind,attempt)}
        {attempt}
        {guesses}
      </div>
)

function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g,
    (letter) => (usedLetters.has(letter) ? letter : '_')
  )
}

GuessWord.propTypes = {
	wordToFind: PropTypes.string.isRequired,
	attempt: PropTypes.instanceOf(Set).isRequired,
	guesses: PropTypes.number.isRequired,
}


export default GuessWord;
