import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
import "./App.css";

function App() {
  const [isGamestarted, setisGamestarted] = useState(false);
  const toggleGamePlay = () => {
    setisGamestarted((prev) => !prev);
    
  };
  return (
    <>{isGamestarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
