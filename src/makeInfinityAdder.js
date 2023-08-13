'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(number) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (typeof number === 'number') {
      sum += number;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
