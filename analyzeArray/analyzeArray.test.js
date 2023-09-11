const analyzeArray = require("./analyzeArray");

test("finds array length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("finds array average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("finds array min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("finds array max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("handles single num in array", () => {
  const res = analyzeArray([1]);
  expect(res.length).toBe(1);
  expect(res.min).toBe(1);
  expect(res.max).toBe(1);
  expect(res.average).toBe(1);
});

test("handles empty array", () => {
  try {
    analyzeArray([]);
    fail("Expected error to be thrown");
  } catch (error) {
    expect(error.message).toBe("array is empty");
  }
});
