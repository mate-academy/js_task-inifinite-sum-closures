'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = function(value) {
    if (value || value === 0) {
      currentSum += value;

      return adder;
    } else {
      const result = currentSum;

      currentSum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
