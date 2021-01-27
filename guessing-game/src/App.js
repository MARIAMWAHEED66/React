import "./App.css";
import { useState } from "react";
import {
  GlobalStyle,
  GoButton,
  RestartButton,
  Message,
  Text,
  Result,
} from "./styles";

let randomNumber = Math.round(Math.random() * 100);

function App() {
  const [results, setResult] = useState("");
  const [value, setValue] = useState(null);
  const [attempts, setAttempts] = useState(null);
  const [counter, setCounter] = useState(1);

  const guessesCounter = () => {
    if (counter === 5) {
      setAttempts("GameOver!");
      setResult(null);
    } else setAttempts(`Guesses Remaining: ${5 - counter}`);
  };

  const start = () => {
    const userGuess = parseInt(value);

    if (userGuess === randomNumber) setResult("WOW! You got it right!");
    else if (userGuess > randomNumber) {
      setResult("Try to pick a lower number!");
      setCounter(counter + 1);
      guessesCounter();
    } else if (userGuess < randomNumber && userGuess !== null) {
      setResult("Try to pick a higher number!");
      setCounter(counter + 1);
      guessesCounter();
    } else setResult(null);
  };

  const restart = () => {
    setResult("");
    setCounter(null);
    setAttempts(null);
  };

  return (
    <>
      <GlobalStyle />
      <div className="card card_div" />
      <Text>
        <h1>Number guessing game</h1>
        <p>
          We have selected a random number between 1 and 100. Let's see if you
          can guess it.
        </p>
      </Text>
      <br />
      <div id="wrapper">
        <label for="guessfield" id="guess">
          Guess a number?
        </label>

        <input
          value={value}
          type="number"
          id="guessfield"
          className="guessfield"
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <GoButton type="submit" onClick={start}>
          Go!
        </GoButton>
        <br />

        <RestartButton type="submit" onClick={restart}>
          Restart
        </RestartButton>

        <br />
        <br />
        <Result> {results}</Result>

        <Message>{attempts}</Message>
      </div>
    </>
  );
}

export default App;
