'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  function adder(...args) {
    if (args.length < 1) {
      const result = amount;

      amount = 0;

      return result;
    }
    amount += args.reduce((sum, number) => sum + number, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
