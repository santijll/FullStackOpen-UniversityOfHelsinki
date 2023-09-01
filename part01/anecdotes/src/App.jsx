/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  return (
    <div>
      <Heading text={"Anecdote of the day"} />
      <Anecdote anecdotes={anecdotes} selection={selected} />
      <Votes votes={votes} selection={selected} />
      <Button handleClick={handleVote} text={"vote"} />
      <Button handleClick={handleNextAnecdote} text={"next anecdote"} />
      <Heading text={"Anecdote with most votes"} />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

const Heading = ({ text }) => (
  <h1 style={{ textDecoration: "underline" }}>{text}</h1>
);

const Anecdote = ({ anecdotes, selection }) => {
  return (
    <p style={{ fontStyle: "italic" }}> &quot;{anecdotes[selection]} &quot;</p>
  );
};

const Votes = ({ votes, selection }) => <p>has {votes[selection]} votes</p>;

const Button = ({ text, handleClick }) => (
  <button
    onClick={handleClick}
    style={{
      padding: "0.5rem",
      color: "#fff",
      backgroundColor: "orangered",
      fontWeight: "bold",
      borderRadius: "15px",
      marginRight: "1rem",
      textTransform: "uppercase",
    }}
  >
    {text}
  </button>
);

const MostVoted = ({ votes, anecdotes }) => {
  const highestNumber = Math.max(...votes);
  const index = votes.indexOf(highestNumber);

  return (
    <>
      <p style={{ fontStyle: "italic" }}> &quot;{anecdotes[index]} &quot;</p>
      <p>has {votes[index]} votes</p>
    </>
  );
};

export default App;
