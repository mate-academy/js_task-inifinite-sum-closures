'use strict';

/***
 *
 * @return {function}
 */

/* When the word hell is present in the title of the task,
  nothing good should be expected.
  Let's get down to business.
  Write the makeAdder function, which will return the adder function.
  The adder function should work on the following pattern:
  adder(2)(3)(4)(1)(2)(3)(4)() === 19.
  It will sum all the numbers passed in the parameters until
  it encounters a call without parameters.
  When calling without parameters,
  it will return the result and clear the amount.

Example:

const adder = makeAdder();
adder() === 0
adder(4)(5)() === 9
adder() === 0
adder(5)(5)(5)
adder(4)
adder() === 19
adder() === 0
*/

function makeInfinityAdder(x) {
  let sum = 0;

  function adder(number) {
    if (number !== undefined) {
      sum += number;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
