'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (numberToAdd) => {
    if (numberToAdd != null) {
      amount += numberToAdd;

      return adder;
    } else {
      const result = amount;

      amount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
