function ceasarCipher(string, shiftFactor) {
  const lowercaseRange = [97, 122];
  const uppercaseRange = [65, 90];

  // get ord of each char
  let charcodes = [];
  for (let char of string) {
    charcodes.push(char.charCodeAt(0));
  }

  for (let i = 0; i < charcodes.length; i++) {
    // lowercase charcodes:
    if (
      charcodes[i] >= lowercaseRange[0] &&
      charcodes[i] <= lowercaseRange[1]
    ) {
      charcodes[i] += shiftFactor;
      // overshot, need to wrap
      if (charcodes[i] > lowercaseRange[1]) {
        charcodes[i] =
          lowercaseRange[0] + (charcodes[i] - lowercaseRange[1]) - 1;
      }
    }
    // uppercase charcodes:
    if (
      charcodes[i] >= uppercaseRange[0] &&
      charcodes[i] <= uppercaseRange[1]
    ) {
      charcodes[i] += shiftFactor;
      // overshot, need to wrap
      if (charcodes[i] > uppercaseRange[1]) {
        charcodes[i] =
          uppercaseRange[0] + (charcodes[i] - uppercaseRange[1]) - 1;
      }
    }
  }

  let res = "";
  res += String.fromCharCode(...charcodes);
  return res;
}

module.exports = ceasarCipher;
