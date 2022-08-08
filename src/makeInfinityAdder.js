'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    const value = sum;

    if (number === undefined) {
      sum = 0;

      return value;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
