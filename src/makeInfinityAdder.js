'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let sum2 = 0;
  // let count = 0;

  // count++;

  function adder(num) {
    if (num) {
      sum += num;
    }

    if (num === undefined) {
      sum2 = sum;
      sum = 0;

      return sum2;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
