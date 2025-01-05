import { StyledUl, StyledLi, StyledH1, SideRight } from "./style";

export const History = ({ history, setValue }) => {
  const getHistory = (key) => {
    history.map((elem, index) => (key === index ? setValue(elem) : null));
  };

  return (
    <SideRight>
      <StyledH1>История</StyledH1>
      <StyledUl>
        {history.map((elem, index) => (
          <StyledLi onClick={() => getHistory(index)} key={index}>
            {elem}
          </StyledLi>
        ))}
      </StyledUl>
    </SideRight>
  );
};
