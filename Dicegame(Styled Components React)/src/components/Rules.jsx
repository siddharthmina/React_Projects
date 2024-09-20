import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <div className="container">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  border-radius: 10px;
  margin-top: 40px;
  max-width: 800px;
  margin:0 auto;
  background-color: beige;
  padding: 20px;
  h1 {
    font-weight: 800;
    font-size: 24px;
  }
  .container{
    margin-top: 24px;
  }
  .container p {
    font-size: 16px;
    font-weight: 400;
  }
`;
