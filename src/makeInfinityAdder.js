'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  return function sum(a) {
    if (arguments.length === 0) {
      const finalSum = result;

      result = 0;

      return finalSum;
    }

    result += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
