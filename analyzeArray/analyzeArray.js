function analyzeArray(array) {
  if (array.length === 0) {
    throw new Error("array is empty");
  }

  let average = null;
  let min = Infinity;
  let max = -Infinity;
  let length = array.length;

  let sum = 0;
  for (let num of array) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }
  average = sum / length;

  const res = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return res;
}

module.exports = analyzeArray;
