'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let amount = 0;

  return function adder(value) {
    if (value === undefined) {
      const currentAmount = amount;

      amount = 0;

      return currentAmount;
    }
    amount += value;

    return adder;
  };
}

module.exports = makeAdder;
