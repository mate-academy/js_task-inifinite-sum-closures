/* eslint-disable no-console */
'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;

// Write the makeAdder function, which will
// return the adder function. The adder
// function should work on the following
// pattern: adder(2)(3)(4)(1)(2)(3)(4)() === 19.
//  It will sum all the numbers passed in
//   the parameters until it encounters a
//   call without parameters. When calling
//   without parameters, it will return the
//   result and clear the amount.
