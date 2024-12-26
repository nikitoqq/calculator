import {
  StyledHistory,
  StyledUl,
  StyledLi,
  StyledH1,
  SideRight,
} from "./historyStyle";

const History = ({ history }) => {
  const mapingHistory = history.map((elem) => <StyledLi>{elem}</StyledLi>);
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
