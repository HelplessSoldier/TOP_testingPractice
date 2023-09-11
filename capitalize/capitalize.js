function capitalize(string) {
  const lowercaseRange = [97, 122];
  const uppercaseRange = [65, 90];

  // already has an uppercase first char
  if (
    string.charCodeAt(0) >= uppercaseRange[0] &&
    string.charCodeAt(0) <= uppercaseRange[1]
  ) {
    return string;
  }

  // first char is lowercase
  if (
    string.charCodeAt(0) >= lowercaseRange[0] &&
    string.charCodeAt(0) <= lowercaseRange[1]
  ) {
    const chars = [];
    for (let i = 0; i < string.length; i++) {
      chars.push(string.charCodeAt(i));
    }
    console.log(chars);
    chars[0] -= 32;
    return String.fromCharCode(...chars);
  }
}

module.exports = capitalize;
