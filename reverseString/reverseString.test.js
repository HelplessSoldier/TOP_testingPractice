const reverseString = require("./reverseString");

test("Reverses a string", () => {
  expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});

test("works fine with single char", () => {
  expect(reverseString("A")).toBe("A");
});
