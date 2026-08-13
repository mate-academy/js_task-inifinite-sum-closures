'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (a !== undefined) {
      sum += a;

      return adder;
    } else {
      try {
        return sum;
      } finally {
        sum = 0;
      }
    }
  };
}

module.exports = makeInfinityAdder;
