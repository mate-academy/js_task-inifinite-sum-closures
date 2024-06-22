'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (numberToAdd) => {
    if (numberToAdd !== undefined) {
      amount += numberToAdd;

      return adder;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
