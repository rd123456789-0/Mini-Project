// Game.js

import React, { useState } from 'react';
import Time from './Time.js';
import Question from './Question.js';
import './Game.css'

const Game = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleTimeOver = () => {
        setGameOver(true);
    };

    const restartGame = () => {
        setScore(0);
        setGameOver(false);
    };

    return (
        <div>
            {!gameOver ? (
                <>
                    <Time onTimeOver={handleTimeOver} />
                    <Question onAnswer={handleAnswer}
                        timeOver={gameOver} />
                    <p>Score: {score}</p>
                </>
            ) : (
                <>
                    <p>Time's up! Your final score is {score}.</p>
                    <button onClick={restartGame} className='button'>
                        Restart Game
                    </button>
                </>
            )}
        </div>
    );
};

export default Game;
