
# String Calculator TDD Kata

This project is a TypeScript implementation of the String Calculator TDD Kata, following Test-Driven Development (TDD) principles. The `add` method processes strings of numbers, handling various delimiters, and throws errors for negative inputs.

## Features

1. **Sum up to two numbers**: Handles input strings containing one or two comma-separated numbers.
2. **Handle unknown number of numbers**: Can sum an arbitrary number of numbers.
3. **Support for newlines as delimiters**: Handles newline characters as valid delimiters.
4. **Custom delimiters**: Allows specifying custom delimiters using the `//[delimiter]\n` format.
5. **Multiple delimiters**: Supports multiple custom delimiters using `//[delim1][delim2]\n`.
6. **Delimiters of any length**: Handles delimiters of varying lengths, such as `//[***]\n1***2***3`.
7. **Error handling for negative numbers**: Throws an exception listing all negative numbers.
8. **Ignore numbers greater than 1000**: Values above 1000 are ignored during summation.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/string-calculator-kata.git
   cd string-calculator-kata
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

## Running Tests

To run the tests, use:

```bash
npm test
```

## Usage

The `add` function is used to perform addition operations based on a given string:

```typescript
import { add } from './src/stringCalculator';

console.log(add("1,2"));         // Output: 3
console.log(add("//[***]\n1***2***3")); // Output: 6
console.log(add("1,-2,3"));      // Throws: Error: negatives not allowed: -2
```
