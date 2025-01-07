'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const calcSum = function (num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return calcSum;
  };

  return calcSum;
}

module.exports = makeInfinityAdder;
