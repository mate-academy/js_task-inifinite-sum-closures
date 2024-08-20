'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adderNum = (a) => {
    if (a === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }

    totalSum += a;

    return adderNum;
  };

  return adderNum;
}

module.exports = makeInfinityAdder;
