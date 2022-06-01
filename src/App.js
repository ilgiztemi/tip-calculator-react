import { useState } from "react";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState("");
  const [tips, setTips] = useState("");
  const [person, setPerson] = useState("");
  const [result, setResult] = useState("");
  const handleOptions = (e) => {
    setTips(e.target.value);
  };
  const handleCalculator = () => {
    let res = (bill * tips) / person;
    setResult(res);
  }
  return (
    <div className="container">
      <h1>TIP CALCULATOR</h1>
      <div className="bill">
        <p>How much was your bill?</p>
        <label>$</label>
        <input
          onChange={(e) => {
            const input = e.target.value;
            setBill(input);
          }}
          type="text"
        />
      </div>
      <div className="service">
        <p>How was your service?</p>
        <select name="" id="select" onChange={(e) => handleOptions(e)}>
          <option value="default" disabled>
            --Choose an Option--
          </option>
          <option value="0.3">30% - Outstanding</option>
          <option value="0.2">20% - Good</option>
          <option value="0.15">15% - It was OK</option>
          <option value="0.1">10% - Bad</option>
          <option value="0.05">5% - Terrible</option>
        </select>
      </div>
      <div className="people">
        <p>How many people are sharing the bill?</p>
        <input
          onChange={(e) => {
            const people = e.target.value;
            setPerson(people);
          }}
          type="text"
        />
        <label>people</label>
      </div>
      <button onClick={handleCalculator} className="btn">CALCULATE!</button>
      <div className="output">
        {result && (
          <>
            <p>TIP AMOUNT</p>
            <p>$ {result}</p>
            <p>each</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
