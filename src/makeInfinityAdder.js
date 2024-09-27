'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (num) => {
    if (num === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
