'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function summator(...arr) {
    if (arr.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += arr.reduce((a, b) => a + b, 0);

    return summator;
  }

  return summator;
}

module.exports = makeInfinityAdder;
