import Button from "./Button";
import styled from "styled-components";
import { Reg, Equal } from "../../../script/math";
import { useState } from "react";

const BtnAriaStyle = styled.button`
  width: 100px;
  height: 85px;
  margin: 5px;
  font-size: 20px;
  border: 1px solid black;
`;

const ButtonAria = ({setHistory, onClick, value }) => {
  const [calcValue, setCalcValue] = useState("");

  const btnClickNum = (e) => {
    const text = e.target.innerText;
    onClick(value + text);
    setCalcValue(calcValue + text);
  };

  const btnClick = (e) => {
    const text = e.target.innerText;
    if (!isNaN(value[value.length - 1])) {
      onClick(value + text);
      setCalcValue(calcValue + Reg(text));
    }
  };

  const refresh = () => {
    onClick('');
    setCalcValue('');
  }

  const equal = () => {
    onClick(Equal(calcValue))
    setCalcValue(Equal(calcValue))
  };

  return (
    <div>
      <div>
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={1} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={2} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={3} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"+"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"-"} />
        <Button
          Btn={BtnAriaStyle}
          onClick={() => onClick(value.slice(0, -1))}
          name={"<="}
        />
      </div>
      <div>
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={4} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={5} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={6} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"*"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"/"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"("} />
      </div>
      <div>
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={7} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={8} />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={9} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"x^2"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"y^x"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={")"} />
      </div>
      <div>
        <Button
          Btn={BtnAriaStyle}
          onClick={refresh}
          name={"Удалить"}
        />
        <Button Btn={BtnAriaStyle} onClick={btnClickNum} name={0} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={","} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"2√x"} />
        <Button Btn={BtnAriaStyle} onClick={btnClick} name={"y√x"} />
        <Button Btn={BtnAriaStyle} onClick={equal} name={"="} />
      </div>
    </div>
  );
};

export default ButtonAria;
