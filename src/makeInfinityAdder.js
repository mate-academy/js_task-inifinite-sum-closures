'use strict';

/***
 * @return {function}
 */
module.exports = makeInfinityAdder;

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return adder;
  }

  return adder;
}
