'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (arguments.length === 0) {
      const temp = sum;

      sum = 0;

      return temp;
    } else {
      sum += number;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
