'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let totalAmount = 0;

  function adder(number) {
    if (number === undefined) {
      const result = totalAmount;

      totalAmount = 0;

      return result;
    } else {
      totalAmount += number;

      return adder;
    }
  }

  return adder;
}

module.exports = makeAdder;
