'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(x) {
    if (x !== undefined) {
      sum += x;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;

// const result = adder(4)
// result(5)
