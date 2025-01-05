import { Button } from "../Button";

import { answer } from "../../utils/math";
import { BUTTON_NAME } from "../../utils/constants";
import { Field } from "./style";

export const ButtonField = ({ history, setValue, setHistory, value }) => {
  const handleClick = (e) => {
    if (/[\d+-/*√.^()]/.test(e.target.value)) {
      setValue(value + e.target.value);
    } else if (/=/.test(e.target.value)) {
      setValue(answer(value));

      setHistory(
        history.length > 9 ? [...history.slice(1), value] : [...history, value]
      );
    } else if (/AC/.test(e.target.value)) {
      setValue("");
    } else if (/C/.test(e.target.value)) {
      setValue((value) => value.slice(0, -1));
    }
  };

  return (
    <Field>
      {BUTTON_NAME.map((name) => {
        return <Button onClick={handleClick} name={name} />;
      })}
    </Field>
  );
};
