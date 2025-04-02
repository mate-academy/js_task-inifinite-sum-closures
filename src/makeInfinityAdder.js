'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  
  function adder(...args) {
    if (args.length === 0) {
      return sum; // Return the accumulated sum when called with no arguments
    }
    sum += args.reduce((acc, num) => acc + num, 0); // Add arguments to sum
    return adder; // Return the adder function itself for chaining
  }

  return adder;
}

module.exports = makeInfinityAdder;

