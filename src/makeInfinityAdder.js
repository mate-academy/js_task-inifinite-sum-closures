'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (value) => {
    const result = amount;

    if (value || value === 0) {
      amount += value;

      return adder;
    } else {
      amount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
