'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
