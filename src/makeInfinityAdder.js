'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const currentSum = sum;

    sum = 0;

    return currentSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
