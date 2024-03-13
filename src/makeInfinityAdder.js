'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (arg) => {
    if (typeof arg === 'number') {
      total += arg;

      return adder;
    } else {
      const result = total;

      total = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;

// The adder function should work on the following
// pattern: adder(2)(3)(4)(1)(2)(3)(4)() === 19.
// It will sum all the numbers passed in the parameters
// until it encounters a call without parameters.

// When calling without parameters, it will return the result
// and clear the amount.

// Example:

// const adder = makeAdder();

// console.log(
//   adder(), // 0
//   adder(4)(5)(), // 9
//   adder(), // 0
//   adder(5)(5)(5),
//   adder(4),
//   adder(), // 19
//   adder(), // 0
// );
