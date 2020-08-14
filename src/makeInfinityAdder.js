'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accum = 0;

  function adder(number) {
    const sum = accum;

    accum += number;

    if (number) {
      return adder;
    } else {
      accum = 0;

      return sum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
