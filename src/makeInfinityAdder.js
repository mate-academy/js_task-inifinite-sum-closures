'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function recurs(a) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += a;

      return recurs;
    }
  };
}

module.exports = makeInfinityAdder;
