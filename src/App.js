import React, { useEffect, useState, useRef } from "react";
import QuoteText from "./QuoteText";
import NewQuoteBtn from "./NewQuoteBtn";
import TweetButton from "./TweetButton";
import "./styles.css";
import { randomColor } from "randomcolor";

function App() {
  const quotes = useRef("");
  // const color = useRef(randomColor());
  const color = useRef("");

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const url =
      "https://cdn.jsdelivr.net/gh/caglarturali/quotalog@master/src/shared/quotes.json";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        quotes.current = data.quotes;
        getNewQuote();
      });
  }, []);

  function getNewQuote() {
    let rng = Math.floor(Math.random() * quotes.current.length);
    setRandomQuote(quotes.current[rng]);
    color.current = randomColor();
    changeBackgroundColor();
  }
  function tweetQuote() {}
  function changeBackgroundColor() {
    document.body.style.background = color.current;
    // document.getElementById("tweet-quote").style.background = color;
  }
  return (
    <div id="quote-box">
      <QuoteText quote={randomQuote} />
      <NewQuoteBtn onClick={getNewQuote} />
      <TweetButton
        color={color.current}
        quote={randomQuote}
        onClick={tweetQuote}
      />
    </div>
  );
}

export default App;
