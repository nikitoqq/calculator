const Calc = (value) => {
  value = Split(value);
  return Operation(value);
};

const Split = (value) => {
  return Array.from(value);
};

const Operation = (value) => {
  const plus = value.indexOf("+");
  const minus = value.indexOf("-") !== 0 ? value.indexOf("-") : null;
  const rezult = Minus(value[minus - 1], value[minus + 1]);
  value.splice(minus - 1, minus + 2, rezult);
  if (minus !== -1 || minus !== 0) {
    alert(value);
  }
  return value;
};

const Plus = (first, second) => {
  return first + second;
};

const Minus = (first, second) => {
    alert(first);
    alert(second);
  return first - second;
};

export default Calc;
