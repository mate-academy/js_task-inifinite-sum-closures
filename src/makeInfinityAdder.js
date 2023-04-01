'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;

  function adder(x) {
    if (x !== undefined) {
      sum += x;

      return add;
    }
    count++;
    sum = count > 1 ? 0 : sum;

    return sum;
  };

  function add(y) {
    if (y !== undefined) {
      sum += y;

      return adder;
    }

    return sum;
  }

  return adder;
}

module.exports = makeInfinityAdder;
