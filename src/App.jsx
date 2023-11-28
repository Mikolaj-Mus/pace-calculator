import "./index.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Result from "./components/Result/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    distance: 10,
    time: "01:00:00",
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Result input={userInput} />
    </>
  );
}

export default App;
