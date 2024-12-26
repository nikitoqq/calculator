import { SideLeft } from "./calcFieldStyle";
import Display from "./display";
import ButtonField from "./buttonField";
import { useState } from "react";

const CalcField = () => {
  const [calcValue, setCalcValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  return (
    <SideLeft>
      <Display value={displayValue} />
      <ButtonField calcValue={calcValue} setCalcValue={setCalcValue} setDisplayValue={setDisplayValue} />
    </SideLeft>
  );
};

export default CalcField;
