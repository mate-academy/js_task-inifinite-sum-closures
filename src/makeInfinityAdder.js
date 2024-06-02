'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  const adder = function (num) {
    if (num === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    } else {
      currentSum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
