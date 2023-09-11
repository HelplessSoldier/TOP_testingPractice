function _shiftChars(charCodes, range, shiftFactor) {
  for (let i = 0; i < charCodes.length; i++) {
    if (charCodes[i] >= range[0] && charCodes[i] <= range[1]) {
      charCodes[i] += shiftFactor;
      // overshot, need to wrap
      if (charCodes[i] > range[1]) {
        charCodes[i] = range[0] + (charCodes[i] - range[1]) - 1;
      }
    }
  }
}

function ceasarCipher(string, shiftFactor) {
  const lowercaseRange = [97, 122];
  const uppercaseRange = [65, 90];

  let charCodes = [];
  for (let char of string) {
    charCodes.push(char.charCodeAt(0));
  }

  _shiftChars(charCodes, lowercaseRange, shiftFactor);
  _shiftChars(charCodes, uppercaseRange, shiftFactor);

  let res = "";
  res += String.fromCharCode(...charCodes);
  return res;
}

module.exports = ceasarCipher;
