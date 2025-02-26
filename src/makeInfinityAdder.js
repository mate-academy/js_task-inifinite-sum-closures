'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function addSum(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += value;

    return addSum;
  }

  return addSum;
}

module.exports = makeInfinityAdder;
