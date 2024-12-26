import { StyledInp } from "./displayStyle";

const Display = ({ value }) => {
  return (
    <>
      <StyledInp readOnly={true} type="text" value={value} />
    </>
  );
};

export default Display;
