class Calculator {
  add(...numbers) {
    let res = 0;
    for (let num of numbers) {
      if (typeof num !== "number") {
        throw new Error("Invalid inputs, all must be of type number");
      }
      res += num;
    }
    return res;
  }

  subtract(num1, num2) {
    if (
      !num1 ||
      !num2 ||
      typeof num1 !== "number" ||
      typeof num2 !== "number"
    ) {
      throw new Error("Invalid inputs, both must be of type number");
    }
    return num1 - num2;
  }

  divide(num1, num2) {
    if (
      !num1 ||
      !num2 ||
      typeof num1 !== "number" ||
      typeof num2 !== "number"
    ) {
      throw new Error("Invalid inputs, both must be of type number");
    }
    return num1 / num2;
  }

  multiply(...numbers) {
    if (numbers.length === 0) {
      return numbers;
    }
    let res = 1;
    for (let num of numbers) {
      if (typeof num !== "number") {
        throw new Error("Invalid inputs, all must be of type number");
      }
      res *= num;
    }
    return res;
  }
}

module.exports = Calculator;
