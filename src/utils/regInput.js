export const regSetValue = (value, buttonValue) => {
  const regReturnEmtyValueArr = [
    [/^$/, /[+/*√.^)]/],
    [/\d+\.\d+$/, /\./],
    [/\d--/, /-/],
    [/^-$/, /-/],
    [/[+/*√.^()]$/, /-/],
  ];
  const isRegValue =
    (!/[+-/*√.^]$/.test(value) || /[\d()-]/.test(buttonValue)) &&
    !(/\($/.test(value) && /[+/*√.^)]/.test(buttonValue)) &&
    !(/\)$/.test(value) && /[(\d]/.test(buttonValue)) &&
    !(/[√.^\d)]$/.test(value) && /[(]/.test(buttonValue));
  if (
    regReturnEmtyValueArr
      .map((reg) =>
        RegSetValueReturnEmptyButtonValue(reg[0], reg[1], value, buttonValue)
      )
      .includes("")
  ) {
    return "";
  }
  if (isRegValue) {
    return buttonValue;
  }
  return "";
};

const RegSetValueReturnEmptyButtonValue = (
  regValue,
  regButtonValue,
  value,
  buttonValue
) => {
  if (regValue.test(value)) {
    if (regButtonValue.test(buttonValue)) {
      return "";
    }
  }
  return buttonValue;
};

export const regEqualeValue = (value) => {
  try {
    let openBrackets = 0;
    let closeBrackets = 0;
    if (value.includes("(") || value.includes(")")) {
      openBrackets = value.match(/\(/g).length;
      closeBrackets = value.match(/\)/g).length;
    }
    if (/[+\-/*√.^]$/.test(value)) {
      return false;
    } else if (openBrackets === closeBrackets) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
