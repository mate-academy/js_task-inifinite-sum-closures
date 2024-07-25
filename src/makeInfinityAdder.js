'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    } else {
      total += args.reduce((sum, num) => sum + num, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
