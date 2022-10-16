const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i] == "--double-next" &&
      newArr.indexOf("--double-next") != newArr.length - 1
    ) {
      newArr.splice(i, 1, newArr[i + 1]);
    } else if (
      newArr[i] == "--double-next" &&
      newArr.indexOf("--double-next") == newArr.length - 1
    ) {
      newArr.splice(i, 1);
    } else if (
      newArr[i] == "--double-prev" &&
      newArr.indexOf("--double-prev") != 0
    ) {
      newArr.splice(i, 1, newArr[i - 1]);
    } else if (
      newArr[i] == "--double-prev" &&
      newArr.indexOf("--double-prev") == 0
    ) {
      newArr.splice(i, 1);
    } else if (
      newArr[i] == "--discard-next" &&
      newArr.indexOf("--discard-next") != newArr.length - 1
    ) {
      newArr.splice(i, 2, "", "");
    } else if (
      newArr[i] == "--discard-next" &&
      newArr.indexOf("--discard-next") == newArr.length - 1
    ) {
      newArr.splice(i, 1, "");
    } else if (
      newArr[i] == "--discard-prev" &&
      newArr.indexOf("--discard-prev") != 0
    ) {
      newArr.splice(i - 1, 2, "", "");
    } else if (
      newArr[i] == "--discard-prev" &&
      newArr.indexOf("--discard-prev") == 0
    ) {
      newArr.splice(i, 1, "");
    }
  }
  return newArr.filter((el) => el !== "");
}

module.exports = {
  transform,
};
