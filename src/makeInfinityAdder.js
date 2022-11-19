'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(x) {
    if (x === undefined) {
      const sum = count;

      count = 0;

      return sum;
    }

    count += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
