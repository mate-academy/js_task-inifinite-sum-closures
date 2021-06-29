'use strict';

function makeInfinityAdder() {
  let amount = 0;

  const adder = (a) => {
    if (a !== undefined) {
      amount += a;

      return adder;
    } else {
      const sum = amount;

      amount = 0;

      return sum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
