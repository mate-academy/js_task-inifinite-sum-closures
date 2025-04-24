'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
