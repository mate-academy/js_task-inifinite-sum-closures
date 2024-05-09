'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = amount;

      amount = 0;

      return result;
    } else {
      amount += args[0];

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
