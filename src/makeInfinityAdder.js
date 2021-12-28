'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let sum = 0;

  const adder = function(x) {
    if (x === undefined) {
      result = sum;
      sum = 0;

      return result;
    };

    sum += x;

    return adder;
  };

  result = 0;

  return adder;
}

module.exports = makeInfinityAdder;
