import {
  StyledHistory,
  StyledUl,
  StyledLi,
  StyledH1,
  SideRight,
} from "./historyStyle";

const History = ({ history, setValue }) => {
  const getHistory = (key) => {
    history.map((elem, index) => key === index ? setValue(elem) : null);
  };
  const mapingHistory = history.map((elem, index) => (
    <StyledLi onClick={() => getHistory(index)} key={index}>
      {elem}
    </StyledLi>
  ));
  return (
    <SideRight>
      <StyledHistory>
        <StyledH1>История</StyledH1>
        <StyledUl>{mapingHistory}</StyledUl>
      </StyledHistory>
    </SideRight>
  );
};

export default History;
