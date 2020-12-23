'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(number) {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    if (number === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
