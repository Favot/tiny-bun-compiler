import { traverse } from "./traverse";

export function transformer(originalAST: any): any {
  const jsAST = {
    type: "Program",
    body: [],
  };

  let position = jsAST.body;

  traverse(originalAST, {
    NumberLiteral(node: any) {
      position.push({
        type: "NumericLiteral",
        value: node.value,
      });
    },
    CallExpression(node: any, parent: any) {
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
    },
  });

  return jsAST;
}
