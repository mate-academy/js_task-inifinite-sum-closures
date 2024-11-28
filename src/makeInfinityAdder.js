'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function counter(add) {
    if (add === undefined) {
      const result = sum;
      sum = 0;

      return result;
    } else {
      sum += add;

      return counter;
    }
  }
}

module.exports = makeInfinityAdder;
