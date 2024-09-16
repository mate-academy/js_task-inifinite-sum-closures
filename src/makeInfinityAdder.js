'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  function adder(a) {
    if (a !== undefined) {
      totalSum += a;

      return adder;
    } else {
      const result = totalSum;

      totalSum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
