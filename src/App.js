import { useState } from "react";


function App() {
  const [weight, setWeight] = useState(45);
  const [height, setHeight] = useState(145);
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <label>Weight (kg): {weight}</label>
        <br />
        <input
          clssName="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <br />
        
        <label>Height (cm): {height}</label>
        <br />
        <input
          clssName="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />

        <div className="result">
          <p>
            {((weight * 10000)/height ** 2).toFixed(1)}
          </p>
        </div>

        <div className="bmi-categories">
          <h3>BMI Categories:</h3>
          <ul>
            <li>Underweight: &lt; 18.5</li>
            <li>Normal weight: 18.5 – 24.9</li>
            <li>Overweight: 25 – 29.9</li>
            <li>Obesity: BMI of 30 or greater</li>
          </ul>
        </div>

        
      </div>
    </main>
  );
}

export default App;
