'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adderNum(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return adderNum;
  }

  return adderNum;
}

module.exports = makeInfinityAdder;
