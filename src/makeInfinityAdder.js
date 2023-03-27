'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (incomeNumber) => {
    if (incomeNumber === undefined) {
      const currentAmont = amount;

      amount = 0;

      return currentAmont;
    }

    amount += incomeNumber;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
