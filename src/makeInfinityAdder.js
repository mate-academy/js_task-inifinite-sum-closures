'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(value) {
    if (value === undefined) {
      const currentresult = result;

      result = 0; // Reset the result

      return currentresult;
    }
    result += value;

    return adder; // Return itself to allow chaining
  }

  return adder;
}

module.exports = makeInfinityAdder;
