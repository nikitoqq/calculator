import styled from "styled-components";

export const StyledButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid black;
  border-radius: 22.5px;
  margin: 5px 5px;
  font-size: 18px;
  &:hover {
    background-color:rgb(210, 210, 210);
  };
  &:active {
    background-color:rgb(190, 190, 190);
    border: 0px;
  }
`;
