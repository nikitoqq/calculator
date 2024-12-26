export const answer = (value) => {
  return loop(value);
};

const loop = (value) => {
  let newValue = value;
  let condition = true;
  let i = 0;
  while (condition) {
    // if (i > 10) {
    //   condition = false;
    // }
    // i++;

    if (newValue.includes("*")) {
      newValue = operation(newValue, "*");
    } else if (newValue.includes("/")) {
      newValue = operation(newValue, "/");
    } else if (newValue.includes("-")) {
      newValue = operation(newValue, "-");
    } else if (newValue.includes("+")) {
      newValue = operation(newValue, "+");
    } else {
      condition = false;
    }
  }
  return newValue;
};

const operation = (value, sign) => {
  const index = value.indexOf(sign);
  const sliceValue = distance(value, index);
  const leftValue = value.slice(sliceValue[0], index);
  const rightValue = value.slice(index + 1, sliceValue[1]);

  if (sign === "*") {
    return (
      value.slice(0, sliceValue[0]) +
      multiply(leftValue, rightValue) +
      value.slice(sliceValue[1])
    );
  }
  if (sign === "/") {
    return (
      value.slice(0, sliceValue[0]) +
      division(leftValue, rightValue) +
      value.slice(sliceValue[1])
    );
  }
  if (sign === "+") {
    return (
      value.slice(0, sliceValue[0]) +
      plus(leftValue, rightValue) +
      value.slice(sliceValue[1])
    );
  }
  if (sign === "-") {
    return (
      value.slice(0, sliceValue[0]) +
      minus(leftValue, rightValue) +
      value.slice(sliceValue[1])
    );
  }
};

const multiply = (left, right) => +left * +right;
const minus = (left, right) => left - right;
const plus = (left, right) => +left + +right;
const division = (left, right) => left / right;

const distance = (value, index) => {
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
