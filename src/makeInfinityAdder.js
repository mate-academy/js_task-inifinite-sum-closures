'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = function(value) {
    if (value === undefined) {
      const returnResult = amount;

      amount = 0;

      return returnResult;
    }

    amount += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
