'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (...args) => {
    if (args.length > 0) {
      amount += args[0];

      return adder;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return adder;
}
module.exports = makeInfinityAdder;
