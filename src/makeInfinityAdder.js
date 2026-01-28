'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let totalSum = 0;

  return function adder(num) {
    const copyTotalSum = totalSum;

    if (num === undefined) {
      totalSum = 0;

      return copyTotalSum;
    } else {
      totalSum += num;

      return adder;
    }
  };
}

module.exports = makeAdder;
