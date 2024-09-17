'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0; // Initialize the sum to zero

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0; // Reset the sum after returning the result

      return result;
    }
    // Sum up all the arguments passed
    sum += args.reduce((acc, num) => acc + num, 0);

    return adder; // Return the adder function to allow chaining
  }

  return adder;
}

module.exports = makeInfinityAdder;
