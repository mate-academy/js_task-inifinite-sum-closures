'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const addNumber = (number) => {
    if (number === undefined) {
      const resultSum = amount;

      amount = 0;

      return resultSum;
    }

    amount += number;

    return addNumber;
  };

  return addNumber;
}

module.exports = makeInfinityAdder;
