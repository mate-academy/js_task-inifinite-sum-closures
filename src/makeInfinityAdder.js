'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (a === undefined) {
      const previousSum = sum;

      sum = 0;

      return previousSum;
    };

    sum += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
