import type {
  ASTNode,
  CallExpressionNode,
  NumberLiteralNode,
  ProgramNode,
} from "../type";

type VisitorFunctions = {
  handleNumberLiteral?: (
    node: NumberLiteralNode,
    parent: ASTNode | null
  ) => void;
  handleCallExpression?: (
    node: CallExpressionNode,
    parent: ASTNode | null
  ) => void;
};

export function traverse(ast: ProgramNode, visitors: VisitorFunctions) {
  visitNode(ast, null, visitors);
}

function visitNode<T extends ASTNode>(
  node: T,
  parent: ASTNode | null,
  visitors: VisitorFunctions
) {
  switch (node.type) {
    case "Program":
      visitNodes(node.body, node, visitors);
      break;
    case "CallExpression":
      if (visitors.handleCallExpression) {
        (
          visitors.handleCallExpression as (
            node: CallExpressionNode,
            parent: ASTNode | null
          ) => void
        )(node, parent);
      }
      visitNodes(node.params, node, visitors);
      break;
    case "NumberLiteral":
      if (visitors.handleNumberLiteral) {
        (
          visitors.handleNumberLiteral as (
            node: NumberLiteralNode,
            parent: ASTNode | null
          ) => void
        )(node, parent);
      }
      break;
    default:
      throw new Error(`Unknown AST node type: ${node}`);
  }
}

function visitNodes(
  nodes: ASTNode[],
  parent: ASTNode,
  visitors: VisitorFunctions
) {
  nodes.forEach((node) => visitNode(node, parent, visitors));
}
