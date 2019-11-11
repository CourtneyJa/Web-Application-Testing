import React from "react";

export default function Display(props) {
  return (
    <div className="score-board">
      
      <p data-testid="ball">Strike: {props.strike}</p>
      <p data-testid="ball">{props.hit}</p>
      <p data-testid="ball">{props.foul}</p>
      <p data-testid="ball">Ball: {props.ball}</p>
    </div>
  );
}
