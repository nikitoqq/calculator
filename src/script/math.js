const Reg = (value) => {
  return `.${value}.`;
};

const Equal = (value) => {
  value = value.split(".");
  if (value[1] === "*") {
    return Multyply(value);
  }
  if (value[1] === "/") {
    return Division(value);
  }
  if (value[1] === "+") {
    return Plus(value);
  }
  if (value[1] === "-") {
    return Minus(value);
  }
};

const Multyply = (value) => {
  const index = value.indexOf("*");
  const result = +value[index - 1] * +value[index + 1];
  value.splice(index - 1, index + 2, result);
  return value;
};

const Division = (value) => {
  const index = value.indexOf("/");
  const result = +value[index - 1] / +value[index + 1];
  value.splice(index - 1, index + 2, result);
  return value;
};

const Plus = (value) => {
  const index = value.indexOf("+");
  const result = +value[index - 1] + +value[index + 1];
  value.splice(index - 1, index + 2, result);
  return value;
};

const Minus = (value) => {
  const index = value.indexOf("-");
  const result = value[index - 1] - value[index + 1];
  value.splice(index - 1, index + 2, result);
  return value;
};

export { Reg, Equal };
