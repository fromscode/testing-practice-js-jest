export default function caeserCipher(str, key) {
  const lower = Array.from({ length: 26 }, (code = "a".charCodeAt(), index) =>
    String.fromCharCode(code + index)
  );
  const upper = Array.from({ length: 26 }, (code = "A".charCodeAt(), index) =>
    String.fromCharCode(code + index)
  );

  let cipher = "";
  for (const char of str) {
    if (char >= "a" && char <= "z")
      cipher += lower[(char.charCodeAt() - "a".charCodeAt() + key) % 26];
    else if (char >= "A" && char <= "Z")
      cipher += upper[(char.charCodeAt() - "A".charCodeAt() + key) % 26];
    else cipher += char;
  }
  return cipher;
}
