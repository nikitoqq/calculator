import Button from "../ButtonAria/Button";
import styled from "styled-components";

const BtnMemoryStyle = styled.button`
  width: 150px;
  height: 30px;
  border: 1px solid black;
`;

const Memory = ({ history }) => {
  const historyElem = history.map((el) => {
    return <li>{el}</li>;
  });
  return (
    <div>
      <ul>{historyElem}</ul>
      <Button Btn={BtnMemoryStyle} name={"Удалить историю"} />
    </div>
  );
};

export default Memory;
