'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(num) {
    if (num === undefined) {
      const newTotal = total;

      total = 0;

      return newTotal;
    }

    total += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
