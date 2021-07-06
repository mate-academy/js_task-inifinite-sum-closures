'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;
  const adder = value => {
    if (value !== undefined) {
      const number = Number(value);

      amount += number;

      return adder;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
