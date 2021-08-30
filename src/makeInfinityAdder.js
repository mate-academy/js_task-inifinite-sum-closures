'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a) {
      sum += a;

      return adder;
    } else {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
