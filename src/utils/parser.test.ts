import { expect, test } from "bun:test";
import {
  expectedParsedOutput,
  expectedTokensOutput,
} from "../../__test__/mock";
import { parser } from "./parser";

test("parser", () => {
  const result = parser(expectedTokensOutput);

  expect(result).toEqual(expectedParsedOutput);
});
