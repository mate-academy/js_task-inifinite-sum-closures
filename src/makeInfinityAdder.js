'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let callsCount = 0;

  return function adder(x) {
    if (x === undefined) {
      if (callsCount === 0) {
        sum = 0;
      }
      callsCount = 0;

      return sum;
    }
    sum += x;
    callsCount++;

    return adder;
  };
}

module.exports = makeInfinityAdder;
