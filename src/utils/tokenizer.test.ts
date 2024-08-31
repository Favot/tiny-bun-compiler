import { expect, test } from "bun:test";
import { expectedTokensOutput, userInput } from "../../__test__/mock";
import { tokenizer } from "./tokenizer";
test("tokenizer", () => {
  const result = tokenizer(userInput);

  expect(result).toEqual(expectedTokensOutput);
});
