const REG_WHILE = /([.\d]|\(-[.\d]\))+[+\-*/√^]([.\d]|\(-[.\d]\))+/;
const PATTERN_FIND_EMPTY_BRACKETS = /\([^(^\-)]*\)/;
const REG = {
  plus: /([.0-9]+|\([-.0-9]+\))[+]([.0-9]+|\([-.0-9]+\))?/,
  multiply: /([.0-9]+|\([-.0-9]+\))[*]([.0-9]+|\([-.0-9]+\))/,
  devision: /([.0-9]+|\([-.0-9]+\))[/]([.0-9]+|\([-.0-9]+\))/,
  root: /([.0-9]+|\([-.0-9]+\))[√]([.0-9]+|\([-.0-9]+\))/,
  pow: /([.0-9]+|\([-.0-9]+\))[\^]([.0-9]+|\([-.0-9]+\))/,
  minus: /([.0-9]+|\([-.0-9]+\))[-]([.0-9]+|\([-.0-9]+\))?/,
};

export const answer = (value) => {
  while (value.match(REG_WHILE)) {
    if (PATTERN_FIND_EMPTY_BRACKETS.test(value)) {
      const [pattern, replacement] = findBrackets(value);
      value = value.replace(pattern, replacement);
    } else {
      value = loopOperation(value);
    }
  }

  return value;
};

const findBrackets = (value) => {
  const replacement = loopOperation(
    value.match(PATTERN_FIND_EMPTY_BRACKETS)[0].slice(1, -1)
  );
  return [PATTERN_FIND_EMPTY_BRACKETS, replacement];
};

const loopOperation = (value) => {
  while (value.match(REG_WHILE)) {
    console.log(value);
    if (operationPriority(value, "√", "^")) {
      value = calc(value, value.match(REG.root), root);
    } else if (operationPriority(value, "^", "√")) {
      value = calc(value, value.match(REG.pow), pow);
    } else if (operationPriority(value, "*", "/")) {
      value = calc(value, value.match(REG.multiply), multiply);
    } else if (operationPriority(value, "/", "*")) {
      value = calc(value, value.match(REG.devision), devision);
    } else if (operationPriority(value, "-", "+")) {
      value = calc(value, value.match(REG.minus), minus);
    } else if (value.includes("+")) {
      value = calc(value, value.match(REG.plus), plus);
    }
  }
  return value;
};

const operationPriority = (value, operation, antogonistOperation) => {
  return (
    value.includes(`${operation}`) &&
    value.indexOf(`${operation}`) <
      (value.indexOf(`${antogonistOperation}`) === -1
        ? 100
        : value.indexOf(`${antogonistOperation}`))
  );
};

const calc = (value, operands, operation) => {
  console.log(operands);
  operands = calcOperandsReg(operands);
  console.log(operands);
  console.log(operation);
  return value.replace(
    operands[0],
    calcResultReg(operation(Number(operands[1]), Number(operands[2])))
  );
};

const calcResultReg = (result) => (/^-/.test(result) ? `(${result})` : result);

const calcOperandsReg = (operands) => {
  console.log(operands);
  return operands.map((operand, index) => {
    if (index !== 0) {
      return operand.includes("-") ? operand.match(/-\d?\.?\d/) : operand;
    }
    return operand;
  });
};

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devision = (a, b) => a / b;
const root = (a, b) => Math.pow(b, 1 / a);
const pow = (a, b) => Math.pow(a, b);
