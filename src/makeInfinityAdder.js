'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    const lastResult = sum;

    if (value === undefined) {
      sum = 0;

      return lastResult;
    }
    sum += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
