'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;
  let totalAmount = 0;

  const adder = (num) => {
    if (num === undefined) {
      totalAmount = amount;
      amount = 0;

      return totalAmount;
    }

    amount += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
