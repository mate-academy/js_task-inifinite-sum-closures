'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(n) {
    // If called without arguments → return sum and reset
    if (arguments.length === 0) {
      const result = total;

      total = 0; // reset for next use

      return result;
    }

    total += n;

    return adder; // allow chaining
  }

  return adder;
}

module.exports = makeInfinityAdder;
