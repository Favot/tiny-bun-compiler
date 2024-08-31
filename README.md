
# The Super Tiny Compiler with Bun

This project is a test implementation of [The Super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) by jamiebuilds, using the [Bun](https://bun.sh) runtime.
This is a playful and educational attempt to convert Lisp-like syntax to JavaScript code.

## Overview

The project consists of a straightforward compiler pipeline using the following steps:

1. Tokenization
2. Parsing
3. Transformation
4. Code Generation

Your input is a Lisp-like expression, and the output is a JavaScript code representation of that expression.

## Usage

```bash
# Clone the repository
git clone https://github.com/favot/tiny-bun-compiler.git

# Navigate to the project directory
cd tiny-bun-compiler

# Install dependencies
bun install

# Run the compiler
bun run dev
```

This will tokenize, parse, transform, and generate JavaScript code from the given Lisp-like input.

## Disclaimer

This project is purely for educational purposes to demonstrate how to build a simple compiler.
Do not take it too seriously. This project was to dicover Bun.

## Credits

- Bun for providing the JavaScript runtime.
- The Super Tiny Compiler by Jamie Kyle for the concept and inspiration.

Feel free to explore, and happily hack around!
