'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const amount = sum;

      sum = 0;

      return amount;
    }

    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
