'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(n) {
    if (n) {
      count += n;

      return adder;
    } else {
      const result = count;

      count = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
