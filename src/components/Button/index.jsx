import { StyledButton } from "./style";

export const Button = ({ onClick, name }) => (
  <StyledButton onClick={onClick} value={name}>
    {name}
  </StyledButton>
);
