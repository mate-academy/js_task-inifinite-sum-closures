'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (typeof x === 'undefined') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
