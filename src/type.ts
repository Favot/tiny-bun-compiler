export type TokenType = "parenthesis" | "name" | "number";

export type Token = {
  type: TokenType;
  value: string;
};

export type ASTNodeType = "Program" | "NumberLiteral" | "CallExpression";

export interface ASTNodeBase<T extends ASTNodeType> {
  type: T;
}

export interface NumberLiteralNode extends ASTNodeBase<"NumberLiteral"> {
  value: string;
}

export interface CallExpressionNode extends ASTNodeBase<"CallExpression"> {
  name: string;
  params: ASTNode[];
}

export interface ProgramNode extends ASTNodeBase<"Program"> {
  body: ASTNode[];
}

export type ASTNode = NumberLiteralNode | CallExpressionNode | ProgramNode;

export type ProgramAST = ProgramNode;
