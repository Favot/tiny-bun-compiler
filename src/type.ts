export type TokenType = "paren" | "name" | "number";

export type Token = {
  type: TokenType;
  value: string;
};

export type Expression = NumberLiteral | SimpleCallExpression;

export type NumberLiteral = {
  type: "NumberLiteral";
  value: string;
};

export type SimpleCallExpression = {
  type: "CallExpression";
  name: string;
  params: Expression[];
};

export type DetailedCallExpression = {
  type: "CallExpression";
  callee: { type: string; name: string };
  arguments: JSAstBody[];
};

export type ExpressionStatement = {
  type: "ExpressionStatement";
  expression: DetailedCallExpression;
};

export type JSAstBody =
  | NumberLiteral
  | DetailedCallExpression
  | ExpressionStatement;

export type JSAst = {
  type: string;
  body: JSAstBody[];
};
