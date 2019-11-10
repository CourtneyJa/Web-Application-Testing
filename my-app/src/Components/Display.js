import React from "react";

export default function Display(props) {
  return (
    <div className="score-board">
      
      <p>Strike: {props.strike}</p>
      <p>{props.hit}</p>
      <p>{props.foul}</p>
      <p>Ball: {props.ball}</p>
    </div>
  );
}
