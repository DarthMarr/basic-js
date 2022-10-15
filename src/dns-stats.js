const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let sArr = [];
  let tArr = [];
  let obj = {};
  let count = 0;
  if (domains.length == 0) {
    return obj;
  }
  let lstIndex = domains[0].lastIndexOf(".");
  let mainDomain = domains[0].slice(lstIndex);

  for (let i = 0; i < domains.length; i++) {
    domains[i]
      .split(".")
      .reverse()
      .forEach((el) => arr.push("." + el));
  }
  let newArr = arr.slice().sort();
  for (let i = 0; i < arr.length; i++) {
    sArr[i] = arr
      .splice(arr.lastIndexOf(mainDomain))
      .reverse()
      .reduce((sum, el) => el + sum);
  }
  sArr.reverse().unshift(mainDomain);
  for (let i = 0; i < sArr.length; i++) {
    obj[sArr[i]] = 0;
  }
  obj[sArr[0]] = sArr.length - 1;
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] == newArr[i + 1]) {
      continue;
    } else {
      tArr.push(newArr[i]);
    }
  }
  sArr.reverse();
  for (let i = 0; i <= sArr.length + 1; i++) {
    sArr.length > 1 ? (obj[sArr[i]] = count) : (obj[sArr[0]] = count);
    count = 0;
    sArr.splice(sArr.length - 1, 1);
    sArr.forEach((el) => {
      if (el.includes(tArr[i]) == true) {
        count++;
      }
    });
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
