import styled from "styled-components";

const RollDice = (props) => {
  


  return (
    <DiceContainer>
      <div
        className="dice"
        onClick={() => {
          props.roleDice()
        }}
      >
        <img src={`/images/dices/dice_${props.currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;``
