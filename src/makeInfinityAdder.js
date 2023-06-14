'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const clearResult = sum;

      sum = 0;

      return clearResult;
    }
    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
