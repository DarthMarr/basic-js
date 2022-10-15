const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let HALF_LIFE_PERIOD;
  let MODERN_ACTIVITY = 15;
  let arr;
  if (sampleActivity == undefined || typeof sampleActivity !== "string") {
    return false;
  } else {
    arr = sampleActivity.split();
  }
  let k = 0.00012094240837696334;
  let resulrArr = arr.map((el) => +el);
  if (Math.sign(resulrArr) == -1 || Math.sign(resulrArr) == 0) {
    return false;
  }
  let archaeologicalSampleActivity = resulrArr[0];
  if (Number.isFinite(archaeologicalSampleActivity) == true) {
    HALF_LIFE_PERIOD =
      Math.log(MODERN_ACTIVITY / archaeologicalSampleActivity) / k;
    HALF_LIFE_PERIOD = Math.ceil(HALF_LIFE_PERIOD);
  } else {
    return (HALF_LIFE_PERIOD = false);
  }
  if (HALF_LIFE_PERIOD == Infinity || Math.sign(HALF_LIFE_PERIOD) == -1) {
    return false;
  } else {
    return HALF_LIFE_PERIOD;
  }
}
module.exports = {
  dateSample,
};
