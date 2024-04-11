import React from "react";
import { useState } from "react";
import { MathGame } from "./MathGame/MathGame";
import TicTacToe from "./TicTacToe/TicTacToe";
import { Link } from "react-router-dom";
// import EnglishGame from "./FormTheWords/EnglishGame";
import classes from "./Games.module.css";
import mathgame from "../assets/images/mathgame.png";
import tictactoe from "../assets/images/tictactoe.png";
import Button from "../components/Button";

export const Games = () => {
  const [game, setGame] = useState(null);
  return (
    <>
      {game === "MathGame" && <MathGame />}
      {game === "TicTacToe" && <TicTacToe />}
      {/* {game === "EnglishGame" && <EnglishGame />} */}
      {game === null && (
        <div className={classes.homeSection}>
          <button onClick={() => setGame("MathGame")}>
            <div className={classes.card}>
              <img src={tictactoe} alt="" className={classes.img} />
              <div>
                <h1 className={classes.heading}>Maths Game</h1>
              </div>
            </div>
          </button>
          <button onClick={() => setGame("TicTacToe")}>
            <div className={classes.card}>
              <img src={mathgame} alt="" className={classes.img} />
              <div>
                <h1 className={classes.heading}>Tic Tac Toe</h1>
              </div>
            </div>
          </button>
          <Link to={`/`}>
            <Button
              className={classes.attemptquiz}
              onClick={() => setGame(null)}
            >
              Back To Home
            </Button>
          </Link>
        </div>
      )}
      {game !== null && (
        <Link to={`/games`}>
          <Button className={classes.attemptquiz} onClick={() => setGame(null)}>
            Back To Games
          </Button>
        </Link>
      )}
    </>
  );
};
