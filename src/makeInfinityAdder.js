'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    const isNum = num !== undefined;
    const currentSum = sum;

    sum = isNum ? sum + num : 0;

    return isNum ? adder : currentSum;
  };
  // #region Alternative Solution
  /*  return function adder(num) {
        if (num === undefined) {
          const currentSum = sum;

          sum = 0;

          return currentSum;
        }

        sum += num;

        return adder;
      };
  */
  // #endregion
}

module.exports = makeInfinityAdder;
