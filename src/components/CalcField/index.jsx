import { Display } from "../Display";
import { ButtonField } from "../ButtonField";

import { SideLeft } from "./style";

export const CalcField = ({ history, setHistory, value, setValue }) => {
  return (
    <SideLeft>
      <Display value={value} />
      <ButtonField
        history={history}
        value={value}
        setHistory={setHistory}
        setValue={setValue}
      />
    </SideLeft>
  );
};
