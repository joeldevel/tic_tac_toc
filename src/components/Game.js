import React, { useState } from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';
const styles = {
  width: '200px',
  display:'inline-block',
  color: 'dodgerblue',
  margin:'0 auto'
}
const Game = () => {
  // use hooks, the initial state of board is a 9 null array
  const [ board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const preBoard = [ ...board];
    if( winner || preBoard[i]) return;
    // Fill button accordingly
    preBoard[i] = xIsNext? 'X':'O';
    // update board state
    setBoard( preBoard );
    // update xIsNext
    setXisNext( !xIsNext );
  }
  const jumpTo = () => {

  }
  const renderMoves = () => {
    return <button onClick={() => setBoard(Array(9).fill(null))}>
               Start Game
    </button>
  }
  return (
    <>
      <Board squares={board} onClick={handleClick}/>
      <div style={styles}>
          <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
          {renderMoves()}
      </div>
    </>
  )
}

export default Game
