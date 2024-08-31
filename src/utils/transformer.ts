import type {
  ASTNode,
  CallExpressionNode,
  JSASTNode,
  JSNumericLiteralNode,
  JSProgramNode,
  NumberLiteralNode,
  ProgramNode,
} from "../type";
import { traverse } from "./traverse";

export function transformer(originalAST: ProgramNode) {
  const jsAST: JSProgramNode = {
    type: "Program",
    body: [],
  };

  let position = jsAST.body;

  function handleCallExpression(node: CallExpressionNode, parent: ASTNode) {
    let expression = {
      type: "CallExpression",
      callee: {
        type: "Identifier",
        name: node.name,
      },
      arguments: [],
    };
    const prevPosition = position;
    position = expression.arguments;
    if (parent.type !== "CallExpression") {
      expression = {
        type: "ExpressionStatement",
        expression,
      };
    }
    prevPosition.push(expression);
  }

  traverse(originalAST, {
    handleNumberLiteral: (node, _parent) => handleNumberLiteral(node, position),
    handleCallExpression,
  });

  return jsAST;
}

export function handleNumberLiteral(
  node: NumberLiteralNode,
  position: JSASTNode[]
): void {
  const numericLiteralNode: JSNumericLiteralNode = {
    type: "NumericLiteral",
    value: node.value,
  };
  position.push(numericLiteralNode);
}
