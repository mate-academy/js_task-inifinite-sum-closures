'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  let prev;

  function adder(a) {
    if (a === undefined) {
      prev = sum;

      sum = 0;

      return prev;
    }

    sum += a;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
