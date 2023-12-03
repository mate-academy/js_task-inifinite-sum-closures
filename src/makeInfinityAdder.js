'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(arg) {
  let sum = 0;

  function adder(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
