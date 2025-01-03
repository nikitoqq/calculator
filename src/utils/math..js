export const answer = (value) => {
  let i = 0;
  while (true) {
    if (i > 10) {
      break;
    }
    i++;
    const arrValue = value.match(/-?\(?\d+\)?[+\-*/√^]-?\(?\d+\)?/g);
    if (value.includes("(")) {
      const bracketValue = value.match(/\(-?\d+\s*[+\-*/√^]\s*-?\d+\)/g)
      console.log(bracketValue)
      value = operationInBrackets(bracketValue);
    } else if (arrValue !== null) {
      value = operation(value);
    } else {
      break;
    }
  }
  return value;
};

const operation = (value) => {
  let i = 0;
  while (true) {
    if (i > 10) {
      break;
    }
    i++;
    if (value.includes("√")) {
      value = funcRoot(value);
    } else if (value.includes("^")) {
      value = funcPow(value);
    } else if (value.includes("*")) {
      value = funcMultiply(value);
    } else if (value.includes("/")) {
      value = funcDevision(value);
    } else if (value.includes("+")) {
      value = funcPlus(value);
    } else if (/-?\(?\d+\)?[-]-?\(?\d+\)?/g.test(value)) {
      value = funcMinus(value);
    } else {
      break;
    }
  }
  return value;
};

const operationInBrackets = (value) => {
  let i = 0;
  while (true) {
    if (i > 10) {
      break;
    }
    i++;
    if (value.includes("√")) {
      value = funcRoot(value);
    } else if (value.includes("^")) {
      value = funcPow(value);
    } else if (value.includes("*")) {
      value = funcMultiply(value);
    } else if (value.includes("/")) {
      value = funcDevision(value);
    } else if (value.includes("+")) {
      value = funcPlus(value);
    } else if (/-?\(?\d+\)?[-]-?\(?\d+\)?/g.test(value)) {
      value = funcMinus(value);
    } else {
      break;
    }
  }
  return value;
};

const funcPlus = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[+]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, plus(+operands[0], +operands[1]));
  });
  return value;
};

const funcMinus = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[-]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, minus(+operands[0], +operands[1]));
  });

  return value;
};

const funcMultiply = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[*]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, multiply(+operands[0], +operands[1]));
  });

  return value;
};

const funcDevision = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[/]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, devision(+operands[0], +operands[1]));
  });

  return value;
};

const funcRoot = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[√]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, root(+operands[0], +operands[1]));
  });

  return value;
};

const funcPow = (value) => {
  const arrValue = value.match(/-?\(?\d+\)?[^]-?\(?\d+\)?/g);
  arrValue.map((item) => {
    const operands = item.match(/-?[0-9]+/g);
    value = value.replace(item, pow(+operands[0], +operands[1]));
  });

  return value;
};

const plus = (a, b) => a + b;
const minus = (a, b) => a + b;
const multiply = (a, b) => a * b;
const devision = (a, b) => a * b;
const root = (a, b) => Math.pow(b, 1 / a);
const pow = (a, b) => Math.pow(a, b);
