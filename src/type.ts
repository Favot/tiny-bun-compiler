export type Token = {
  type: "paren" | "name" | "number";
  value: string;
};

export type Expression =
  | { type: "NumberLiteral"; value: string }
  | { type: "CallExpression"; name: string; params: Expression[] };
