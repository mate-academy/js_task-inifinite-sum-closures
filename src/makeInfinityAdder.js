'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (number) => {
    if (number === undefined) {
      const newAmount = amount;

      amount = 0;

      return newAmount;
    }

    amount += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
