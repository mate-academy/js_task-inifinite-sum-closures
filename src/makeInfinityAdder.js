'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;
  let currentSum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = totalSum + currentSum;

      totalSum = 0;
      currentSum = 0;

      return result;
    } else {
      currentSum += num;

      return adder;
    }
  }

  adder.toString = () => {
    totalSum += currentSum;
    currentSum = 0;

    return totalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
