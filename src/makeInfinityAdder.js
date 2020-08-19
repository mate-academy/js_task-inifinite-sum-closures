'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(n) {
    if (!n) {
      const sum = result;

      result = 0;

      return sum;
    } else {
      result += n;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
