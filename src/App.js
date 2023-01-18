import "./styles.css";
import React, { useState } from "react";

const db = [
  "“Whatever you are, be a good one",
  "Be yourself; everyone else is already taken",
  "Act as if what you do makes a difference",
  "The only real mistake is the one from which we learn nothing",
  "Positive anything is better than negative nothing",
  "Limit your always and your nevers"
];

export default function App() {
  const [quotes, setQuotes] = useState(db[0]);

  function randomQuoteGenerator() {
    const currentQuote = db[Math.floor(Math.random() * db.length)];
    setQuotes(currentQuote);
  }

  return (
    <div className="App">
      <h1>{quotes}</h1>
      <button onClick={randomQuoteGenerator}>Random Quotes</button>
    </div>
  );
}
