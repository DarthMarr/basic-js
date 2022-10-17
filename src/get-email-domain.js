const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailRegArr = email.match(/@\w[a-zA-Z0-9_-]*\.\w*/);
  return emailRegArr.join("").slice(1);
}

module.exports = {
  getEmailDomain,
};
