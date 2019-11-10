import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";
import "./App.css";

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  

  const addBall = () => {
    setBall(ball + 1);
  };

  const addStrike = () => {
    setStrike(strike + 1);
  };

  const reset = () => {
    setBall(0);
    setStrike(0);
  };

 
  return (
    <div className="App">
      <Display ball={ball} strike={strike} />
      <Dashboard
        ball={ball}
        strike={strike}
        addBall={addBall}
        addStrike={addStrike}
        reset={reset}
      />
    </div>
  );
}

export default App;
