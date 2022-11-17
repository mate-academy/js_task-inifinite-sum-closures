'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const bufer = sum;

      sum = 0;

      return bufer;
    } else {
      sum += number;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
