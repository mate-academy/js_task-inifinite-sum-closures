'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (currentNumber) => {
    if (currentNumber !== undefined) {
      total += currentNumber;

      return add;
    }

    const currentTotal = total;

    total = 0;

    return currentTotal;
  };

  return add;
}

module.exports = makeInfinityAdder;
