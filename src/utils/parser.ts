import type { Expression, Token } from "../type";

export function parser(tokens: Token[]): {
  type: string;
  body: Expression[];
} {
  let current = 0;

  function walk(): Expression {
    let token = tokens[current];

    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }

    if (token.type === "paren" && token.value === "(") {
      token = tokens[++current];
      const expression: Expression = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      while (token.type !== "paren" && token.value !== ")") {
        expression.params.push(walk());
        token = tokens[current];
      }
      current++;
      return expression;
    }

    throw new TypeError(`Unknown token: '${token}'`);
  }

  const ast = {
    type: "Program",
    body: [walk()],
  };

  return ast;
}
