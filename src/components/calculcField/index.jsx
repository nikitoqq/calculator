import { SideLeft } from "./style";
import Display from "./Display";
import ButtonField from "./ButtonField";

const CalcField = ({ setHistory, value, setValue }) => {
  return (
    <SideLeft>
      <Display value={value} />
      <ButtonField value={value} setHistory={setHistory} setValue={setValue} />
    </SideLeft>
  );
};

export default CalcField;
