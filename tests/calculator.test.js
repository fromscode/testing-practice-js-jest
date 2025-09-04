import calculator from "../calculator.js";

test("1 + 1 equals 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("2 + 3 equals 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("-2 + -6 equals 5", () => {
  expect(calculator.add(-2, -6)).toBe(-8);
});

test("2 - 1 equals 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("10 - 4 equals 6", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("0 - 0 equals 0", () => {
  expect(calculator.subtract(0, 0)).toBe(0);
});

test("2 * 3 equals 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("5 * 2 equals 10", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("0 * 0 equals 0", () => {
  expect(calculator.multiply(0, 0)).toBe(0);
});

test("3 / 1 equals 3", () => {
  expect(calculator.divide(3, 1)).toBe(3);
});

test("10 / 2 equals 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("1 / 0 to be Infinity", () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("10 / 3 to be 3.3333", () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});
