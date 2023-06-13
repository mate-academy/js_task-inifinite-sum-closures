'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num = null) => {
    if (num === null) {
      const currSum = sum;

      sum = 0;

      return currSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
