'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumNumbers = 0;

  function adder(value) {
    if (value >= 0) {
      sumNumbers += value;

      return adder;
    }

    const resetSum = sumNumbers;

    sumNumbers = 0;

    return resetSum;
  }

  return adder;
}

module.exports = makeInfinityAdder;
