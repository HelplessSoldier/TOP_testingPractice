const capitalize = require("./capitalize");

test("Capitalizes a single word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Properly returns original string if it's already uppercase", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Only capitalizes the first word in a sentance", () => {
  expect(capitalize("this is a longer string of text with spaces!")).toBe(
    "This is a longer string of text with spaces!"
  );
});
