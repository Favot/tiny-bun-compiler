// Token Definitions
export type TokenType = "parenthesis" | "name" | "number";

export type Token = {
  type: TokenType;
  value: string;
};

// Base AST Node Types
export type ASTNodeType = "Program" | "NumberLiteral" | "CallExpression";

interface ASTNodeBase<T extends ASTNodeType> {
  type: T;
}

// Specific AST Nodes
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

// Unified AST Node Type
export type ASTNode = NumberLiteralNode | CallExpressionNode | ProgramNode;
export type ProgramAST = ProgramNode;

// JS AST Node Types
export type JSASTNodeType =
  | "Program"
  | "NumericLiteral"
  | "CallExpression"
  | "ExpressionStatement"
  | "Identifier";

interface JSASTNodeBase<T extends JSASTNodeType> {
  type: T;
}

// Specific JS AST Nodes
export interface JSProgramNode extends JSASTNodeBase<"Program"> {
  body: JSASTNode[];
}

export interface JSNumericLiteralNode extends JSASTNodeBase<"NumericLiteral"> {
  value: string;
}

export interface JSIdentifierNode extends JSASTNodeBase<"Identifier"> {
  name: string;
}

export interface JSCallExpressionNode extends JSASTNodeBase<"CallExpression"> {
  callee: JSIdentifierNode;
  arguments: JSASTNode[];
}

export interface JSExpressionStatementNode
  extends JSASTNodeBase<"ExpressionStatement"> {
  expression: JSCallExpressionNode;
}

// Unified JS AST Node Type
export type JSASTNode =
  | JSProgramNode
  | JSNumericLiteralNode
  | JSIdentifierNode
  | JSCallExpressionNode
  | JSExpressionStatementNode;
