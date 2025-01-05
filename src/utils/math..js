export const answer = (value) => {
  try {
    while (true) {
      const isValue = value.match(/-?[.0-9]+[+\-*/√^]-?[.0-9]+/);
      if (value.includes("(")) {
        const [pattern, replacement] = findBrackets(value);
        value = value.replace(pattern, replacement);
      } else if (isValue !== null) {
        value = loopOperation(value);
      } else {
        break;
      }
    }

    return value;
  } catch (error) {
    return (value = error.name);
  }
};
const findBrackets = (value) => {
  const pattern = /\([^()]*\)/;
  const replacement = loopOperation(value.match(pattern)[0].slice(1, -1));
  return [pattern, replacement];
};

const loopOperation = (value) => {
  const reg = {
    plus: /-?[.0-9]+[+]-?[.0-9]+/,
    multiply: /-?[.0-9]+[*]-?[.0-9]+/,
    devision: /-?[.0-9]+[/]-?[.0-9]+/,
    root: /-?[.0-9]+[√]-?[.0-9]+/,
    pow: /-?[.0-9]+[\^]-?[.0-9]+/,
    minus: /-?[.0-9]+[-]-?[.0-9]+/,
  };

  while (true) {
    const isMultiply =
      value.includes("*") &&
      value.indexOf("*") <
        (value.indexOf("/") === -1 ? 100 : value.indexOf("/"));
    const isDevision =
      value.includes("/") &&
      value.indexOf("/") <
        (value.indexOf("*") === -1 ? 100 : value.indexOf("*"));
    if (value.includes("√")) {
      value = calc(value, value.match(reg.root), root);
    } else if (value.includes("^")) {
      value = calc(value, value.match(reg.pow), pow);
    } else if (isMultiply) {
      value = calc(value, value.match(reg.multiply), multiply);
    } else if (isDevision) {
      value = calc(value, value.match(reg.devision), devision);
    } else if (reg.minus.test(value)) {
      value = calc(value, value.match(reg.minus), minus);
    } else if (value.includes("+") && !reg.minus.test(value)) {
      value = calc(value, value.match(reg.plus), plus);
    } else {
      break;
    }
  }
  return value;
};

const calc = (value, reg, operation) => {
  reg.forEach((item, index) => {
    const operands = item.match(/-?[.0-9]+/g);
    if (index === 0) {
      if (/--\d/.test(item)) {
        value = value.replace(item, doubleMinus(+operands[0], +operands[1]));
      } else {
        value = value.replace(item, operation(+operands[0], +operands[1]));
      }
    }
  });
  return value;
};

const plus = (a, b) => a + b;
const minus = (a, b) => a + b;
const doubleMinus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devision = (a, b) => a / b;
const root = (a, b) => Math.pow(b, 1 / a);
const pow = (a, b) => Math.pow(a, b);
