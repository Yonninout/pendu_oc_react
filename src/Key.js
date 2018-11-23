import React from 'react'
import PropTypes from 'prop-types'
import './css/Key.css';

const Key = ({char, index,handleKeyClick}) => (

      <div className="Key" onClick={() => handleKeyClick(char)}>
        <KeyContent char={char} />
        {/* {char} */}
      </div>
)

const KeyContent = ({char}) => (
  <div className="KeyContent">{char}</div>
)

Key.propTypes = {
  char:PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}
export default Key;
