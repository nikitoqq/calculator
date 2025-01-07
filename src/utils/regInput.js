export const regSetValue = (func, value, buttonValue) => {
  if (value === "") {
    if (/[+-/*√.^)]/.test(buttonValue)) {
      buttonValue = "";
    }
  }
  if (!/[+-/*√.^]$/.test(value) || /[\d()]/.test(buttonValue)) {
    if (!(/\($/.test(value) && /[+/*√.^)]/.test(buttonValue))) {
      if (!(/\)$/.test(value) && /[(\d]/.test(buttonValue))) {
        if (!(/[√.^\d)]$/.test(value) && /[(]/.test(buttonValue))) {
          func(value + buttonValue);
        }
      }
    }
  }
};

export const regEqualeValue = (
  value,
  setValue,
  answer,
  setHistory,
  history
) => {
  try {
    let openBrackets = 0;
    let closeBrackets = 0;
    if (value.includes("(") || value.includes(")")) {
      openBrackets = value.match(/\(/g).length;
      closeBrackets = value.match(/\)/g).length;
    }
    if (openBrackets === closeBrackets) {
      setValue(answer(value));
      setHistory(
        history.length > 10 ? [...history.slice(1), value] : [...history, value]
      );
    }
  } catch (error) {
    setValue("error");
    setHistory(
      history.length > 10 ? [...history.slice(1), value] : [...history, value]
    );
  }
};
