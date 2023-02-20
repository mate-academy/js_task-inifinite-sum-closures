'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(value) {
    if (value === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
