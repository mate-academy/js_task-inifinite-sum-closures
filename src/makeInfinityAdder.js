'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let amount = 0;

  const adder = (b) => {
    const sum = amount;

    if (b === undefined) {
      amount = 0;

      return sum;
    }

    amount += b;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
