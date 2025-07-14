'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;
  const adder = function (num) {
    if (arguments.length > 0) {
      currentSum += num;
    } else {
      const tempSum = currentSum;

      currentSum = 0;

      return tempSum;
    }

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
