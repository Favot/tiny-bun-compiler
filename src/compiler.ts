import { tokenizer } from "./utils/tokenizer";
export const compiler = (input: string) => {
  // 1 Lexical Analysis

  const tokens = tokenizer(input);

  // 2 Syntax Analysis
  // 3 Transformation
  // 4 Code Generation

  // return jsCode;
  return tokens;
};
