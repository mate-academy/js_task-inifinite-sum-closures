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

      return adder;
    }
    count++;
    sum = count > 1 ? 0 : sum;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
