export const answer = (value) => {
  while (true) {
    if (value.includes("(")) {
      value = checkBrackets(value);
    } else if (checkOperation(value) || checkMinus(value, value.indexOf("-"))) {
      value = loop(value, findIndex(value));
    } else {
      break;
    }
  }
  return value;
};

const loop = (value, index) => {
  if (value.includes("^")) {
    value = operation(value, "^");
  } else if (value.includes("√")) {
    value = operation(value, "√");
  } else if (
    value.includes("*") &&
    index.signMulty < (index.signDivision === -1 ? 1000 : index.signDivision)
  ) {
    value = operation(value, "*");
  } else if (
    value.includes("/") &&
    index.signDivision < (index.signMulty === -1 ? 1000 : index.signMulty)
  ) {
    value = operation(value, "/");
  } else if (
    (checkMinus(value, index.signMinus) ||
      checkMinus(value, index.signMinus)) &&
    (index.signPlus === -1 ? 1000 : index.signPlus)
  ) {
    value = operationMinus(value, index.signMinus);
  } else if (
    value.includes("+") &&
    index.signPlus >
      (index.signMinus === -1 && index.signMinus === 0 ? 1000 : index.signMinus)
  ) {
    value = operation(value, "+");
  }
  return value;
};

const checkBrackets = (value) => {
  const [from, to] = findBrackets(value, "(");
  let bracketsValue = value.slice(from, to);

  while (true) {
    if (checkOperation(value)) {
      bracketsValue = loop(bracketsValue);
    } else {
      break;
    }
  }

  return value.slice(0, from - 1) + bracketsValue + value.slice(to + 1);
};

const findBrackets = (value) => {
  const from = value.indexOf("(");

  const to = (value, index) => {
    while (true) {
      if (value[index] === ")") {
        return index;
      }
      index++;
    }
  };

  return [from + 1, to(value, from + 1)];
};

const operationMinus = (value, index) => {
  const sliceValue = distanceForMinus(value, index);
  const [leftValue, rightValue] = [
    value.slice(sliceValue[0], index),
    value.slice(index + 1, sliceValue[1]),
  ];

  return newValue(value, sliceValue, minus(leftValue, rightValue));
};

const operation = (value, sign) => {
  const index = value.indexOf(sign);
  const sliceValue = distanceforotherOperation(value, index);
  const [leftValue, rightValue] = [
    value.slice(sliceValue[0], index),
    value.slice(index + 1, sliceValue[1]),
  ];

  if (sign === "√") {
    console.log(`l ${leftValue}, r ${rightValue}`);
    return newValue(value, sliceValue, sqrt(leftValue, rightValue));
  }
  if (sign === "^") {
    console.log(`l ${leftValue}, r ${rightValue}`);
    return newValue(value, sliceValue, pow(leftValue, rightValue));
  }
  if (sign === "*") {
    console.log(`l ${leftValue}, r ${rightValue}`);
    return newValue(value, sliceValue, multiply(leftValue, rightValue));
  }
  if (sign === "/") {
    console.log(`l ${leftValue}, r ${rightValue}`);
    return newValue(value, sliceValue, division(leftValue, rightValue));
  }
  if (sign === "+") {
    console.log(`l ${leftValue}, r ${rightValue}`);
    return newValue(value, sliceValue, plus(leftValue, rightValue));
  }
};

const distanceforotherOperation = (value, index) => {
  const from = (value, index) => {
    while (true) {
      if (isNaN(value[index])) {
        if (value[index] !== ".") {
          if (value[index] !== "-") {
            return index + 1;
          }
        }
      }
      index--;
    }
  };

  const to = (value, index) => {
    while (true) {
      if (isNaN(value[index])) {
        if (value[index] !== ".") {
          if (value[index] !== "-") {
            return index;
          }
        }
      }
      index++;
    }
  };
  return [from(value, index - 1), to(value, index + 1)];
};

const distanceForMinus = (value, index) => {
  const from = (value, index) => {
    while (true) {
      if (isNaN(value[index])) {
        if (value[index] !== ".") {
          return index + 1;
        }
      }
      index--;
    }
  };

  const to = (value, index) => {
    while (true) {
      if (isNaN(value[index])) {
        if (value[index] !== ".") {
          return index;
        }
      }
      index++;
    }
  };
  return [from(value, index - 1), to(value, index + 1)];
};

const findIndex = (value) => {
  return {
    signPlus: value.indexOf("+"),
    signMinus: value.indexOf("-"),
    signDivision: value.indexOf("/"),
    signMulty: value.indexOf("*"),
    signSqrt: value.indexOf("√"),
    signPow: value.indexOf("^"),
  };
};

const checkOperation = (value) =>
  value.includes("^") ||
  value.includes("√") ||
  value.includes("*") ||
  value.includes("/") ||
  value.includes("+");

const newValue = (value, sliceValue, operator) =>
  value.slice(0, sliceValue[0]) + operator + value.slice(sliceValue[1]);

const checkMinus = (value, index) =>
  !isNaN(value[index - 1]) && !isNaN(value[index + 1]);

const multiply = (left, right) => +left * +right;
const minus = (left, right) => +left - +right;
const plus = (left, right) => +left + +right;
const division = (left, right) => left / right;
const sqrt = (left, right) => Math.pow(right, 1 / left);
const pow = (left, right) => Math.pow(left, right);