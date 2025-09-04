import analyzeArray from "../analyzeArray.js";

test("test1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test1", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});
