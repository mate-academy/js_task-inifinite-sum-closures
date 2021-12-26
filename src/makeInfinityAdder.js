'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const amount = sum;

    sum = 0;

    return amount;
  }

  return adder;
}

module.exports = makeInfinityAdder;
