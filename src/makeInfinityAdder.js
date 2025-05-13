'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder() {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
