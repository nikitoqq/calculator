import { Button } from "../Button";

import { answer } from "../../utils/math";
import { regSetValue, regEqualeValue } from "../../utils/regInput";
import { Field } from "./style";
import { useEffect } from "react";

const BUTTON_NAME = [
  "1",
  "2",
  "3",
  "+",
  "-",
  "4",
  "5",
  "6",
  "/",
  "*",
  "7",
  "8",
  "9",
  "√",
  "^",
  "0",
  ".",
  "C",
  "AC",
  "=",
  "(",
  ")",
];

export const ButtonField = ({ history, setValue, setHistory, value }) => {
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      const key =
        BUTTON_NAME.includes(e.key) || "Backspace" === e.key ? e.key : null;
      if (/[\d+-/*√.^()]/.test(key)) {
        setValue((value) => value + regSetValue(value, key));
      } else if (/=/.test(key)) {
        if (regEqualeValue(value)) {
          setValue((value) => answer(value));
          setHistory(
            history.length > 10
              ? [...history.slice(1), value]
              : [...history, value]
          );
        } else {
          setValue("error");
          setHistory((history) =>
            history.length > 10
              ? [...history.slice(1), "error"]
              : [...history, "error"]
          );
        }
      } else if (key === "Backspace") {
        setValue((value) => value.slice(0, -1));
      }
    });
  }, []);

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
        return <Button key={name} onClick={handleClick} name={name} />;
      })}
    </Field>
  );
};
