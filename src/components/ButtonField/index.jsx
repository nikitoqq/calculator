import { Button } from "../Button";

import { answer } from "../../utils/math";
import { regSetValue, regEqualeValue } from "../../utils/regInput";
import { Field } from "./style";

const BUTTON_NAME = [
  1,
  2,
  3,
  "+",
  "-",
  4,
  5,
  6,
  "/",
  "*",
  7,
  8,
  9,
  "√",
  "^",
  0,
  ".",
  "C",
  "AC",
  "=",
  "(",
  ")",
];

export const ButtonField = ({ history, setValue, setHistory, value }) => {
  const handleClick = (e) => {
    if (/[\d+-/*√.^()]/.test(e.target.value)) {
      const buttonValue = regSetValue(value, e.target.value);
      setValue(value + buttonValue);
    } else if (/=/.test(e.target.value)) {
      if (regEqualeValue(value)) {
        setValue(answer(value));
        setHistory(
          history.length > 10
            ? [...history.slice(1), value]
            : [...history, value]
        );
      } else {
        setValue("error");
        setHistory(
          history.length > 10
            ? [...history.slice(1), "error"]
            : [...history, "error"]
        );
      }
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