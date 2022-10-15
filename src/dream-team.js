const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) != true) {
    return false;
  }
  let mArr = [];
  members = members.sort();
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      mArr.push(members[i].trim().charAt(0).toUpperCase());
    } else {
      continue;
    }
  }
  return mArr.join("").split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
