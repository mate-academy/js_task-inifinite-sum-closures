'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (num !== undefined) {
      sum += num;

      return adder;
    } else {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
  }

  return adder;
}

module.exports = makeAdder;
