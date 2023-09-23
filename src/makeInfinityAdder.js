'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let storedSum = 0;

  function adder(a) {
    if (a !== undefined) {
      storedSum += a;

      return adder;
    } else {
      const result = storedSum;

      storedSum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
