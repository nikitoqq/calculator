import { StyledInput } from "./style";

const Display = ({ value }) => {
  return (
    <>
      <StyledInput readOnly={true} type="text" value={value} />
    </>
  );
};

export default Display;
