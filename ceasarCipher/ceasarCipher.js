function _shiftChars(charcodes, range, shiftFactor) {
  for (let i = 0; i < charcodes.length; i++) {
    if (charcodes[i] >= range[0] && charcodes[i] <= range[1]) {
      charcodes[i] += shiftFactor;
      // overshot, need to wrap
      if (charcodes[i] > range[1]) {
        charcodes[i] = range[0] + (charcodes[i] - range[1]) - 1;
      }
    }
  }
}

function ceasarCipher(string, shiftFactor) {
  const lowercaseRange = [97, 122];
  const uppercaseRange = [65, 90];

  let charcodes = [];
  for (let char of string) {
    charcodes.push(char.charCodeAt(0));
  }

  _shiftChars(charcodes, lowercaseRange, shiftFactor);
  _shiftChars(charcodes, uppercaseRange, shiftFactor);

  let res = "";
  res += String.fromCharCode(...charcodes);
  return res;
}

module.exports = ceasarCipher;
