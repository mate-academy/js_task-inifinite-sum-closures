'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num = 0) {
    sum += num;

    if (num === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
