'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (b) => {
    const sum = amount;

    amount += b;

    if (b === undefined) {
      amount = 0;

      return sum;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
