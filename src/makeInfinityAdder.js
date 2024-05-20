'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (arg) => {
    if (arg !== undefined) {
      amount += arg;

      return adder;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
