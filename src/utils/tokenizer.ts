// Define the Token type if not already existing

import type { Token, TokenType } from "../type";

const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/;
const NUMBERS = /\d/;

export function tokenizer(input: string): Token[] {
  const tokens: Token[] = [];
  let currentIndex = 0;

  while (currentIndex < input.length) {
    let character = input[currentIndex];

    if (character === "(" || character === ")") {
      tokens.push(parseParenthesisToken(character));
      currentIndex++;
      continue;
    }

    if (LETTERS.test(character)) {
      const { token, nextIndex } = parseToken(
        input,
        currentIndex,
        LETTERS,
        "name"
      );
      tokens.push(token);
      currentIndex = nextIndex;
      continue;
    }

    if (NUMBERS.test(character)) {
      const { token, nextIndex } = parseToken(
        input,
        currentIndex,
        NUMBERS,
        "number"
      );
      tokens.push(token);
      currentIndex = nextIndex;
      continue;
    }

    if (WHITESPACE.test(character)) {
      currentIndex++;
      continue;
    }

    // Handling unknown characters more explicitly
    throw new TypeError(
      `Unknown character: '${character}' at index ${currentIndex}`
    );
  }

  return tokens;
}

function parseParenthesisToken(character: string): Token {
  return { type: "parenthesis", value: character };
}

type ParseResult = { token: Token; nextIndex: number };

function parseToken(
  input: string,
  startIndex: number,
  regex: RegExp,
  type: TokenType
): ParseResult {
  let value = "";
  let currentIndex = startIndex;
  let character = input[currentIndex];

  while (regex.test(character) && currentIndex < input.length) {
    value += character;
    character = input[++currentIndex];
  }

  return { token: { type, value }, nextIndex: currentIndex };
}
