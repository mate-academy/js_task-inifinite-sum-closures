'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let SUM = 0;
  let CURRENT_NUMBERS = [];

  function adder(...args) {
    if (args.length === 0) {
      const result = SUM;

      SUM = 0;
      CURRENT_NUMBERS = [];

      return result;
    }

    CURRENT_NUMBERS.push(...args);
    SUM += args.reduce((acc, num) => acc + num, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
