'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(n) {
    if (n !== undefined) {
      sum += n;

      return adder;
    }

    const finalResult = sum;

    sum = 0;

    return finalResult;
  };
}

module.exports = makeInfinityAdder;
