import { generator } from "./utils/generator";
import { parser } from "./utils/parser";
import { tokenizer } from "./utils/tokenizer";
import { transformer } from "./utils/transformer";
export const compiler = (input: string) => {
  // 1 Lexical Analysis

  const tokens = tokenizer(input);

  // 2 Syntax Analysis

  const lispAST = parser(tokens);
  // 3 Transformation

  const jsAST = transformer(lispAST);

  // 4 Code Generation

  const jsCode = generator(jsAST);

  // return jsCode;
  return jsCode;
};
