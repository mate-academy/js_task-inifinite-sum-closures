'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    };

    sum += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
