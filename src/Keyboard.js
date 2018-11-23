import React, {Component} from 'react'
import Key from './Key'
import PropTypes from 'prop-types'
import './css/Keyboard.css';



// const alphabet =['a']

class Keyboard extends Component {
  alphabet = ['a','z','e','r','t','y','u','i','o','p',
              'q','s','d','f','g','h','j','k','l','m',
              'w','x','c','v','b','n']
  render() {
    const test = this.alphabet.map((currElement, index) =>
       <Key
        key = {index}
        index = {index}
        char = {currElement}
        handleKeyClick = {this.props.handleKeyClick}
      />
    )

    return (
      <div className="Keyboard">
        {test}
      </div>
    )
  }
}

Keyboard.propTypes = {
  handleKeyClick: PropTypes.func.isRequired,
}


export default Keyboard;
