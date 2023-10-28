import React, { createContext, useContext, useState } from 'react'

const GameContext = createContext();
export function useGameContext() {
    return useContext(GameContext);
}

export function GameProvider({ children }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xNext, setXNext] = useState(true);

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const selectSquare = (square) => {
        if (squares[square] || calculateWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[square] = xNext ? 'X':'O';

        setSquares(newSquares);
        setXNext(!xNext);
    };

    const restart = () => {
        setSquares(Array(9).fill(null));
        setXNext(true);
    };

    const winner = calculateWinner(squares);
    const gameStatus = winner ? `${winner} is the winner!` : squares.every(Boolean) ? `Scratch: Cat's Game` : `Next player: ${xNext ? 'X':'O'}`;
    
    const value = {
        squares,
        selectSquare,
        restart,
        gameStatus,
    };

    return <GameContext.Provider value = {value}> { children } </GameContext.Provider>;
}