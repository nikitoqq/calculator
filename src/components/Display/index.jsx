import { StyledInput } from "./style";

export const Display = ({ value }) => (
  <StyledInput readOnly={true} type="text" value={value} />
);
