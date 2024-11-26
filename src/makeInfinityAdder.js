'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  function adder(num) {
    if (num === undefined) {
      result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      result = sum;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
