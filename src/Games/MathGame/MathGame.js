import React from "react";
import './Game.css'
import Game from "./Game";

export const MathGame = () => {
  return (
    <div className='body'>
        <div className="container">
      <div className="box">
        <h1>Math Sprint Game</h1>
        <Game />
      </div>
    </div>
    </div>
  );
};
