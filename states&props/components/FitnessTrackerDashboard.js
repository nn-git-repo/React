import React, { useState } from "react";
import './Appss.css'
const StepsTracker = ({ steps, updateSteps }) => (
  <div>
    <h3>Steps: {steps}</h3>
    <button onClick={() => updateSteps(steps + 1000)}>+1000 Steps</button>
  </div>
);

const CaloriesTracker = ({ calories, updateCalories }) => (
  <div>
    <h3>Calories: {calories}</h3>
    <button onClick={() => updateCalories(calories + 100)}>+100 Calories</button>
  </div>
);

const WaterTracker = ({ water, updateWater }) => (
  <div>
    <h3>Water Intake: {water} glasses</h3>
    <button onClick={() => updateWater(water + 1)}>+1 Glass</button>
  </div>
);

const FitnessApp = () => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <div>
      <h1>Fitness Tracker Dashboard</h1>
      <StepsTracker steps={steps} updateSteps={setSteps} />
      <CaloriesTracker calories={calories} updateCalories={setCalories} />
      <WaterTracker water={water} updateWater={setWater} />
      <h2>Total Summary: Steps {steps}, Calories {calories}, Water {water}</h2>
    </div>
  );
};

export default FitnessApp;
