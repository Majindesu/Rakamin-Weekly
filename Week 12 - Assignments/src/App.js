import * as React from 'react';
//import contextAPI
import { useGameContext } from './GameContext';

/*function Board() {
  const squares = Array(9).fill(null);
  function selectSquare(square) {

  }

  function restart() {
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }
*/

//update to use context
function Board() {
  const { squares, selectSquare, restart, gameStatus } = useGameContext();

  function renderSquare(i) {
    return (
      <button className='square' onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }
  
  return (
    <div className='gameContainer'>
      <div className='gameStatusBar' >{gameStatus}</div>
      <div >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className='resetButton' onClick={restart}>
        restart
      </button>
    </div>
  );
}

function Game() {
  return (
    <div className='mainDiv'>
      <div className='boardDiv'>
        <Board />
      </div>
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
