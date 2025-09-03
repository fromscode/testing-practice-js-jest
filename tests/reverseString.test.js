import reverseString from "../reverseString.js";

test("reverses hello world", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses que mira bobo", () => {
  expect(reverseString("que mira bobo")).toBe("obob arim euq");
});

test("reverses are they real?", () => {
  expect(reverseString("are they real?")).toBe("?laer yeht era");
});
