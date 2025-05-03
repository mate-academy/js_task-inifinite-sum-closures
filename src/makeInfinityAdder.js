'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (elem) => {
    if (elem === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += elem;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
