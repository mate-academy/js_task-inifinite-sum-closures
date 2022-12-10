'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const totalSum = sum;

    if (num !== undefined) {
      sum += num;

      return adder;
    }

    sum = 0;

    return totalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
