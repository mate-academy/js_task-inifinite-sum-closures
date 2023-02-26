'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }
    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
