'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (...args) => {
    const result = amount;

    if (args.length > 0) {
      amount += args[0];

      return adder;
    } else {
      amount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
