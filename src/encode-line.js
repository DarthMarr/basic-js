const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let resultArr = [];
  let count = 0;
  if (arr.length < 1) {
    return str;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else if (arr[i] != arr[i + 1] && arr[i] == arr[i - 1]) {
      count++;
      resultArr.push(count + arr[i]);
      count = 0;
    } else if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr.join("");
}

module.exports = {
  encodeLine,
};
