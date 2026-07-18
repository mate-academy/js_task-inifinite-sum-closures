'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (x === undefined) {
      const finalResult = sum;

      sum = 0;

      return finalResult;
    }

    sum += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
