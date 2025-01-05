export const BUTTON_NAME = [
  1,
  2,
  3,
  "+",
  "-",
  4,
  5,
  6,
  "/",
  "*",
  7,
  8,
  9,
  "√",
  "^",
  0,
  ".",
  "C",
  "AC",
  "=",
  "(",
  ")",
];

export const PATTERN_FIND_EMPTY_BRACKETS = /\([^()]*\)/;
export const reg = {
  plus: /-?[.0-9]+[+]-?[.0-9]+/,
  multiply: /-?[.0-9]+[*]-?[.0-9]+/,
  devision: /-?[.0-9]+[/]-?[.0-9]+/,
  root: /-?[.0-9]+[√]-?[.0-9]+/,
  pow: /-?[.0-9]+[\^]-?[.0-9]+/,
  minus: /-?[.0-9]+[-]-?[.0-9]+/,
};
