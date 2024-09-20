import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import {Button} from "../styled/Button";
import {OutlineButton} from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setselectedNumber] = useState(4);
  const [currentDice, setcurrentDice] = useState(1);
  const [userScore, setuserScore] = useState(0);
  const [error, seterror] = useState("");
  const [showrules,setshowrules]=useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      seterror("Please Select a number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice(randomNumber);
    //setcurrentDice((prev)=>randomNumber)
    if (selectedNumber === randomNumber) {
      setuserScore((prev) => prev + randomNumber);
    } else {
      setuserScore((prev) => prev - 2);
    }
    setselectedNumber(undefined);
  };
  const resetScore =()=>{
    setuserScore(0)
  }
  return (
    <Main>
      <div className="top-section">
        <TotalScore userScore={userScore} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} resetScore={resetScore}/>
      <div className="btns">
        <OutlineButton 
        onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=> {setshowrules((prev)=>!prev)}}>Show Rules</Button>
      </div>
      {showrules && <Rules/>}
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  padding: 70px 40px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:40px;
    gap:10px;
    justify-content: center;
  }
`;
