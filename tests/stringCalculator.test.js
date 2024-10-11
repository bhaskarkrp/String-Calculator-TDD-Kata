const { add } = require("../src/stringCalculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number for a single number string", () => {
  expect(add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("should handle new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should handle custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw error for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test("should throw error with all negative numbers in the message", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});

test("should ignore numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("should handle delimiters of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});
