'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // Initialize the sum variable
  let sum = 0;

  function adder(b) {
    // Check if a value is provided
    if (b !== undefined) {
      // If a value is provided, add it to the sum
      // and return the function for further calls
      sum += b;

      return adder;
    } else {
      // If no value is provided, store the current sum in a separate variable
      const finalSum = sum;

      // Reset the sum to zero for the next calculations
      sum = 0;

      return finalSum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
