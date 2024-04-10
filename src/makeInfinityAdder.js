'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (a) => {
    if (a !== undefined) {
      amount += a;

      return adder;
    } else {
      const currentAmount = amount;

      amount = 0;

      return currentAmount;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
