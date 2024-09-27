'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (n) => {
    if (n === undefined) {
      const currentAmount = amount;

      amount = 0;

      return currentAmount;
    }

    amount += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
