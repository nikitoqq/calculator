const REG_WHILE = /(-?[.\d])+[+\-*/√^]+(-?[.\d])+/;
const PATTERN_FIND_EMPTY_BRACKETS = /\([^()]*\)/;
const REG = {
  plus: /(-?[.0-9]+)[+](-?[.0-9]+)/,
  multiply: /(-?[.0-9]+)[*](-?[.0-9]+)/,
  devision: /(-?[.0-9]+)[/](-?[.0-9]+)/,
  root: /(-?[.0-9]+)[√](-?[.0-9]+)/,
  pow: /(-?[.0-9]+)[^](-?[.0-9]+)/,
  minus: /(-?[.0-9]+)[-](-?[.0-9]+)/,
};

export const answer = (value) => {
  while (value.match(REG_WHILE)) {
    if (PATTERN_FIND_EMPTY_BRACKETS.test(value)) {
      const [replacement] = findBrackets(value);
      value = value.replace(PATTERN_FIND_EMPTY_BRACKETS, replacement);
    } else {
      value = loopOperation(value);
    }
  }
  return deleteZeroAfterDot(value);
};

const deleteZeroAfterDot = (value) => {
  if (/0$/.test(value)) {
    value = value.match(/(-?\d+\.\d)/g)[0];
    if (/0$/.test(value)) {
      value = value.match(/(-?\d+)/g)[0];
    }
  }
  return value;
};

const findBrackets = (value) => {
  const replacement = loopOperation(
    value.match(PATTERN_FIND_EMPTY_BRACKETS)[0].slice(1, -1)
  );
  return [replacement];
};

const loopOperation = (value) => {
  while (value.match(REG_WHILE)) {
    if (operationPriority(value, "√", "^")) {
      value = calc(value, value.match(REG.root), root);
    } else if (operationPriority(value, "^", "√")) {
      value = calc(value, value.match(REG.pow), pow);
    } else if (operationPriority(value, "*", "/")) {
      value = calc(value, value.match(REG.multiply), multiply);
    } else if (operationPriority(value, "/", "*")) {
      value = calc(value, value.match(REG.devision), devision);
    } else if (operationPriority(value, "+", "-")) {
      value = calc(value, value.match(REG.plus), plus);
    } else if (operationPriority(value, "-", "+")) {
      value = calc(value, value.match(REG.minus), minus);
    }
  }
  return value;
};

const operationPriority = (value, operation, antogonistOperation) => {
  return (
    value.includes(operation) &&
    value.indexOf(operation) <
      (value.indexOf(antogonistOperation) === -1 ||
      value.indexOf(antogonistOperation) === 0
        ? 100
        : value.indexOf(antogonistOperation))
  );
};

const calc = (value, operands, operation) => {
  return value.replace(
    operands[0],
    operation(Number(operands[1]), Number(operands[2]))
  );
};

const plus = (a, b) => (a + b).toFixed(2);
const minus = (a, b) => (a - b).toFixed(2);
const multiply = (a, b) => (a * b).toFixed(2);
const devision = (a, b) => (a / b).toFixed(2);
const root = (a, b) => Math.pow(b, 1 / a).toFixed(2);
const pow = (a, b) => Math.pow(a, b).toFixed(2);
