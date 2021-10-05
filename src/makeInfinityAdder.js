'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function adder(x) {
    if (!x) {
      const ret = totalSum;

      totalSum = 0;

      return ret;
    };

    totalSum += x;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
