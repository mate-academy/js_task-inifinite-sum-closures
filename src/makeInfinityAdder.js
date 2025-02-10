'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(each) {
    if (each === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += each;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
