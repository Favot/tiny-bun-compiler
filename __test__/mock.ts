import type { ProgramAST, Token } from "../src/type";

export const userInput = "(add 2 (sub 4 3))";

export const expectedTokensOutput: Token[] = [
  {
    type: "parenthesis",
    value: "(",
  },
  {
    type: "name",
    value: "add",
  },
  {
    type: "number",
    value: "2",
  },
  {
    type: "parenthesis",
    value: "(",
  },
  {
    type: "name",
    value: "sub",
  },
  {
    type: "number",
    value: "4",
  },
  {
    type: "number",
    value: "3",
  },
  {
    type: "parenthesis",
    value: ")",
  },
  {
    type: "parenthesis",
    value: ")",
  },
];

export const expectedParsedOutput: ProgramAST = {
  type: "Program",
  body: [
    {
      type: "CallExpression",
      name: "add",
      params: [
        {
          type: "NumberLiteral",
          value: "2",
        },
        {
          type: "CallExpression",
          name: "sub",
          params: [
            {
              type: "NumberLiteral",
              value: "4",
            },
            {
              type: "NumberLiteral",
              value: "3",
            },
          ],
        },
      ],
    },
  ],
};

export const expectedTransformedOutput = {
  type: "Program",
  body: [
    {
      type: "ExpressionStatement",
      expression: {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "add",
        },
        arguments: [
          {
            type: "NumericLiteral",
            value: "2",
          },
          {
            type: "CallExpression",
            callee: {
              type: "Identifier",
              name: "sub",
            },
            arguments: [
              {
                type: "NumericLiteral",
                value: "4",
              },
              {
                type: "NumericLiteral",
                value: "3",
              },
            ],
          },
        ],
      },
    },
  ],
};

export const expectedGeneratorOutput = "add(2, sub(4, 3));";
