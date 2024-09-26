'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  return function sum(a) {
    if (a === undefined) {
      const currentAmount = amount;

      amount = 0;

      return currentAmount;
    }
    amount += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
