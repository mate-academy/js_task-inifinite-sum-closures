'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(params) {
    if (params === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += params;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
