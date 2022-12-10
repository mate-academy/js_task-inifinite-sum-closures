'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    const sumResult = sum;

    if (value === undefined) {
      sum = 0;

      return sumResult;
    }
    sum += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
