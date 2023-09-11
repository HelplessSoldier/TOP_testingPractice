const ceaserCipher = require("./ceasarCipher");

// offset by 1
// abcdefghijklmnopqrstuvwxyz
// bcdefghijklmnopqrstuvwxyza

test("Works on a single word", () => {
  expect(ceaserCipher("hello", 1)).toBe("ifmmp");
});

test("works on multiple words", () => {
  expect(ceaserCipher("this is some text", 1)).toBe("uijt jt tpnf ufyu");
});

test("works with non char's", () => {
  expect(ceaserCipher("hello!!!", 1)).toBe("ifmmp!!!");
});

test("maintains upper/lowercase", () => {
  expect(ceaserCipher("HELLo", 1)).toBe("IFMMp");
});
