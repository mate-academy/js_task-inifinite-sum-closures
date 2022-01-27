'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...params) => {
    if (params.length > 0) {
      sum += params[0];

      return adder;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
