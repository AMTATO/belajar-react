import { useState } from "react";
import Header from "./components/header";


function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
        <Header/>
        <Header location="Klaten"/>
        <button onClick={handleClick}>Like ({likes})</button>
    </>
);
}

export default App;
