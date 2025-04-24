'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  return function adder() {
    if (arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        currentSum += arguments[i];
      }

      return adder;
    } else {
      const result = currentSum;

      currentSum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
