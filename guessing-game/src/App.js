import "./App.css";
import { useState } from "react";

let randomNumber = Math.round(Math.random() * 100);

function App() {
  const [results, setResult] = useState("");
  const [value, setValue] = useState(null);

  const onClick = () => {
    const userGuess = parseInt(value, setValue);

    if (userGuess === randomNumber) setResult(<p>Correct!</p>);
    else if (userGuess > randomNumber)
      setResult(<p>Too high, try to pick a lower number!</p>);
    else if (userGuess < randomNumber && userGuess !== null)
      setResult(<p>Too low, try to pick a higher number!</p>);
    else setResult(null);
  };

  return (
    <>
      <h2>Number Guessing Game</h2>
      <p>
        We have selected a random number between 1 and 100. See if you can guess
        it.
      </p>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {results}
    </>
  );
}

export default App;
