import capitalize from "../capitalize.js";

test("capitalizes hello world", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalizes bond, james bond", () => {
  expect(capitalize("bond, james bond")).toBe("Bond, james bond");
});

test("capitalizes que mira bobo", () => {
  expect(capitalize("que mira bobo")).toBe("Que mira bobo");
});
