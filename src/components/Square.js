import React from 'react';

// An object containing the square style
const style = {
    background: 'dodgerblue',
    border: '2px solid black',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

// Square receives props, here destructured
// the button uses those props
const Square = ( {value, onClick}) => (
  <button onClick={onClick} style={style}>
    { value }
  </button>
)

export default Square
