import { findNth } from "./fib";

test("it returns 0 for 0th position in sequence", () => {
  const input = 0;
  const result = 0;
  expect(findNth(input)).toBe(result);
});

test("it returns 1 for 1st position in sequence", () => {
  const input = 1;
  const result = 1;
  expect(findNth(input)).toBe(result);
});

test("it returns 1 for 2nd position in sequence", () => {
  const input = 2;
  const result = 1;
  expect(findNth(input)).toBe(result);
});

test("it returns 2 for 3rd position in sequence", () => {
  const input = 3;
  const result = 2;
  expect(findNth(input)).toBe(result);
});

test("it returns 3 for 4th position in sequence", () => {
  const input = 4;
  const result = 3;
  expect(findNth(input)).toBe(result);
});

test("it returns 6765 for 20th position in sequence", () => {
  const input = 20;
  const result = 6765;
  expect(findNth(input)).toBe(result);
});

test("it returns 8944394323791464 for 78th position in sequence", () => {
  const input = 78;
  expect(findNth(input)).toBe(8944394323791464);
});
