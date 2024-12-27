import { SideLeft } from "./calcFieldStyle";
import Display from "./display";
import ButtonField from "./buttonField";

const CalcField = ({setHistory, value, setValue}) => {

  return (
    <SideLeft>
      <Display value={value} />
      <ButtonField value={value} setHistory={setHistory} setValue={setValue} />
    </SideLeft>
  );
};

export default CalcField;
