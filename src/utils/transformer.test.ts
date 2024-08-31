import { expect, test } from "bun:test";
import {
  expectedParsedOutput,
  expectedTransformedOutput,
} from "../../__test__/mock";
import { transformer } from "./transformer";

test("transformer", () => {
  const result = transformer(expectedParsedOutput);

  expect(result).toEqual(expectedTransformedOutput);
});
