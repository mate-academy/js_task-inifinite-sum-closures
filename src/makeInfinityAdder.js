'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const amount = sum;

      sum = 0;

      return amount;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
