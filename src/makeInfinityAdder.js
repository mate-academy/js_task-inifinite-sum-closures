'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (numbers) => {
    if (numbers !== undefined) {
      sum += numbers;

      return adder;
    }

    const amount = sum;

    sum = 0;

    return amount;
  };

  return adder;
}

module.exports = makeInfinityAdder;
