'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  function result(number) {
    if (number === undefined) {
      const copyAmount = amount;

      amount = 0;

      return copyAmount;
    }
    amount += number;

    return result;
  }

  return result;
}

module.exports = makeInfinityAdder;
