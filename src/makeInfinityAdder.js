'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = function(y) {
    if (y) {
      sum += y;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
