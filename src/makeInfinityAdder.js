'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0; // Initialize the sum to 0

  function adder(num) {
    // If no arguments are passed, return the sum and reset it
    if (arguments.length === 0) {
      const result = sum;

      sum = 0; // Reset sum after returning it

      return result;
    }

    // If arguments are passed, add them to the sum
    sum += num;

    // Return the adder function to allow chaining
    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
