'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentAmount = 0;

  const sum = (number) => {
    if (number === undefined) {
      const totalAmount = currentAmount;

      currentAmount = 0;

      return totalAmount;
    }

    currentAmount += number;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
