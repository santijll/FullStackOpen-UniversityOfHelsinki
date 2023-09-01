/* eslint-disable react/prop-types */

import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  // sum of points assigned to feedback (used to calculate average), where good is 1 point, neutral 0, and bad -1
  const [sum, setSum] = useState(good);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setSum(sum + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setSum(sum - 1);
  };

  return (
    <>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistics bad={bad} neutral={neutral} good={good} all={all} sum={sum} />
    </>
  );
}

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text={"good"} />
      <Button handleClick={handleNeutral} text={"neutral"} />
      <Button handleClick={handleBad} text={"bad"} />
    </>
  );
};

const Button = ({ text, handleClick }) => (
  <button
    onClick={handleClick}
    style={{
      padding: "0.5rem",
      borderRadius: "15px",
      margin: "0 0.5rem",
      textTransform: "uppercase",
    }}
  >
    {text}
  </button>
);

const Statistics = ({ bad, neutral, good, all, sum }) => {
  if (all === 0) {
    return <p style={{ fontStyle: "italic" }}>No feedback given</p>;
  } else {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={(sum / all).toFixed(2)} />
          <StatisticLine
            text={"positive"}
            value={`${((good / all) * 100).toFixed(2)}%`}
          />
        </table>
      </>
    );
  }
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td style={{ fontWeight: "bold" }}>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
