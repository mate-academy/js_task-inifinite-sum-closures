'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    const result = sum;

    if (a === undefined) {
      sum = 0;

      return result;
    }

    sum = result + a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
