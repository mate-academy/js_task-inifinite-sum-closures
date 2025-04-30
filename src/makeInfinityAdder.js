'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let TOTAL_AMOUNT = 0;

  function ADDER(...args) {
    if (args.length === 0) {
      const result = TOTAL_AMOUNT;

      TOTAL_AMOUNT = 0;

      return result;
    } else {
      TOTAL_AMOUNT += args[0];

      return ADDER;
    }
  }

  return ADDER;
}

module.exports = makeInfinityAdder;
