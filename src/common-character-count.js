const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();
  let x = 0;
  let y = 0;
  let arrLength;
  s1.length >= s2.length ? (arrLength = s1.length) : (arrLength = s2.length);
  if (s1.length < 1 || s2.length < 1) {
    return 0;
  }
  for (let i = 0; i <= arrLength; i++) {
    if (arr2.lastIndexOf(arr1[arrLength - i]) !== -1) {
      arr2.splice(arr2.lastIndexOf(arr1[arrLength - i]), 1);
      arr1.splice(arrLength - i, 1);
      y += 1;
    } else {
      continue;
    }
  }
  return y;
}

module.exports = {
  getCommonCharacterCount,
};
