'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(input) {
    if (input === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += input;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
