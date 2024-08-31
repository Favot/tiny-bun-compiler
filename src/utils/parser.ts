import type {
  ASTNode,
  CallExpressionNode,
  NumberLiteralNode,
  ProgramAST,
  Token,
} from "../type";

export function parser(tokens: Token[]): ProgramAST {
  const currentIndex = { value: 0 };

  const { node } = walk(tokens, currentIndex);

  const ast: ProgramAST = {
    type: "Program",
    body: [node],
  };

  return ast;
}

export type WalkResult = {
  node: ASTNode;
  nextIndex: number;
};

function walk(tokens: Token[], currentIndex: { value: number }): WalkResult {
  const token = tokens[currentIndex.value];

  switch (token.type) {
    case "number": {
      return parseNumberLiteral(tokens, currentIndex.value);
    }
    case "parenthesis":
      if (token.value === "(") {
        return parseCallExpression(tokens, currentIndex.value);
      }
  }

  throw new TypeError(`Unknown token: '${token}'`);
}

function parseNumberLiteral(tokens: Token[], index: number): WalkResult {
  const token = tokens[index];
  const numberLiteral: NumberLiteralNode = {
    type: "NumberLiteral",
    value: token.value,
  };
  return { node: numberLiteral, nextIndex: index + 1 };
}

function parseCallExpression(tokens: Token[], index: number): WalkResult {
  let token = tokens[++index];
  const callExpression: CallExpressionNode = {
    type: "CallExpression",
    name: token.value,
    params: [],
  };

  token = tokens[++index];
  while (token.value !== ")") {
    const result = walk(tokens, { value: index });
    callExpression.params.push(result.node);
    index = result.nextIndex;
    token = tokens[index];
  }

  return { node: callExpression, nextIndex: index + 1 };
}
