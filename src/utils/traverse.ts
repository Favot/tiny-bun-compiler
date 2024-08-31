import type { ASTNode, ProgramNode } from "../type";

type NodeVisitor<T extends ASTNode> = (node: T, parent: ASTNode | null) => void;
type NodeVisitors = {
  [K in ASTNode["type"]]?: NodeVisitor<Extract<ASTNode, { type: K }>>;
};

export function traverse(ast: ProgramNode, visitors: NodeVisitors) {
  visitNode(ast, null, visitors);
}

function visitNode<T extends ASTNode>(
  node: T,
  parent: ASTNode | null,
  visitors: NodeVisitors
) {
  const visitor = visitors[node.type] as NodeVisitor<T> | undefined;

  if (visitor) {
    visitor(node, parent);
  }

  switch (node.type) {
    case "Program":
      visitNodes(node.body, node, visitors);
      break;
    case "CallExpression":
      visitNodes(node.params, node, visitors);
      break;
    case "NumberLiteral":
      // NumberLiteral has no children to visit
      break;
    default:
      throw new Error(`Unknown AST node type: ${node}`);
  }
}

function visitNodes(nodes: ASTNode[], parent: ASTNode, visitors: NodeVisitors) {
  nodes.forEach((node) => visitNode(node, parent, visitors));
}
