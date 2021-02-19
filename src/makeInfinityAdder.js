'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (x === undefined) {
      const adderResult = sum;

      sum = 0;

      return adderResult;
    } else {
      sum += x;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
