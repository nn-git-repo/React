import React, { useState } from "react";
import './Appss.css'
function FitnessApp() {
  const [steps, setSteps] = useState(0);

  return (
    <div>
      <h2>Fitness Tracker App</h2>
      <div className="card">
        <h3>Steps Count: {steps}</h3>
        <button onClick={() => setSteps(steps + 500)}>+500 Steps</button>
        <button onClick={() => setSteps(0)}>Reset</button>
      </div>
    </div>
  );
}

export default FitnessApp;
