import React from 'react';

// squre receives props, here destructured
// the button uses those props
const Square = ( {value, onClick}) => (
  <button onClick={onClick}>
    { value }
  </button>
)

export default Square
