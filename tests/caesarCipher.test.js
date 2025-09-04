import ceaserCipher from "../caesarCipher.js";

test("marcus brutus ciphers to PDUFXV EUXWXV ", () => {
  expect(ceaserCipher("marcus brutus", 3)).toBe("PDUFXV EUXWXV".toLowerCase());
});

test("julius caesar ciphers to MXOLXV FDHVDU ", () => {
  expect(ceaserCipher("julius caesar", 3)).toBe("MXOLXV FDHVDU".toLowerCase());
});

test("wraps z to a ", () => {
  expect(ceaserCipher("xyz", 3)).toBe("abc");
});

test("case prevention ", () => {
  expect(ceaserCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation remains unchanged ", () => {
  expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
