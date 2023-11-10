'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const resultSum = sum;

    if (num !== undefined) {
      sum += num;
    } else {
      sum = 0;

      return resultSum;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
