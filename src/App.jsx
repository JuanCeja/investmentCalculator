import { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isUserInputValid = Object.values(userInput).every(value => value > 0);

  const [results, setResults] = useState({});

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      let newUserInput = {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
      return newUserInput;
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUserInputChange={handleChange} />
      {
        isUserInputValid
          ? <Results results={results} userInput={userInput} />
          : <p className="center">Input values must be greater zero.</p>
      }
    </>
  )
}

export default App
