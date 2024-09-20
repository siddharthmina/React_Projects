import styled from "styled-components";

const NumberSelector = (props) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  return (
    <NumberSelectorContainer>
      <p className="error">{props.error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value == props.selectedNumber}
            key={i}
            onClick={() => {props.setselectedNumber(value),props.seterror("")}}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Choose a Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap:34px;
}
p{
  font-size: 24px;
  font-weight:700px ;
}
.error{
  color: red;
}
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 34px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
