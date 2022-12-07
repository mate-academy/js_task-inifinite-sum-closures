'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (number) => {
    if (number === undefined) {
      const totalAmount = amount;

      amount = 0;

      return totalAmount;
    }

    amount += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
