import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  padding: 10px 18px;
  width: 220px;
  border: none;
  font-size: 16px;
  background: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
    color: black;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    color: white;
  }
`;
