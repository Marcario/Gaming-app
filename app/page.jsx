"use client";
import React, { useState } from "react";

// creating a function
export default function Gaming() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    if (level === 1 && score < 20) {
      setScore(score + 5);
    } else if (level === 2 && score < 50) {
      setScore(score + 10);
    } else if (level === 3 && score < 200) {
      setScore(score + 20);
    } else {
      // Level completed, move to the next level or show game over
      if (level < 3) {
        setLevel(level + 1);
        setScore(0);
      } else {
        setGameOver(true);
      }
    }
  };

  const handleGameOverClick = () => {
    setLevel(1);
    setScore(5);
    setGameOver(false);
  };
  return (
    <div class="container">
      <div className="card">
        <h1>Gaming app</h1>
        <div class="card-body">
          <h1>Welcome to the Gaming App</h1>
          <h2>Level: {level}</h2>
          <h3>Score: {score}</h3>
          {gameOver ? (
            <div>
              <p>Congratulations! You completed all levels.</p>
              <p>Total Score: {score}</p>
              <button onClick={handleGameOverClick}>Game Over</button>
            </div>
          ) : (
            <button onClick={handleClick}>Play</button>
          )}
        </div>
      </div>
    </div>
  );
}
