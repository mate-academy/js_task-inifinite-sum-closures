'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const finalSum = sum;

    sum = 0;

    return finalSum;
  };
}

module.exports = makeInfinityAdder;
