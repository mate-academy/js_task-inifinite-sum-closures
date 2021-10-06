'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function adder(x) {
    if (!x) {
      const lastSum = totalSum;

      totalSum = 0;

      return lastSum;
    };

    totalSum += x;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
