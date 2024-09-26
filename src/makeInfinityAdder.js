'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let startSum = 0;

  function adder(a) {
    const sum = startSum;

    if (a === undefined) {
      startSum = 0;

      return sum;
    }

    startSum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
