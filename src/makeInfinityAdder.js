'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (num) => {
    if (num === undefined) {
      const totalAmount = amount;

      amount = 0;

      return totalAmount;
    }

    amount += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
