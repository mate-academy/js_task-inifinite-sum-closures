'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNum = 0;

  return function adder(num) {
    if (num === undefined) {
      const result = sumOfNum;

      sumOfNum = 0;

      return result;
    }
    sumOfNum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
