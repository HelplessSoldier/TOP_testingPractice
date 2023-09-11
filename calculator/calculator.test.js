const Calculator = require("./calculator");

describe("Math operations", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  test("Multiply multiplies two numbers", () => {
    expect(calc.multiply(2, 3)).toBe(6);
  });

  test("Multiply handles multiple numbers", () => {
    expect(calc.multiply(2, 3, 4, 5, 6)).toBe(720);
  });

  test("Multiply handles a single number", () => {
    expect(calc.multiply(2)).toBe(2);
  });

  test("Multiply handles floats", () => {
    expect(calc.multiply(2, 1.5)).toBe(3);
  });

  test("Add adds two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("Add adds multiple numbers", () => {
    expect(calc.add(1, 2, 3, 4, 5)).toBe(15);
  });

  test("Add handles a single number input", () => {
    expect(calc.add(1)).toBe(1);
  });

  test("add handles floats", () => {
    expect(calc.add(1.2, 1.3)).toBe(2.5);
  });

  test("throws an error if either input is not a num", () => {
    try {
      calc.subtract(1);
      fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).toBe("Invalid inputs, both must be of type number");
    }
    try {
      calc.divide("hiii!");
      fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).toBe("Invalid inputs, both must be of type number");
    }
    try {
      calc.add("hiii!");
      fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).toBe("Invalid inputs, all must be of type number");
    }
    try {
      calc.multiply("hiii!");
      fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).toBe("Invalid inputs, all must be of type number");
    }
  });

  test("Subtract subtracts num2 from num1", () => {
    expect(calc.subtract(2, 1)).toBe(1);
  });
});
