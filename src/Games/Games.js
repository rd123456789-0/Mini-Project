import React from "react";
import { useState } from "react";
import { MathGame } from "./MathGame/MathGame";
import TicTacToe from "./TicTacToe/TicTacToe";

export const Games = () => {
  const [game, setGame] = useState(null);
  return (
    <>
      {game === null && (
        <div>
          <button onClick={() => setGame("MathGame")}>MathsGame</button>
        </div>
      )}
      {game === null && (
        <div>
          <button onClick={() => setGame("TicTacToe")}>TicTacToe</button>
        </div>
      )}
      {game === "MathGame" && <MathGame />}
      {game === "TicTacToe" && <TicTacToe />}
    </>
  );
};
