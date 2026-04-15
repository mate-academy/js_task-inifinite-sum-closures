'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let amountAdded = 0;

  return function adder(num) {
    if (num !== undefined) {
      amountAdded += num;

      return adder;
    }

    const totalAdded = amountAdded;

    amountAdded = 0;

    return totalAdded;
  };
}

module.exports = makeAdder;
