'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (typeof number === 'number') {
      sum += number;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
