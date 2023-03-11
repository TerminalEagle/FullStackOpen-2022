import { useState } from "react";

const PrimaryHeading = ({ text }) => {
  return <h1>{text}</h1>;
};

const SecondaryHeading = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticData = ({ data }) => {
  return <td>{data}</td>;
};

const StatisticsRow = ({ text, count }) => {
  return (
    <tr>
      <StatisticData data={text} />
      <StatisticData data={count} />
    </tr>
  );
};

const StatisticsBody = ({ data }) => {
  const [good, neutral, bad, total, average, positive] = data;
  return (
    <tbody>
      <StatisticsRow text={"good"} count={good} />
      <StatisticsRow text={"neutral"} count={neutral} />
      <StatisticsRow text={"bad"} count={bad} />
      <StatisticsRow text={"total"} count={total} />
      <StatisticsRow text={"average"} count={average} />
      <StatisticsRow text={"positive"} count={positive} />
    </tbody>
  );
};

const Statistics = ({ data }) => {
  return (
    <table>
      <StatisticsBody data={data} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (good / total) * 100 || 0;

  return (
    <div>
      <PrimaryHeading text={"give feedback"} />
      <Button handleClick={incrementGood} text={"good"} />
      <Button handleClick={incrementNeutral} text={"neutral"} />
      <Button handleClick={incrementBad} text={"bad"} />

      <SecondaryHeading text={"statistics"} />
      <Statistics data={[good, neutral, bad, total, average, positive + " %"]} />
    </div>
  );
};

export default App;
