import { expect, test } from "bun:test";
import {
  expectedGeneratorOutput,
  expectedTransformedOutput,
} from "../../__test__/mock";
import { generator } from "./generator";

test("generator", () => {
  const result = generator(expectedTransformedOutput);

  expect(result).toEqual(expectedGeneratorOutput);
});
