import styled from "styled-components";
import {Button} from "../styled/Button"
const StartGame = (props) => {
  return (
    <Container>
      <div><img src="./images/dice.png" alt="dice" /></div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button
        onClick={props.toggle}
        >PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;
