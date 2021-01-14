'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (!number) {
      const summed = sum;

      sum = 0;

      return summed;
    }
    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
