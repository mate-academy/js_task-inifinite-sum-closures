'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = arg => {
    if (arg === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
