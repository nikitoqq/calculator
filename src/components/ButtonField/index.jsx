import { Button } from "../Button";

import { answer } from "../../utils/math";
import { Field } from "./style";
import { regSetValue, regEqualeValue } from "../../utils/regInput";

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
    const buttonValue = e.target.value;

    if (/[\d+-/*√.^()]/.test(buttonValue)) {
      regSetValue(setValue, value, buttonValue);
    } else if (/=/.test(buttonValue)) {
      regEqualeValue(value, setValue, answer, setHistory, history);
    } else if (/AC/.test(buttonValue)) {
      setValue("");
    } else if (/C/.test(buttonValue)) {
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
