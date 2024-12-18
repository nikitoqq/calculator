import Display from "./calculator/Display";
import ButtonAria from "./calculator/ButtonAria";
import Memory from "./calculator/Memory";
import styled from "styled-components";
import { useState } from "react";

const App = {
  Wrapper: styled.div`
    margin: 0px auto;
    width: 1050px;
    display: flex;
  `,
  Calc: styled.div`
  width: 660px;
    margin-right: 50px;
  `,
  History: styled.div`
    width: 300px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
  `,
};

function Calculator() {
  const history = ["Попа", "История"];
  const [value, setValue] = useState('');
  return (
    <App.Wrapper>
      <App.Calc>
        <Display text={value}/>
        <ButtonAria value={value} onClick={setValue}/>
      </App.Calc>
      <App.History>
        <Memory history={history} />
      </App.History>
    </App.Wrapper>
  );
}

export default Calculator;
