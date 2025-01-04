export const answer = (value) => {
  try {
    let i = 0;
    while (true) {
      if (i > 50) {
        return (value = "Error");
      }
      i++;
      const arrValue = value.match(/-?\(?\d+\)?[+\-*/√^]-?\(?\d+\)?/g);
      if (value.includes("(")) {
        const [pattern, replacement] = findBrackets(value);
        value = value.replace(pattern, replacement);
      } else if (arrValue !== null) {
        value = operation(value);
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
  const replacement = operation(value.match(pattern)[0].slice(1, -1));
  return [pattern, replacement];
};

const operation = (value) => {
  let i = 0;
  while (true) {
    if (i > 50) {
      return (value = "Error");
    }
    i++;
    if (value.includes("√")) {
      value = funcRoot(value);
    } else if (value.includes("^")) {
      value = funcPow(value);
    } else if (
      value.includes("*") &&
      value.indexOf("*") <
        (value.indexOf("/") === -1 ? 100 : value.indexOf("/"))
    ) {
      value = funcMultiply(value);
    } else if (
      value.includes("/") &&
      value.indexOf("/") <
        (value.indexOf("*") === -1 ? 100 : value.indexOf("*"))
    ) {
      value = funcDevision(value);
    } else if (/-?\(?\d+(\.\d+)?\)?[-]-?\(?\d+(\.\d+)?\)?/g.test(value)) {
      value = funcMinus(value);
    } else if (
      value.includes("+") &&
      !/-?\(?\d+(\.\d+)?\)?[-]-?\(?\d+(\.\d+)?\)?/g.test(value)
    ) {
      value = funcPlus(value);
    } else {
      break;
    }
  }
  return value;
};

const funcPlus = (value) => {
  const arrValue = value.match(/-?\(?\d+(\.\d+)?\)?[+]-?\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item, index) => {
    if (index === 0) {
      const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
      value = value.replace(item, +operands[0] + +operands[1]);
    }
  });
  return value;
};

const funcMinus = (value) => {
  const arrValue = value.match(/-?\(?\d+(\.\d+)?\)?[-]-?\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item, index) => {
    if (index === 0) {
      const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
      if (/--\d/.test(item)) {
        value = value.replace(item, +operands[0] - +operands[1]);
      } else {
        value = value.replace(item, +operands[0] + +operands[1]);
      }
    }
  });

  return value;
};

const funcMultiply = (value) => {
  const arrValue = value.match(/-?\(?\d+(\.\d+)?\)?[*]-?\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item) => {
    const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
    value = value.replace(item, +operands[0] * +operands[1]);
  });

  return value;
};

const funcDevision = (value) => {
  const arrValue = value.match(/\(?\d+(\.\d+)?\)?[/]-?\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item) => {
    const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
    value = value.replace(item, +operands[0] / +operands[1]);
  });

  return value;
};

const funcRoot = (value) => {
  const arrValue = value.match(/\(?\d+(\.\d+)?\)?[√]\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item) => {
    const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
    value = value.replace(item, Math.pow(+operands[1], 1 / +operands[0]));
  });

  return value;
};

const funcPow = (value) => {
  const arrValue = value.match(/-?\(?\d+(\.\d+)?\)?[\^]-?\(?\d+(\.\d+)?\)?/g);
  arrValue.forEach((item) => {
    const operands = item.match(/-?[0-9]+(\.[0-9]+)?/g);
    value = value.replace(item, Math.pow(+operands[0], +operands[1]));
  });

  return value;
};
