'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  function adder(a) {
    if (a === undefined) {
      sum += 0;
      result += 0;
    } else {
      sum += a;
      result += a;
    }

    if ((sum === 0)) {
      sum = 0;

      return sum;
    }

    if ((a === undefined) && (sum > 0)) {
      sum = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
