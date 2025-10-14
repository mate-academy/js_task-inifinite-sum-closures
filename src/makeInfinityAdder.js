'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      currentSum += num;

      return adder;
    }

    const result = currentSum;

    currentSum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
