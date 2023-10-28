import * as React from 'react';
//import contextAPI
import { useGameContext } from './GameContext';
import "./App.css"

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
      <button className='square rounded-md mx-auto text-5xl text-center text-white cursor-pointer hover:bg-white hover:text-violet-400' onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }
  
  return (
    <div className='gameContainer bg-violet-600 p-4 flex flex-col items-center rounded-md'>
      <div className='gameStatusBar text-2xl mb-4 rounded-md text-center text-white bg-violet-400 p-1' >{gameStatus}</div>
      <div className='grid grid-cols-3 rounded-t-md bg-violet-900'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='grid grid-cols-3 bg-violet-900'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='grid grid-cols-3 rounded-b-md bg-violet-900'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className='mx-auto my-5 resetButton bg-violet-400 hover:bg-white text-white hover:text-violet-900 py-2 px-2 rounded-md' onClick={restart}>
        Reset Board
      </button>
    </div>
  );
}

function Game() {
  return (
    <div className='mainDiv mx-auto rounded items-center'>
      <div className='boardDiv'>
        <Board />
      </div>
    </div>
  );
}

function App() {
  return <Game />
}

export default App;
