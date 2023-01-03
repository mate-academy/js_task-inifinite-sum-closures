'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  function adder(value) {
    if (arguments.length < 1) {
      result = sum;
      sum = 0;

      return result;
    }
    sum = sum + value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
